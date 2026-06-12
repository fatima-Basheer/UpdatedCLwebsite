import { HiMiniMagnifyingGlass } from "react-icons/hi2";

function BlogHero() {
  return (
    <section className="relative h-auto overflow-hidden bg-[#e9f4ff] px-4 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-20 md:py-28 2xl:py-40 flex flex-col justify-center items-center">
      <div className="absolute top-0 right-0 w-[60vw] sm:w-[35vw] lg:w-[50vw] h-[80px] bg-gradient-to-b from-indigo-900 via-indigo-400 to-transparent blur-xl opacity-80" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto gap-4">
        <div className="text-sm font-semibold text-gray-600 py-2 px-4 bg-white rounded-full">
          Blogs
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-black">
          Discover Our Latest News
        </h1>

        <p className="text-sm text-slate-600 max-w-xl">
          Explore our insights on tech innovation, digital transformation, and
          industry trends.
        </p>

        <div className="relative mt-4 w-full max-w-[420px]">
          <input
            type="text"
            placeholder="Search here"
            className="w-full px-6 py-4 pr-12 rounded-full border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 text-xl text-white bg-blue-500 p-2.5 rounded-full pointer-events-none">
            <HiMiniMagnifyingGlass className="text-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogHero;
