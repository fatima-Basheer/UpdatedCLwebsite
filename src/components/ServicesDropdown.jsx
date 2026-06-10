import React from "react";
import { servicesList } from "./navigationData";
import { MdLaptopMac } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
function ServicesDropdown() {
  return (
    <div className="fixed top-[70px] left-1/2 -translate-x-1/2 w-[60vw] h-[75vh] bg-white border border-gray-100 rounded-2xl shadow-2xl overflow-hidden text-black text-left z-[100] pointer-events-auto transition-all duration-200 flex">
      <div className="w-1/2.5 h-full bg-gray-100">
        <img
          src="/download.jpeg"
          alt="Services Overview"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-2/3 h-full p-4 flex flex-col justify-between overflow-hidden">
        <div>
          <h2 className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">
            Technology & business solutions
          </h2>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-2">
          {servicesList.slice(0, 6).map((service, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 p-1 hover:bg-gray-100 rounded-xl transition-colors"
            >
              <div className="flex-shrink-0 text-blue-600 w-8 h-8 bg-blue-50 p-2 rounded-xl ">
                <MdLaptopMac />
              </div>

              <div className="flex-1 min-w-0">
                <a
                  href={service.path}
                  className="block font-semibold text-xs text-gray-800 hover:text-blue-600 truncate"
                >
                  {service.name}
                </a>
                <p className="text-[11px] text-gray-500 mt-0.5 line-clamp-2">
                  {service.des}
                </p>
              </div>
            </div>
          ))}
        </div>
        <hr className="text-gray-200" />
        <h2 className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">
          Featured Products
        </h2>

        <div className="grid grid-cols-2 gap-3 my-1">
          <div className="flex gap-2.5 bg-gray-50 p-2.5 rounded-xl items-center border-1 border-gray-200 hover:bg-gray-100">
            <img
              src="/download.jpeg"
              alt="Feature 1"
              className="w-12 h-14 object-cover flex-shrink-0"
            />
            <div>
              <h5 className="font-bold text-xs text-gray-900">CheesyHire</h5>
              <p className="text-[10px] text-gray-500 leading-tight">
                Al driven hiring and applicant management platform for...
              </p>
              <span className="flex items-center mt-1 text-[10px]  text-blue-400 hover:underline">
                Visit Link <IoIosArrowForward />
              </span>
            </div>
          </div>

          <div className="flex gap-2.5 bg-gray-50 p-2.5 rounded-xl items-center border-1 border-gray-200 hover:bg-gray-100">
            <img
              src="/download.jpeg"
              alt="Feature 1"
              className="w-12 h-14 object-cover flex-shrink-0"
            />
            <div>
              <h5 className="font-bold text-xs text-gray-900">Wheelution</h5>
              <p className="text-[10px] text-gray-500 leading-tight">
                Al driven hiring and applicant management platform for...
              </p>
              <span className="flex items-center  mt-1 text-[10px]  text-blue-400 hover:underline">
                Visit Link <IoIosArrowForward />
              </span>
            </div>
          </div>
        </div>
        <hr className="text-gray-200" />

        <div className="grid grid-cols-2 items-center pt-2">
          <div>
            <p className="text-xs text-black/80 font-medium">
              Need help choosing the right solution?
            </p>
            <p className="text-[10px] text-gray-500 font-medium">
              Our team will help you identify the best technology stack and
              services for your business goal
            </p>
          </div>
          <div className="text-right">
            <span className="bg-blue-600 hover:bg-blue-500 text-white text-xs  py-2.5 px-4 rounded-full transition-colors shadow-sm">
              Schedule a consultation
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesDropdown;
