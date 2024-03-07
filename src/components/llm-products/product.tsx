'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Chip } from '@nextui-org/chip';

export function Product({
	product_title,
	company_name,
	image_url,
	product_url,
	price,
	currency,
	manufacturing_materials,
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
		<div className='p-4 border rounded-xl bg-esl-pm-sec flex flex-col'>
			<div className='flex items-start gap-2'>
				<h1 className='text-esl-bg text-xl'>{product_title}</h1>
				<Chip className='text-xs font-lato float-right '>
					<Link
						href={product_url}
						className='hover:underline no-underline'
					>
						View Product
					</Link>
				</Chip>
			</div>

			<div className=''>
				<h2 className='text-3xl my-0 font-bold text-esl-bg'>
					<span className=''>{currency} </span>
					{price}
				</h2>
				<h3 className='mt-1 text-xs text text-esl-sc'>
					{company_name ? company_name : 'No company Found'}
				</h3>
			</div>

			<div className='flex flex-wrap gap-2 mt-4 md:mt-8'>
				{image_url.map((url: string, index: number) => (
					<Image
						key={index}
						src={url}
						alt={product_title}
						width={200}
						height={200}
						className='rounded-md my-0'
					/>
				))}
			</div>
		</div>
	);
}
