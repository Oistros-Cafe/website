"use client";

import { motion } from "framer-motion";

export default function SteamEffect() {
  return (
    <div className="relative">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute top-0 left-1/2 w-1 h-8 bg-white/20 rounded-full"
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 0],
            y: -20,
            x: Math.sin(i) * 10
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
} 