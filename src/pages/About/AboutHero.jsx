import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import Button from "../../components/Button";

function AboutHero() {
  return (
    <section className="relative min-h-fit h-auto overflow-hidden bg-[#e9f4ff] px-4 sm:px-8 md:px-12 lg:px-16 py-20 sm:py-20 md:py-32 2xl:py-40 flex flex-col justify-center items-center isolate">
      <div className="absolute inset-x-0 top-0 bottom-0 w-full h-full pointer-events-none overflow-hidden z-0"></div>
          <div className="absolute top-0 right-0 w-[60vw] sm:w-[35vw] lg:w-[50vw] h-[80px] bg-gradient-to-b from-indigo-900 via-indigo-400 to-transparent blur-xl opacity-80" />
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto gap-4 mt-6">
        <div className="text-sm  text-gray-600 py-2 px-4 bg-white rounded-full">
          About us
        </div>

        <h1 className="text-4xl sm:text-5xl font-medium text-black leading-[1.2] mt-5">
          Empowering Businesses.
          <br />
          Evolving Technology.
        </h1>

        <div className="flex flex-col gap-2 mt-2">
          <p className="text-xs text-slate-600 max-w-2xl mx-auto">
            At CacheLogics, we believe technology should adapt to your vision –
            not the other way around.
          </p>
          <p className="text-xs text-slate-600 max-w-3xl mx-auto">
            We deliver future-ready IT solutions that accelerate innovation,
            streamline operations, and help businesses thrive in the digital
            age.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mt-8">
          <Button variant="primary" className="px-4 py-2">
            Contact Us
          </Button>
          <Button variant="outline" className="px-2 py-2">
            Discover your Services
          </Button>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
