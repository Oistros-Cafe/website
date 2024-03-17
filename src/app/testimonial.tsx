"use client";

import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";


function TESTIMONIAL() {
  return (
    <section className="px-8 py-80">
      <div className="container mx-auto syne-400">
        <Card color="transparent" shadow={false} className="" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <CardBody className="col-span-full gap-10 place-items-center overflow-visible grid grid-cols-1 lg:grid-cols-4"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <div className="w-full xl:w-[600px] flex items-center overflow-hidden rounded-xl justify-center col-span-2 h-full">
              <Image
                width={768}
                height={768}
                src="/image/oistros-2.jpg"
                alt="testimonial image"
                className="w-full h-full scale-110 object-cover"
              />
            </div>
            <div className="col-span-2 w-full">
              <Typography variant="h6" color="blue" className="mb-4 syne-800"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Σχετικά με εμάς
              </Typography>
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold syne-800"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}              >
                Επισκεφτείτε το κατάστημα μας
              </Typography>
              <Typography className="mb-1 w-full font-normal !text-gray-500 syne-400"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
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
