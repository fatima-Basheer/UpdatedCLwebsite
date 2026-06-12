import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";
function BookCall({ onClose }) {
  return (
    <div className="w-full md:w-[55vw] h-auto md:h-[90vh] flex flex-col bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden relative pt-3">
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-10 z-10 p-1.5 rounded-full text-gray-800 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <IoMdClose className="text-2xl" />
        </button>
      )}

      <form className="flex-1 flex flex-col p-6 sm:p-8 md:p-10 overflow-y-auto">
        <div className="mb-6 flex-shrink-0 pr-8">
          {" "}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800">
            Contact CacheLogic
          </h2>
          <p className="text-sm text-gray-500 my-3">
            Have a question about our pricing or features? Fill out the form
            below and we'll reply within 24h.
          </p>
        </div>

        <div className="space-y-4 md:space-y-5 flex-1">
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Type here"
              required
              className="w-full border text-sm border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Work Email
            </label>
            <input
              type="email"
              name="workEmail"
              placeholder="Type here"
              required
              className="w-full border text-sm border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              placeholder="Type here"
              required
              className="w-full border text-sm border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          <div className="flex flex-col flex-1 min-h-[100px]">
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Type here"
              required
              className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex-1 min-h-[80px] resize-none"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col md:flex-row flex-wrap justify-center md:justify-start gap-3 w-full sm:w-auto">
          <Button
            variant="primary"
            className="px-6 py-2.5 text-sm flex-1 sm:flex-initial justify-center"
          >
            Send Message
          </Button>
          <Button
            variant="blueoutline"
            className="px-4 py-2.5 text-sm flex-1 sm:flex-initial justify-center"
          >
            Book a Call Instead
          </Button>
        </div>
      </form>
    </div>
  );
}

export default BookCall;
