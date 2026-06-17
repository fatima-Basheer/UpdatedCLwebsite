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
    title: "Build & Implement",
    description:
      "Our team builds and implements solutions with precision.",
  },
  {
    no: "Step 04",
    title: "Launch & Support",
    description:
      "We ensure smooth delivery and provide ongoing support.",
  },
];

function Steps() {

  const renderDesktopCard = (data, index) => (
    <div
      key={index}
      className="w-full h-full min-h-[190px] p-3.5 rounded-2xl relative overflow-hidden
      flex flex-col text-white flex-1 group
      backdrop-blur-2xl border-t-2 border-l-2 border-r border-b border-white/10 shadow-lg 
      bg-[rgba(255,255,255,0.07)]
      hover:border-blue-600 hover:border-2 duration-500"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-[180px] pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top,rgba(6,34,228,0.35)_0%,rgba(6,34,228,0.15)_40%,transparent_80%)] blur-[25px] group-hover:opacity-100 transition-opacity duration-500" />
<div className="absolute bottom-0 left-0 right-0 h-[120px] pointer-events-none z-10 bg-[linear-gradient(to_right,rgb(110,231,183)_0%,rgb(6,182,212)_25%,rgb(6,34,228)_50%,rgb(59,130,246)_75%,rgb(110,231,183)_100%)] [mask-image:linear-gradient(to_top,black_0%,rgba(0,0,0,0.3)_50%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_top,black_0%,rgba(0,0,0,0.3)_50%,transparent_100%)] blur-[7px] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out" />

      <div className="relative z-10 flex flex-col w-full h-full min-h-[inherit]">
        <div className="flex justify-between flex-row items-center shrink-0">
          <div className="border-t-2 border-l-2 border-r border-b border-gray-500 rounded-2xl p-2.5 bg-[rgba(255,255,255,0.07)]">
            <IoLogoAndroid className="text-3xl sm:text-4xl text-white screen-icon" />
          </div>

          <div className="mb-7">
            <div className="flex items-center gap-2 border-t-2 border-l-2 border-r border-b border-white/20 py-1 rounded-full w-fit px-2.5 bg-[rgba(255,255,255,0.07)]">
              <LuCircleStop className="text-lg text-[#306AF1]" />
              <span className="text-[12px]">{data.no}</span>
            </div>
          </div>
        </div>

        <div className="flex-grow" />

        <div className="flex flex-col gap-1.5 mt-auto">
          <h2 className="font-medium text-xl leading-tight">{data.title}</h2>
          <p className="text-xs text-gray-300 leading-relaxed">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );


  const renderMobileCard = (data, index) => (
    <div
      key={index}
      className="w-[290px] sm:w-[330px] h-full min-h-[135px] p-3.5 rounded-2xl relative overflow-hidden
      flex flex-col text-white shrink-0 group backdrop-blur-2xl border-t-2 border-l-2 border-r border-b border-white/10 shadow-lg 
      bg-[rgba(255,255,255,0.07)] hover:border-blue-600 hover:border-2 duration-500
      snap-start first:ml-2.5 last:mr-2.5"
    >
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-[180px] pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top,rgba(6,34,228,0.35)_0%,rgba(6,34,228,0.15)_40%,transparent_80%)] blur-[25px] group-hover:opacity-100 transition-opacity duration-500" />
<div className="absolute bottom-0 left-0 right-0 h-[100px] pointer-events-none z-10 bg-[linear-gradient(to_right,rgb(110,231,183)_0%,rgb(6,182,212)_25%,rgb(6,34,228)_50%,rgb(59,130,246)_75%,rgb(110,231,183)_100%)] [mask-image:linear-gradient(to_top,black_0%,rgba(0,0,0,0.3)_50%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_top,black_0%,rgba(0,0,0,0.3)_50%,transparent_100%)] blur-[7px] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out" />



      <div className="relative z-10 flex flex-col w-full h-full min-h-[inherit]">
        <div className="flex justify-between flex-row items-center shrink-0">
          <div className="border-t-2 border-l-2 border-r border-b border-gray-500 rounded-xl p-1.5 bg-[rgba(255,255,255,0.07)]">
            <IoLogoAndroid className="text-xl sm:text-4xl text-white screen-icon" />
          </div>

          <div className="mb-2">
            <div className="flex items-center gap-1.5 border-t-2 border-l-2 border-r border-b border-white/20 py-0.5 rounded-full w-fit px-2 bg-[rgba(255,255,255,0.07)]">
              <LuCircleStop className="text-xs md:text-lg text-[#306AF1]" />
              <span className="text-[10px]">{data.no}</span>
            </div>
          </div>
        </div>

        <div className="flex-grow" />

        <div className="flex flex-col gap-0.5 mt-auto">
          <h2 className="font-medium text-base leading-tight">
            {data.title}
          </h2>
          <p className="text-[11px] text-gray-400 leading-tight">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative overflow-hidden py-16 sm:py-20 md:py-24 bg-black px-0 md:px-4">
