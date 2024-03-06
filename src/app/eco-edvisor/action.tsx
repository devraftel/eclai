import "server-only";

import { createAI, createStreamableUI, getMutableAIState } from "ai/rsc";
import OpenAI from "openai";

import {
  spinner,
  BotCard,
  BotMessage,
  Product,
  Events,
} from "@/components/llm-products";

import { sleep, runOpenAICompletion } from "@/lib/utils";
import { z } from "zod";
import { ProductSkeleton } from "@/components/llm-products/product-skeleton";
import { EventsSkeleton } from "@/components/llm-products/events-skeleton";
import { messageRateLimit } from "@/lib/rate-limit";
import { headers } from "next/headers";
import { fetchProductDetailsFromUrl } from "@/lib/ai-engine/fetch-product-url";
import { fetchProductCertifications } from "@/lib/ai-engine/fetch-product-certifications";
import { RequiredCertificatesUI } from "@/components/llm-products/req-certificates";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

async function submitUserMessage(content: string) {
  "use server";

  const reply = createStreamableUI(
    <BotMessage className="items-center ">{spinner}</BotMessage>
  );

  const ip = headers().get("x-real-ip") ?? "local";
  const rl = await messageRateLimit.limit(ip);

  if (!rl.success) {
    reply.done(
      <BotMessage>Rate limit exceeded. Try again in 15 minutes.</BotMessage>
    );
    return {
      id: Date.now(),
      display: reply.value,
    };
  }

  const aiState = getMutableAIState<typeof AI>();
  aiState.update([
    ...aiState.get(),
    {
      role: "user",
      content,
    },
  ]);

  const completion = runOpenAICompletion(openai, {
    model: "gpt-4-turbo-preview",
    stream: true,
    messages: [
      {
        role: "system",
        content: `\
You are a Eco Friendly Products AI Advisor bot and you can help users, identify, find and buy Eco Friendly Products, step by step.
You can let the user give product link and return product eco friendly status, as many times as they want and ask to process with getting required certifications for it.
You can let the user know relevant eco friendly certifications when ever user shows a product he is interested in, as many times as they want.
You and the user can discuss about sustainability and eco friendly products prices and the user can share their goals, or get advices.

If the user gives product link, call \`get_product_details_link\` to get the product details.
If the user gives product name, call \`required_product_certifications\` to get required certifications for identifying product eco friendliness.
If the user gives product name and eco certification name than call\`verify_product_certifications\` to know if product has verifications and show the Product Eco Friendly Status UI.
If you want to show events, call \`get_events\`.
If the user wants to sell products, or complete another impossible task, respond that you are a eco friendly products assistant and cannot do that.

Besides that, you can also chat with users and do some calculations or share suggestions if needed.`,
      },
      ...aiState.get().map((info: any) => ({
        role: info.role,
        content: info.content,
        name: info.name,
      })),
    ],
    functions: [
      {
        name: "get_product_details_link",
        description: "Get the Product Details when User gives Link.",
        parameters: z.object({
          product_link: z.string().describe("The link of the product."),
        }),
      },
      {
        name: "required_product_certifications",
        description:
          "Get Relevant Certificates for Product to check and identify if its eco friendly.",
        parameters: z.object({
          product_title: z.string().describe("The name/title of the product."),
          company_name: z
            .string()
            .describe("The name of the company of the product.")
            .optional(),
        }),
      },
      {
        name: "verify_product_certifications",
        description:
          "Take Product Name, Certifications and verify is the product has Valid Certifications",
        parameters: z.object({
          product_title: z.string().describe("The name of the product."),
          company_name: z
            .string()
            .describe("The name of the company of the product."),
          certifications: z
            .array(z.string())
            .describe("The certifications of the product."),
          manufacturing_materials: z
            .array(z.string())
            .describe("The manufacturing materials of the product."),
        }),
      },

      {
        name: "get_events",
        description:
          "List funny imaginary events between user highlighted dates that describe stock activity.",
        parameters: z.object({
          events: z.array(
            z.object({
              date: z
                .string()
                .describe("The date of the event, in ISO-8601 format"),
              headline: z.string().describe("The headline of the event"),
              description: z.string().describe("The description of the event"),
            })
          ),
        }),
      },
    ],
    temperature: 0.5,
  });

  completion.onTextContent((content: string, isFinal: boolean) => {
    console.log("assistant_content", content);
    reply.update(<BotMessage>{content}</BotMessage>);
    if (isFinal) {
      reply.done();
      aiState.done([...aiState.get(), { role: "assistant", content }]);
    }
  });

  completion.onFunctionCall(
    "get_product_details_link",
    async ({ product_link }) => {
      console.log("\nCALLING_FUNCTION\n");
      console.log("\nget_product_details_link\n", product_link);

      reply.update(
        <BotCard>
          <ProductSkeleton />
        </BotCard>
      );

      // Calling the function to get the product details
      const productDetails = await fetchProductDetailsFromUrl(product_link);

      // await sleep(1000);

      reply.done(
        <BotCard>
          <Product {...productDetails} />
        </BotCard>
      );

      aiState.done([
        ...aiState.get(),
        {
          role: "function",
          name: "get_product_details_link",
          content: `[Product Details = ${productDetails}]`,
        },
      ]);
    }
  );

  completion.onFunctionCall(
    "required_product_certifications",
    async ({ product_title, company_name }) => {
      console.log("\nCALLING_FUNCTION\n");
      console.log(
        "\required_product_certifications\n",
        "product_name",
        product_title,
        "company_name",
        company_name
      );

      reply.update(<BotMessage>{spinner}</BotMessage>);

      const certifications_required_obj = await fetchProductCertifications(
        `Required Certifications for ${product_title} that has to be checked for ${company_name}`
      );

      if (
        certifications_required_obj === undefined ||
        certifications_required_obj === null
      ) {
        throw new Error("No response from OpenAI");
      }

      if (certifications_required_obj.hasOwnProperty("request_more_info")) {
        const castCertificationsResponseObjType =
          certifications_required_obj as RequestMoreInfo;
        reply.done(
          <BotCard>
            {castCertificationsResponseObjType.request_more_info}
          </BotCard>
        );

        aiState.done([
          ...aiState.get(),
          {
            role: "function",
            name: "required_product_certifications",
            content: `[Request More Info = ${castCertificationsResponseObjType.request_more_info}]`,
          },
        ]);
      }

      if (certifications_required_obj.hasOwnProperty("certifications")) {
        const castCertificationsResponseObjType =
          certifications_required_obj as AllRequiredCertificatesProps;
        reply.done(
          <BotCard>
            <RequiredCertificatesUI
              certifications={castCertificationsResponseObjType.certifications}
            />
          </BotCard>
        );

        aiState.done([
          ...aiState.get(),
          {
            role: "function",
            name: "required_product_certifications",
            content: `[Required Certifications for ${product_title} to be eco friendly are = ${castCertificationsResponseObjType.certifications}]`,
          },
        ]);
      }

      aiState.done([
        ...aiState.get(),
        {
          role: "function",
          name: "required_product_certifications",
          content: `[Required eco friendly Certifications analysis & retrieval for ${product_title}  failed.]`,
        },
      ]);
    }
  );

  completion.onFunctionCall(
    "verify_product_certifications",
    async ({
      product_title,
      company_name,
      certifications,
      manufacturing_materials,
    }) => {
      console.log("\nCALLING_FUNCTION\n");
      console.log(
        "verify_product_certifications\n",
        "product_name",
        product_title,
        "company_name",
        company_name,
        "certifications",
        certifications,
        "manufacturing_materials",
        manufacturing_materials
      );

      reply.update(
        <BotCard>
          <ProductSkeleton />
        </BotCard>
      );

      await sleep(1000);

      reply.done(
        <BotCard>{`Product ${product_title} has valid certifications`}</BotCard>
      );

      aiState.done([
        ...aiState.get(),
        {
          role: "function",
          name: "verify_product_certifications",
          content: `[Product name = ${product_title}, company name = ${company_name}, certifications = ${certifications}, manufacturing_materials = ${manufacturing_materials}]`,
        },
      ]);
    }
  );

  completion.onFunctionCall("get_events", async ({ events }) => {
    reply.update(
      <BotCard>
        <EventsSkeleton />
      </BotCard>
    );

    await sleep(1000);

    reply.done(
      <BotCard>
        <Events events={events} />
      </BotCard>
    );

    aiState.done([
      ...aiState.get(),
      {
        role: "function",
        name: "list_stocks",
        content: JSON.stringify(events),
      },
    ]);
  });

  return {
    id: Date.now(),
    display: reply.value,
  };
}

// Define necessary types and create the AI.

const initialAIState: {
  role: "user" | "assistant" | "system" | "function";
  content: string;
  id?: string;
  name?: string;
}[] = [];

const initialUIState: {
  id: number;
  display: React.ReactNode;
}[] = [];

export const AI = createAI({
  actions: {
    submitUserMessage,
  },
  initialUIState,
  initialAIState,
});
