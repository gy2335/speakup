import React, { useState, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

const markerIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// initiatives
const initiatives = [
  {
    name: "Sunset Park Cleanup",
    position: [40.6469888633038, -74.00209379174858],
    description: "Help keep Sunset Park clean by picking up trash and raking leaves",
    link: "https://www.nycservice.org/opportunity/a0T3Z00000QkQsuUAF/sunset-park-cleanup-with-pcr"
  },
  {
    name: "Prospect Park Volunteering",
    position: [40.65805344717874, -73.99202756279001],
    description: "Lend a hand with a variety of projects from path and playground restoration, painting, and leaf raking in Prospect Park",
    link: "https://www.prospectpark.org/get-involved/volunteer/"
  }
];

// fly to marker when touched
function FlyToMarker({ position }) {
  const map = useMap();
  if (position) {
    map.flyTo(position, 14, { duration: 1.5 });
  }
  return null;
}

export default function IntiativesMap() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMarker, setSelectedMarker] = useState(null);

  const filteredInitiatives = initiatives.filter((init) =>
    init.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const markerElements = useMemo(
    () =>
      initiatives.map((init) => (
        <Marker
          key={init.name}
          position={init.position}
          icon={markerIcon}
          eventHandlers={{
            click: () => setSelectedMarker(init),
          }}
        >
          <Popup>
            <strong>{init.name}</strong>
            <p>{init.description}</p>
            {init.link && (
              <a
                href={init.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Learn More
              </a>
            )}
          </Popup>
        </Marker>
      )),
    []
  );

  return (
    <div className="w-screen" style={{ height: 'calc(100vh - 100px)', paddingTop: '100px' }}>
      <div className="flex flex-col md:flex-row h-full gap-6 px-6 md:px-12">
        {/* Map */}
        <div className="flex-[2] h-full rounded-lg overflow-hidden shadow-md">
          <MapContainer
            center={[40.7128, -74.006]}
            zoom={11}
            scrollWheelZoom={false}
            className="h-full w-full"
          >
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://carto.com/">CARTO</a>'
            />

            {markerElements}

            {selectedMarker && <FlyToMarker position={selectedMarker.position} />}
          </MapContainer>
        </div>

        {/* Initiative List */}
        <div className="flex-[1] h-full p-4 bg-gray-50 rounded-lg shadow-md overflow-y-auto">
          <input
            type="text"
            placeholder="Search initiatives..."
            className="w-full mb-4 p-2 border rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <ul>
            {filteredInitiatives.map((init) => (
              <li
                key={init.name}
                className="mb-2 p-2 border rounded cursor-pointer hover:bg-gray-200"
              >
                {/* click name/description to fly */}
                <div onClick={() => setSelectedMarker(init)}>
                  <strong>{init.name}</strong>
                  <p className="text-sm">{init.description}</p>
                </div>

                {/* link */}
                {init.link && (
                  <a
                    href={init.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline mt-1 block"
                  >
                    Learn More
                  </a>
                )}
              </li>
            ))}
            {filteredInitiatives.length === 0 && (
              <li className="text-gray-500">No initiatives found.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
