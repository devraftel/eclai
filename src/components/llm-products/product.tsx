"use client";

// import { useEffect, useId } from "react";
// import { useAIState } from "ai/rsc";

// import type { AI } from "../../app/action";
import Link from "next/link";
import Image from "next/image";

export function Product({
  product_title,
  company_name,
  imageUrl,
  product_url,
  price,
  currency,
}: ProductDetails) {
  // const [history, setHistory] = useAIState<typeof AI>();
  // const id = useId();

  // useEffect(() => {
  //   if (product_title) {
  //     const message = {
  //       id,
  //       role: "system" as const,
  //       content: `The product ${product_title} was found. Now shall we get the required eco certifications for it`,
  //     };

  //       setHistory([...history, message]);
     
  //   }
  // }, [product_title, id, setHistory]);

  return (
    <div className="p-4 text-green-400 border rounded-xl bg-zinc-950">
      <div className="inline-block float-right px-2 py-1 text-xs rounded-full bg-white/10">
        <Link target="_blank" href={product_url}>
          View Product
        </Link>
      </div>
      <div className="text-lg text-zinc-300">
      {product_title}
      </div>
      <div className="text-3xl font-bold"> <span className="px-1"> {currency} </span> {price}</div>
      <div className="mt-1 text-xs text text-zinc-500">
        {company_name ? company_name : "No company Found"}
      </div>

      <Image
        src={imageUrl}
        alt={product_title}
        width={200}
        height={200}
        className="rounded-md"
      />

    </div>
  );
}
