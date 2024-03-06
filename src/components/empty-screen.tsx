import { Button } from "@/components/ui/button";
import { ExternalLink } from "@/components/external-link";
import { IconArrowRight } from "@/components/ui/icons";

const exampleMessages = [
  {
    heading: "Send a Random Product Link",
    message:
      "I want to buy \n https://www.amazon.com/SAMSUNG-Bluetooth-Smartwatch-Improved-Sapphire/dp/B0B2HXJZ98?ref_=Oct_DLandingS_D_f9ccecf7_0&th=1",
  },
  {
    heading: "I am planning to buy a Smart Watch",
    message: "I am planning to buy a Smart Watch",
  },
  {
    heading: "What are Eco Certifications for a Smart Watch?",
    message: "What are Eco Certifications for a Smart Watch?",
  },
  {
    heading: "Does Samsung Galaxy Watch 4 have ECOLOGO Certification?",
    message: "Does Samsung Galaxy Watch 4 have ECOLOGO Certification?",
  },
];

export function EmptyScreen({
  submitMessage,
}: {
  submitMessage: (message: string) => void;
}) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8 mb-4">
        <h1 className="mb-2 text-lg font-semibold">
          Welcome to Eco Products Advisor!
        </h1>

        <p className="leading-normal text-muted-foreground">Try an example:</p>
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={async () => {
                submitMessage(message.message);
              }}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
      <p className="leading-normal text-muted-foreground text-[0.8rem] text-center">
        Note: This is not real advice.
      </p>
    </div>
  );
}
