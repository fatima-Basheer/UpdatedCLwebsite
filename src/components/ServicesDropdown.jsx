import React from "react";
import { servicesList } from "./navigationData";
import { MdLaptopMac } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

function ServicesDropdown({ onMouseEnter, onMouseLeave }) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="fixed top-[52px] left-1/2 -translate-x-1/2 pt-[18px] w-[60vw] 2xl:max-w-4xl h-auto z-50 pointer-events-auto"
    >
      <div className="w-full h-full bg-white border border-gray-100 rounded-2xl shadow-2xl overflow-hidden text-black text-left flex">
        <div className="w-[40%] min-h-[380px] bg-gray-100">
          <img
            src="/download.jpeg"
            alt="Services Overview"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-[60%] p-5 flex flex-col gap-4 overflow-hidden justify-center">
          <div>
            <h2 className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
              Technology & business solutions
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
            {servicesList.slice(0, 6).map((service, idx) => (
              <Link
                key={service.id || idx}
                to={service.path}
                onClick={onMouseLeave}
                className="flex items-start gap-2.5 p-1 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <div className="flex-shrink-0 text-blue-600 w-8 h-8 bg-blue-50 p-2 rounded-xl">
                  <MdLaptopMac />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-xs text-gray-800">
                    {service.name}
                  </h3>
                  <p className="text-[10px] text-gray-500">{service.des}</p>
                </div>
              </Link>
            ))}
          </div>

          <hr className="border-gray-200" />

          <div>
            <h2 className="text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-2">
              Featured Products
            </h2>

            <div className="grid grid-cols-2 gap-3">
            
              <div 
                onClick={onMouseLeave}
                className="flex gap-2.5 bg-gray-50 p-2.5 rounded-xl items-center border border-gray-200 hover:bg-gray-100 cursor-pointer"
              >
                <img
                  src="/download.jpeg"
                  alt="Feature 1"
                  className="w-12 h-14 object-cover flex-shrink-0"
                />
                <div>
                  <h5 className="font-medium text-xs text-gray-900">
                    CheesyHire
                  </h5>
                  <p className="text-[10px] text-gray-500 leading-tight">
                    AI driven hiring and applicant management platform for...
                  </p>
                  <span className="flex items-center mt-1 text-[10px] text-blue-400 hover:underline">
                    Visit Link <IoIosArrowForward />
                  </span>
                </div>
              </div>

              <div 
                onClick={onMouseLeave}
                className="flex gap-2.5 bg-gray-50 p-2.5 rounded-xl items-center border border-gray-200 hover:bg-gray-100 cursor-pointer"
              >
                <img
                  src="/download.jpeg"
                  alt="Feature 2"
                  className="w-12 h-14 object-cover flex-shrink-0"
                />
                <div>
                  <h5 className="font-medium text-xs text-gray-900">
                    Wheelution
                  </h5>
                  <p className="text-[10px] text-gray-500 leading-tight">
                    AI driven hiring and applicant management platform for...
                  </p>
                  <span className="flex items-center mt-1 text-[10px] text-blue-400 hover:underline">
                    Visit Link <IoIosArrowForward />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-gray-200" />

          <div className="grid grid-cols-2 items-center ">
            <div>
              <p className="text-xs text-black/80 font-medium">
                Need help choosing the right solution?
              </p>
              <p className="text-[10px] text-gray-500 font-medium leading-tight">
                Our team will help you identify the best technology stack and
                services for your business goal
              </p>
            </div>
            <div className="text-right">
              <span 
                onClick={onMouseLeave}
                className="bg-blue-600 hover:bg-blue-500 text-white text-xs py-2.5 px-4 rounded-full transition-colors shadow-sm cursor-pointer inline-block"
              >
                Schedule a consultation
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesDropdown;
