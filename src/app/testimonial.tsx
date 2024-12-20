"use client";

import Image from "next/image";
import { Typography, Card, CardBody } from "@material-tailwind/react";

function TESTIMONIAL() {
  return (
    <section className="px-8 py-20 md:py-40">
      <div className="container mx-auto syne-400">
        <Card color="transparent" shadow={false} className="relative" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <CardBody className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <div className="w-full h-[400px] lg:h-[500px] relative rounded-xl overflow-hidden">
              <Image
                fill
                src="/image/oistros-2.JPG"
                alt="testimonial image"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative z-10 bg-white/90 lg:bg-transparent p-6 lg:p-0 rounded-xl">
              <Typography variant="h6" color="blue" className="mb-4 syne-800" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Σχετικά με εμάς
              </Typography>
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold syne-800" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
              >
                Επισκεφτείτε το κατάστημα μας
              </Typography>
              <Typography className="font-normal !text-gray-500 syne-400" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Βρισκόμαστε στην οδό Δωδεκανήσου 12 στη Θεσσαλονίκη και θα χαρούμε να σας εξυπηρετήσουμε από κοντά είτε από το online κατάστημα μας.
              </Typography>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default TESTIMONIAL;
