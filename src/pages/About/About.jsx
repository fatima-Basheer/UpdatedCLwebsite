import React from "react";

function About() {
  return (
    <div className="bg-black h-auto lg:h-105 2xl:h-150 flex flex-col lg:flex-row px-6 md:px-12 lg:px-42 xl:px-50 2xl:px-70 pt-0 pb-12 lg:py-0 w-full relative gap-10 lg:gap-0">
<div className="absolute bottom-0 left-0 right-0 z-0 h-[140px] w-full bg-gradient-to-r from-[#0622E4]/30 from-0%  via-50% to-[#B430F1]/50 to-100% blur-2xl" />

      <div className="flex-[1.3] flex flex-col items-center lg:items-start justify-center text-center lg:text-left z-10 mt-10 md:mt-0">
        <h2 className="text-white text-3xl sm:text-4xl 2xl:text-5xl font-semibold">
          About Us
        </h2>
        <p className="text-gray-400 text-xs mt-5 lg:mt-7 2xl:text-sm max-w-md lg:max-w-none">
          Born out of a passion for solving complex challenges, CacheLogics
          started as a small team of innovators helping startups bring their
          ideas to life.
        </p>
        <p className="text-gray-400 text-xs 2xl:text-sm mt-4 lg:mt-5 max-w-md lg:max-w-none">
          Over the years, we've grown into a global technology partner —
          empowering organizations across industries to achieve faster
          time-to-market, higher security, and scalable success.
        </p>
      </div>

      <div className="flex-1 w-full z-10 flex items-center justify-center">
        <img
          src="/about.svg"
          alt="About"
          className="w-[360px] h-[400px] md:w-full md:h-48 lg:h-full object-contain"
        />
      </div>
    </div>
  );
}

export default About;
