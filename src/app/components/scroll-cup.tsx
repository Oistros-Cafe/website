"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollCup() {
  const { scrollYProgress } = useScroll();
  
  const fillHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);
  
  return (
    <div className="fixed bottom-4 right-4 w-12 h-16 border-2 border-[#8B4513] rounded-b-full rounded-t-lg">
      <motion.div
        className="absolute bottom-0 w-full bg-[#8B4513]/80 rounded-b-full"
        style={{ height: fillHeight }}
      />
    </div>
  );
} 