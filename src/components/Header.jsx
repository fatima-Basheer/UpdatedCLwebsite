import React, { useState } from "react";
import Button from "./Button";
import ServicesDropdown from "./ServicesDropdown";
import { navMenu, servicesList } from "./navigationData";
import {
  IoMdMenu,
  IoMdClose,
  IoMdArrowDropdown,
  IoIosArrowForward,
} from "react-icons/io";
import { Link } from "react-router-dom";
import BookCall from "./BookCall";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesHovered, setServicesHovered] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleMouseEnter = () => setServicesHovered(true);
  const handleMouseLeave = () => setServicesHovered(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 md:px-4 lg:px-6 xl:px-10 pb-4 py-4">
      <div className="w-full max-w-[1250px] mx-auto flex items-center justify-between relative overflow-visible">
        <div className="flex-shrink-0">
          <img
            src="/Logo.svg"
            alt="Logo"
            className="w-24 sm:w-26 md:w-28 lg:w-32 h-auto"
          />
        </div>

        <div className="hidden lg:flex items-center">
          <nav className="flex items-center gap-8 border-2 border-white/20 px-6 py-2 rounded-full text-sm text-black/70 bg-white/05 backdrop-blur-2xl shadow-xl font-medium">
            {navMenu.map((item, index) => {
              if (item.hasDropdown) {
                return (
                  <div
                    key={index}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="flex items-center gap-1 cursor-pointer hover:text-blue-600 duration-300 py-1"
                  >
                    <span>{item.label}</span>
                    <IoMdArrowDropdown
                      className={`text-lg transition-transform duration-300 ${
                        servicesHovered ? "rotate-180 text-blue-600" : ""
                      }`}
                    />
                  </div>
                );
              }

              return (
                <Link
                  to={item.path}
                  key={index}
                  className="cursor-pointer hover:text-blue-600 duration-500"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="hidden lg:block">
          <Button
            variant="primary"
            className="px-2 py-1.5"
            onClick={() => setIsModalOpen(true)}
          >
            Contact Us
          </Button>
        </div>

      
        {!menuOpen && (
          <button
            className="lg:hidden mt-3 mr-3 relative"
            onClick={() => setMenuOpen(true)}
          >
            <IoMdMenu className="text-3xl p-1" />
          </button>
        )}
      </div>

      {servicesHovered && (
        <ServicesDropdown
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onScheduleCall={() => setIsModalOpen(true)}
        />
      )}

      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[270px] sm:w-[350px] lg:hidden backdrop-blur-xl bg-white border-l border-white/20 pt-6 text-black shadow-2xl z-50 flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between px-6">
            <img src="/Logo.svg" alt="Logo" className="w-30 sm:w-36 h-auto" />
            
          
            <button
              className="text-2xl text-gray-400 hover:text-black transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              <IoMdClose />
            </button>
          </div>
          
          <div className="h-[1px] w-full bg-gray-200 my-5"></div>

          <nav className="flex flex-col gap-2 font-medium text-[14px] overflow-y-auto max-h-[calc(100vh-180px)] px-4 text-black/80">
            {navMenu.map((item, index) => (
              <div key={index}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                      className="w-full flex items-center justify-between cursor-pointer text-left px-4 py-2.5 rounded-xl transition-colors duration-200 hover:bg-gray-200 hover:text-black"
                    >
                      <span>{item.label}</span>
                      <IoMdArrowDropdown
                        className={`text-2xl transition-transform duration-300 ${
                          mobileDropdownOpen ? "rotate-180 text-blue-500" : ""
                        }`}
                      />
                    </button>

                    {mobileDropdownOpen && (
                      <div className="mt-2 ml-4 flex flex-col gap-1  text-xs text-black/60">
                        {servicesList.map((service, sIdx) => (
                          <Link
                            key={sIdx}
                            to={service.path}
                            onClick={() => {
                              setMenuOpen(false);
                              setMobileDropdownOpen(false);
                            }}
                            className="hover:bg-gray-200 hover:text-black/90 px-4 py-2 rounded-xl transition-colors duration-200 flex items-center gap-2 w-full"
                          >
                            <IoIosArrowForward className="text-blue-500 flex-shrink-0 text-xs" />
                            <span>{service.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="block cursor-pointer px-4 py-2.5 rounded-xl transition-colors duration-200 hover:bg-gray-100"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-auto">
          <div className="h-[1px] w-full bg-gray-100 my-6"></div>
          <div className="px-6 mb-5">
            <Button
              variant="primary"
              className="w-full py-2.5"
              onClick={() => {
                setMenuOpen(false);
                setIsModalOpen(true);
              }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#e9f4ff] flex items-center justify-center">
          <div className="absolute top-0 right-0 w-[60vw] sm:w-[35vw] lg:w-[50vw] h-[60px] bg-gradient-to-b from-indigo-900 via-indigo-400 to-transparent blur-xl opacity-80" />
          <BookCall onClose={() => setIsModalOpen(false)} className="" />
        </div>
      )}
    </header>
  );
}

export default Header;
