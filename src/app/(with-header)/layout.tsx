"use client";

import Header from "../components/header";
import ParallaxBeans from "../components/parallax-beans";
import ScrollCup from "../components/scroll-cup";
import SteamEffect from "../components/steam-effect";

export default function WithHeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      {/* Background elements */}
      <ParallaxBeans />
      
      {/* Header with steam effect */}
      <div className="relative">
        <Header />
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
          <SteamEffect />
        </div>
      </div>

      {/* Main content */}
      <div className="relative pt-20">
        {children}
      </div>

      {/* Scroll progress indicator */}
      <ScrollCup />
    </div>
  );
} 