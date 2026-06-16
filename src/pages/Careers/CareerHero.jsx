import React from "react";
import Button from "../../components/Button";

function CareerHero() {
  return (
    <section className="relative h-auto overflow-hidden bg-[#e9f4ff] px-4 sm:px-8 md:px-12 lg:px-16 pt-16 sm:pt-20 md:pt-28 2xl:pt-40 flex flex-col justify-center items-start sm:items-center">
      <div className="absolute top-0 right-0 w-[60vw] sm:w-[35vw] lg:w-[50vw] h-[80px] bg-gradient-to-b from-indigo-900 via-indigo-400 to-transparent blur-xl opacity-80" />

      <div className="relative z-10 flex flex-col items-start sm:items-center text-left sm:text-center max-w-3xl mx-0 sm:mx-auto gap-4">
        <div className="text-sm text-gray-700 py-2 px-4 bg-white rounded-full self-center">
          Careers
        </div>

        <h1 className="text-4xl sm:text-5xl font-semibold text-black leading-[1.4] md:leading-[1.2]">
          Shape the Future
          <br />
          of Technology with Us.
        </h1>

        <p className="text-sm text-slate-600 max-w-xl">
          Explore our insights on tech innovation, digital transformation, and
          industry trends.
        </p>

        <div className="mt-5 w-full sm:w-auto">
          <Button variant="primary">View Open Roles</Button>
        </div>
      </div>

      <div className="mt-8 w-full sm:w-auto">
        <img
          src="./careers.cef99dc9.svg"
          className="rounded-2xl w-full object-cover"
          alt="Careers"
        />
      </div>
    </section>
  );
}

export default CareerHero;
