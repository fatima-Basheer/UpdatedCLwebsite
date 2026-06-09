import React, { useRef } from "react";
import gsap from "gsap";
import { GiWireframeGlobe } from "react-icons/gi";
import { useGSAP } from "@gsap/react";

function TrustedPage() {
  const tickerRef = useRef();
  const imageRef = useRef();

  useGSAP(() => {
  
    gsap.to(tickerRef.current, {
      x: "-50%",
      duration: 20,
      ease: "none",
      repeat: -1,
    });

    gsap.to(imageRef.current, {
      rotation: 360,
      duration: 10,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <div className="relative bg-black min-h-screen overflow-hidden px-4 sm:px-10 flex flex-col justify-between py-12">
    
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[70vw] h-[5%] bg-gradient-to-r from-transparent to-indigo-600 blur-3xl opacity-70" />
        <div className="absolute top-0 right-0 w-[60vw] h-[10%] bg-gradient-to-l from-indigo-600 to-transparent blur-2xl opacity-50" />
      </div>

      <div className="text-center z-30 w-full">
        <h1 className="text-white text-5xl font-medium leading-[1.2]">
          We're Committed To Lead Your<br /> Digital Journey To Success.
        </h1>
        <p className="text-xs text-white/65 mt-4 mx-auto font-light">
          We have a proven track record of building scalable software solutions for businesses.
        </p>
      </div>


      <div className="w-full overflow-hidden my-auto py-20">
        <div
          ref={tickerRef}
          className="flex items-center w-max whitespace-nowrap"
        >
    
          <img src="movingtext.png" alt="Moving text banner" className="h-7 object-contain" />
          <img src="movingtext.png" alt="Moving text banner duplicate" className="h-7 object-contain" />
        </div>
      </div>


      <div className="w-full flex justify-center items-center mt-auto z-30">
      </div>
    </div> 
  );
}

export default TrustedPage;
