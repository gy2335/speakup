import React from "react";

export default function Archives() {
  const archives = [
    {
      img: "mayoraldebate.png",
      title: "Mayoral Election",
      date: "",
      description: "Candidates Zohran Mamdani, Andrew Cuomo, and Curtis Sliwa recently debated elites, housing, and safety. Early voting has now begun!",
      significance: "",
    },
    {
      img: "train.jpg",
      title: "Transit Upgrades",
      date: "",
      description: "The MTA is rolling out accessibility improvements across 12 key subway stations as part of its 2025 modernization plan.",
      significance: "",
    },
    {
      img: "cellphones.avif",
      title: "Cell Phone Ban in Schools",
      date: "",
      description: "The cell phone ban has occurred for two months since the start of schools across New York City.",
      significance: "",
    },
    {
      img: "zohran.jpg",
      title: "Zohran Mamdani wins Democratic nomination for NYC mayor",
      date: "July 1, 2025",
      description: "A major upset as Mamdani defeats Andrew Cuomo in the Democratic primary, signaling a shift in NYC's political landscape.",
      significance: "Marks growing strength of progressive politics in New York City.",
    },
    {
      img: "hocul.jpg",
      title: "Kathy Hochul endorses Zohran Mamdani",
      date: "Sep 15, 2025",
      description: "The New York Governor publicly throws support behind Mamdani, bolstering his campaign ahead of the general election.",
      significance: "Shows establishment support aligning with a progressive candidate.",
    },
    {
      img: "nycnotforsale.jpg",
      title: '"NYC Is Not for Sale" Mayoral Election Rally',
      date: "Oct 27, 2025",
      description: "Rally in Queens attended by about 13,000 people, featuring progressive figures and major campaign messaging ahead of the Nov 4 election.",
      significance: "Highlights grassroots energy and mobilization in the upcoming mayoral race.",
    },
    {
      img: "earlyvote.webp",
      title: "Early Voting Period Declared for 2025 NYC Elections",
      date: "Oct 25–Nov 2, 2025",
      description: "Official early-voting dates announced for the general election, giving voters longer access to ballots.",
      significance: "Reflects changes in voting access and civic participation in the city.",
    },
    {
      img: "zocucu.webp",
      title: "Polls Show Shift in Voter Support for NYC Mayoral Race",
      date: "Oct 20–21, 2025",
      description: "Recent polling indicates a tightening race between the top mayoral candidates, signaling a highly competitive general election.",
      significance: "Demonstrates how public opinion is shifting rapidly in the lead-up to Election Day.",
    },
    {
      img: "comptroller.webp",
      title: "2025 NYC Comptroller Election Scheduled",
      date: "Nov 4, 2025",
      description: "Alongside the mayor's race, the city will elect a new Comptroller, which adds to the stakes of the 2025 elections.",
      significance: "Important down-ballot race that impacts city finances and oversight.",
    },
    {
      img: "citynyc.jpg",
      title: "2025 NYC City Council Election Announced",
      date: "Nov 4, 2025",
      description: "All 51 Council seats will be contested, with implications for the legislative balance in New York City.",
      significance: "City governance will be shaped by the outcome of these elections.",
    },
    {
      img: "nokings.jpeg",
      title: '"No Kings" Protest in Downtown Manhattan',
      date: "Aug 12, 2025",
      description: 'Hundreds of New Yorkers gathered in Foley Square for the "No Kings" protest, calling attention to concerns about concentrated political power and criticizing the emergence of political "dynasties" in city leadership.',
      significance: "Highlights growing public pushback against political elites and emphasizes a desire for more transparent, community-driven governance in NYC.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen bg-gradient-to-br from-white via-blue-50 to-yellow-50">

      {/* Left Panel */}
      <div className="flex-1 flex flex-col justify-center items-center px-10 py-10">
        <h2 className="text-5xl font-extrabold text-blue-400 mb-6">
          Archives
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6 max-w-lg">
          A record of past New York City news, policies, and initiatives. Browse
          through previous events to understand how the city has evolved over time.
        </p>
        <p className="text-gray-600 italic">
          "The more you know about the past, the better prepared you are for the future."
        </p>
        <p className="text-gray-600">- Theodore Roosevelt</p>
      </div>

      {/* Right Panel — Archived Cards */}
      <div className="flex-1 bg-white shadow-md rounded-2xl p-8 mt-20 md:mt-20 mx-20 overflow-y-auto">
        <h3 className="text-2xl font-semibold text-yellow-400 mb-6 text-center">
          Past Events & Updates
        </h3>

        <div className="space-y-6 text-left">
          {archives.map((item, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden h-48 shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 text-white">
                <h4 className="text-xl font-bold">{item.title}</h4>
                {item.date && <p className="text-xs">{item.date}</p>}
                <p className="text-sm mt-1">{item.description}</p>
                {item.significance && (
                  <p className="text-xs italic mt-1">Significance: {item.significance}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
