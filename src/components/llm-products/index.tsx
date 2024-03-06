'use client';

import dynamic from 'next/dynamic';
import { ProductSkeleton } from './product-skeleton';
import { ProductsSkeleton } from './products-skeleton';
import { EventsSkeleton } from './events-skeleton';

export { spinner } from './spinner';
export { BotCard, BotMessage, SystemMessage } from './message';

const Product = dynamic(() => import('./product').then(mod => mod.Product), {
  ssr: false,
  loading: () => <ProductSkeleton />,
});


const Products = dynamic(() => import('./products').then(mod => mod.Stocks), {
  ssr: false,
  loading: () => <ProductsSkeleton />,
});

const Events = dynamic(() => import('./event').then(mod => mod.Events), {
  ssr: false,
  loading: () => <EventsSkeleton />,
});

export { Product, Products, Events };
