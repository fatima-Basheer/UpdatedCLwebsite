import React from "react";
import { IoLogoAndroid } from "react-icons/io";
import { LuCircleStop } from "react-icons/lu";

const steps = [
  {
    no: "Step 01",
    title: "Discover & Consult",
    description:
      "We begin by understanding your business, goals, and challenges.",
  },
  {
    no: "Step 02",
    title: "Strategy & Planning",
    description:
      "We create a customized roadmap tailored to your business needs.",
  },
  {
    no: "Step 03",
    title: "Development & Execution",
    description: "Our team builds and implements solutions with precision.",
  },
  {
    no: "Step 04",
    title: "Launch & Support",
    description: "We ensure smooth delivery and provide ongoing support.",
  },
];

function StepsPage() {
  const cardHeightClass =
    "min-h-[260px] sm:min-h-[220px] md:min-h-[260px] lg:min-h-[240px]";

  const renderCard = (data, index) => (
    <div
      key={index}
      className={`w-full h-full ${cardHeightClass} p-4 rounded-2xl relative overflow-hidden
    flex flex-col gap-6 text-white flex-1 group
    backdrop-blur-2xl border-t-2 border-l-2 border-r border-b border-white/10 shadow-lg 
    bg-[rgba(255,255,255,0.07)]
    hover:border-blue-600 hover:border-2 duration-500`}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-[180px] pointer-events-none z-0
      bg-[radial-gradient(ellipse_at_top,rgb(99,102,241,0.65)_0%,rgb(99,102,241,0.15)_40%,transparent_80%)]
      blur-[10px] group-hover:opacity-100 transition-opacity duration-500"
      />

      <div
        className="absolute bottom-0 left-0 right-0 h-[120px] pointer-events-none z-0
  bg-[linear-gradient(to_right,rgba(16,185,129,0.3)_0%,rgba(14,165,243,0.15)_25%,rgba(90,126,233,0.1)_75%,rgba(16,185,129,0.3)_100%)]
  blur-[10px]
  
  /* Start hidden, slightly shifted downwards */
  opacity-0 translate-y-6
  
  /* Smoothly transition up and fade in on hover */
  group-hover:opacity-100 group-hover:translate-y-0 
  transition-all duration-700 ease-out"
      />

      <div className="relative z-10 flex flex-col gap-6 w-full h-full">
        <div className="flex justify-between flex-row items-center shrink-0">
          <div className="border-t-2 border-l-2 border-r border-b border-gray-500 rounded-2xl p-1 bg-[rgba(255,255,255,0.07)]">
            <IoLogoAndroid className="text-4xl sm:text-5xl text-white screen-icon" />
          </div>
          <div className="mb-5">
            <div className="flex items-center gap-2 border-t-2 border-l-2 border-r border-b border-white/30 py-1 rounded-full w-fit px-3 bg-[rgba(255,255,255,0.07)]">
              <LuCircleStop className="text-xl" />
              <span className="text-[12px]">{data.no}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-12">
          <h2 className="font-bold text-xl leading-[0.9]">{data.title}</h2>
          <p className="text-xs text-gray-300 ">{data.description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative overflow-hidden py-16 sm:py-20 bg-black px-4">
      <div
        className="absolute bottom-0 left-0 right-0 w-full h-[80px] sm:h-[120px]
        bg-[linear-gradient(to_right,rgba(59,130,246,0.8),rgba(168,85,247,0.8),transparent)]
        blur-2xl z-0"
      />
      <div className="relative z-10 text-white text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight px-2">
          Simple. Transparent. Effective
        </h1>
        <p className="mt-4 sm:mt-6 text-sm text-gray-400">
          A proven path to your success
        </p>
      </div>
      <div
        className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[220px] pointer-events-none z-50
  blur-[8px] opacity-80 mix-blend-mode-screen"
      >
        <div
          className="w-full h-full bg-[linear-gradient(to_bottom,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.12)_50%,rgba(255,255,255,0.05)_80%,transparent_100%)]"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-90" />
      </div>

      <div className="relative z-10 flex flex-col gap-6 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-45">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          {renderCard(steps[0], 0)}
          <div
            className={`hidden md:block w-[135px] ${cardHeightClass} bg-gradient-to-t from-[#1a1919] via-[#111] to-[#000] z-10 shrink-0 rounded-2xl`}
          />
          {renderCard(steps[1], 1)}
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
          <div className="hidden md:block flex-1 md:min-h-[135px] md:h-[135px] bg-gradient-to-l from-[#1a1919] via-[#111] to-[#000] z-10 rounded-2xl" />
          <div className="flex items-center justify-center py-6 md:py-0 w-full md:w-[135px] shrink-0">
            <div className="hidden md:block p-4 bg-black/60 border-t-2 border-l-2 border-r-1 border-b-1 border-white/20 rounded-2xl backdrop-blur-md shadow-2xl">
              <img
                src="./cachelogic_logo.png"
                alt="Cachelogic Logo"
                className="w-40"
              />
            </div>
          </div>
          <div className="hidden md:block flex-1 md:min-h-[135px] md:h-[135px] bg-gradient-to-r from-[#1a1919] via-[#111] to-[#000] z-10 rounded-2xl" />
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          {renderCard(steps[2], 2)}
          <div
            className={`hidden md:block w-[135px] ${cardHeightClass} rounded-2xl bg-gradient-to-b from-[#1a1919] via-[#222] to-[#222] -z-50 shrink-0`}
          />
          {renderCard(steps[3], 3)}
        </div>
      </div>
    </div>
  );
}

export default StepsPage;
