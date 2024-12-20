"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { GiCoffeeBeans } from "react-icons/gi";

export default function ParallaxBeans() {
  const { scrollY } = useScroll();
  const [beans] = useState(() => 
    Array(20).fill(null).map(() => ({
      x: Math.random() * 100,
      initialY: Math.random() * 100,
      size: Math.random() * 60 + 30,
      rotation: Math.random() * 360,
      scrollSpeed: Math.random() * 0.8 + 0.2,
    }))
  );

  useEffect(() => {
    return scrollY.onChange((latest) => {
    //   console.log("Scrolling:", latest);
    });
  }, [scrollY]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {beans.map((bean, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ 
            x: `${bean.x}vw`, 
            y: `${bean.initialY}vh`,
            rotate: bean.rotation 
          }}
          animate={{
            y: [`${bean.initialY}vh`, `${bean.initialY - 100}vh`],
            rotate: [bean.rotation, bean.rotation + 360]
          }}
          transition={{
            y: {
              duration: 10 / bean.scrollSpeed,
              repeat: Infinity,
              ease: "linear"
            },
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        >
          <GiCoffeeBeans 
            className="text-[#8B4513]"
            style={{ 
              fontSize: bean.size,
              opacity: 0.15
            }}
          />
        </motion.div>
      ))}
    </div>
  );
} 