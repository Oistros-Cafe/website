"use client";

import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { NextPage } from 'next';

const Page: NextPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f5f0] px-4">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <Image
            src="/image/webico.png"
            alt="Oistros Cafe Logo"
            width={120}
            height={120}
            className="mx-auto"
            priority
          />
        </div>
        
        <Typography 
          variant="h1" 
          className="text-[#2C1810] syne-800 mb-4" 
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Oistros Cafe
        </Typography>
        
        <Typography 
          variant="h4" 
          className="text-[#8B4513] syne-400 mb-6" 
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Υπό Κατασκευή
        </Typography>
        
        <Typography 
          className="text-gray-700 syne-400 max-w-md mx-auto" 
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Η ιστοσελίδα μας ανανεώνεται. Σύντομα θα είμαστε και πάλι κοντά σας με νέο περιεχόμενο.
        </Typography>
      </motion.div>
    </div>
  );
};

export default Page;
