"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';

const Typography = dynamic(
  () => import("@material-tailwind/react").then((mod) => mod.Typography),
  { ssr: false }
);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/shiny", label: "Αρχική" },
    { path: "/products", label: "Προϊόντα" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/shiny" className="flex items-center gap-2">
          <Image
            src="/image/webico.png"
            alt="Oistros Cafe Logo"
            width={40}
            height={40}
            className="transition-transform duration-300 hover:scale-110"
          />
          <Typography 
            variant="h6" 
            className={`syne-800 hidden sm:block ${
              isScrolled ? "text-[#2C1810]" : "text-white text-shadow-sm"
            }`}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Oistros Cafe
          </Typography>
        </Link>

        <nav className="flex items-center gap-4">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              href={item.path}
              className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                isScrolled 
                  ? pathname === item.path
                    ? "bg-[#8B4513] text-white"
                    : "bg-white hover:bg-gray-100"
                  : pathname === item.path
                    ? "bg-[#8B4513] text-white"
                    : "bg-white/90 hover:bg-white"
              }`}
            >
              <Typography
                className={`syne-400 ${
                  pathname === item.path 
                    ? "font-bold" 
                    : isScrolled
                      ? "text-gray-700"
                      : "text-gray-800"
                }`}
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {item.label}
              </Typography>
              {pathname === item.path && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-current"
                  layoutId="underline"
                />
              )}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
} 