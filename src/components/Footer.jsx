import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoIosAdd, IoIosLink } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";

const footerData = [
  {
    title: "Quick Links",
    links: [
      "Home",
      "Services",
      "Why CacheLogic",
      "Case Studies",
      "Blog/Insights",
      "About Us",
      "Contact Us",
    ],
  },
  {
    title: "Services",
    links: [
      "Custom Solutions",
      "Web & Mobile Apps",
      "AI / Machine Learning",
      "Automation",
      "Cybersecurity",
      "Cloud Solutions",
    ],
  },
];

const socialLinks = [
  { icon: <FaFacebookF /> },
  { icon: <FaInstagram /> },
  { icon: <FaTwitter /> },
  { icon: <FaYoutube /> },
];

function Footer() {
  return (
    <footer className="relative bg-black text-white py-12 md:py-20 flex flex-col items-center justify-center text-center">
      <div className="hidden md:block bg-black h-20"></div>

      <div className="relative md:absolute md:top-15 max-w-3xl flex flex-col items-center w-full z-20">
        <h1 className="text-white font-medium text-3xl sm:text-4xl md:text-5xl px-2">
          Let's Build Something Worth Building.
        </h1>
        <p className="text-xs text-gray-400 my-5 max-w-5xl leading-relaxed">
          Whether you have a fully scoped project or just a problem that needs
          solving, book a free 45-minute advisory call. We'll tell you exactly
          what we think, and exactly what we'd do.
        </p>
        <div className="flex justify-center mt-6 sm:mb-10">
          <button className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-5 sm:px-6 py-2 rounded-full hover:scale-105 shadow-lg">
            <div className="flex items-center overflow-hidden max-w-0 opacity-0 group-hover:max-w-[140px] group-hover:opacity-100 transition-all duration-500">
              <IoIosAdd className="text-white text-lg sm:text-xl" />
              <span className="bg-white text-black text-[6px] sm:text-xs rounded-full px-1 py-1.5 ml-1 whitespace-nowrap font-medium leading-none">
                You
              </span>
            </div>
            <span className="text-white text-sm sm:text-[15px] whitespace-nowrap font-medium">
              Get In Touch
            </span>
          </button>
        </div>
      </div>

      <div className="w-full overflow-hidden my-6 md:my-0 md:mb-40 z-10 min-h-[80px] flex items-center">
        <img
          src="/footer-bg-gradient-small-height.png"
          alt="Gradient Background"
          className="w-full h-auto object-cover md:mb-30 lg:mb-20"
        />
      </div>

      <div className="relative md:absolute md:bottom-4 w-full max-w-7xl grid md:mt-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 py-6 md:py-12 text-left sm:text-center md:text-left z-20 px-4 md:px-6">
        <div className="flex flex-col items-start sm:items-center md:items-start text-left sm:text-center md:text-left">
          <img
            src="/Logo.svg"
            className="w-28 sm:w-32 invert brightness-0"
            alt="CacheLogic Logo"
          />
          <p className="text-sm text-gray-300 mt-6 font-medium">
            Fast-Tracking Your IT Evolution.
          </p>
          <p className="text-xs text-gray-400 leading-5 mt-4">
            Empowering businesses with cutting-edge technology and tailored
            solutions.
          </p>
          <div className="flex gap-3 mt-6">
            {socialLinks.map((item, i) => (
              <a
                key={i}
                className="text-gray-400 text-xl hover:text-blue-500 transition bg-zinc-900 p-2.5 rounded-lg"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {footerData.map((section, i) => (
          <div
            key={i}
            className="flex flex-col items-start sm:items-center md:items-start w-full"
          >
            <h2 className="text-sm mb-4 md:mb-6 text-gray-200 w-full sm:w-auto">
              {section.title}
            </h2>
            <ul className="space-y-3 md:space-y-4 text-[10px] text-gray-400 w-full">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a className="hover:text-white transition text-[12px] block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex flex-col items-start sm:items-center md:items-start w-full">
          <h2 className="text-sm mb-4 md:mb-6 text-gray-200 w-full sm:w-auto">
            Contact
          </h2>

          <ul className="space-y-3 md:space-y-4 text-[12px] text-gray-400 w-full">
            <li>
              <a
                href="mailto:info@cachelogic.tech"
                className="hover:text-white transition inline-flex items-center gap-2 sm:justify-center md:justify-start"
              >
                <div className="p-2 bg-[#222] rounded-full">
                  {" "}
                  <MdOutlineMailOutline className="text-2xl text-gray-300" />
                </div>
                <span className="text-xs ml-2">info@cachelogic.tech</span>
              </a>
            </li>

            <li>
              <a
                href="tel:+3135685469"
                className="hover:text-white transition inline-flex items-center gap-2 sm:justify-center md:justify-start"
              >
                <div className="p-2 bg-[#222] rounded-full">
                  {" "}
                  <CiPhone className="text-2xl text-gray-300" />
                </div>
                <span className="text-xs ml-2">+313 5685469</span>
              </a>
            </li>

            <li>
              <a className="hover:text-white transition inline-flex items-center gap-2 sm:justify-center md:justify-start">
                <div className="p-2 bg-[#222] rounded-full">
                  <IoIosLink className="text-2xl text-gray-300" />
                </div>
                <span className="text-xs ml-2">www.cachelogic.com</span>
              </a>
            </li>
          </ul>

          <div className="flex flex-col gap-3 text-left w-full bg-[#222] mt-5 p-4 rounded-xl">
            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center h-6 w-6 rounded-full flex-shrink-0">
                <FaLocationDot className="text-white/60 text-xl" />
              </div>

              <div className="text-white/50 text-xs font-medium">
                Our Offices
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center h-8 w-8 rounded-full border border-zinc-800 flex-shrink-0">
                <img src="/download.png" className="rounded-full" />
              </div>

              <div className="flex flex-col">
                <div className="text-white/50 text-xs font-medium">
                  Headquarters:
                </div>
                <a className="text-[12px] text-white transition mt-0.5">
                  Amsterdam, North Holland, <br></br>Netherlands
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center h-8 w-8 rounded-full border border-zinc-800 flex-shrink-0">
                <img
                  src="/pakistan-flag-icon.webp"
                  className="rounded-full h-10"
                />
              </div>

              <div className="flex flex-col">
                <div className="text-white/50 text-xs font-medium">
                  Engineering & Delivery Center:
                </div>
                <a className="text-[12px] text-white transition mt-0.5">
                  Lahore, Punjab, Pakistan
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
