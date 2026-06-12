import React from "react";

const blockOneItems = [
  {
    id: 1,
    title:
      "How Cachelogic is Empowering Businesses with Custom Software Solutions",
    description:
      "Cachelogic delivers tailored software solutions that help businesses scale, innovate, and stay ahead",
  },
  {
    id: 2,
    title:
      "How Cachelogic is Empowering Businesses with Custom Software Solutions",
    description:
      "Cachelogic delivers tailored software solutions that help businesses scale, innovate, and stay ahead",
  },
  {
    id: 3,
    title:
      "How Cachelogic is Empowering Businesses with Custom Software Solutions",
    description:
      "Cachelogic delivers tailored software solutions that help businesses scale, innovate, and stay ahead",
  },
];
const blockTwoItems = [
  {
    id: 4,
    title:
      "How Cachelogic is Empowering Businesses with Custom Software Solutions",
    description:
      "Cachelogic delivers tailored software solutions that help businesses scale, innovate, and stay ahead",
  },
  {
    id: 5,
    title:
      "How Cachelogic is Empowering Businesses with Custom Software Solutions",
    description:
      "Cachelogic delivers tailored software solutions that help businesses scale, innovate, and stay ahead",
  },
  {
    id: 6,
    title:
      "How Cachelogic is Empowering Businesses with Custom Software Solutions",
    description:
      "Cachelogic delivers tailored software solutions that help businesses scale, innovate, and stay ahead",
  },
];
export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-8 lg:px-16 xl:px-20">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.5fr_1fr]">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-xl font-semibold text-black ">
              Featured Insights
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <img
              src="/download-1.jpeg"
              alt="Left Row 1 Col 1"
              className="aspect-[4/3] w-full rounded-2xl object-cover bg-gray-200"
            />
            <img
              src="/download-2.jpeg"
              alt="Left Row 1 Col 2"
              className="aspect-[4/3] w-full rounded-2xl object-cover bg-gray-200"
            />
          </div>

          <div className="w-full">
            <img
              src="/download-3.jpeg"
              alt="Left Row 2 Full Width"
              className="aspect-[4/3] sm:aspect-[16/9] w-full rounded-2xl object-cover bg-gray-200"
            />
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-black">
              Spotlight Articles
            </h2>

            {blockOneItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-[64px_1fr] gap-4 items-center sm:grid-cols-[70px_1fr]"
              >
                <img
                  src="/download-1.jpeg"
                  alt={item.title}
                  className="h-16 w-16 rounded-lg object-cover bg-gray-200 sm:h-12 sm:w-12 sm:ml-4"
                />
                <div>
                  <h3 className="text-sm font-medium text-black line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-600 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-black tracking-tight sm:text-2xl">
              Trending Articles
            </h2>

            {blockTwoItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-[64px_1fr] gap-4 items-center sm:grid-cols-[70px_1fr]"
              >
                <img
                  src="/download-1.jpeg"
                  alt={item.title}
                  className="h-16 w-16 rounded-lg object-cover bg-gray-200 sm:h-12 sm:w-12 sm:ml-4 "
                />
                <div>
                  <h3 className="text-sm font-medium text-black line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-600 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
