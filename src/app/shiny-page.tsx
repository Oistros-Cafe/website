'use client';

import dynamic from 'next/dynamic';

// Dynamically import components with no SSR
const Hero = dynamic(() => import("./hero"), { ssr: false });
const Testimonial = dynamic(() => import("./testimonial"), { ssr: false });
const Qualifications = dynamic(() => import("./qualifications"), { ssr: false });

export default function ShinyPage() {
  return (
    <>
      <Hero />
      <Testimonial />
      <Qualifications />
    </>
  );
}
