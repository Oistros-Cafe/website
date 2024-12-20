"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from 'next/dynamic';
import { GiCoffeeBeans } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import CoffeeFlavorWheel from "./coffee-flavor-wheel";

// Dynamically import Material Tailwind components with no SSR
const Typography = dynamic(
  () => import("@material-tailwind/react").then((mod) => mod.Typography),
  { ssr: false }
);

const Card = dynamic(
  () => import("@material-tailwind/react").then((mod) => mod.Card),
  { ssr: false }
);

const CardBody = dynamic(
  () => import("@material-tailwind/react").then((mod) => mod.CardBody),
  { ssr: false }
);

const Button = dynamic(
  () => import("@material-tailwind/react").then((mod) => mod.Button),
  { ssr: false }
);

const Chip = dynamic(
  () => import("@material-tailwind/react").then((mod) => mod.Chip),
  { ssr: false }
);

interface CoffeeBean {
  id: number;
  name: string;
  origin: string;
  roastLevel: "Ελαφρύ" | "Μεσαίο" | "Σκούρο";
  flavorNotes: string[];
  flavorCategories: string[];
  description: string;
  price: number;
  image: string;
}

const coffeeBeans: CoffeeBean[] = [
  {
    id: 1,
    name: "Ethiopia Yirgacheffe",
    origin: "Αιθιοπία",
    roastLevel: "Ελαφρύ",
    flavorNotes: ["Άνθη Γιασεμιού", "Εσπεριδοειδή", "Βερίκοκο"],
    flavorCategories: ["Φρουτώδη", "Λουλουδάτα"],
    description: "Ένας εξαιρετικά αρωματικός καφές με λουλουδάτες νότες και φωτεινή οξύτητα.",
    price: 8.50,
    image: "/image/coffee-beans/ethiopia.jpg"
  },
  {
    id: 2,
    name: "Colombia Supremo",
    origin: "Κολομβία",
    roastLevel: "Μεσαίο",
    flavorNotes: ["Καραμέλα", "Σοκολάτα", "Ξηροί Καρποί"],
    flavorCategories: ["Γλυκά", "Ξηροί Καρποί"],
    description: "Ισορροπημένος καφές με γλυκές νότες και βελούδινη επίγευση.",
    price: 7.90,
    image: "/image/coffee-beans/colombia.jpg"
  },
  {
    id: 3,
    name: "Guatemala Antigua",
    origin: "Γουατεμάλα",
    roastLevel: "Μεσαίο",
    flavorNotes: ["Σοκολάτα", "Μέλι", "Εσπεριδοειδή"],
    flavorCategories: ["Ξηροί Καρποί"],
    description: "Πλούσιο σώμα με νότες σοκολάτας και ισορροπημένη γλυκύτητα.",
    price: 8.20,
    image: "/image/coffee-beans/guatemala.jpg"
  },
  {
    id: 4,
    name: "Kenya AA",
    origin: "Κένυα",
    roastLevel: "Ελαφρύ",
    flavorNotes: ["Μαύρο Φραγκοστάφυλο", "Δαμάσκηνο", "Μαύρο Τσάι"],
    flavorCategories: ["Φρουτώδη"],
    description: "Έντονη φρουτώδης γεύση με ωηρή οξύτητα και πολύπλοκο χαρακτήρα.",
    price: 9.50,
    image: "/image/coffee-beans/kenya.jpg"
  },
  {
    id: 5,
    name: "Brazil Santos",
    origin: "Βραζιλία",
    roastLevel: "Μεσαίο",
    flavorNotes: ["Φουντούκι", "Σοκολάτα Γάλακτος", "Καραμέλα"],
    flavorCategories: ["Γλυκά"],
    description: "Απαλός και γλυκός με χαμηλή οξύτητα και κρεμώδη υφή.",
    price: 7.50,
    image: "/image/coffee-beans/brazil.jpg"
  },
  {
    id: 6,
    name: "Costa Rica Tarrazu",
    origin: "Κόστα Ρίκα",
    roastLevel: "Μεσαίο",
    flavorNotes: ["Μέλι", "Πορτοκάλι", "Καρύδια"],
    flavorCategories: ["Φρουτώδη"],
    description: "Καθαρή γεύση με έντονη λυκύτητα και ελαφριά φρουτώδη χαρακτήρα.",
    price: 8.90,
    image: "/image/coffee-beans/costa-rica.jpg"
  }
];

