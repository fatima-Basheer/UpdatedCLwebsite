import React from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Cl() {
  const tickerRef = useRef();

  useGSAP(() => {
    gsap.to(tickerRef.current, {
      xPercent: -50,
      duration: 25,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <div className="relative bg-black min-h-fit w-full py-12 sm:py-16 overflow-hidden flex flex-col items-center justify-start gap-4">
      <div className="absolute bottom-0 left-0 right-0 w-full h-[100px] bg-[linear-gradient(to_right,rgba(59,130,246,0.8),rgba(168,85,247,0.8),transparent)] blur-2xl z-0" />

      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[220px] pointer-events-none z-50 blur-[8px] opacity-80 mix-blend-mode-screen">
        <div
          className="w-full h-full bg-[linear-gradient(to_bottom,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.12)_50%,rgba(255,255,255,0.05)_80%,transparent_100%)]"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          }}
        />
      </div>

      <div className="relative z-10 flex items-center justify-center w-full h-[240px] sm:w-[450px] sm:h-[360px] md:w-[500px] md:h-[400px] select-none pointer-events-none shrink-0">
        <div
          className="absolute w-[88%] aspect-square rounded-full bg-blue-600/30"
          style={{ clipPath: "inset(0% 0% 30% 0%)" }}
        />

        <div
          className="absolute w-[72%] aspect-square rounded-full bg-blue-600/30 shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
          style={{ clipPath: "inset(0% 0% 26% 0%)" }}
        />

        <div
          className="absolute w-[54%] aspect-square rounded-full bg-blue-600/60 shadow-[0_8px_20px_rgba(0,0,0,0.7),_0_0_40px_rgba(59,130,246,0.2)]"
          style={{ clipPath: "inset(0% 0% 20% 0%)" }}
        />

        <div className="absolute bottom-0 left-0 right-0 h-[55%] flex flex-col justify-end z-10 pointer-events-none">
          <div className="w-full h-1/2 bg-gradient-to-t from-black via-black/90 to-transparent" />
          <div className="w-full h-1/2 bg-black" />
        </div>

        <div className="absolute w-[32%] aspect-square rounded-full bg-slate-800 overflow-hidden shadow-[0_12px_24px_rgba(0,0,0,0.9)] flex items-center justify-center z-20">
          <img
            src="/linelogo.svg"
            alt="Logo Placeholder"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      </div>

      <div className="relative z-10 text-white text-medium text-center max-w-5xl mx-auto px-6 flex flex-col gap-0 md:gap-3 py-4 -mt-12 sm:-mt-16 md:-mt-20 leading-[1.6] md:leading-[0.9]">
        <p>
          At CacheLogics, we believe that every project is an opportunity to
          create something meaningful.
        </p>
        <p>
          We collaborate closely with businesses to design secure, scalable, and
          future-ready solutions that deliver measurable results.
        </p>
        <p>
          From startups to enterprises, our work speaks for itself—helping
          clients transform challenges into growth opportunities.
        </p>
      </div>

      <div className="relative w-full overflow-hidden pt-2  z-10">
        <div
          ref={tickerRef}
          className="flex items-center gap-0 w-max whitespace-nowrap will-change-transform"
        >
          <img
            src="movingtext.png"
            alt="Banner Segment"
            className="h-5 sm:h-7 object-contain"
          />
          <img
            src="movingtext.png"
            alt="Banner Segment"
            className="h-5 sm:h-7 object-contain"
          />
          <img
            src="movingtext.png"
            alt="Banner Segment"
            className="h-5 sm:h-7 object-contain"
          />
          <img
            src="movingtext.png"
            alt="Banner Segment"
            className="h-5 sm:h-7 object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Cl;
