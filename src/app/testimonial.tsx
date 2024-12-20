"use client";

import Image from "next/image";
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import { motion, AnimatePresence } from "framer-motion";

function Testimonial() {
  return (
    <section className="px-8 py-20 md:py-40 bg-[#f8f5f0]">
      <AnimatePresence>
        <motion.div 
          className="container mx-auto syne-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <Card color="transparent" shadow={false} className="relative" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <CardBody className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <div className="w-full h-[400px] lg:h-[600px] relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  fill
                  src="/image/oistros-2.JPG"
                  alt="Oistros Coffee Roasters"
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  loading="eager"
                />
              </div>
              
              <div className="relative z-10 bg-white/90 lg:bg-transparent p-8 lg:p-0 rounded-xl">
                <div className="mb-8">
                  <Typography variant="h6" color="blue-gray" className="mb-4 syne-800 text-[#8B4513] uppercase tracking-wider" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    Η ιστορία μας
                  </Typography>
                  <Typography
                    variant="h3"
                    color="blue-gray"
                    className="mb-6 font-bold syne-800 text-[#2C1810]" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                  >
                    Πάθος για τον τέλειο καφέ
                  </Typography>
                  <Typography className="mb-6 font-normal text-gray-700 syne-400 leading-relaxed" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    Στο Oistros Cafe, η τέχνη του καφέ είναι η καθημερινή μας αποστολή. Από το 
                    προσεκτικό ψήσιμο των κόκκων μέχρι το τέλειο σερβίρισμα, κάθε φλιτζάνι 
                    είναι μια μοναδική εμπειρία γεύσης.
                  </Typography>
                  <Typography className="mb-8 font-normal text-gray-700 syne-400 leading-relaxed" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    Επισκεφθείτε μας στην οδό Δωδεκανήσου 12 στη Θεσσαλονίκη και ανακαλύψτε 
                    τον κόσμο του specialty coffee.
                  </Typography>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center p-4 bg-[#2C1810]/5 rounded-lg">
                    <Typography variant="h4" className="text-[#8B4513] syne-800 mb-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                      15+
                    </Typography>
                    <Typography className="text-gray-700 syne-400" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                      Ποικιλίες Καφέ
                    </Typography>
                  </div>
                  <div className="text-center p-4 bg-[#2C1810]/5 rounded-lg">
                    <Typography variant="h4" className="text-[#8B4513] syne-800 mb-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                      10
                    </Typography>
                    <Typography className="text-gray-700 syne-400" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                      Χρόνια Εμπειρίας
                    </Typography>
                  </div>
                </div>
                
                <motion.div
                  className="mt-8"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    className="px-8 py-4 bg-[#8B4513] normal-case syne-400 text-base hover:bg-[#2C1810] shadow-lg"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Ανακαλύψτε τα προϊόντα μας
                  </Button>
                </motion.div>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default Testimonial;
