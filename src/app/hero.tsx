"use client";

import Image from "next/image";
import { Typography, Button } from "@material-tailwind/react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/coffee-hero.jpeg"
          alt="Oistros Coffee Shop"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <Typography
            variant="h1"
            className="mb-8 syne-800 text-4xl md:text-6xl"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Ανακαλύψτε τον Κόσμο του Specialty Coffee
          </Typography>

          <Typography
            variant="lead"
            className="mb-12 syne-400 text-lg md:text-xl"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Προσεκτικά επιλεγμένες ποικιλίες καφέ, ψημένες με τέχνη και μεράκι 
            για την απόλυτη εμπειρία γεύσης.
          </Typography>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button
              size="lg"
              className="bg-[#8B4513] hover:bg-[#2C1810] transition-colors duration-300 normal-case text-lg syne-400 px-8 py-3"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Εξερευνήστε Τώρα
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
