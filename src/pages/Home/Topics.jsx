import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
const content = [
  {
    src: "/laptop.jpg",
    title:
      "The Role of Software Development in Business Growth: How CacheLogic Drives Success",
    date: "05/06/2026",
  },
  {
    src: "/laptop2.jpg",
    title:
      "The Impact of AI and Machine Learning in Software Development: CacheLogic's Role in the Revolution",
    date: "05/06/2026",
  },
  {
    src: "/img.jpg",
    title:
      "The Role of Software Development in Business Growth: How CacheLogic Drives Success",
    date: "05/06/2026",
  },
];

function TopicItem({ data }) {
  const [hover, setHover] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  const handleLeave = () => {
    setAnimateOut(true);

    setTimeout(() => {
      setAnimateOut(false);
      setHover(false);
    }, 500);
  };

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={handleLeave}
      className="
        relative flex flex-col sm:flex-row sm:items-center sm:justify-between
        gap-4 sm:gap-6 px-4 sm:px-6 py-4 sm:py-5

        border border-transparent border-b-gray-300
        hover:border-gray-300 max-sm:hover:rounded-3xl
        sm:hover:border-gray-300 sm:hover:rounded-full

        transition-all duration-300 ease-out
      "
    >
      <div className="flex items-center gap-4 min-w-0">
        <img
          src={data.src}
          alt={data.title}
          className="w-14 h-14 aspect-square object-cover rounded-full shrink-0"
        />

        <h1 className="text-lg font-semibold cursor-pointer leading-snug whitespace-normal text-black/90">
          {data.title}
        </h1>
      </div>

      <p className="text-xs sm:text-[16px] text-gray-700 whitespace-nowrap ml-16 sm:ml-auto">
        {data.date}
      </p>

      {(hover || animateOut) && (
        <img
          src={data.src}
          alt={data.title}
          className={`
            absolute top-1/2 -translate-y-1/2 z-10
            pointer-events-none object-cover rounded-xl will-change-transform
            transition-all duration-700 ease-in-out

            /* Mobile sizing & starting placement metrics */
            w-[180px] h-[160px] left-[-180px]

            /* Desktop adjustments and responsive scaling overrides */
            sm:w-[200px] sm:h-[150px] sm:left-auto sm:right-10
            md:w-[220px] md:h-[180px]

            /* Rotations added for mobile states */
            ${
              animateOut
                ? "max-sm:translate-x-[200%] max-sm:rotate-45 max-sm:scale-0 max-sm:opacity-0 sm:translate-x-40 sm:rotate-45 sm:scale-0 sm:opacity-0"
                : hover
                  ? "max-sm:translate-x-24 max-sm:rotate-12 max-sm:scale-100 max-sm:opacity-100 sm:translate-x-[-10%] sm:rotate-12 sm:scale-100 sm:opacity-100"
                  : "max-sm:-translate-x-12 max-sm:rotate-0 max-sm:opacity-0 sm:opacity-0 sm:translate-x-[-10%] sm:scale-100"
            }
          `}
        />
      )}
    </div>
  );
}

export default function Topics() {
  return (
    <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 lg:px-10 h-auto lg:py-18 max-w-[1400px] mx-auto">
      <h1 className="text-xl sm:text-2xl md:text-[27px] font-semibold text-center">
        Stay Ahead With CacheLogics Insights
      </h1>

      <p className="mt-3 sm:mt-5 text-center text-sm sm:text-base text-gray-700">
        Practical guides, industry trends, and tips to help your business grow.
      </p>

      <div className="mt-8 sm:mt-10 space-y-4 sm:space-y-6">
        {content.map((data, index) => (
          <TopicItem key={index} data={data} />
        ))}
      </div>
      <div className="flex justify-center mt-8 ">
        <Link
          to="/blog"
          className=" flex items-center rounded-full  text-blue-500 font-medium text-sm cursor-pointer hover:bg-gray-100 px-4 py-2.5"
        >
          View All <IoIosArrowForward className="text-sm ml-2" />
        </Link>
      </div>
    </div>
  );
}
