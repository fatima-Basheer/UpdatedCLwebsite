import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Button from "../../components/Button";
import Stair from "../../components/Stair";
import Images from "../../components/Images";
import Header from "../../components/Header";

function Hero() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".hero-word", {
        opacity: 0,
        y: 50,
        stagger: 0.08,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from(".hero-content", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
      });
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="relative min-h-[100vh] md:min-h-[700px] overflow-hidden bg-[#e9f4ff]"
    >
      <div className="absolute top-0 right-0 w-[60vw] sm:w-[35vw] lg:w-[50vw] h-[80px] bg-gradient-to-b from-indigo-900 via-indigo-400 to-transparent blur-xl opacity-80" />

      <Header />

      <div className="absolute inset-0 z-20 pointer-events-none hidden lg:block">
        <Stair />
      </div>

      <section className="relative z-10 w-full">
        <div
          className="
            hero-content
            max-w-[1200px]
            mx-auto
            px-4
            sm:px-6
            md:px-4
            pt-24
            sm:pt-28
            md:pt-32
            lg:pt-36
            xl:pt-48
            pb-12
            md:pb-8
            flex
            flex-col
            md:flex-row
            items-center
            md:items-center
            justify-between
            gap-10
            md:gap-5
          "
        >
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl w-full">
            <span className="mb-4 inline-flex items-center rounded-full bg-white px-4 py-2 text-xs sm:text-sm text-black/80 shadow-md hover:bg-black hover:text-white transition-all">
              Welcome to CacheLogic
            </span>

            <h1 className="text-black/90 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.2] tracking-tight">
              Engineering AI-Powered 
              Software That Works For
              You.
            </h1>

            <p className="mt-5 max-w-md text-sm sm:text-base md:text-xs text-gray-800 leading-relaxed">
              Empowering businesses with cutting-edge technology and tailored
              Solutions.
            </p>

            <div className="mt-6 flex flex-col md:flex-row flex-wrap justify-center md:justify-start gap-3 w-full sm:w-auto">
              <Button variant="primary" className="px-6 py-2.5 text-sm flex-1 sm:flex-initial justify-center">
                Contact Us
              </Button>
              <Button variant="outline" className="px-4 py-2.5 text-sm flex-1 sm:flex-initial justify-center">
                Discover your Services
              </Button>
            </div>

            <div className="mt-8 w-full flex justify-center md:justify-start">
              <Images />
            </div>
          </div>

          <div className="hidden md:block w-full md:w-[35%] lg:w-[42%] overflow-hidden transform md:-translate-x-6 md:-translate-y-30">
            <video
              className="w-full h-auto max-h-[450px] block mix-blend-multiply object-cover"
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