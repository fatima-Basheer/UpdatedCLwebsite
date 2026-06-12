import React from "react";
import Button from "../../components/Button";
const rowData = [
  {
    id: 1,
    title: "Flexible Hours",
    description:
      "Enjoy the freedom to manage your time and work in a way that suits you best.",
  },
  {
    id: 2,
    title: "Throw Fun Events",
    description:
      "Participate in team-building activities, social gatherings, and events that bring everyone together.",
  },
  {
    id: 3,
    title: "Engaging Atmosphere",
    description:
      "Collaborate with like-minded people who inspire and push each other to achieve more.",
  },
];
function Working() {
  return (
    <section className="pb-16 pt-4 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-[400px] sm:h-[600px]">
            <div className="w-full h-full rounded-2xl overflow-hidden">
              <img
                src="careers-2.svg"
                alt="CacheLogic Team Collaboration"
                className="w-full h-full object-cover"
              />
            </div>

            <span className="hidden md:block absolute top-12 right-4 bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md z-10">
              Happy Working
            </span>

            <div className="hidden md:block absolute bottom-20 -left-10 bg-white border border-blue-600 px-4 py-2 rounded-full z-10 transform translate-x-0">
              <span className="text-sm tracking-wider text-black block">
                Flexible hours
              </span>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-medium text-black mb-4">
                Happy Working
              </h2>
              <p className="text-md text-gray-600 max-w-lg">
                At CacheLogic, we believe that work should be enjoyable and
                fulfilling. That's why we prioritize a fun, positive environment
                where everyone can thrive!
              </p>
            </div>

            <div className="space-y-6 ">
              {rowData.map((row) => (
                <div key={row.id} className="space-y-1">
                  <h4 className="text-xl font-semibold text-gray-900">
                    {row.title}
                  </h4>
                  <p className="text-sm text-gray-600">{row.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-5">
              <Button variant="primary">Join Our Team!</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Working;
