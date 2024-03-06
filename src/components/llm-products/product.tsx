"use client";

import Link from "next/link";
import Image from "next/image";

export function Product({
  product_title,
  company_name,
  image_url,
  product_url,
  price,
  currency,
  manufacturing_materials
}: ProductDetails) {

  // TODO: Update UI to Represent this all Data:

  // i.e: {
  //   product_id: 'B01N5TV2IQ',
  //   product_title: 'Apple iPhone 7, 32GB, Black - Fully Unlocked (Renewed)',
  //   company_name: 'Apple',
  //   price: '$159.99',
  //   currency: 'USD',
  //   image_url: [
  //     'https://images-na.ssl-images-amazon.com/images/I/41D9NDiSzjL._AC_US40_.jpg'
  //   ],
  //   product_url: 'https://www.amazon.com/SAMSUNG-Bluetooth-Smartwatch-Improved-Sapphire/dp/B0B2HXJZ98?ref_=Oct_DLandingS_D_f9ccecf7_0',
  //   manufacturing_materials: [ 'Glass', 'Aluminum' ]
  // }


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

      {image_url.map((url: string, index: number) => (
        <Image
          key={index}
          src={url}
          alt={product_title}
          width={200}
          height={200}
          className="rounded-md"
        />
      ))}

    </div>
  );
}
