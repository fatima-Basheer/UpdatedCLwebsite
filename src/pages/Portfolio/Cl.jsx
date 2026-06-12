import React from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function Cl() {
  const tickerRef = useRef();
  useGSAP(() => {
    gsap.to(tickerRef.current, {
      x: "-50%",
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  }, []);
  return (
    <div className="relative bg-black min-h-[500px] w-full py-12 overflow-hidden flex flex-col items-center justify-center">
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[120px] h-full bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.05)_50%,rgba(255,255,255,0.05)_80%,transparent_100%)] z-30 pointer-events-none blur-md"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
      />

      <div className="relative z-10 flex items-center justify-center w-[350px] h-[350px] sm:w-[500px] sm:h-[400px] select-none pointer-events-none shrink-0">
        <div
          className="absolute w-[80%] aspect-square rounded-full bg-blue-600/30"
          style={{ clipPath: "inset(0% 0% 30% 0%)" }}
        />

        <div
          className="absolute w-[67%] aspect-square rounded-full bg-blue-600/30 shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
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

      <p className="absolute z-10 text-white text-sm sm:text-base text-center max-w-5xl mx-auto px-6 leading-relaxed bottom-24 lg:bottom-30">
        At CacheLogics, we believe that every project is an opportunity to
        create something meaningful. We collaborate closely with businesses to
        design secure, scalable, and future-ready solutions that deliver
        measurable results. From startups to enterprises, our work speaks for
        itself—helping clients transform challenges into growth opportunities.
      </p>
      <div className="w-full overflow-hidden pt-20">
        <div
          ref={tickerRef}
          className="flex items-center w-max whitespace-nowrap"
        >
          <img
            src="movingtext.png"
            alt="Moving text banner"
            className="h-7 object-contain"
          />
          <img
            src="movingtext.png"
            alt="Moving text banner duplicate"
            className="h-7 object-contain"
          />
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 w-full h-[50px] sm:h-[70px]
        bg-[linear-gradient(to_right,rgba(59,130,246,0.8),rgba(168,85,247,0.8),transparent)]
        blur-2xl z-0 pointer-events-none"
      />
    </div>
  );
}

export default Cl;
