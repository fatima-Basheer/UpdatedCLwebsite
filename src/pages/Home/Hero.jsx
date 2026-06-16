import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Button from "../../components/Button";
import Stair from "../../components/Stair";
import Images from "../../components/Images";
import Header from "../../components/Header";

function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#e9f4ff] flex flex-col justify-between">
<div className="absolute top-0 right-0 w-[60vw] sm:w-[35vw] lg:w-[50vw] h-[60px] bg-gradient-to-b from-[#0622E4] via-[#0622E4]/70  blur-xl pointer-events-none" />


      <Header />

  <div className="absolute inset-0 z-20 pointer-events-none">
  <Stair />
</div>

      <section className="relative z-10 w-full flex-1 flex items-center">
        <div
          className="
            hero-content
            mx-auto
            px-4
            sm:px-8
            lg:px-20
            2xl:px-80
            pt-26
            lg:pt-44
            pb-5
            flex
            flex-col
            md:flex-row
            items-start
            justify-between
            gap-4
            w-full"
        >
          <div className="flex flex-col items-start text-left flex-[1.3] text-wrap">
            <span className="mb-2 inline-flex items-center rounded-full bg-white px-4 py-2 text-[14px] text-black/70 shadow-sm hover:bg-black hover:text-white transition-all cursor-pointer">
              Welcome to CacheLogic
            </span>

            <h1 className="text-gray-800 text-5xl font-semibold leading-[1.3] mt-4 tracking-normal whitespace-normal break-wordsnormal-case max-w-[325px] md:max-w-[550px] lg:max-w-[570px]">
              Engineering AI-Powered Software That Works For You.
            </h1>

            <p className="text-xs text-black/90 max-w-[450px] mt-7 capitalize">
              Empowering businesses with cutting-edge technology and tailored
              solutions.
            </p>

            <div className="mt-7 flex flex-row flex-wrap justify-start gap-4 w-full sm:w-auto">
              <Button
                variant="primary"
              
              
              >
                Contact Us
              </Button>
              <Button
                variant="outline"
      
              >
                Discover our Services
              </Button>
            </div>

            <div className="max-w-[250px] md:max-w-[450px] flex justify-start">
              <Images />
            </div>
          </div>

          <div className="pl-10 sm:pl-0 h-[300px] sm:h-[400px] md:h-[440px] 2xl:h-[560px] w-auto overflow-hidden rounded-lg md:pr-40">
            <video
              className="h-full w-auto object-contain block mix-blend-multiply"
              src="./hero-section-animation2.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
