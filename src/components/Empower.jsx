import React from "react";

function Empower() {
  return (
    <div className="bg-black h-auto lg:h-105 2xl:h-150 flex flex-col lg:flex-row px-6 md:px-12 lg:px-42 xl:px-60 2xl:px-70 pt-0 pb-12 lg:py-0 w-full relative gap-10 lg:gap-0">
      <div
        className="hidden lg:block absolute bottom-0 left-0 right-0 w-full h-[100px]
        bg-[linear-gradient(to_right,rgba(59,130,246,0.8),rgba(168,85,247,0.8),transparent)]
        blur-2xl z-0"
      />

      <div className="flex-[1.3] flex flex-col items-center lg:items-start justify-center text-center lg:text-left z-10 mt-10 md:mt-0">
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-noraml leading-[1.2]">
          Empower Your Business with Data-Driven Decisions
        </h2>
        <p className="text-gray-400 text-xs mt-5 lg:mt-7 2xl:text-sm max-w-md lg:max-w-none leading-[1.5]">
          From predictive models to AI-driven insights, we help businesses
          leverage machine learning and AI to stay ahead of the competition. Our
          solutions are designed to provide a tangible impact, streamlining
          operations and driving efficiency across your business.
        </p>
      </div>

      <div className="flex-1 w-full z-10 flex items-center justify-center">
        <img
          src="/about.svg"
          alt="About"
          className="w-[340px] h-[400px] md:w-full md:h-48 lg:h-full object-contain"
        />
      </div>
    </div>
  );
}

export default Empower;
