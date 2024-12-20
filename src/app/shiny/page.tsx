'use client';

import dynamic from 'next/dynamic';
import type { NextPage } from 'next';

// Dynamically import components with no SSR
const ShinyPage = dynamic(
  () => import("../shiny-page"),
  { ssr: false }
);

const Page: NextPage = () => {
  return <ShinyPage />;
};

export default Page; 