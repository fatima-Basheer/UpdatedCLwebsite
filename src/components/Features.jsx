import React, { useState } from "react";
import { FaShieldAlt, FaLightbulb, FaUsers, FaRocket } from "react-icons/fa";
const valuesData = [
  {
    id: 1,
    icon: <FaShieldAlt />,
    iconStyles: "text-black bg-gray-100",
    title: "Predictive Analytics",
    description:
      "Leverage data-driven forecasting to anticipate trends, optimize decisions, and uncover new business opportunities.",
  },
  {
    id: 2,
    icon: <FaLightbulb />,
    iconStyles: "text-black bg-gray-100",
    title: "Automation Integration",
    description:
      "Streamline workflows and eliminate repetitive tasks with our seamless, AI-powered automation triggers.",
  },
  {
    id: 3,
    icon: <FaUsers />,
    iconStyles: "text-black bg-gray-100",
    title: "Advanced Data Insights",
    description:
      "Deep dive into user behavior and metrics with crystal clear visualization dashboards built for growth.",
  },
  {
    id: 4,
    icon: <FaRocket />,
    iconStyles: "text-black bg-gray-100",
    title: "Scalable Solutions",
    description:
      "Grow your infrastructure effortlessly with cloud-native frameworks designed to handle heavy traffic spikes.",
  },
  {
    id: 5,
    icon: <FaLightbulb />,
    iconStyles: "text-black bg-gray-100",
    title: "Custom Algorithms",
    description:
      "Tailor complex mathematical models specifically engineered to match your unique enterprise operations.",
  },
];
function Features() {
  const [expandedId, setExpandedId] = useState(1);

  return (
    <div className="w-full px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-1 items-stretch 2xl:px-85">
      <div className="w-full h-full min-h-[400px] flex items-center justify-center p-4">
        <img
          src="/servicesimg.svg"
          alt="Features illustration"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="w-full flex flex-col gap-1 h-full mt-2">
        <h2 className="text-4xl font-medium text-gray-900 mb-4  px-2 flex-shrink-0">
          Key Features
        </h2>

        <div className="flex flex-col gap-1 w-full flex-1 h-full">
          {valuesData.map((item) => {
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setExpandedId(isExpanded ? null : item.id)}
                className={`w-full rounded-2xl px-4 cursor-pointer select-none flex flex-col justify-center flex-1 transition-all duration-700 border-2
                  ${
                    isExpanded
                      ? "bg-gradient-to-l from-indigo-200 to-white pb-1.5 pt-1 shadow-sm border-blue-600"
                      : "bg-slate-50/70 border-transparent hover:bg-slate-100 py-0.5"
                  }`}
              >
                <div className="flex items-center gap-4 flex-shrink-0">
                  <div
                    className={`p-2 rounded-xl text-2xl flex-shrink-0 transition-all duration-300
                      ${
                        isExpanded
                          ? "text-white bg-blue-600 border border-transparent"
                          : item.iconStyles
                      }`}
                  >
                    {item.icon}
                  </div>

                  <h3
                    className={`font-semibold text-black/90 ${isExpanded ? "text-medium" : "text-lg"}`}
                  >
                    {item.title}
                  </h3>
                </div>

                <div
                  className={`grid transition-all duration-200 ${
                    isExpanded
                      ? "grid-rows-[1fr] opacity-100 mt-1"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-xs text-gray-700 pl-12 leading-tight max-w-[95%]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Features;
