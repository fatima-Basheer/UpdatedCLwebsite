import React from "react";

const linksData = [
  {
    id: 1,
    imageSrc: "/OurWork1.svg",
    imageAlt: "Business Strategy Analytics",
    heading: "Labaik App",
    linkText: "Live Link",

    description:
      "A digital companion for pilgrims, guiding them through the Hajj journey from preparation to safe return. Offering real-time updates, service matching, and multilingual support.",
  },
  {
    id: 2,
    imageSrc: "/OurWork2.svg",
    imageAlt: "Enterprise Global Scaling",
    heading: "Rishta Auntie",
    linkText: "Live Link",

    description:
      "A matchmaking platform that connects South Asians through authentic video conversations and cultural exchanges. Designed to simplify matchmaking with real-time features and global accessibility.",
  },
];

function Links() {
  return (
    <div className="w-full min-h-screen bg-white py-12 sm:py-18 px-6 sm:px-12 md:px-12 lg:px-24 xl:px-32">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        {linksData.map((col) => (
          <div key={col.id} className="w-full flex flex-col gap-5">
            <div className="w-full h-[280px] sm:h-[360px] overflow-hidden rounded-xl shadow-sm">
              <img
                src={col.imageSrc}
                alt={col.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full flex flex-col gap-3">
              <div className="w-full flex items-baseline justify-between mt-3 gap-3">
                <h3 className="text-xl sm:text-3xl font-medium text-gray-800">
                  {col.heading}
                </h3>
                <a className="text-xs font-medium text-blue-400 hover:text-blue-500 transition-colors shrink-0 whitespace-nowrap">
                  {col.linkText}
                </a>
              </div>

              <p className="text-sm text-gray-600 leading-[1.4] max-w-[95%] mt-4">
                {col.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex flex-col gap-5 mt-10">
        <div className="w-full bg-gray-300 px-8 pt-8 pb-1 rounded-3xl overflow-hidden shadow-sm">
          <img
            src="/OurWork3.svg"
            alt="Third feature project display"
            className="w-full h-full object-cover rounded-b-md"
          />
        </div>

        <div className="w-full flex flex-col gap-3">
          <div className="w-full flex items-baseline justify-between mt-3 gap-3">
            <h3 className="text-xl sm:text-3xl font-medium text-gray-900">
              Open Doc AI
            </h3>
            <a className="text-xs font-medium text-blue-400 hover:text-blue-500 transition-colors shrink-0 whitespace-nowrap">
              Live Link
            </a>
          </div>

          <p className="text-sm text-gray-600 leading-[1.4] max-w-[95%] mt-4">
            Empowering businesses with AI-driven document management, enabling
            smarter document search, organization, and seamless integration with
            internal systems for enhanced productivity and security.
          </p>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start mt-5">
        {linksData.map((col) => (
          <div key={col.id} className="w-full flex flex-col gap-5">
            <div className="w-full h-[280px] sm:h-[360px] overflow-hidden rounded-xl shadow-sm">
              <img
                src={col.imageSrc}
                alt={col.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full flex flex-col gap-3">
              <div className="w-full flex items-baseline justify-between mt-3 gap-3">
                <h3 className="text-xl sm:text-3xl font-medium text-gray-800">
                  {col.heading}
                </h3>
                <a className="text-xs font-medium text-blue-400 hover:text-blue-500 transition-colors shrink-0 whitespace-nowrap">
                  {col.linkText}
                </a>
              </div>

              <p className="text-sm text-gray-600 leading-[1.4] max-w-[95%] mt-4">
                {col.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Links;
