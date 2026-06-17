import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Globe from "../../components/Globe";
const statsData = [
  { value: "4", label: "years in market" },
  { value: "99", label: "Platform Availability " },
  { value: "50", label: "Clients Worldwide" },
  { value: "10", label: "Countries Served" },
];

function Trusted() {
  const tickerRef = useRef();
  const mobileContainerRef = useRef(); // ADDED: Dedicated ref for mobile elements
  const [activeIndex, setActiveIndex] = useState(0); 
  const { contextSafe } = useGSAP();

  useGSAP(() => {
    gsap.to(tickerRef.current, {
      x: "-50%",
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  }, []);


  useGSAP(() => {
    const container = mobileContainerRef.current;
    if (!container) return;

    const imgMid = container.querySelector(".img-mid");
    const imgFull = container.querySelector(".img-full");

    if (imgMid && imgFull) {
  
      gsap.killTweensOf([imgMid, imgFull]);
      gsap.set(imgMid, { opacity: 1, scaleX: 1, scaleY: 1, x: 0, y: 0 });
      gsap.set(imgFull, { opacity: 0, scaleX: 1, scaleY: 1, x: 0, y: 0 });


      gsap.to(imgFull, {
        opacity: 1,
        duration: 0.5,
        delay: 0.05, 
        ease: "power2.out",
      });
    }
  }, { dependencies: [activeIndex], scope: mobileContainerRef });


  const handleDotClick = contextSafe((index) => {
    if (index === activeIndex) return;

    const container = mobileContainerRef.current;
    if (!container) return;

    const textContainer = container.querySelector(".text-container");
    const imgMid = container.querySelector(".img-mid");
    const imgFull = container.querySelector(".img-full");

    gsap.killTweensOf([textContainer, imgMid, imgFull]);


    gsap.to(textContainer, {
      opacity: 0,
      y: -10,
      duration: 0.2,
      onComplete: () => {
        setActiveIndex(index);
        gsap.to(textContainer, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      },
    });


    gsap.set(imgMid, { opacity: 1, scaleX: 1, scaleY: 1, x: 0, y: 0 });
    gsap.set(imgFull, { opacity: 0, scaleX: 1, scaleY: 1, x: 0, y: 0 });

    gsap.to(imgFull, {
      opacity: 1,
      duration: 0.5,
      delay: 0.4, 
      ease: "power2.out",
    });
  });

  const handleMouseEnter = contextSafe((e) => {
    const container = e.currentTarget;
    const img1 = container.querySelector(".img-initial");
    const img2 = container.querySelector(".img-mid");
    const img3 = container.querySelector(".img-full");
    const textContainer = container.querySelector(".text-container");

    gsap.killTweensOf([img1, img2, img3, textContainer]);

    gsap.to(textContainer, {
      y: -6,
      duration: 0.45,
      ease: "power3.out",
      force3D: true,
      overwrite: "auto",
    });

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
    const textContainer = container.querySelector(".text-container");

    gsap.killTweensOf([img1, img2, img3, textContainer]);

    gsap.to(textContainer, {
      y: 0,
      duration: 0.45,
      ease: "power3.out",
      force3D: true,
      overwrite: "auto",
    });

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
    <div className="relative bg-black min-h-screen overflow-hidden px-2 sm:px-6 flex flex-col justify-between py-12">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[70vw] h-[5%] bg-gradient-to-r from-transparent to-indigo-600 blur-3xl opacity-70" />
        <div className="absolute top-0 right-0 w-[60vw] h-[10%] bg-gradient-to-l from-indigo-600 to-transparent blur-2xl opacity-50" />
      </div>

      <div className="text-center z-30 w-full mb-10">
        <h1 className="text-white text-2xl lg:text-5xl font-medium leading-[1.1]">
          We're Committed To Lead Your
          <br className="hidden md:block" /> Digital Journey To Success.
        </h1>
        <p className="text-xs text-white/65 mt-4 mx-auto font-light">
          We have a proven track record of building scalable software solutions
          for businesses.
        </p>
      </div>

      <div className="w-full relative z-30 my-auto">

        <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-4 gap-4 px-30 xl:px-55 2xl:px-130 max-w-none">
          {statsData.map((stat, index) => (
            <div
              key={index}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative pl-6 w-full cursor-pointer group transition-all duration-300 before:absolute before:left-0 before:top-0 before:w-[2px] before:h-[0px] before:bg-blue-600 before:transition-all before:duration-500 md:hover:before:h-[348px]"
            >
              <div className="text-container flex flex-col">
                <div className="flex text-white items-center">
                  <span className="text-7xl font-medium">{stat.value}</span>
                  <span className="font-medium text-5xl">+</span>
                </div>
                <span className="text-xs text-gray-400">{stat.label}</span>
              </div>

              <div className="mt-12 relative h-56 w-full overflow-hidden">
                <img
                  src="./trusted-section-initial-graph.svg"
                  alt="Initial Graph"
                  className="img-initial absolute inset-y-0 left-0 w-full h-full object-contain object-left-top"
                />
                <img
                  src="./trusted-section-mid-graph-without-dot.svg"
                  alt="Mid Graph"
                  className="img-mid absolute inset-0 w-[115%] max-w-none h-full object-contain object-left-top opacity-0"
                />
                <img
                  src="./trusted-section-full-graph.svg"
                  alt="Full Graph"
                  className="img-full absolute inset-0 w-[115%] max-w-none h-full object-contain object-left-top opacity-0"
                />
              </div>
            </div>
          ))}
        </div>

<div 
  ref={mobileContainerRef} 
  className="mobile-track md:hidden flex flex-col justify-center items-center px-4 w-full"
>

  <div className="relative py-4 w-[85vw] flex flex-col items-center justify-center cursor-pointer group transition-all duration-300">
    

    <div className="text-container flex flex-col items-center text-center">
      <div className="flex text-white items-center justify-center">
        <span className="text-7xl font-medium">
          {statsData[activeIndex].value}
        </span>
        <span className="font-medium text-5xl">+</span>
      </div>
      <span className="text-xs text-gray-400">
        {statsData[activeIndex].label}
      </span>
    </div>

  
    <div className="mt-12 relative h-56 w-full max-w-sm overflow-hidden flex justify-center items-center">
      <img
        src="./trusted-section-initial-graph.svg"
        alt="Initial Graph"
        className="hidden sm:block img-initial absolute inset-0 w-full h-full object-contain object-center"
      />

      <img
        src="./trusted-section-mid-graph-without-dot.svg"
        alt="Mid Graph"
        className="img-mid absolute inset-0 w-full h-full object-contain object-center opacity-100"
      />
      <img
        src="./trusted-section-full-graph.svg"
        alt="Full Graph"
        className="img-full absolute inset-0 w-full h-full object-contain object-center opacity-0"
      />
    </div>
  </div>
</div>



        <div className="flex md:hidden justify-center items-center gap-2 mt-8">
          {statsData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-[6px] rounded-full bg-white transition-all duration-300 ${
                activeIndex === index ? "w-[24px]" : "w-[6px]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="w-full overflow-hidden py-6">
        <div ref={tickerRef} className="flex items-center w-max whitespace-nowrap">
          <img src="movingtext.png" alt="Moving text banner" className="h-7 object-contain" />
          <img src="movingtext.png" alt="Moving text banner duplicate" className="h-7 object-contain" />
        </div>
      </div>

      {/* <div className="hidden md:block mt-70">
        <Globe/>
      </div> */}
    </div>
  );
}

export default Trusted;
