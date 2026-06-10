import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Button from "../components/Button";
import Stair from "../components/Stair";
import Images from "../components/Images";
import Header from "../components/Header";

function HomePage() {
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
      className="relative min-h-[700px] overflow-hidden bg-[#e9f4ff]"
    >
      <div className="absolute top-0 right-0 w-[60vw] sm:w-[35vw] lg:w-[50vw] h-[80px] bg-gradient-to-b from-indigo-900 via-indigo-400 to-transparent blur-xl opacity-80" />

      <Header />

      <div className="absolute inset-0 z-20 pointer-events-none hidden lg:block">
        <Stair />
      </div>

      <section className="relative z-10">
        <div
          className="
            hero-content
            max-w-[1200px]
            mx-auto
            px-4
            sm:px-5
            md:px-4
            pt-20
            sm:pt-24
            md:pt-32
            lg:pt-26
            xl:pt-46
            pb-8
            flex
            flex-col
            md:flex-row
            items-start
            md:items-center
            justify-between
            gap-5
          "
        >
          <div className="flex flex-col items-start text-left max-w-xl">
            <span className="mb-4 inline-flex items-center rounded-full bg-white px-4 py-2 text-xs sm:text-sm text-black/80 shadow-md hover:bg-black hover:text-white transition-all">
              Welcome to CacheLogic
            </span>

            <h1 className="text-black/90 text-4xl lg:text-5xl font-semibold leading-[1.2]">
              Engineering AI-Powered <br className="hidden sm:block" />
              Software That Works For <br className="hidden sm:block" />
              You.
            </h1>

            <p className="mt-5 max-w-md text-xs text-gray-800 leading-relaxed">
              Empowering businesses with cutting-edge technology and tailored
              Solutions.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="primary" className="px-6 py-2">
                Contact Us
              </Button>
              <Button variant="outline" className="px-2 py-2">
                Discover your Services
              </Button>
            </div>

            <div className="mt-8 w-full">
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

export default HomePage;
