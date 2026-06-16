import { IoLogoAndroid } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

import Button from "../../components/Button";

export const servicesList = [
  {
    name: "AI/ML ",
    des: "Smart automation and predictive business intelligence",
    path: "/services/ai-ml",
  },
  {
    name: "Web & Mobile Apps ",
    des: "Smart automation and predictive business intelligence",
    path: "/services/web-mobile",
  },
  {
    name: "Automation",
    des: "Smart automation and predictive business intelligence",
    path: "/services/automation",
  },
  {
    name: "Accelrate Development With DevOps",
    des: "Smart automation and predictive business intelligence",
    path: "/services/devops",
  },
  {
    name: "Cybersecurity",
    des: "Smart automation and predictive business intelligence",
    path: "/services/cybersecurity",
  },
  {
    name: "Custom",
    des: "Smart automation and predictive business intelligence",
    path: "/services/enterprise",
  },
];

function Services() {
  return (
    <div className="relative bg-[#e9f4ff] overflow-hidden py-15 md:py-16">
      <div className="max-w-[1200px] mx-auto px-10 ">
        <h1 className="text-center text-[28px] font-semibold mb-12">
          Our Popular Services
        </h1>
        <img
          src="/Vector.svg"
          alt="vector"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 scale-150 h-98 w-auto md:scale-110 mb-10 md:mb-7 md:h-auto md:left-auto md:translate-x-0 md:right-0 opacity-90 pointer-events-none transition-transform"
        />

        <div
          className="
    block md:hidden overflow-hidden rounded-2xl
    bg-sky-50/20 backdrop-blur-sm
    border-2 border-white
  "
        >
          {servicesList.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              className={`
        grid grid-cols-[auto_1fr_auto] items-center gap-4
        w-full p-4 transition-all duration-300
        active:bg-blue-600/10
        
        /* Adds a subtle white divider line between rows, but skips the last one */
        ${index !== servicesList.length - 1 ? "border-b-2 border-white" : ""}
      `}
            >
              <div className="inline-flex items-center justify-center p-2 rounded-xl bg-white/20 backdrop-blur-md border border-white">
                <IoLogoAndroid className="text-2xl text-black" />
              </div>

              <div className="flex flex-col min-w-0 self-start pt-1">
                <h2 className="text-[14px] font-semibold text-black/80 leading-snug truncate">
                  {item.name}
                </h2>

                <p className="text-xs text-gray-600 mt-1 leading-normal">
                  {item.des}
                </p>
              </div>

              <div className="text-xl text-gray-400 pl-2">
                <IoIosArrowForward className="text-sm" />
              </div>
            </Link>
          ))}
        </div>

        <div className="services-grid hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
          {servicesList.map((item) => (
            <div key={item.path} className="relative h-[320px] w-full">
              <Link
                to={item.path}
                className="
                  group absolute top-0 left-0 overflow-hidden cursor-pointer rounded-2xl
                  p-7
                  w-full
                  h-[320px] 
                  hover:h-[340px]
                  bg-sky-50/20
                  backdrop-blur-sm
                  border-2 border-white shadow-[0_0_0_1px_rgba(255,255,255,0.6)]
                  transition-all duration-500 ease-in-out
                  hover:border-blue-600
                  hover:shadow-2xl
                  hover:z-30
                "
              >
                <div className="absolute -top-8 -right-8 w-56 h-56 bg-gradient-to-bl from-indigo-500 via-indigo-200 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center p-2 rounded-2xl w-fit bg-white/20 backdrop-blur-md border-2 border-white group-hover:border-blue-600 group-hover:bg-blue-600 transition-all duration-300">
                    <IoLogoAndroid className="text-4xl text-black group-hover:text-white" />
                  </div>

                  <h2 className="text-xl font-semibold mt-4 text-black line-clamp-2">
                    {item.name}
                  </h2>

                  <p className="text-sm text-gray-700 mt-4 line-clamp-3">
                    {item.des}
                  </p>
                </div>

                <div className="absolute bottom-5 left-0 w-full px-6">
                  <div
                    className="
                      opacity-0 translate-y-6
                      group-hover:opacity-100 group-hover:translate-y-0
                      transition-all duration-500
                    "
                  >
                    <Button
                      variant="outlineBlue"
                      className=" py-2 text-blue-500 border-1 border-white"
                    >
                      Get Started{" "}
                      <IoIosArrowForward className="text-blue-500 ml-1 mt-1" />
                    </Button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-start my-12 md:mt-30 md:pb-10">
          <Button variant="primary" className="">
            Get in touch
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Services;
