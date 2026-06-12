import React from "react";
import { FaShieldAlt, FaLightbulb, FaUsers, FaRocket } from "react-icons/fa";
  const valuesData = [
    {
      id: 1,
      icon: <FaShieldAlt />,

      iconStyles: "text-white bg-blue-700",
      cardStyles:
        "border-2 border-blue-600 bg-gradient-to-l from-indigo-200 to-white",
      title: "Relaxing Break Areas",
      description: "Recharge in our comfortable break rooms.",
    },
    {
      id: 2,
      icon: <FaLightbulb />,
      iconStyles: "text-black bg-white",
      cardStyles: "border-2 border-blue-600 bg-white",
      title: "High-tech Infrastructure",
      description: "Use the latest tools and tech to innovate",
    },
    {
      id: 3,
      icon: <FaUsers />,
      iconStyles: "text-black bg-white",
      cardStyles: "border-2 border-blue-600 bg-white",
      title: "Fun and Engaging Environment",
      description: "Enjoy team events and a collaborative vibe.",
    },
    {
      id: 4,
      icon: <FaRocket />,
      iconStyles: "text-black bg-white",
      cardStyles: "border-2 border-blue-600 bg-white",
      title: "Dedicated Support for Your Success",
      description: "We invest in your growth with mentorship and training.",
    },
  ];
function Values() {


  return (
    <section className="py-10">
      <div className="px-4 sm:px-8 md:px-12 lg:px-14 2xl:px-90">
      
        <div className="text-center mb-12">
          <h2 className="text-4xl font-medium text-black mb-4 2xl:mt-30">
            Our Values and Culture
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto mt-5">
            At CacheLogic, we cultivate a culture of collaboration, growth, and
            creativity. Here's what makes us unique.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pb-4">
          {valuesData.map((card) => (
            <div
              key={card.id}
              className={`${card.cardStyles} p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex justify-center mt-5">
                <div
                  className={`${card.iconStyles} text-2xl w-11 h-11 rounded-2xl flex items-center justify-center`}
                >
                  {card.icon}
                </div>
              </div>

              <h3 className="text-lg font-medium text-black mt-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default Values;
