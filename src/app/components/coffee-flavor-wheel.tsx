"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typography } from "@material-tailwind/react";

interface FlavorCategory {
  name: string;
  color: string;
  subCategories: {
    name: string;
    descriptors: string[];
  }[];
}

const flavorWheel: FlavorCategory[] = [
  {
    name: "Φρουτώδη",
    color: "#E57373",
    subCategories: [
      {
        name: "Εσπεριδοειδή",
        descriptors: ["Λεμόνι", "Πορτοκάλι", "Lime"]
      },
      {
        name: "Μούρα",
        descriptors: ["Βατόμουρο", "Φραγκοστάφυλο", "Φράουλα"]
      },
      {
        name: "Πυρηνόκαρπα",
        descriptors: ["Δαμάσκηνο", "Βερίκοκο", "Ροδάκινο"]
      }
    ]
  },
  {
    name: "Ξηροί Καρποί",
    color: "#8D6E63",
    subCategories: [
      {
        name: "Καρύδια",
        descriptors: ["Αμύγδαλο", "Φουντούκι", "Καρύδι"]
      },
      {
        name: "Ψημένοι",
        descriptors: ["Φιστίκι", "Κάσιους", "Καραμελωμένοι"]
      }
    ]
  },
  {
    name: "Γλυκά",
    color: "#FFB74D",
    subCategories: [
      {
        name: "Καραμέλα",
        descriptors: ["Μέλι", "Σιρόπι", "Ζάχαρη"]
      },
      {
        name: "Σοκολάτα",
        descriptors: ["Κακάο", "Σκούρα Σοκολάτα", "Πραλίνα"]
      }
    ]
  },
  {
    name: "Λουλουδάτα",
    color: "#AED581",
    subCategories: [
      {
        name: "Άνθη",
        descriptors: ["Γιασεμί", "Τριαντάφυλλο", "Χαμομήλι"]
      },
      {
        name: "Βότανα",
        descriptors: ["Δυόσμος", "Βασιλικός", "Λεβάντα"]
      }
    ]
  }
];

interface CoffeeFlavorWheelProps {
  onSelectCategory: (category: string | null) => void;
}

export default function CoffeeFlavorWheel({ onSelectCategory }: CoffeeFlavorWheelProps) {
  const [selectedCategory, setSelectedCategory] = useState<FlavorCategory | null>(null);
  const wheelSize = "w-[150px] h-[150px] md:w-[200px] md:h-[200px]";

  const handleCategoryClick = (category: FlavorCategory) => {
    const newSelection = selectedCategory?.name === category.name ? null : category;
    setSelectedCategory(newSelection);
    onSelectCategory(newSelection?.name ?? null);
  };

  return (
    <div className="py-12 flex flex-col items-center">
      <Typography variant="h4" className="text-center mb-8 syne-800 text-[#2C1810]" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        Τροχός Γεύσεων Καφέ
      </Typography>
      
      <div className="flex items-center justify-center gap-8 w-full max-w-3xl mx-auto">
        <div className={`relative ${wheelSize} flex-shrink-0`}>
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {flavorWheel.map((category, index) => {
              const segmentAngle = 360 / flavorWheel.length;
              const startAngle = index * segmentAngle;
              const endAngle = startAngle + segmentAngle;
              const isSelected = selectedCategory?.name === category.name;

              // Convert polar to cartesian coordinates
              const startRad = (startAngle - 90) * (Math.PI / 180);
              const endRad = (endAngle - 90) * (Math.PI / 180);
              const outerRadius = 50;
              const innerRadius = 20;

              const x1 = 50 + outerRadius * Math.cos(startRad);
              const y1 = 50 + outerRadius * Math.sin(startRad);
              const x2 = 50 + outerRadius * Math.cos(endRad);
              const y2 = 50 + outerRadius * Math.sin(endRad);
              const x3 = 50 + innerRadius * Math.cos(endRad);
              const y3 = 50 + innerRadius * Math.sin(endRad);
              const x4 = 50 + innerRadius * Math.cos(startRad);
              const y4 = 50 + innerRadius * Math.sin(startRad);

              const path = `M ${x1} ${y1} A ${outerRadius} ${outerRadius} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 0 0 ${x4} ${y4} Z`;

              return (
                <g key={category.name} onClick={() => handleCategoryClick(category)}>
                  <motion.path
                    d={path}
                    fill={category.color}
                    opacity={isSelected ? 1 : 0.7}
                    whileHover={{ opacity: 0.9, scale: 1.02 }}
                    style={{ transformOrigin: 'center' }}
                    className="cursor-pointer transition-all duration-300"
                  />
                </g>
              );
            })}
            <circle cx="50" cy="50" r="18" fill="white" stroke="#8B4513" strokeWidth="0.5" />
          </svg>
        </div>

        {/* Legend - now always horizontal */}
        <div className="flex flex-col gap-3">
          {flavorWheel.map((category) => {
            const isSelected = selectedCategory?.name === category.name;
            return (
              <motion.div
                key={category.name}
                className="flex items-center gap-3 cursor-pointer whitespace-nowrap"
                onClick={() => handleCategoryClick(category)}
                whileHover={{ scale: 1.02 }}
                animate={{ 
                  opacity: selectedCategory ? (isSelected ? 1 : 0.7) : 1
                }}
              >
                <div 
                  className="w-4 h-4 rounded-full transition-transform duration-300"
                  style={{ 
                    backgroundColor: category.color,
                    transform: isSelected ? 'scale(1.2)' : 'scale(1)'
                  }}
                />
                <Typography 
                  className={`syne-400 transition-colors duration-300 ${
                    isSelected ? 'text-[#2C1810] font-bold' : 'text-gray-600'
                  }`}
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {category.name}
                </Typography>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-12 p-6 rounded-lg max-w-3xl w-full"
            style={{ backgroundColor: `${selectedCategory.color}20` }}
          >
            <Typography variant="h5" className="mb-6 text-center syne-800" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              {selectedCategory.name}
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedCategory.subCategories.map((sub) => (
                <div key={sub.name} className="p-4 bg-white/80 rounded-lg shadow-sm">
                  <Typography variant="h6" className="mb-2 syne-800" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    {sub.name}
                  </Typography>
                  <ul className="space-y-1">
                    {sub.descriptors.map((desc) => (
                      <li key={desc} className="text-gray-700 syne-400">
                        • {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 