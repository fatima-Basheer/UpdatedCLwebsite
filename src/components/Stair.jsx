import React from "react";

function Stair() {
  return (
    <div className="absolute bottom-0 left-0 w-full h-60 flex flex-col md:mb-0 md:relative md:bottom-auto md:h-full md:w-1/6 md:flex-row md:ml-auto">
      <div className="stair flex-1 bg-white/10 md:bg-white/1 backdrop-blur-md md:backdrop-blur-sm"></div>
      <div className="stair flex-1 bg-white/10 md:bg-white/1 backdrop-blur-md md:backdrop-blur-sm"></div>
      <div className="stair flex-1 bg-white/10 md:bg-white/1 backdrop-blur-md md:backdrop-blur-sm"></div>
      <div className="stair flex-1 bg-white/40 md:bg-white/1 backdrop-blur-md md:backdrop-blur-sm"></div>
      <div className="stair flex-1 bg-white/60 md:bg-white/1 backdrop-blur-md md:backdrop-blur-sm"></div>
      <div className="hidden md:block stair flex-1 md:bg-white/1 backdrop-blur-md md:backdrop-blur-sm"></div>
    </div>
  );
}

export default Stair;
