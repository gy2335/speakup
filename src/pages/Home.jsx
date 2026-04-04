import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row h-screen w-screen bg-gradient-to-br from-white via-blue-50 to-yellow-50">

      {/* Speak Up's Mission */}
      <div className="flex-1 flex flex-col justify-center items-center px-10 py-10">
        <h2 className="text-5xl font-extrabold text-blue-400 mb-6">
          Welcome to Speak Up!
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6 max-w-lg">
          Speak Up is a platform dedicated to helping New Yorkers understand local policies and initiatives. We break down government action and provide accessible opportunities so that everyone can actively engage with their community and have their voices heard.
        </p>
        <p className="text-gray-600 italic">
          “Speak up, even if your voice shakes.”
        </p>
        <p className="text-gray-600">
          - Eleanor Roosevelt
        </p>
      </div>

      {/* Current Events */}
      <div className="flex-1 bg-white shadow-md rounded-2xl p-8 mt-20 md:mt-20 mx-20 overflow-y-auto">
        <h3 className="text-2xl font-semibold text-yellow-400 mb-6 text-center">
          New York City News & Updates
        </h3>

        <div className="space-y-6 text-left">
          {/* Mamdani Inaugurated */}
          <div className="relative rounded-xl overflow-hidden h-48 shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            <img src="inauguration.webp" alt="Mamdani Inauguration" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 text-white">
              <h4 className="text-xl font-bold">Zohran Mamdani Sworn In as NYC's 112th Mayor</h4>
              <p className="text-sm">
                Mamdani was inaugurated in two ceremonies, becoming NYC's first Muslim and first South Asian mayor, and its youngest since 1892.
              </p>
              <p className="text-xs italic mt-1">
                Significance: A historic shift in NYC leadership following the most-watched mayoral race in decades.
              </p>
            </div>
          </div>

          {/* Free 2-K Child Care */}
          <div className="relative rounded-xl overflow-hidden h-48 shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            <img src="childcare.webp" alt="Free Child Care" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-end p-4 text-white">
              <h4 className="text-xl font-bold">NYC Launches Free Child Care for Two-Year-Olds</h4>
              <p className="text-sm">
                Mayor Mamdani and Governor Hochul announced 2,000 free 2-K seats launching this fall in four communities, regardless of income or immigration status.
              </p>
              <p className="text-xs italic mt-1">
                Significance: A cornerstone of Mamdani's push toward universal child care from six weeks to five years old.
              </p>
            </div>
          </div>

          {/* Cell Phone Ban */}
          <div className="relative rounded-xl overflow-hidden h-48 shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            <img src="cellphones.avif" alt="Cell Phone Ban" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-end p-4 text-white">
              <h4 className="text-xl font-bold">Cell Phone Ban in Schools</h4>
              <p className="text-sm">
                The cell phone ban has occurred for two months since the start of schools across New York City.
              </p>
            </div>
          </div>

          {/* Zohran Mamdani nomination */}
          <div className="relative rounded-xl overflow-hidden h-48 shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            <img src="zohran.jpg" alt="Mamdani nomination" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-end p-4 text-white">
              <h4 className="text-xl font-bold">Zohran Mamdani wins Democratic nomination for NYC mayor</h4>
              <p className="text-xs">July 1, 2025</p>
              <p className="text-sm mt-1">
                A major upset as Mamdani defeats Andrew Cuomo in the Democratic primary, signaling a shift in NYC’s political landscape.
              </p>
              <p className="text-xs italic mt-1">
                Significance: Marks growing strength of progressive politics in New York City.
              </p>
            </div>
          </div>

          {/* Hochul endorsement */}
          <div className="relative rounded-xl overflow-hidden h-48 shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            <img src="hocul.jpg" alt="Hochul endorsement" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-end p-4 text-white">
              <h4 className="text-xl font-bold">Kathy Hochul endorses Zohran Mamdani</h4>
              <p className="text-xs">Sep 15, 2025</p>
              <p className="text-sm mt-1">
                The New York Governor publicly throws support behind Mamdani, bolstering his campaign ahead of the general election.
              </p>
              <p className="text-xs italic mt-1">
                Significance: Shows establishment support aligning with a progressive candidate.
              </p>
            </div>
          </div>

          {/* NYC Is Not for Sale Rally */}
          <div className="relative rounded-xl overflow-hidden h-48 shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            <img src="nycnotforsale.jpg" alt="NYC Is Not for Sale Rally" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-end p-4 text-white">
              <h4 className="text-xl font-bold">“NYC Is Not for Sale” Mayoral Election Rally</h4>
              <p className="text-xs">Oct 27, 2025</p>
              <p className="text-sm mt-1">
                Rally in Queens attended by about 13,000 people, featuring progressive figures and major campaign messaging ahead of the Nov 4 election.
              </p>
              <p className="text-xs italic mt-1">
                Significance: Highlights grassroots energy and mobilization in the upcoming mayoral race.
              </p>
            </div>
          </div>

          {/* Early Voting Period */}
          <div className="relative rounded-xl overflow-hidden h-48 shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            <img src="earlyvote.webp" alt="Early Voting Period" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-end p-4 text-white">
              <h4 className="text-xl font-bold">Early Voting Period Declared for 2025 NYC Elections</h4>
              <p className="text-xs">Oct 25–Nov 2, 2025</p>
              <p className="text-sm mt-1">
                Official early-voting dates announced for the general election, giving voters longer access to ballots.
              </p>
              <p className="text-xs italic mt-1">
                Significance: Reflects changes in voting access and civic participation in the city.
              </p>
            </div>
          </div>

          {/* Polls Show Shift */}
          <div className="relative rounded-xl overflow-hidden h-48 shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            <img src="zocucu.webp" alt="Polls Show Voter Shift" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-end p-4 text-white">
              <h4 className="text-xl font-bold">Polls Show Shift in Voter Support for NYC Mayoral Race</h4>
              <p className="text-xs">Oct 20–21, 2025</p>
              <p className="text-sm mt-1">
                Recent polling indicates a tightening race between the top mayoral candidates, signaling a highly competitive general election.
              </p>
              <p className="text-xs italic mt-1">
                Significance: Demonstrates how public opinion is shifting rapidly in the lead-up to Election Day.
              </p>
            </div>
          </div>

          {/* Comptroller Election */}
          <div className="relative rounded-xl overflow-hidden h-48 shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            <img src="comptroller.webp" alt="Comptroller Election" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-end p-4 text-white">
              <h4 className="text-xl font-bold">2025 NYC Comptroller Election Scheduled</h4>
              <p className="text-xs">Nov 4, 2025</p>
              <p className="text-sm mt-1">
                Alongside the mayor’s race, the city will elect a new Comptroller, which adds to the stakes of the 2025 elections.
              </p>
              <p className="text-xs italic mt-1">
                Significance: Important down-ballot race that impacts city finances and oversight.
              </p>
            </div>
          </div>

          {/* City Council Election */}
          <div className="relative rounded-xl overflow-hidden h-48 shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            <img src="citynyc.jpg" alt="City Council Election" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-end p-4 text-white">
              <h4 className="text-xl font-bold">2025 NYC City Council Election Announced</h4>
              <p className="text-xs">Nov 4, 2025</p>
              <p className="text-sm mt-1">
                All 51 Council seats will be contested, with implications for the legislative balance in New York City.
              </p>
              <p className="text-xs italic mt-1">
                Significance: City governance will be shaped by the outcome of these elections.
              </p>
            </div>
          </div>

          {/* No Kings Protest */}
          <div className="relative rounded-xl overflow-hidden h-48 shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            <img src="nokings.jpeg" alt="No Kings Protest" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-end p-4 text-white">
              <h4 className="text-xl font-bold">“No Kings” Protest in Downtown Manhattan</h4>
              <p className="text-xs">Aug 12, 2025</p>
              <p className="text-sm mt-1">
                Hundreds of New Yorkers gathered in Foley Square for the “No Kings” protest, calling attention to concerns about concentrated political power and criticizing the emergence of political “dynasties” in city leadership.
              </p>
              <p className="text-xs italic mt-1">
                Significance: Highlights growing public pushback against political elites and emphasizes a desire for more transparent, community-driven governance in NYC.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
