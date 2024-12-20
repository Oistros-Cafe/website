'use client';

import dynamic from 'next/dynamic';
import type { NextPage } from 'next';

// Dynamically import CoffeeExplorer with no SSR
const CoffeeExplorer = dynamic(
  () => import("../../components/coffee-explorer"),
  { ssr: false }
);

const ProductsPage: NextPage = () => {
  return <CoffeeExplorer />;
};

export default ProductsPage; 