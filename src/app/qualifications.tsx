"use client";

import Image from "next/image";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import { FaCertificate } from "react-icons/fa";
import { GiCoffeeBeans } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";

function Qualifications() {
  const certifications = [
    {
      title: "SCA Coffee Skills Program",
      description: "Πιστοποίηση στο Specialty Coffee Association Professional Level",
      icon: <FaCertificate className="w-8 h-8 text-[#8B4513]" />,
      year: "2020"
    },
    {
      title: "Master Coffee Roaster",
      description: "Εξειδίκευση στο ψήσιμο και την επεξεργασία του καφέ",
      icon: <GiCoffeeBeans className="w-8 h-8 text-[#8B4513]" />,
      year: "2019"
    },
    {
      title: "Advanced Barista Skills",
      description: "Πιστοποίηση προχωρημένων τεχνικών παρασκευής καφέ",
      icon: <FaCertificate className="w-8 h-8 text-[#8B4513]" />,
      year: "2018"
    }
  ];

  return (
    <section className="px-8 py-20 bg-white">
      <AnimatePresence>
        <motion.div 
          className="container mx-auto syne-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="text-center mb-16">
            <Typography variant="h6" className="text-[#8B4513] uppercase tracking-wider mb-4 syne-800" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Εξειδίκευση & Πιστοποιήσεις
            </Typography>
            <Typography variant="h2" className="text-[#2C1810] syne-800 mb-6" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Η Τέχνη του Καφέ στα Χέρια Ειδικών
            </Typography>
            <Typography className="text-gray-700 max-w-2xl mx-auto syne-400" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Η ομάδα μας αποτελείται από πιστοποιημένους επαγγελματίες με βαθιά γνώση 
              και πάθος για τον καφέ.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
              >
                <Card 
                  className="p-6 hover:shadow-xl transition-all duration-300 cursor-pointer" 
                  placeholder={undefined} 
                  onPointerEnterCapture={undefined} 
                  onPointerLeaveCapture={undefined}
                >
                  <CardBody className="text-center" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <div className="flex justify-center mb-4">
                      {cert.icon}
                    </div>
                    <Typography variant="h5" className="mb-2 text-[#2C1810] syne-800 hover:text-[#8B4513] transition-colors duration-300" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                      {cert.title}
                    </Typography>
                    <Typography className="mb-4 text-gray-600 syne-400" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                      {cert.description}
                    </Typography>
                    <Typography className="text-[#8B4513] font-semibold syne-400" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                      {cert.year}
                    </Typography>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-[#f8f5f0] p-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <Typography variant="h4" className="text-[#2C1810] mb-4 syne-800" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  Εμπιστευτείτε την Εμπειρία μας
                </Typography>
                <Typography className="text-gray-700 syne-400" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  Κάθε φλιτζάνι καφέ που σερβίρουμε είναι αποτέλεσμα χρόνων εκπαίδευσης, 
                  πειραματισμού και αφοσίωσης στην τέχνη του καφέ. Η συνεχής εκπαίδευση 
                  και εξέλιξη είναι μέρος της φιλοσοφίας μας.
                </Typography>
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <Image
                  fill
                  src="/image/coffee-roasting.jpg"
                  alt="Coffee Roasting Process"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default Qualifications; 