const roastLevelColors = {
  "Ελαφρύ": "amber",
  "Μεσαίο": "brown",
  "Σκούρο": "gray"
} as const;

export default function CoffeeExplorer() {
  const [selectedBean, setSelectedBean] = useState<CoffeeBean | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedFlavorCategory, setSelectedFlavorCategory] = useState<string | null>(null);
  const [wheelKey, setWheelKey] = useState(0);

  const filteredCoffeeBeans = selectedFlavorCategory
    ? coffeeBeans.filter(bean => bean.flavorCategories.includes(selectedFlavorCategory))
    : coffeeBeans;

  const handleFlavorCategorySelect = (category: string | null) => {
    setSelectedFlavorCategory(category);
    setSelectedBean(null);
  };

  const handleFilterDismiss = () => {
    handleFlavorCategorySelect(null);
    setWheelKey(prev => prev + 1);
  };

  return (
    <section className="px-8 py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Typography variant="h2" className="text-[#2C1810] syne-800 mb-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Οι Ποικιλίες μας
          </Typography>
          <Typography className="text-gray-700 syne-400 max-w-2xl mx-auto" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Ανακαλύψτε τη μοναδική συλλογή μας από επιλεγμένους κόκκους καφέ από όλο τον κόσμο.
          </Typography>
        </div>

        <div className="mb-16">
          <CoffeeFlavorWheel 
            key={wheelKey} 
            onSelectCategory={handleFlavorCategorySelect} 
          />
          {selectedFlavorCategory && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mt-4"
            >
              <Chip
                value={`Φίλτρο: ${selectedFlavorCategory}`}
                variant="outlined"
                onClose={handleFilterDismiss}
                className="bg-[#8B4513] text-white"
              />
            </motion.div>
          )}
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredCoffeeBeans.map((bean) => (
            <motion.div
              key={bean.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ y: -5 }}
              onClick={() => {
                setSelectedBean(bean);
                setIsFlipped(false);
              }}
            >
              <Card 
                className="cursor-pointer hover:shadow-xl transition-shadow duration-300"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <CardBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  <div className="flex items-center gap-4 mb-4">
                    <GiCoffeeBeans className="w-6 h-6 text-[#8B4513]" />
                    <Typography variant="h5" className="syne-800" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                      {bean.name}
                    </Typography>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <MdLocationOn className="text-[#8B4513]" />
                    <Typography className="text-gray-700 syne-400" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                      {bean.origin}
                    </Typography>
                  </div>

                  <Chip
                    value={bean.roastLevel}
                    color={roastLevelColors[bean.roastLevel]}
                    className="mb-4"
                  />

                  <div className="flex flex-wrap gap-2 mb-4">
                    {bean.flavorNotes.map((note, index) => (
                      <Chip
                        key={index}
                        value={note}
                        variant="outlined"
                        className="text-sm"
                      />
                    ))}
                  </div>

                  <Typography className="text-[#8B4513] font-bold text-xl mb-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    €{bean.price.toFixed(2)}
                  </Typography>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedBean && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBean(null)}
            >
              <motion.div
                className="relative bg-white rounded-xl p-6 max-w-lg w-full"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className={`transform transition-transform duration-500 ${isFlipped ? "rotate-y-180" : ""}`}>
                  <div className="flex justify-between items-start mb-6">
                    <Typography variant="h4" className="syne-800" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                      {selectedBean.name}
                    </Typography>
                    <Button
                      variant="text"
                      onClick={() => setIsFlipped(!isFlipped)}
                      className="text-[#8B4513]"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {isFlipped ? "Πίσω" : "Περισσότερα"}
                    </Button>
                  </div>

                  {!isFlipped ? (
                    <div>
                      <Typography className="mb-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        {selectedBean.description}
                      </Typography>
                      <Button
                        className="bg-[#8B4513] mt-4"
                        fullWidth
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        Προσθήκη στο καλάθι
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <Typography variant="h6" className="mb-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        Οδηγός Παρασκευής
                      </Typography>
                      <Typography className="mb-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        Προτεινόμενη αναλογία: 1:16 (καφές:νερό)
                        Θερμοκρασία νερού: 92-96°C
                        Χρόνος εκχύλισης: 3-4 λεπτά
                      </Typography>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
} 