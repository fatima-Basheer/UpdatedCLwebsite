import React, { useEffect, useRef, useState } from 'react';
import createGlobe from 'cobe';

export default function Globe() {
  const canvasRef = useRef(null);
  const [labels, setLabels] = useState([]);


  const PakistanCoords = [33.6844, 73.0479];
  const USACoords = [38.9072, -77.0369];

  useEffect(() => {
    let phi = 0;
    let width = 0;


    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener('resize', onResize);
    onResize();

    const locations = [
      { id: 'pakistan', label: 'Pakistan', coords: PakistanCoords },
      { id: 'usa', label: 'USA', coords: USACoords }
    ];


    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3, 
      dark: 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor:[1,1,1],
      markerColor: [0.2, 0.4, 1],
      glowColor: [0.9, 0.9, 0.9],
      markers: locations.map(loc => ({ location: loc.coords, size: 0.04, id: loc.id })),
      arcs: [
        { from: PakistanCoords, to: USACoords, id: 'pak-usa-arc' }
      ],
      arcColor: [0.1, 0.3, 0.9], 
      arcWidth: 1.5,          
      arcHeight: 0.4,         
      
    
      onRender: (state) => {
    
        phi += 0.005;
        state.phi = phi;

    
        const calculatedLabels = locations.map(loc => {
          const [lat, lon] = loc.coords;
          
    
          const rLat = (lat * Math.PI) / 180;
          const rLon = (lon * Math.PI) / 180;
          const sPhi = state.phi - rLon - Math.PI / 2;
          

          const x = Math.cos(rLat) * Math.sin(sPhi);
          const y = Math.sin(rLat) * Math.cos(state.theta) - Math.cos(rLat) * Math.cos(sPhi) * Math.sin(state.theta);
          const z = Math.sin(rLat) * Math.sin(state.theta) + Math.cos(rLat) * Math.cos(sPhi) * Math.cos(state.theta);


          const left = `${(x * 0.5 + 0.5) * 100}%`;
          const top = `${(-y * 0.5 + 0.5) * 100}%`;
          
        
          const isVisible = z > 0; 

          return { ...loc, left, top, isVisible };
        });

        setLabels(calculatedLabels);
      }
    });


    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>

        <canvas
          ref={canvasRef}
          style={styles.canvas}
        />


        {labels.map((node) => (
          <div
            key={node.id}
            style={{
              ...styles.label,
              left: node.left,
              top: node.top,
              opacity: node.isVisible ? 1 : 0,
              pointerEvents: node.isVisible ? 'auto' : 'none',
            }}
          >
            {node.label}
          </div>
        ))}
      </div>
    </div>
  );
}


const styles = {
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    padding: '2rem',
  },
  wrapper: {
    width: '100%',
    maxWidth: '600px',
    aspectRatio: '1 / 1',
    position: 'relative',
    overflow: 'hidden',
  },
  canvas: {
    width: '100%',
    height: '100%',
    cursor: 'grab',
  },
  label: {
    position: 'absolute',
    transform: 'translate(-50%, -140%)', 
    backgroundColor: '#ffffff',
    color: '#1a1a1a',
    padding: '4px 10px',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: '600',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    border: '1px solid #e2e8f0',
    whiteSpace: 'nowrap',
    transition: 'opacity 0.15s ease',
  }
};
