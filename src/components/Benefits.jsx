import React from "react";
import Button from "./Button";
const benefitItems = [
  {
    title: "Increased Efficiency",
    desc: "Automate repetitive business workflows Automate repetitive Automate repetitiveseamlessly to free up valuable internal team hours.",
  },
  {
    title: "Data-Driven Insights",
    desc: "Turn raw tracking parameters into Automate repetitive Automate repetitive predictive actionable strategies instantly.",
  },
  {
    title: "Scalable Infrastructure",
    desc: "Grow your enterprise Automate repetitive Automate repetitive footprint without experiencing technical platform overhead or lag.",
  },
  {
    title: "Enhanced Security",
    desc: "Protect client files Automate repetitive using end-to-end cloud encryption Automate repetitivematrices and protocols.",
  },
  {
    title: "Cost Optimization",
    desc: "Minimize resource Automate repetitive overhead expenditures Automate repetitive by consolidating redundant systems.",
  },
];

function Benefits() {
  return (
    <div className="min-h-screen bg-[#e9f4ff] flex items-center justify-center py-6 md:py-20 md:px-12">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl md:text-5xl font-medium text-[#1e293b]">
            Benefits of Choosing Our AI/ML Services
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl mt-5">
            Beyond solutions, we cultivate partnerships. Our dedicated team
            delivers comprehensive support, ensuring your tech journey is
            seamless, secure, and geared for success.
          </p>
          <div className="mt-3">
            <Button variant="primary" className="px-2 py-1.5">
              Start Your Project
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {benefitItems.map((item, index) => (
            <div
              key={index}
              className="flex items-start justify-between gap-4 p-4 rounded-3xl border-2 border-white bg-[#e9f4ff]backdrop-blur-sm shadow-sm"
            >
              <div className="flex flex-col gap-1 text-left flex-grow">
                <h3 className="font-medium text-black/90 text-2xl mt-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs leading-normal mt-3">
                  {item.desc}
                </p>
              </div>

              <div className="text-6xl font-semibold text-white flex items-center justify-center mt-3 ">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Benefits;
