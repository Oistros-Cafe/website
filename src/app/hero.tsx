"use client";

import Image from "next/image";
import { Button, Typography, Card } from "@material-tailwind/react";
import Lottie from "lottie-react";
import coffeeAnimation from "./coffee-animation.json";

function Hero() {
  return (
    <div className="!flex h-[55vh] w-full items-center justify-between px-10" style={{ marginTop: "30px" }}>
      <Image
        width={1200}
        height={1200}
        src="/website/image/coffee-hero.jpeg"
        alt="bg-img"
        className="absolute inset-0 ml-auto w-[920px] h-[780px] rounded-bl-[100px] object-cover object-center"
      />
      <div className="container mx-auto mt-28">
        <div className="grid grid-cols-12 text-center lg:text-left">
          <Card 
          className="col-span-full rounded-xl border border-white bg-white/90 py-10 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7" 
          placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>

            <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4 lg:justify-start flex">

              <Image
                width={144}
                height={144}
                className="w-36 grayscale opacity-60"
                src="/website/image/oistros-logo-2.png"
                alt="pinterest"
                style={{ float: "right", margin: "10px 0", flex: "right", position: "relative" }}
              />
              <Lottie
                animationData={coffeeAnimation} loop={true}
                style={{ height: "80px", display: "inline", flex: "left", top: "20px", right: "0", position: "absolute" }}
              />
            </div>
            <Typography
              variant="h1"
              color="blue-gray"
              className="lg:text-5xl !leading-snug text-3xl lg:max-w-3xl syne-800" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              Ανακαλύψτε την ποικιλία καφέ που σας ταιριάζει.
            </Typography>
            <Typography variant="lead" className="mb-10 mt-6 !text-gray-900 syne-400" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              4 ποικιλίες speciality coffee και παραπάνω από 10 ποικιλίες αρωματικού καφέ περιμένουν να τις εξερευνήσετε στο καινούριο μας ηλεκτρονικό κατάστημα.
            </Typography>
            <div className="mb-8 flex justify-center gap-4 lg:justify-start syne-400">
              <Button color="yellow"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Εξερευνήστε τώρα</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Hero;
