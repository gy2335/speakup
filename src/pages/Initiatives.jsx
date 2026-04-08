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
  },
  {
  name: "City Harvest",
  position: [40.64858506743419, -74.01898995242118],
  description: "Help collect and deliver surplus food to hungry New Yorkers across the city.",
  link: "https://www.cityharvest.org/volunteer/"
},
{
  name: "Brooklyn Botanic Garden Volunteering",
  position: [40.66892972164425, -73.96434085403762],
  description: "Assist with garden maintenance, plant care, and educational programs at the Brooklyn Botanic Garden.",
  link: "https://www.bbg.org/volunteer"
},
{
  name: "Food Bank for NYC",
  position: [40.70683440099926, -74.01334726567987],
  description: "Support food distribution and meal preparation for vulnerable communities.",
  link: "https://www.foodbanknyc.org/volunteer/"
},
{
  name: "Housing Works Volunteering",
  position: [40.74228331975738, -73.98305157676495],
  description: "Volunteer at Housing Works thrift shops or help support programs aiding people affected by HIV/AIDS and homelessness.",
  link: "https://www.housingworks.org/"
},
{
  name: "New York Restoration Project",
  position: [40.750063991948444, -73.99441401534139],
  description: "Help restore and maintain parks and community gardens in underserved neighborhoods.",
  link: "https://www.nyrp.org/volunteer/"
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
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Outfit:wght@400;500;600;700&display=swap');

        .initiative-card {
          background: white;
          border-radius: 20px;
          border: 2px solid #173B64;
          box-shadow: 4px 4px 0px #173B64;
          padding: 1.4rem 1.6rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          cursor: pointer;
          font-family: 'Outfit', sans-serif;
          position: relative;  
          z-index: 0;  
        }
        .initiative-card:hover {
       //   transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0px #173B64;
          z-index: 10; 
        }
        .initiative-card.active {
          border-color: #2563eb;
          box-shadow: 4px 4px 0px #2563eb;
          background: #f0f7ff;
        }
        .initiative-footer {
          margin-top: 0.85rem;
          padding-top: 0.85rem;
          border-top: 1.5px dashed #B0CDEB;
        }
        .search-input {
          border: 2px solid #173B64;
          border-radius: 14px;
          padding: 0.75rem 1.1rem;
          font-family: 'Outfit', sans-serif;
          font-size: 0.95rem;
          background: white;
          box-shadow: 3px 3px 0px #173B64;
          outline: none;
          transition: box-shadow 0.15s ease;
          width: 100%;
        }
        .search-input:focus {
          box-shadow: 5px 5px 0px #173B64;
        }
        .map-wrapper {
          border: 2px solid #173B64;
          border-radius: 24px;
          box-shadow: 4px 4px 0px #173B64;
          overflow: hidden;
        }
      `}</style>

      <div
        className="w-screen min-h-screen"
        style={{
          background: "linear-gradient(135deg, #fffbe8 0%, #f0f7ff 100%)",
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        {/* Hero */}
        <div className="flex flex-col items-center px-10 pt-16 pb-10 text-center">
          <div className="inline-block bg-[#173B64] text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            Get Involved
          </div>
          <h1
            className="text-6xl md:text-7xl text-[#173B64] mb-4 leading-tight"
            style={{ fontFamily: "'Bungee Shade', cursive" }}
          >
            NYC Initiatives
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            Find volunteer opportunities and community initiatives across New York City.
            Click a card to zoom in on the map, or explore the pins directly.
          </p>
        </div>

        {/* Section divider */}
        <div className="max-w-screen-2xl mx-auto px-10 mb-8">
          <div className="flex items-center gap-4">
            <div className="flex-1 border-t-2 border-dashed border-[#B0CDEB]" />
            <h2
              className="text-2xl text-[#173B64] whitespace-nowrap"
              style={{ fontFamily: "'Bungee Shade', cursive" }}
            >
              Explore the Map
            </h2>
            <div className="flex-1 border-t-2 border-dashed border-[#FFE8A1]" />
          </div>
        </div>

        {/* Map + List*/}
        <div
          className="px-10 pb-10 mx-auto flex flex-col md:flex-row gap-8"
          style={{ height: "calc(100vh - 22rem)", maxWidth: "98vw" }}
        >
          {/* Map */}
          <div className="flex-[3] min-h-[500px] md:h-full map-wrapper">
            <MapContainer
              center={[40.7128, -74.006]}
              zoom={12}
              scrollWheelZoom={true}
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
          <div className="flex-[1] h-full overflow-y-auto flex flex-col gap-4 pr-4" style={{ minWidth: "300px" }}>
            <input
              type="text"
              placeholder="Search initiatives..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <ul className="space-y-4">
              {filteredInitiatives.map((init) => (
                <li
                  key={init.name}
                  className={`initiative-card ${selectedMarker?.name === init.name ? "active" : ""}`}
                  onClick={() => setSelectedMarker(init)}
                >
                  <span className="inline-block bg-[#173B64] text-white text-xs font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full mb-2">
                    Volunteer
                  </span>
                  <p className="text-base font-bold text-[#173B64] leading-snug mb-1">
                    {init.name}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {init.description}
                  </p>
                  {init.link && (
                    <div className="initiative-footer">
                      <a
                        href={init.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-sm font-bold text-[#173B64] underline decoration-[#FFE8A1] decoration-2 underline-offset-2 hover:text-blue-600 transition-colors"
                      >
                        Learn More →
                      </a>
                    </div>
                  )}
                </li>
              ))}

              {filteredInitiatives.length === 0 && (
                <li className="text-gray-500 text-center py-8 text-base">
                  No initiatives found.
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}