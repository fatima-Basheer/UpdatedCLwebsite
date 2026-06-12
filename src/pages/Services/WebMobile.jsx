import React from "react";
import Button from "../../components/Button";
import Empower from "../../components/Empower";
import Features from "../../components/Features";
import Benefits from "../../components/Benefits";
import Faqs from "../../components/Faqs";
function WebMobile() {
  return (
    <div>
      <div className="relative min-h-[700px] overflow-hidden bg-[#e9f4ff] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 right-0 w-[60vw] sm:w-[35vw] lg:w-[50vw] h-[80px] bg-gradient-to-b from-indigo-900 via-indigo-400 to-transparent blur-xl opacity-80" />

        <div className="relative z-10 max-w-3xl flex flex-col items-center gap-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black leading-[1.2]">
            Custom Web & Mobile Apps for Seamless User Experience
          </h1>

          <p className="text-xs text-gray-600 max-w-3xl">
            CacheLogics crafts responsive, high-performance web and mobile
            applications that provide users with a seamless experience on any
            device.
          </p>

          <div className="mt-10">
            <Button variant="primary">Start your Project</Button>
          </div>
        </div>
      </div>
      <Empower />
      <Features />
      <Benefits />
      <Faqs />
    </div>
  );
}

export default WebMobile;
