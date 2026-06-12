import React, { useRef } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const slides = [
  {
    title: "Car Rental Platform",
    content: "/clientimg.jpg",
    client: "Amna",
    review:
      "Their platform completely streamlined our booking process and improved customer satisfaction.",
  },
  {
    title: "Analytics Dashboard",
    content: "/clientimg.jpg",
    client: "Sarah Ali",
    review:
      "The dashboard gave us real-time insights that helped improve decision-making across teams.",
  },
  {
    title: "E-Commerce Solution",
    content: "/clientimg.jpg",
    client: "Eshal Maryum",
    review:
      "Sales increased significantly after launching the redesigned online shopping experience.",
  },
];

const Slider = () => {
  const containerRef = useRef(null);
  const loopTlRef = useRef(null);

  const wheelCards = [
    ...slides,
    ...slides,
    ...slides,
    ...slides,
    ...slides,
    ...slides,
  ];

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".wheel-card");
      const totalCards = cards.length;

      const config = {
        horizontalGap: 320,
        dropFactor: 60,
        rotateAngle: 7,
      };

      const proxy = { progress: 0 };

      const updateLayout = () => {
        cards.forEach((card, i) => {
          let offset = i - proxy.progress * totalCards;

          const half = totalCards / 2;
          if (offset > half) offset -= totalCards;
          if (offset < -half) offset += totalCards;

          const absOffset = Math.abs(offset);
          const direction = offset > 0 ? 1 : -1;

          const dynamicX = offset * config.horizontalGap;
          const dynamicY = absOffset * config.dropFactor;
          const dynamicRotation = direction * config.rotateAngle * absOffset;

          const dynamicOpacity = absOffset > 3.8 ? 0 : 1;
          const dynamicZIndex = Math.round(100 - absOffset * 10);

          gsap.set(card, {
            xPercent: -50,
            yPercent: -50,
            x: dynamicX,
            y: dynamicY,
            rotation: dynamicRotation,
            opacity: dynamicOpacity,
            zIndex: dynamicZIndex,
            force3D: true,
            rotationZ: 0.01,
            willChange: "transform, opacity",
          });
        });
      };

      loopTlRef.current = gsap.timeline({
        repeat: -1,
        onUpdate: updateLayout,
      });

      loopTlRef.current.to(proxy, {
        progress: 1,
        duration: 60,
        ease: "none",
      });

      window.addEventListener("resize", updateLayout);
      return () => window.removeEventListener("resize", updateLayout);
    },
    { scope: containerRef },
  );

  const handleMouseEnter = () => {
    if (loopTlRef.current) {
      gsap.to(loopTlRef.current, {
        timeScale: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (loopTlRef.current) {
      gsap.to(loopTlRef.current, {
        timeScale: 1,
        duration: 0.8,
        ease: "power2.in",
      });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative m-0 p-0 h-screen w-screen bg-blue-100 text-black overflow-hidden select-none font-['Manrope']"
    >
      <h1 className="text-center text-[24px] sm:text-[28px] font-semibold m-0 pt-10 leading-tight relative z-10">
        What Our Client Says
      </h1>

      <section
        className="absolute bottom-0 left-0 w-full h-[85vh] overflow-hidden flex items-center justify-center mt-50 z-20"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative w-0 h-0 bottom-[10vh]">
          {wheelCards.map((slide, index) => (
            <div
              key={index}
              className="wheel-card group absolute w-[300px] h-[400px] max-w-[300px] max-h-[400px] min-w-[300px] min-h-[400px] cursor-pointer rounded-[24px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.3)] bg-white origin-bottom flex flex-col items-stretch justify-start"
            >
              <div className="absolute z-20 cursor-pointer overflow-hidden rounded-full bg-white flex items-center justify-center top-[18px] right-[18px] w-[42px] h-[42px]">
                <FiPlus className="absolute text-blue-600 transition-all duration-350 ease-out opacity-100 scale-100 rotate-0 group-hover:opacity-0 group-hover:scale-50 group-hover:rotate-90 text-[22px]" />
                <FiX className="absolute text-blue-600 transition-all duration-350 ease-out opacity-0 scale-50 -rotate-90 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 text-[22px]" />
              </div>

              <div className="w-full h-full min-h-full max-h-full overflow-hidden relative">
                <img
                  src={slide.content}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center absolute inset-0"
                />
              </div>

              <div className="absolute left-[15px] right-[15px] bottom-[15px] bg-black/70 border-t-2 border-r-1 border-l-2 border-b-1 border-white text-white p-4 rounded-[20px] translate-y-[120%] transition-transform duration-[450ms] ease-in-out group-hover:translate-y-0 z-10">
                <h2 className="font-semibold mb-1 text-[18px]">
                  {slide.client}
                </h2>
                <p className="text-gray-200 leading-[1.5] text-[12px] max-h-[100px] overflow-hidden">
                  {slide.review}
                </p>

                <div className="flex justify-between items-center mt-3">
                  <span className="font-medium text-white/90 text-[14px]">
                    CTO
                  </span>
                  <span className="font-bold text-[22px]">Google</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Slider;
