import { useEffect, useRef } from "react";
import gsap from "gsap";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import Button from "../../components/Button";
const leftImages = [
  "/Analytics1.svg",
  "/Analytics2.svg",
  "/Analytics3.svg",
  "/Analytics4.svg",
  "/Analytics5.svg",
  "/Analytics6.svg",
];

const rightImages = [
  "/Analytics1.svg",
  "/Analytics2.svg",
  "/Analytics3.svg",
  "/Analytics4.svg",
  "/Analytics5.svg",
  "/Analytics6.svg",
];
function PortfolioHero() {
  const leftTrackRef = useRef(null);
  const rightTrackRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(max-width: 767px)", () => {
      gsap.set(leftTrackRef.current, { xPercent: -50 });
      gsap.to(leftTrackRef.current, {
        xPercent: 0,
        ease: "none",
        duration: 20,
        repeat: -1,
      });

      gsap.to(rightTrackRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 20,
        repeat: -1,
      });
    });

    mm.add("(min-width: 768px)", () => {
      gsap.to(leftTrackRef.current, {
        yPercent: -50,
        ease: "power1.inOut",
        duration: 25,
        repeat: -1,
        yoyo: true,
      });

      gsap.set(rightTrackRef.current, { yPercent: -50 });
      gsap.to(rightTrackRef.current, {
        yPercent: 0,
        ease: "none",
        duration: 25,
        repeat: -1,
        yoyo: true,
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="relative min-h-fit h-auto md:h-[100vh] md:min-h-[600px] overflow-hidden bg-[#e9f4ff] px-4 sm:px-8 md:px-12 lg:px-16 py-12 md:py-20 flex flex-col justify-start md:justify-center items-center isolate gap-10">
      <div className="absolute bottom-0 right-0 w-[70vw] sm:w-[35vw] lg:w-[80vw] h-[60px] bg-gradient-to-b from-indigo-900 via-indigo-400 to-transparent blur-xl opacity-60" />
      <div className="relative z-20 flex flex-col items-center text-center max-w-xl mx-auto gap-4 pointer-events-auto order-1 md:order-none">
        <h1 className="text-4xl sm:text-5xl font-medium text-black leading-[1.2] mt-5">
          Crafting Digital Experiences That Drive Growth
        </h1>

        <p className="text-xs text-slate-600 max-w-md mx-auto">
          Discover how CacheLogic brings ideas to life with cutting-edge design,
          innovative technologies, and impactful solutions. See our portfolio to
          explore the diverse range of projects we've successfully delivered for
          clients worldwide.
        </p>

        <div className="flex flex-wrap gap-3 mt-8">
          <Button variant="primary" className="px-4 py-2">
            Start Your Project
          </Button>
        </div>
      </div>

      <div className="relative md:absolute inset-x-0 bottom-0 top-auto md:top-0 w-full h-auto md:h-full pointer-events-none overflow-hidden z-0 flex flex-col gap-4 md:block order-2 md:order-none">
        <div className="relative md:absolute left-0 right-0 md:top-0 md:bottom-0 md:right-auto md:left-2 sm:md:left-4 lg:md:left-8 w-full md:w-44 lg:w-[260px] h-24 sm:h-32 md:h-full overflow-hidden select-none">
          {leftImages.length > 0 && (
            <div
              ref={leftTrackRef}
              className="flex flex-row md:flex-col gap-[10px] w-max md:w-full"
            >
              {leftImages.map((src, i) => (
                <img
                  key={`left-1-${i}`}
                  src={src}
                  alt="Project"
                  className="w-36 sm:w-48 md:w-full h-[70px] sm:h-[110px] md:h-auto lg:md:h-[140px] aspect-[260/140] object-cover rounded-xl image-render-crisp mix-blend-multiply"
                />
              ))}
              {leftImages.map((src, i) => (
                <img
                  key={`left-2-${i}`}
                  src={src}
                  alt="Project duplicate"
                  className="w-36 sm:w-48 md:w-full h-[70px] sm:h-[110px] md:h-auto lg:md:h-[140px] aspect-[260/140] object-cover rounded-xl image-render-crisp mix-blend-multiply"
                />
              ))}
            </div>
          )}
        </div>

        <div className="relative md:absolute left-0 right-0 md:bottom-0 md:top-0 md:left-auto md:right-2 sm:md:right-4 lg:md:right-8 w-full md:w-44 lg:w-[260px] h-24 sm:h-32 md:h-full overflow-hidden select-none">
          {rightImages.length > 0 && (
            <div
              ref={rightTrackRef}
              className="flex flex-row md:flex-col gap-[10px] w-max md:w-full"
            >
              {rightImages.map((src, i) => (
                <img
                  key={`right-1-${i}`}
                  src={src}
                  alt="Project"
                  className="w-36 sm:w-48 md:w-full h-[70px] sm:h-[110px] md:h-auto lg:md:h-[140px] aspect-[260/140] object-cover rounded-xl image-render-crisp mix-blend-multiply"
                />
              ))}
              {rightImages.map((src, i) => (
                <img
                  key={`right-2-${i}`}
                  src={src}
                  alt="Project duplicate"
                  className="w-36 sm:w-48 md:w-full h-[70px] sm:h-[110px] md:h-auto lg:md:h-[140px] aspect-[260/140] object-cover rounded-xl image-render-crisp mix-blend-multiply"
                />
              ))}
            </div>
          )}
        </div>

        <div className="absolute left-2 sm:left-4 lg:left-8 top-0 h-[120px] w-44 lg:w-[260px] bg-gradient-to-b from-[#e9f4ff] to-transparent z-10 pointer-events-none hidden md:block" />
      </div>
    </section>
  );
}

export default PortfolioHero;