<div className="absolute bottom-0 left-0 right-0 z-0 h-[140px] w-full bg-gradient-to-r from-[#0622E4]/30 from-0%  via-50% to-[#B430F1]/50 to-100% blur-2xl" />






      <div className="relative z-10 text-white text-center mb-14 px-4">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
          Simple. Transparent. Effective
        </h1>

        <p className="mt-2 text-xs text-gray-400">
          A proven path to your success
        </p>
      </div>

      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[160px] pointer-events-none z-50 blur-[10px] opacity-80 mix-blend-mode-screen">
        <div
          className="w-full h-full bg-[linear-gradient(to_bottom,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.12)_50%,rgba(255,255,255,0.3)_80%,transparent_100%)]"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          }}
        />
      </div>

  
<div className="block md:hidden relative z-10 w-full">
  <style
    dangerouslySetInnerHTML={{
      __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `,
    }}
  />

  <div className="overflow-x-auto no-scrollbar scroll-smooth">
    <div className="w-max">

      <div className="flex justify-center mb-6 min-w-full">
        <div className="flex flex-row items-center gap-2.5">
          <LuCircleStop className="text-xl text-[#306AF1] shrink-0" />

          <div
            className="flex flex-row gap-2.5 shrink-0"
            style={{ width: "230px" }}
          >
            <div className="h-[1px] bg-white/20 flex-1" />
            <div className="h-[1px] bg-white/20 flex-1" />
          </div>

          <LuCircleStop className="text-xl text-[#306AF1] shrink-0" />
  <div
            className="flex flex-row gap-2.5 shrink-0"
            style={{ width: "230px" }}
          >
            <div className="h-[1px] bg-white/20 flex-1" />
            <div className="h-[1px] bg-white/20 flex-1" />
          </div>

          <LuCircleStop className="text-xl text-[#306AF1] shrink-0" />
          <div
            className="flex flex-row gap-2.5 shrink-0"
            style={{ width: "230px" }}
          >
            <div className="h-[1px] bg-white/20 flex-1" />
            <div className="h-[1px] bg-white/20 flex-1" />
          </div>

          <LuCircleStop className="text-xl text-[#306AF1] shrink-0" />
        </div>
      </div>

  
      <div className="flex flex-row gap-2.5 snap-x snap-mandatory mb-10">
        {renderMobileCard(steps[0], 0)}
        {renderMobileCard(steps[1], 1)}
        {renderMobileCard(steps[2], 2)}
        {renderMobileCard(steps[3], 3)}
      </div>
    </div>
  </div>
</div>

      <div className="hidden md:block relative z-10 w-full max-w-[1400px] mx-auto px-4 lg:px-45">
        <div className="flex flex-col gap-4">

          <div className="flex flex-row gap-4 items-stretch">
            {renderDesktopCard(steps[0], 0)}

            <div className="w-[135px] bg-gradient-to-t from-[#1a1919] via-[#111] to-[#000] z-10 shrink-0 rounded-2xl" />

            {renderDesktopCard(steps[1], 1)}
          </div>

          <div className="flex flex-row gap-4 items-center justify-center w-full">
            <div className="flex-1 h-[135px] bg-gradient-to-l from-[#1a1919] via-[#111] to-[#000] z-10 rounded-2xl" />

            <div className="flex items-center justify-center w-[135px] shrink-0">
              <div className="p-4 bg-black/60 border-t-2 border-l-2 border-r-1 border-b-1 border-white/20 rounded-2xl backdrop-blur-md shadow-2xl">
                <img
                  src="./cachelogic_logo.png"
                  alt="Cachelogic Logo"
                  className="w-40"
                />
              </div>
            </div>

            <div className="flex-1 h-[135px] bg-gradient-to-r from-[#1a1919] via-[#111] to-[#000] z-10 rounded-2xl" />
          </div>

          <div className="flex flex-row gap-4 items-stretch">
            {renderDesktopCard(steps[2], 2)}

            <div className="w-[135px] rounded-2xl bg-gradient-to-b from-[#1a1919] via-[#222] to-[#222] -z-50 shrink-0" />

            {renderDesktopCard(steps[3], 3)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;