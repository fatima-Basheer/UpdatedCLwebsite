import React, { useState } from "react";
import Button from "./Button";
import ServicesDropdown from "./ServicesDropdown";
import { navMenu, servicesList } from "./navigationData";
import { IoMdMenu, IoMdClose, IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesHovered, setServicesHovered] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

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
          <nav className="flex items-center gap-8 border-2 border-white/30 px-6 py-2 rounded-full text-sm text-black/70 bg-white/30 backdrop-blur-2xl shadow-xl font-medium">
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
          <Button variant="primary" className="px-2 py-1.5">
            Contact Us
          </Button>
        </div>

        <button
          className="lg:hidden z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <IoMdClose className="text-3xl bg-red-300 p-1 text-white rounded-full" />
          ) : (
            <IoMdMenu className="text-3xl bg-blue-500 p-1 text-white rounded-full" />
          )}
        </button>
      </div>

      {servicesHovered && (
        <ServicesDropdown
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      )}

      {menuOpen && (
        <div className="lg:hidden mt-4 mx-4 backdrop-blur-lg bg-white/10 rounded-2xl border border-white/20 p-5 text-black shadow-lg">
          <nav className="flex flex-col gap-4 font-medium">
            {navMenu.map((item, index) => (
              <div key={index}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                      className="w-full flex items-center justify-between cursor-pointer text-left hover:text-blue-500"
                    >
                      <span>{item.label}</span>
                      <IoMdArrowDropdown
                        className={`text-xl transition-transform ${
                          mobileDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {mobileDropdownOpen && (
                      <div className="pl-4 mt-2 flex flex-col gap-2 text-sm text-black/60 border-l border-white/20">
                        {servicesList.map((service, sIdx) => (
                          <Link
                            key={sIdx}
                            to={service.path}
                            onClick={() => {
                              setMenuOpen(false);
                              setMobileDropdownOpen(false);
                            }}
                            className="hover:text-blue-500 py-1"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="block cursor-pointer hover:text-blue-500"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-5">
            <Button variant="primary" className="w-full">
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
