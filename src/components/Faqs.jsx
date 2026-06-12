import React from "react";
import { CiSquareQuestion } from "react-icons/ci";

const faqs = [
  "Do We Need A Large Dataset To Get Started With AI/ML?",
  "How Long Does It Take To Build And Deploy An AI Model?",
  "Will The AI Solution Integrate With Our Current Software Stack",
  "How Do You Ensure The Model Stays Accurate Over Time?",
];

function Faqs() {
  return (
    <div className="relative h-auto bg-[#e9f4ff] flex flex-col items-center justify-center px-6 py-16">
      <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-black/90">
        FAQs
      </h1>

      <div className="w-full sm:w-3/5 max-w-6xl flex flex-col gap-4 items-stretch">
        {faqs.map((data, id) => (
          <div key={id} className="flex items-start gap-[15px] w-full">
            <div className="bg-white p-2 rounded-full shadow-sm flex-shrink-0">
              <CiSquareQuestion className="text-2xl text-gray-500" />
            </div>

            <div className="text-black/90 font-medium shadow-sm text-sm sm:text-md leading-snug bg-white px-5 py-4 rounded-2xl flex-grow">
              {data}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faqs;
