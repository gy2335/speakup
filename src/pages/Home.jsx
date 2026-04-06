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
          "Speak up, even if your voice shakes."
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

          {/* NYC Budget Deficit - Apr 1, 2026 */}
          <div className="relative rounded-xl overflow-hidden h-48 shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            <img src="budget.jpg" alt="NYC Budget Deficit" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 text-white">
              <h4 className="text-xl font-bold">NYC Faces $5.4 Billion Budget Gap</h4>
              <p className="text-xs">Apr 1, 2026</p>
              <p className="text-sm mt-1">
                Mayor Mamdani and the City Council are clashing over how to close a $5.4 billion deficit, with disagreements over property tax hikes and service cuts.
              </p>
              <p className="text-xs italic mt-1">
                Significance: The outcome will directly affect city services, schools, and public workers across all five boroughs.
              </p>
            </div>
          </div>

          {/* TikTok Ban Reversed - Mar 31, 2026 */}
          <div className="relative rounded-xl overflow-hidden h-48 shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            <img src="tiktok.jpg" alt="TikTok Ban Reversed" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 text-white">
              <h4 className="text-xl font-bold">NYC Government Returns to TikTok</h4>
              <p className="text-xs">Mar 31, 2026</p>
              <p className="text-sm mt-1">
                Mayor Mamdani reversed the city's TikTok ban, allowing agencies to post again under strict security rules to better communicate with New Yorkers.
              </p>
              <p className="text-xs italic mt-1">
                Significance: Reflects the new administration's focus on accessible, social-media-forward civic communication.
              </p>
            </div>
          </div>

          {/* $108M Sewer Investment - Mar 31, 2026 */}
          <div className="relative rounded-xl overflow-hidden h-48 shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            <img src="sewer.jpg" alt="Sewer Investment" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 text-white">
              <h4 className="text-xl font-bold">$108M Investment to Upgrade NYC Sewers</h4>
              <p className="text-xs">Mar 31, 2026</p>
              <p className="text-sm mt-1">
                The city announced a $108 million plan to replace over 6,700 catch basins citywide over the next decade to reduce flooding from intense rainstorms.
              </p>
              <p className="text-xs italic mt-1">
                Significance: Addresses growing climate-driven flooding as part of NYC's infrastructure resilience push.
              </p>
            </div>
          </div>

          {/* Office of Community Safety - Mar 19, 2026 */}
          <div className="relative rounded-xl overflow-hidden h-48 shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            <img src="publicsafety.jpg" alt="Office of Community Safety" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 text-white">
              <h4 className="text-xl font-bold">NYC Launches Office of Community Safety</h4>
              <p className="text-xs">Mar 19, 2026</p>
              <p className="text-sm mt-1">
                Mayor Mamdani signed an executive order creating the new Office of Community Safety, focused on civilian mental health crisis response.
              </p>
              <p className="text-xs italic mt-1">
                Significance: Aims to shift some public safety responsibilities from police to trained civilian responders.
              </p>
            </div>
          </div>

          {/* Rental Rip-Off Hearings - Mar 17, 2026 */}
          <div className="relative rounded-xl overflow-hidden h-48 shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            <img src="housing.jpg" alt="Rental Rip-Off Hearings" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 text-white">
              <h4 className="text-xl font-bold">Mamdani Hosts "Rental Rip-Off" Hearings for Tenants</h4>
              <p className="text-xs">Mar 17, 2026</p>
              <p className="text-sm mt-1">
                The mayor launched a new forum where renters can bring complaints about bad landlords directly to housing officials — and the mayor himself.
              </p>
              <p className="text-xs italic mt-1">
                Significance: Puts tenant protection at the center of the new administration's housing agenda.
              </p>
            </div>
          </div>

          {/* Free 2-K Child Care - Mar 3, 2026 */}
          <div className="relative rounded-xl overflow-hidden h-48 shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            <img src="childcare.jpg" alt="Free Child Care" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 text-white">
              <h4 className="text-xl font-bold">NYC Launches Free Child Care for Two-Year-Olds</h4>
              <p className="text-xs">Mar 3, 2026</p>
              <p className="text-sm mt-1">
                Mayor Mamdani and Governor Hochul announced 2,000 free 2-K seats launching this fall in four communities, regardless of income or immigration status.
              </p>
              <p className="text-xs italic mt-1">
                Significance: A cornerstone of Mamdani's push toward universal child care from six weeks to five years old.
              </p>
            </div>
          </div>

          {/* Mamdani Inaugurated - Jan 1, 2026 */}
          <div className="relative rounded-xl overflow-hidden h-48 shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            <img src="mamdani-inauguration.jpg" alt="Mamdani Inauguration" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 text-white">
              <h4 className="text-xl font-bold">Zohran Mamdani Sworn In as NYC's 112th Mayor</h4>
              <p className="text-xs">Jan 1, 2026</p>
              <p className="text-sm mt-1">
                Mamdani was inaugurated in two ceremonies, becoming NYC's first Muslim and first South Asian mayor, and its youngest since 1892.
              </p>
              <p className="text-xs italic mt-1">
                Significance: A historic shift in NYC leadership following the most-watched mayoral race in decades.
              </p>
            </div>
          </div>

          {/* Minimum Wage - Jan 1, 2026 */}
          <div className="relative rounded-xl overflow-hidden h-48 shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            <img src="minimumwage.jpg" alt="Minimum Wage Increase" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 text-white">
              <h4 className="text-xl font-bold">NYC Minimum Wage Rises to $17/Hour</h4>
              <p className="text-xs">Jan 1, 2026</p>
              <p className="text-sm mt-1">
                New York City's minimum wage increased to $17 per hour as part of a new round of state labor laws taking effect in 2026.
              </p>
              <p className="text-xs italic mt-1">
                Significance: Provides a direct wage boost to hundreds of thousands of low-income workers in the city.
              </p>
            </div>
          </div>

          {/* FIFA World Cup - Jun-Jul 2026 (Upcoming) */}
          <div className="relative rounded-xl overflow-hidden h-48 shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            <img src="worldcup.jpg" alt="FIFA World Cup" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 text-white">
              <h4 className="text-xl font-bold">FIFA World Cup Coming to MetLife Stadium</h4>
              <p className="text-xs">Jun–Jul 2026 (Upcoming)</p>
              <p className="text-sm mt-1">
                MetLife Stadium will host eight World Cup matches this summer — the New York area's first Men's World Cup games since 1994.
              </p>
              <p className="text-xs italic mt-1">
                Significance: A massive global event bringing economic activity and international attention to the New York metro area.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
