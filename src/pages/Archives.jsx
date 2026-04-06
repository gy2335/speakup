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
    <div className="min-h-screen w-screen bg-gradient-to-br from-white via-blue-50 to-yellow-50 overflow-y-auto">

      {/* Header */}
      <div className="flex-1 flex flex-col justify-center items-center px-10 py-10">
        <h2 className="text-5xl font-extrabold text-blue-400 mb-6">
          Archives
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6 max-w-lg">
          A record of past New York City news. Browse through previous events to understand how the city has evolved over time.
        </p>
        <p className="text-gray-600 italic">
          "The more you know about the past, the better prepared you are for the future."
        </p>
        <p className="text-gray-600 mb-8">- Theodore Roosevelt</p>

        {/* Date Filter */}
        <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-sm">
          <h4 className="text-lg font-semibold text-blue-400 mb-4 text-center">Filter by Date</h4>
          <div className="flex flex-col space-y-3">
            <div>
              <label className="text-sm text-gray-500 mb-1 block">From</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="text-sm text-gray-500 mb-1 block">To</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            {(startDate || endDate) && (
              <button
                onClick={() => { setStartDate(""); setEndDate(""); }}
                className="text-sm text-blue-400 hover:text-blue-600 underline text-center"
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

      {/* Divider */}
     <div className="w-full border-t border-blue-100 mb-10" />

      {/* Archived Cards */}
      <div className="px-10 pb-16">
        <h3 className="text-2xl font-semibold text-yellow-400 mb-8 text-center">
          Past Events & Updates
        </h3>


         {sorted.length === 0 ? (
          <p className="text-center text-gray-400 mt-10">No events found in this date range.</p>
        ) : (
          <div className="columns-1 md:columns-2 gap-8 max-w-5xl mx-auto">
            {sorted.map((item, index) => (
              <div
                key={index}
                className="break-inside-avoid mb-8 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full object-cover"
                />
                <div className="p-5">
                  <p className="text-xs text-gray-400 mb-1">{item.date}</p>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                  {item.significance && (
                    <p className="text-xs text-blue-400 italic">Significance: {item.significance}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
