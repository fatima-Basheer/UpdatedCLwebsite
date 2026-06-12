import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const statsData = [
  { value: "4", label: "years in market" },
  { value: "99", label: "Platform Availability " },
  { value: "50", label: "Clients Worldwide" },
  { value: "10", label: "Countries Served" },
];

function Trusted() {
  const tickerRef = useRef();
  const { contextSafe } = useGSAP();

  useGSAP(() => {
    gsap.to(tickerRef.current, {
      x: "-50%",
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  }, []);

  const handleMouseEnter = contextSafe((e) => {
    const container = e.currentTarget;
    const img1 = container.querySelector(".img-initial");
    const img2 = container.querySelector(".img-mid");
    const img3 = container.querySelector(".img-full");

    gsap.killTweensOf([img1, img2, img3]);

    gsap.to(img1, {
      scale: 0.85,
      x: 5,
      y: 5,
      transformOrigin: "left top",
      opacity: 1,
      duration: 0.4,
      overwrite: "auto",
    });

    gsap.to(img2, {
      scaleY: 0.85,
      scaleX: 0.92,
      x: 5,
      y: 5,
      transformOrigin: "left top",
      opacity: 1,
      duration: 0.4,
      delay: 0.1,
      overwrite: "auto",
    });

    gsap.set(img3, {
      scaleY: 0.85,
      scaleX: 0.92,
      x: 5,
      y: 5,
      transformOrigin: "left top",
    });

    gsap.to(img3, {
      opacity: 1,
      duration: 0.3,
      delay: 1.0,
      overwrite: "auto",
    });
  });

  const handleMouseLeave = contextSafe((e) => {
    const container = e.currentTarget;
    const img1 = container.querySelector(".img-initial");
    const img2 = container.querySelector(".img-mid");
    const img3 = container.querySelector(".img-full");

    gsap.killTweensOf([img1, img2, img3]);

    gsap.to(img1, {
      scale: 1,
      x: 0,
      y: 0,
      opacity: 1,
      duration: 0.3,
      overwrite: "auto",
    });

    gsap.to(img2, {
      scaleX: 1,
      scaleY: 1,
      x: 0,
      y: 0,
      opacity: 0,
      duration: 0.3,
      overwrite: "auto",
    });

    gsap.to(img3, {
      scaleX: 1,
      scaleY: 1,
      x: 0,
      y: 0,
      opacity: 0,
      duration: 0.3,
      overwrite: "auto",
    });
  });

  return (
    <div className="relative bg-black min-h-screen overflow-hidden px-4 sm:px-10 flex flex-col justify-between py-12">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[70vw] h-[5%] bg-gradient-to-r from-transparent to-indigo-600 blur-3xl opacity-70" />
        <div className="absolute top-0 right-0 w-[60vw] h-[10%] bg-gradient-to-l from-indigo-600 to-transparent blur-2xl opacity-50" />
      </div>

      <div className="text-center z-30 w-full mb-10">
        <h1 className="text-white text-5xl font-medium leading-[1.2]">
          We're Committed To Lead Your
          <br /> Digital Journey To Success.
        </h1>
        <p className="text-xs text-white/65 mt-4 mx-auto font-light">
          We have a proven track record of building scalable software solutions
          for businesses.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 z-30 my-auto px-4 md:px-20 xl:px-40 max-w-none">
        {statsData.map((stat, index) => (
          <div
            key={index}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative pl-6 py-4 w-full cursor-pointer group transition-all duration-300 before:absolute before:left-0 before:top-0 before:w-[2px] before:h-0 before:bg-blue-600 before:transition-all before:duration-500 hover:before:h-full"
          >
            <div className="flex flex-col">
              <div className="flex text-white items-center">
                <span className="text-7xl font-semibold">{stat.value}</span>
                <span className="font-medium text-5xl">+</span>
              </div>
              <span className="text-xs text-gray-400">{stat.label}</span>
            </div>

            <div className="mt-8 relative h-36 w-full overflow-hidden">
              <img
                src="./trusted-section-initial-graph.svg"
                alt="Initial Graph"
                className="img-initial absolute inset-y-0 left-0 w-[85%] h-full object-contain object-left-top"
              />

              <img
                src="./trusted-section-mid-graph-without-dot.svg"
                alt="Mid Graph"
                className="img-mid absolute inset-0 w-full h-full object-contain object-left-top opacity-0"
              />

              <img
                src="./trusted-section-full-graph.svg"
                alt="Full Graph"
                className="img-full absolute inset-0 w-full h-full object-contain object-left-top opacity-0"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="w-full overflow-hidden py-14">
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

      <div className="w-full flex justify-center items-center mt-auto z-30"></div>
    </div>
  );
}

export default Trusted;
