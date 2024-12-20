'use client';

import dynamic from 'next/dynamic';

// Dynamically import all components with no SSR
const Hero = dynamic(() => import("./hero"), { ssr: false });
const Testimonial = dynamic(() => import("./testimonial"), { ssr: false });
const Qualifications = dynamic(() => import("./qualifications"), { ssr: false });
const CoffeeExplorer = dynamic(
  () => import("./components/coffee-explorer"),
  { ssr: false }
);

export default function ShinyPage() {
  return (
    <>
      <Hero />
      <Testimonial />
      <Qualifications />
      <CoffeeExplorer />
    </>
  );
}
