import { useRef, useEffect } from "react";
import * as mapboxgl from "mapbox-gl/esm";
import "mapbox-gl/dist/mapbox-gl.css";
import "./App.css";
import logo from "./assets/images/logo.png";

function App() {
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

  return (
    <div className="h-screen flex flex-col">
      <div className="w-full h-[80px] flex justify-between items-center">
        <img src={logo} alt="Logo" className="h-12 ml-4" />

        <input
          type="search"
          placeholder="Search..."
          className="bg-white placeholder:text-blue-200 focus:outline-none"
        />

        <div className="bg-purple-500 flex gap-4 items-center mr-4">
          <div>Thematic</div>
          <div>Profile</div>
        </div>
      </div>
      <div className="bg-green-500 w-full h-full" ref={mapContainerRef} />
      <div className="w-full h-[80px] flex justify-between items-center">
        <div className="bg-blue-500 flex gap-4 items-center ml-4">
          <div>Couches</div>
          <div>My Maps</div>
          <div>Infos</div>
          <div>Legendes</div>
          <div>Itineraire</div>
        </div>
        <div className="bg-yellow-500 flex gap-4 items-center">
          <div>Dessin</div>
          <div>Mesurer</div>
          <div>Imprimer</div>
          <div>Partager</div>
          <div>Aller vers</div>
        </div>
        <div className="bg-red-500 flex gap-4 items-center mr-4">
          <div>A propos</div>
          <div>Contact</div>
        </div>
      </div>
    </div>
  );
}

export default App;
