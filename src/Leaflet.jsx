import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import zipUrl from "./TM_WORLD_BORDERS_SIMPL-0.3.zip";
import Shapefile from "./Shapefile";

export default function Leaflet() {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (!map) return;

    map.setView([34.74161249883172, 18.6328125], 2);
  }, [map]);

  const position = [51.505, -0.09];
  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "100vh" }}
      ref={setMap}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Shapefile zipUrl={zipUrl} />
    </MapContainer>
  );
}
