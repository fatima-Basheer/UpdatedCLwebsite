import createGlobe from "cobe";
import { useEffect, useRef } from "react";

const markers = [
  {
    id: "pakistan",
  location: [50, 80],
    label: "LAHORE PK",
    des: "Engineering & Delivery Center",
    flagUrl: "/flag.png",
  },
  {
    id: "netherlands",
  location: [52, -20],
    label: "AMSTERDAM NL",
    des: "Global headquraters",
    flagUrl: "/download.png",
  },
];

const Globe = () => {
  const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;
    let req;

    // We detect screens smaller than 768px wide to conditionally remove arcs dynamically
    const isSmallScreen = window.innerWidth <= 768;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 1300 * 2,
      height: 1300 * 2,
      phi: 0,
      theta: 0.1,
      dark: 1,
      diffuse: 2,
      mapSamples: 10000,
      mapBrightness: 8,
      baseColor: [0.15, 0.15, 0.2],
      markerColor: [0.1, 0.15, 0.4],
      glowColor: [0.1, 0.15, 0.4],
      markers: markers.map((m) => ({
        location: m.location,
        size: 0,
        id: m.id,
      })),
      // 👇 Turn off arcs conditionally if screen size is mobile/small
      arcs: isSmallScreen
        ? []
        : [
            {
              from: markers[1].location,
              to: markers[0].location,
            },
          ],
      arcColor: [0.1, 0.15, 0.4],
      arcWidth: 1.7,
      arcHeight: 0.2,
    });

    const animate = () => {
      phi += 0.01;
      globe.update({ phi });
      req = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(req);
      globe.destroy();
    };
  }, []);

  return (
    <div className="App">
      <style>
        {`
      
          
        
          
          .globe-wrapper {
            position: absolute;
            bottom: 0;              
            left: 50%;              
            transform: translateX(-50%); 
            width: 100%;
            max-width: 1200px;      
            aspect-ratio: 100 / 30;    
            overflow: hidden;       
          }

          .globe-container {
            width: 100%;
            aspect-ratio: 1 / 1;    
            position: absolute;
            top: 0;                 
            left: 0;
          }

          .marker-label {
            position: absolute;
            bottom: anchor(top);
            left: anchor(center);
            transform: translate(-50%, -10px);
            pointer-events: none;
            transition: opacity 0.3s;
            width: max-content; 
          }

          /* 👇 SMALL SCREEN DEVICES OVERRIDES (ONLY APPLIES TO MOBILE) 👇 */
          @media (max-width: 768px) {
            .globe-wrapper {
              position: fixed; /* 💡 Force layout to attach explicitly at the screen viewport bottom */
              bottom: 0;
              left: 0;
              transform: none;
              width: 100%;
              max-width: 100vw;
              height: 320px; /* 💡 Space allocation to contain the 50% dome crop + stacked text column */
              aspect-ratio: auto; 
              overflow: hidden; /* Slices away the lower half of the globe cleanly */
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
            }

            .globe-container {
              position: relative;
              width: 100%;
              height: 100%;
              aspect-ratio: auto;
              display: flex;
              flex-direction: column; /* 💡 Stacks the text blocks into a column */
              justify-content: flex-end; 
              align-items: center;
              gap: 12px; /* Adds clean spacing between stacked blocks */
              padding-bottom: 20px; /* Moves content up slightly from screen bezel edge */
              box-sizing: border-box;
            }

            canvas {
              position: absolute; 
              bottom: -50%; /* 💡 Pushes the exact bottom 50% of the globe circle below screen visibility limit */
              left: 50%;
              transform: translateX(-50%);
              z-index: 1; /* Pushes the globe layout context layer right beneath text cards */
              width: 100vw !important;
              height: 100vw !important; /* Preserves 1:1 circular aspect ratio tracking */
              max-width: 500px; 
              max-height: 500px;
              pointer-events: none;
            }

            .marker-label {
              position: relative !important;
              bottom: auto !important;
              left: auto !important;
              transform: none !important;
              opacity: 1 !important; /* Forces total visibility bypass over spinning states */
              width: auto;
              pointer-events: auto;
              z-index: 5; /* Confirms text layers stay crisp on top of background maps */
            }
          }
        `}
      </style>

      <div
        style={{ paddingTop: "50px", position: "relative", zIndex: 10 }}
      ></div>

      <div className="globe-wrapper">
        <div className="globe-container">
          <canvas
            ref={canvasRef}
            style={{
              width: "100%",
              height: "100%",
              display: "block",
            }}
          />
          {markers.map((m) => (
            <div
              key={m.id}
              className="marker-label"
              style={{
                positionAnchor: `--cobe-${m.id}`,
                opacity: `var(--cobe-visible-${m.id}, 0)`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  border: "1px solid #999",
                  padding: "10px 15px",

                  height: "56px",
                  width: "270px",
                  gap: "10px",
                  alignItems: "center",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: "30px",
                  backdropFilter: "blur(4px)",
                }}
              >
                <img
                  src={m.flagUrl}
                  alt={`${m.label} flag`}
                  style={{
                    height: "35px",
                    width: "35px",
                    flexShrink: 0,
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "left",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span
                    style={{
                      fontSize: "10.5px",
                      fontWeight: "bold",
                      color: "gray",
                      textTransform: "uppercase",
                    }}
                  >
                    {m.label}
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      marginTop: "1px",
                      letterSpacing: "0.5px",
                      color: "white",
                    }}
                  >
                    {m.des}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Globe;
