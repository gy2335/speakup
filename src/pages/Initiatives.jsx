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
  },
  {
    name: "CHiPS Volunteering",
    position: [40.67847649730812, -73.98275590164495],
    description: "Help feed hungry New Yorkers in Park Slope and Gowanus",
    link: "https://www.chipsonline.org/"
  },
  {
    name: "The Bowery Mission",
    position: [40.72203107245861, -73.992959208325],
    description: "Serve people experiencing homelessness and poverty",
    link: "https://www.bowery.org/"
  },
  {
    name: "Life Together Works NYC",
    position: [40.824334778606854, -73.84432446041724],
    description: "A nonprofit dedicated to empowering the Bronx by providing resources, opportunities, and services that promote personal growth, healthy living, and community well-being.",
    link: "https://ltworksnyc.org/"
  },
  {
    name: "NY Common Pantry",
    position: [40.83111049249743, -73.89036655761068],
    description: "Help with the reduction of hunger and food insecurity",
    link: "https://nycommonpantry.org/"
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
    <div className="w-screen min-h-screen pt-32 px-6 md:px-12 bg-gradient-to-br from-white via-blue-50 to-yellow-50">
      <h2 className="text-4xl md:text-4xl font-extrabold mb-8 text-center text-blue-400">
        New York City Initiatives
      </h2>
      <div className="flex flex-col md:flex-row gap-6 h-[calc(100vh-8rem)]">
        {/* Map */}
        <div className="flex-[2] min-h-[400px] md:h-full rounded-lg overflow-hidden shadow-md">
          <MapContainer
            center={[40.7128, -74.006]}
            zoom={11}
            scrollWheelZoom={false}
            className="w-full h-full"
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
        <div className="flex-[1] h-full overflow-y-auto space-y-4">
          <input
            type="text"
            placeholder="Search initiatives..."
            className="w-full mb-4 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <ul className="space-y-4">
            {filteredInitiatives.map((init) => (
              <li
                key={init.name}
                className="relative rounded-2xl overflow-hidden shadow-lg bg-white p-4"
              >
                {/* click name/description to fly */}
                <div onClick={() => setSelectedMarker(init)}>
                  <strong className="text-lg text-blue-500">{init.name}</strong>
                  <p className="text-sm text-gray-700">{init.description}</p>
                </div>

                {/* link */}
                {init.link && (
                  <a
                    href={init.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-600 underline hover:text-yellow-500 mt-2 block"
                  >
                    Learn More
                  </a>
                )}
              </li>
            ))}

            {filteredInitiatives.length === 0 && (
              <li className="text-gray-500 text-center">No initiatives found.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
