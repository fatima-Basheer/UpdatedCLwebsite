import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const slides = [
  {
    title: "Full financial control for startups.",
    image: "/laptop.jpg",
    text: "Connect your existing banks and automate payroll, invoices, treasury, and bookkeeping from one AI-native account - up and running in 10 minutes.",
  },
  {
    title: "Analytics Dashboard",
    image: "/laptop2.jpg",
    text: "Improved performance tracking with real-time insights and reporting systems.",
  },
  {
    title: "E-Commerce System",
    image: "/laptop.jpg",
    text: "Boosted user conversion rates by 40% using personalized recommendation engines.",
  },
];

function Result() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isAnimating, setIsAnimating] = useState(false);
  const [animType, setAnimType] = useState(null);
  const [animStage, setAnimStage] = useState("start");
  const [animImage, setAnimImage] = useState("");

  const nextIndex = (currentIndex + 1) % slides.length;
  const prevIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;

  const handleNext = () => {
    if (isAnimating) return;

    setAnimImage(slides[nextIndex].image);
    setAnimType("next");
    setAnimStage("start");
    setIsAnimating(true);
  };

  const handlePrev = () => {
    if (isAnimating) return;

    setAnimImage(slides[currentIndex].image);
    setAnimType("prev");
    setAnimStage("start");
    setIsAnimating(true);
  };

  useEffect(() => {
    if (!isAnimating || animStage !== "start") return;

    const frameId = requestAnimationFrame(() => {
      if (animType === "prev") {
        setCurrentIndex(prevIndex);
      }
      setAnimStage("end");
    });

    return () => cancelAnimationFrame(frameId);
  }, [isAnimating, animStage, animType, prevIndex]);

  useEffect(() => {
    if (!isAnimating || animStage !== "end") return;

    const timer = setTimeout(() => {
      if (animType === "next") {
        setCurrentIndex(nextIndex);
      }
      setIsAnimating(false);
      setAnimType(null);
      setAnimStage("start");
    }, 700);

    return () => clearTimeout(timer);
  }, [isAnimating, animStage, animType, nextIndex]);

  return (
    <div className="bg-blue-50 w-full overflow-hidden py-10 md:py-16">
      <div className="w-full">
        <p className="font-semibold text-[28px] text-center text-black/90">
          Real Results, Real Impact
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2.5fr] gap-[10px] items-center overflow-visible mt-10">
          <div className="flex flex-col justify-between h-full min-h-[320px] z-30 bg-blue-50 self-center pl-4 md:pl-12">
            <div className="space-y-4">
              <div className="relative h-[170px] md:h-[260px] overflow-hidden">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className="absolute inset-0 transition-all duration-700 ease-in-out flex flex-col space-y-3 mt-0 md:mt-26 justify-center"
                    style={{
                      transform: `translateY(${(index - currentIndex) * 100}%)`,
                      opacity: index === currentIndex ? 1 : 0,
                      visibility: index === currentIndex ? "visible" : "hidden",
                    }}
                  >
                    <h3 className="text-lg font-semibold text-gray-900">
                      {slide.title}
                    </h3>
                    <p className="text-gray-800 text-[12px] leading-relaxed mt-2">
                      {slide.text}
                    </p>

                    <div className="pt-1">
                      <span className="inline-flex items-center py-2 px-4 text-blue-500 border border-white text-xs rounded-full  cursor-pointer hover:bg-white transition-colors">
                        Visit Link{" "}
                        <IoIosArrowForward className="text-blue-500 ml-1 text-[14px]" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mt-8 lg:mt-0 items-center pb-5 sm:pb-0">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-white/10 text-gray-600 transition shadow-md cursor-pointer"
                aria-label="Previous slide"
              >
                <IoIosArrowBack />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full  text-black bg-white transition shadow-md cursor-pointer"
                aria-label="Next slide"
              >
                <IoIosArrowForward />
              </button>
              <a className=" rounded-full  text-blue-500 font-medium text-sm cursor-pointer">
                View all Work
              </a>
            </div>
          </div>

          <div className="relative w-full h-[250px] sm:h-[380px] md:h-[450px] overflow-visible select-none">
            <div className="absolute bottom-0 top-0 left-0 right-0 sm:right-[95px] py-[3px] px-2 sm:p-6 bg-gray-300 rounded-xl md:rounded-3xl z-10">
              <div className="h-full w-full relative overflow-hidden rounded-lg md:rounded-3xl">
                <img
                  src={slides[currentIndex].image}
                  alt="Active Slide"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div
              onClick={handleNext}
              className="hidden sm:block absolute bottom-0 right-0 w-[80px] h-[70%] p-2 bg-gray-300 rounded-2xl cursor-pointer z-20 transition-opacity duration-300"
              style={{
                padding: "8px 0px 8px 8px",
                opacity: isAnimating && animType === "next" ? 0 : 1,
              }}
            >
              <div className="h-full w-full relative overflow-hidden rounded-l-2xl">
                <img
                  src={slides[nextIndex].image}
                  alt="Next Preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/15" />
              </div>
            </div>

            {isAnimating && (
              <div
                className="hidden sm:block absolute bottom-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] z-40"
                style={{
                  backgroundColor: "rgb(209, 213, 219)",

                  left:
                    animType === "next"
                      ? animStage === "start"
                        ? "calc(100% - 80px)"
                        : "0px"
                      : animStage === "start"
                        ? "0px"
                        : "calc(100% - 80px)",

                  right:
                    animType === "next"
                      ? animStage === "start"
                        ? "0px"
                        : "95px"
                      : animStage === "start"
                        ? "95px"
                        : "0px",

                  width:
                    animType === "next"
                      ? animStage === "start"
                        ? "80px"
                        : "auto"
                      : animStage === "start"
                        ? "calc(100% - 95px)"
                        : "80px",

                  height:
                    animType === "next"
                      ? animStage === "start"
                        ? "70%"
                        : "100%"
                      : animStage === "start"
                        ? "100%"
                        : "70%",

                  padding:
                    animType === "next"
                      ? animStage === "start"
                        ? "8px 0px 8px 8px"
                        : "24px 0px 24px 24px"
                      : animStage === "start"
                        ? "24px 0px 24px 24px"
                        : "8px 0px 8px 8px",

                  borderRadius:
                    animType === "next"
                      ? animStage === "start"
                        ? "16px"
                        : "24px"
                      : animStage === "start"
                        ? "24px"
                        : "16px",
                }}
              >
                <div
                  className="h-full w-full relative overflow-hidden transition-all duration-700"
                  style={{
                    borderRadius:
                      animType === "next"
                        ? animStage === "start"
                          ? "16px"
                          : "24px"
                        : animStage === "start"
                          ? "24px"
                          : "16px",
                  }}
                >
                  <img
                    src={animImage}
                    alt="Moving Structural Frame"
                    className="w-full h-full object-cover absolute left-0 top-0"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
