import React, { useState } from "react";

export default function Archives() {
  const archives = [
    {
      img: "mayoraldebate.png",
      title: "Mayoral Election Debate",
      date: "Oct 16, 2025",
      sortDate: new Date("2025-10-16"),
      description: "Candidates Zohran Mamdani, Andrew Cuomo, and Curtis Sliwa debated elites, housing, and safety in the first general election debate on WNBC.",
      significance: "",
    },
    {
      img: "train.jpg",
      title: "Transit Upgrades",
      date: "Jul 22, 2025",
      sortDate: new Date("2025-07-22"),
      description: "The MTA announced accessibility improvements across 12 key subway stations as part of its 2025–2029 capital plan.",
      significance: "",
    },
    {
      img: "cellphones.avif",
      title: "Cell Phone Ban in Schools",
      date: "Sep 4, 2025",
      sortDate: new Date("2025-09-04"),
      description: "New York's statewide bell-to-bell smartphone ban went into effect on the first day of the 2025–26 school year across NYC public schools.",
      significance: "",
    },
    {
      img: "zohran.jpg",
      title: "Zohran Mamdani wins Democratic nomination for NYC mayor",
      date: "Jul 1, 2025",
      sortDate: new Date("2025-07-01"),
      description: "A major upset as Mamdani defeats Andrew Cuomo in the Democratic primary, signaling a shift in NYC's political landscape.",
      significance: "Marks growing strength of progressive politics in New York City.",
    },
    {
      img: "hocul.jpg",
      title: "Kathy Hochul endorses Zohran Mamdani",
      date: "Sep 15, 2025",
      sortDate: new Date("2025-09-15"),
      description: "The New York Governor publicly throws support behind Mamdani, bolstering his campaign ahead of the general election.",
      significance: "Shows establishment support aligning with a progressive candidate.",
    },
    {
      img: "nycnotforsale.jpg",
      title: '"NYC Is Not for Sale" Mayoral Election Rally',
      date: "Oct 27, 2025",
      sortDate: new Date("2025-10-27"),
      description: "Rally in Queens attended by about 13,000 people, featuring progressive figures and major campaign messaging ahead of the Nov 4 election.",
      significance: "Highlights grassroots energy and mobilization in the upcoming mayoral race.",
    },
    {
      img: "earlyvote.webp",
      title: "Early Voting Period Declared for 2025 NYC Elections",
      date: "Oct 25, 2025",
      sortDate: new Date("2025-10-25"),
      description: "Official early-voting dates announced for the general election, giving voters longer access to ballots.",
      significance: "Reflects changes in voting access and civic participation in the city.",
    },
    {
      img: "zocucu.webp",
      title: "Polls Show Shift in Voter Support for NYC Mayoral Race",
      date: "Oct 20, 2025",
      sortDate: new Date("2025-10-20"),
      description: "Recent polling indicates a tightening race between the top mayoral candidates, signaling a highly competitive general election.",
      significance: "Demonstrates how public opinion is shifting rapidly in the lead-up to Election Day.",
    },
    {
      img: "comptroller.webp",
      title: "2025 NYC Comptroller Election Scheduled",
      date: "Nov 4, 2025",
      sortDate: new Date("2025-11-04"),
      description: "Alongside the mayor's race, the city will elect a new Comptroller, which adds to the stakes of the 2025 elections.",
      significance: "Important down-ballot race that impacts city finances and oversight.",
    },
    {
      img: "citynyc.jpg",
      title: "2025 NYC City Council Election Announced",
      date: "Nov 4, 2025",
      sortDate: new Date("2025-11-04"),
      description: "All 51 Council seats will be contested, with implications for the legislative balance in New York City.",
      significance: "City governance will be shaped by the outcome of these elections.",
    },
    {
      img: "nokings.jpeg",
      title: '"No Kings" Protest in Downtown Manhattan',
      date: "Aug 12, 2025",
      sortDate: new Date("2025-08-12"),
      description: 'Hundreds of New Yorkers gathered in Foley Square for the "No Kings" protest, calling attention to concerns about concentrated political power.',
      significance: "Highlights growing public pushback against political elites and a desire for more transparent, community-driven governance in NYC.",
    },
  ];

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const filtered = archives.filter((item) => {
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;
    if (start && item.sortDate < start) return false;
    if (end && item.sortDate > end) return false;
    return true;
  });

  const sorted = [...filtered].sort((a, b) => a.sortDate - b.sortDate);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Outfit:wght@400;500;600;700&display=swap');

        .archive-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          border: 2px solid #173B64;
          box-shadow: 4px 4px 0px #173B64;
          transition: box-shadow 0.2s ease;
          font-family: 'Outfit', sans-serif;
        }
        .archive-card:hover {
          box-shadow: 6px 6px 0px #173B64;
        }
        .significance-tag {
          margin-top: 0.75rem;
          padding-top: 0.75rem;
          border-top: 1.5px dashed #B0CDEB;
          font-size: 0.78rem;
          color: #2563eb;
          font-style: italic;
          font-family: 'Outfit', sans-serif;
        }
        .filter-box {
          background: white;
          border: 2px solid #173B64;
          border-radius: 20px;
          box-shadow: 4px 4px 0px #173B64;
          padding: 1.5rem 2rem;
          font-family: 'Outfit', sans-serif;
        }
        .date-input {
          border: 2px solid #173B64;
          border-radius: 10px;
          padding: 0.5rem 0.75rem;
          font-family: 'Outfit', sans-serif;
          font-size: 0.9rem;
          background: white;
          box-shadow: 2px 2px 0px #173B64;
          outline: none;
          width: 100%;
          transition: box-shadow 0.15s ease;
        }
        .date-input:focus {
          box-shadow: 4px 4px 0px #173B64;
        }
      `}</style>

      <div
        className="min-h-screen w-screen overflow-y-auto"
        style={{
          background: "linear-gradient(135deg, #fffbe8 0%, #f0f7ff 100%)",
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        {/* Hero */}
        <div className="flex flex-col items-center px-8 pt-16 pb-10 text-center">
          <div className="inline-block bg-[#173B64] text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            Past Events
          </div>
          <h1
            className="text-6xl md:text-7xl text-[#173B64] mb-4 leading-tight"
            style={{ fontFamily: "'Bungee Shade', cursive" }}
          >
            Archives
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mb-4">
            A record of past New York City news. Browse through previous events to understand how the city has evolved over time.
          </p>
          <div
            className="filter-box w-full max-w-sm mt-4"
          >
            <h4
              className="text-lg font-bold text-[#173B64] mb-4 text-center"
              style={{ fontFamily: "'Bungee Shade', cursive" }}
            >
              Filter by Date
            </h4>
            <div className="flex flex-col space-y-3">
              <div>
                <label className="text-sm text-gray-500 mb-1 block font-semibold">From</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="date-input"
                />
              </div>
              <div>
                <label className="text-sm text-gray-500 mb-1 block font-semibold">To</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="date-input"
                />
              </div>
              {(startDate || endDate) && (
                <button
                  onClick={() => { setStartDate(""); setEndDate(""); }}
                  className="text-sm font-bold text-[#173B64] underline decoration-[#FFE8A1] decoration-2 underline-offset-2 hover:text-blue-600 transition-colors text-center"
                >
                  Clear filter
                </button>
              )}
            </div>
            <p className="text-xs text-gray-400 mt-3 text-center">
              Showing {sorted.length} of {archives.length} events
            </p>
          </div>
        </div>

        {/* Section divider */}
        <div className="max-w-5xl mx-auto px-8 mb-10">
          <div className="flex items-center gap-4">
            <div className="flex-1 border-t-2 border-dashed border-[#B0CDEB]" />
            <h2
              className="text-2xl text-[#173B64] whitespace-nowrap"
              style={{ fontFamily: "'Bungee Shade', cursive" }}
            >
              Past Events & Updates
            </h2>
            <div className="flex-1 border-t-2 border-dashed border-[#FFE8A1]" />
          </div>
        </div>

        {/* Cards */}
        <div className="px-8 pb-20 max-w-5xl mx-auto">
          {sorted.length === 0 ? (
            <p className="text-center text-gray-400 mt-10 text-lg">No events found in this date range.</p>
          ) : (
            <div className="columns-1 md:columns-2 gap-6">
              {sorted.map((item, index) => (
                <div key={index} className="archive-card break-inside-avoid mb-6">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full object-cover"
                    style={{ backgroundColor: "#f8fafc" }}
                  />
                  <div className="p-5">
                    <span className="text-xs font-semibold text-[#B0CDEB] uppercase tracking-widest mb-1 block">
                      {item.date}
                    </span>
                    <h4 className="text-lg font-bold text-[#173B64] mb-2 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                    {item.significance && (
                      <div className="significance-tag">
                        ★ {item.significance}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}