import { useRef, useEffect } from "react";
import * as mapboxgl from "mapbox-gl/esm";
import "mapbox-gl/dist/mapbox-gl.css";

const Mapview = () => {
  const mapRef = useRef();
  const mapContainerRef = useRef();

  useEffect(() => {
    mapRef.current = new mapboxgl.Map({
      accessToken: import.meta.env.VITE_MAPBOX_ACCESS_TOKEN,
      container: mapContainerRef.current,
      center: [-71.06776, 42.35816], // starting position [lng, lat]. Note that lat must be set between -90 and 90
      zoom: 9, // starting zoom
    });

    return () => {
      mapRef.current.remove();
    };
  }, []);

  return <div className="bg-green-500 w-full h-full" ref={mapContainerRef} />;
};

export default Mapview;
