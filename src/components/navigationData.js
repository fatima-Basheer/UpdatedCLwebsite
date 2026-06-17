export const navMenu = [
  {
    label: "Home",
    path: "/",
  },

  {
    label: "Blog",
    path: "/blog",
  },

  {
    label: "Portfolio",
    path: "/portfolio",
  },
  {
    label: "Services",
    hasDropdown: true,
  },
  {
    label: "About Us",
    path: "/about",
  },
  {
    label: "Careers",
    path: "/careers",
  },
];
export const servicesList = [
  {
    name: "Custom AI & ML solution ",
    des: "Smart automation and predictive business intelligence",
    path: "/services/ai-ml",
  },
  {
    name: "Custom Web & Mobile Apps ",
    des: "Smart automation and predictive business intelligence",
    path: "/services/web-mobile",
  },
  {
    name: "Seamless Automation Solution",
    des: "Smart automation and predictive business intelligence",
    path: "/services/automation",
  },
  {
    name: "Accelrate Development With DevOps",
    des: "Smart automation and predictive business intelligence",
    path: "/services/devops",
  },
  {
    name: "Robust Cybersecurity Solutions",
    des: "Smart automation and predictive business intelligence",
    path: "/services/cybersecurity",
  },
  {
    name: "Tailored Enterprise Solutions",
    des: "Smart automation and predictive business intelligence",
    path: "/services/enterprise",
  },
];
// import createGlobe from "cobe";
// import { useEffect, useRef } from "react";

// const markers = [
//   {
//     id: "pakistan",
//     location: [30.3753, 69.3451],
//     label: "Pakistan",
//     flagUrl: "/pakistan-flag-icon.webp",
//   },
//   {
//     id: "netherlands",
//     location: [52.1326, 5.2913],
//     label: "Netherlands",
//     flagUrl: "/pakistan-flag-icon.webp",
//   },
// ];
// import { useEffect, useRef } from "react";
// import createGlobe from "cobe";

// export default function GlobeCanvas() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     let phi = 2.0;
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     let width = canvas.offsetWidth || 500;

//     const globe = createGlobe(canvas, {
//       devicePixelRatio: 2,
//       width: width * 2,
//       height: width * 2,
//       phi: 2.0,
//       theta: 0.1,
//       dark: 1,
//       diffuse: 2,
//       mapSamples: 10000,
//       mapBrightness: 8,
//       baseColor: [0.15, 0.15, 0.2],
//       markerColor: [0.5, 0.7, 1],
//       glowColor: [0.1, 0.15, 0.4],
//       markers: [
//         { location: [52.3676, 4.9041], size: 0.05, id: "amsterdam" },
//         { location: [31.5204, 74.3587], size: 0.05, id: "lahore" },
//       ],
//       arcs: [
//         {
//           from: [52.3676, 4.9041],
//           to: [31.5204, 74.3587],
//           color: [0.3, 0.5, 1],
//         },
//       ],
//       arcHeight: 0.2,
//       onRender: (state) => {
//         // DO NOT call React state (useState) inside this loop!
//         // Just update phi to make it spin.
//         phi += 0.003;
//         state.phi = phi;
//       },
//     });

//     const onResize = () => {
//       if (canvasRef.current) {
//         const w = canvasRef.current.offsetWidth || 500;
//         globe.update({ width: w * 2, height: w * 2 });
//       }
//     };

//     window.addEventListener("resize", onResize);
//     const initTimeout = setTimeout(onResize, 100);

//     return () => {
//       clearTimeout(initTimeout);
//       window.removeEventListener("resize", onResize);
//       globe.destroy();
//     };
//   }, []);

//   return (
//     <div
//       style={{
//         position: "relative",
//         width: "100%",
//         maxWidth: "500px",
//         aspectRatio: "1/1",
//         margin: "0 auto",
//       }}
//     >
//       <canvas
//         ref={canvasRef}
//         style={{
//           width: "100%",
//           height: "100%",
//           display: "block"
//         }}
//       />

//       {/* Amsterdam Marker */}
//       <div
//         className="absolute bg-slate-900/90 backdrop-blur-sm p-2 rounded-xl flex items-center gap-2 border border-white/10"
//         style={{
//           positionAnchor: "--cobe-amsterdam", // Matches the marker ID
//           bottom: "anchor(top)",
//           left: "anchor(center)",
//           transform: "translate(-50%, -10px)",
//           opacity: "var(--cobe-visible-amsterdam, 0)", // Fades out when behind globe
//           transition: "opacity 0.3s",
//           pointerEvents: "none", // Ensures mouse doesn't interfere with globe drag
//           whiteSpace: "nowrap",
//           zIndex: 50,
//         }}
//       >
//         <img
//           src="/pakistan-flag-icon.webp"
//           alt="Amsterdam"
//           className="rounded-full object-cover w-10 h-10 shrink-0"
//         />
//         <div className="pr-1">
//           <p className="text-white/50 text-[10px] uppercase tracking-widest font-medium leading-tight">
//             Amsterdam NL
//           </p>
//           <p className="text-white text-[11px] font-semibold leading-tight mt-0.5">
//             Global Headquarters
//           </p>
//         </div>
//       </div>

//       {/* Lahore Marker */}
//       <div
//         className="absolute bg-slate-900/90 backdrop-blur-sm p-2 rounded-xl flex items-center gap-2 border border-white/10"
//         style={{
//           positionAnchor: "--cobe-lahore", // Matches the marker ID
//           bottom: "anchor(top)",
//           left: "anchor(center)",
//           transform: "translate(-50%, -10px)",
//           opacity: "var(--cobe-visible-lahore, 0)", // Fades out when behind globe
//           transition: "opacity 0.3s",
//           pointerEvents: "none", // Ensures mouse doesn't interfere with globe drag
//           whiteSpace: "nowrap",
//           zIndex: 50,
//         }}
//       >
//         <img
//           src="/pakistan-flag-icon.webp"
//           alt="Lahore"
//           className="rounded-full object-cover w-10 h-10 shrink-0"
//         />
//         <div className="pr-1">
//           <p className="text-white/50 text-[10px] uppercase tracking-widest font-medium leading-tight">
//             Lahore PK
//           </p>
//           <p className="text-white text-[11px] font-semibold leading-tight mt-0.5">
//             Engineering Center
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
// // 