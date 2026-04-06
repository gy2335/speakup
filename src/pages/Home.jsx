import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-white via-blue-50 to-yellow-50 overflow-y-auto">

      {/* Speak Up's Mission */}
      <div className="flex flex-col justify-center items-center px-10 py-16 text-center">
        <h2 className="text-5xl font-extrabold text-blue-400 mb-6">
          Welcome to Speak Up!
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6 max-w-2xl">
          Speak Up is a platform dedicated to helping New Yorkers understand local policies and initiatives. We break down government action and provide accessible opportunities so that everyone can actively engage with their community and have their voices heard.
        </p>
        <p className="text-gray-600 italic">"Speak up, even if your voice shakes."</p>
        <p className="text-gray-600">- Eleanor Roosevelt</p>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-blue-100 mb-10" />

      {/* News Section */}
      <div className="px-10 pb-16">
        <h3 className="text-2xl font-semibold text-yellow-400 mb-8 text-center">
          New York City News & Updates
        </h3>

        <div className="flex flex-col gap-12 max-w-3xl mx-auto">

          {/* NYC Budget Deficit */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <img src="budget.webp" alt="NYC Budget Deficit" className="w-full object-cover" />
            <div className="p-5">
              <p className="text-xs text-gray-400 mb-1">Apr 1, 2026</p>
              <h4 className="text-xl font-bold text-gray-800 mb-2">NYC Faces $5.4 Billion Budget Gap</h4>
              <p className="text-sm text-gray-600 mb-2">
                Mayor Mamdani and the City Council are clashing over how to close a $5.4 billion deficit, with disagreements over property tax hikes and service cuts.
              </p>
              <p className="text-xs text-blue-400 italic">
                Significance: The outcome will directly affect city services, schools, and public workers across all five boroughs.
              </p>
            </div>
          </div>

          {/* TikTok Ban Reversed */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <img src="tiktok.avif" alt="TikTok Ban Reversed" className="w-full object-cover" />
            <div className="p-5">
              <p className="text-xs text-gray-400 mb-1">Mar 31, 2026</p>
              <h4 className="text-xl font-bold text-gray-800 mb-2">NYC Government Returns to TikTok</h4>
              <p className="text-sm text-gray-600 mb-2">
                Mayor Mamdani reversed the city's TikTok ban, allowing agencies to post again under strict security rules to better communicate with New Yorkers.
              </p>
              <p className="text-xs text-blue-400 italic">
                Significance: Reflects the new administration's focus on accessible, social-media-forward civic communication.
              </p>
            </div>
          </div>

          {/* $108M Sewer Investment */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <img src="sewer.jpg" alt="Sewer Investment" className="w-full object-cover" />
            <div className="p-5">
              <p className="text-xs text-gray-400 mb-1">Mar 31, 2026</p>
              <h4 className="text-xl font-bold text-gray-800 mb-2">$108M Investment to Upgrade NYC Sewers</h4>
              <p className="text-sm text-gray-600 mb-2">
                The city announced a $108 million plan to replace over 6,700 catch basins citywide over the next decade to reduce flooding from intense rainstorms.
              </p>
              <p className="text-xs text-blue-400 italic">
                Significance: Addresses growing climate-driven flooding as part of NYC's infrastructure resilience push.
              </p>
            </div>
          </div>

          {/* Office of Community Safety */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <img src="officesafe.webp" alt="Office of Community Safety" className="w-full object-cover" />
            <div className="p-5">
              <p className="text-xs text-gray-400 mb-1">Mar 19, 2026</p>
              <h4 className="text-xl font-bold text-gray-800 mb-2">NYC Launches Office of Community Safety</h4>
              <p className="text-sm text-gray-600 mb-2">
                Mayor Mamdani signed an executive order creating the new Office of Community Safety, focused on civilian mental health crisis response.
              </p>
              <p className="text-xs text-blue-400 italic">
                Significance: Aims to shift some public safety responsibilities from police to trained civilian responders.
              </p>
            </div>
          </div>

          {/* Rental Rip-Off Hearings */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <img src="housing.jpeg" alt="Rental Rip-Off Hearings" className="w-full object-cover" />
            <div className="p-5">
              <p className="text-xs text-gray-400 mb-1">Mar 17, 2026</p>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Mamdani Hosts "Rental Rip-Off" Hearings for Tenants</h4>
              <p className="text-sm text-gray-600 mb-2">
                The mayor launched a new forum where renters can bring complaints about bad landlords directly to housing officials — and the mayor himself.
              </p>
              <p className="text-xs text-blue-400 italic">
                Significance: Puts tenant protection at the center of the new administration's housing agenda.
              </p>
            </div>
          </div>

          {/* Free 2-K Child Care */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <img src="childcare.webp" alt="Free Child Care" className="w-full object-cover" />
            <div className="p-5">
              <p className="text-xs text-gray-400 mb-1">Mar 3, 2026</p>
              <h4 className="text-xl font-bold text-gray-800 mb-2">NYC Launches Free Child Care for Two-Year-Olds</h4>
              <p className="text-sm text-gray-600 mb-2">
                Mayor Mamdani and Governor Hochul announced 2,000 free 2-K seats launching this fall in four communities, regardless of income or immigration status.
              </p>
              <p className="text-xs text-blue-400 italic">
                Significance: A cornerstone of Mamdani's push toward universal child care from six weeks to five years old.
              </p>
            </div>
          </div>

          {/* Mamdani Inaugurated */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <img src="inauguration.webp" alt="Mamdani Inauguration" className="w-full object-cover" />
            <div className="p-5">
              <p className="text-xs text-gray-400 mb-1">Jan 1, 2026</p>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Zohran Mamdani Sworn In as NYC's 112th Mayor</h4>
              <p className="text-sm text-gray-600 mb-2">
                Mamdani was inaugurated in two ceremonies, becoming NYC's first Muslim and first South Asian mayor, and its youngest since 1892.
              </p>
              <p className="text-xs text-blue-400 italic">
                Significance: A historic shift in NYC leadership following the most-watched mayoral race in decades.
              </p>
            </div>
          </div>

          {/* Minimum Wage */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <img src="wage.jpg" alt="Minimum Wage Increase" className="w-full object-cover" />
            <div className="p-5">
              <p className="text-xs text-gray-400 mb-1">Jan 1, 2026</p>
              <h4 className="text-xl font-bold text-gray-800 mb-2">NYC Minimum Wage Rises to $17/Hour</h4>
              <p className="text-sm text-gray-600 mb-2">
                New York City's minimum wage increased to $17 per hour as part of a new round of state labor laws taking effect in 2026.
              </p>
              <p className="text-xs text-blue-400 italic">
                Significance: Provides a direct wage boost to hundreds of thousands of low-income workers in the city.
              </p>
            </div>
          </div>

          {/* FIFA World Cup */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <img src="fifa.webp" alt="FIFA World Cup" className="w-full object-cover" />
            <div className="p-5">
              <p className="text-xs text-gray-400 mb-1">Jun–Jul 2026 (Upcoming)</p>
              <h4 className="text-xl font-bold text-gray-800 mb-2">FIFA World Cup Coming to MetLife Stadium</h4>
              <p className="text-sm text-gray-600 mb-2">
                MetLife Stadium will host eight World Cup matches this summer — the New York area's first Men's World Cup games since 1994.
              </p>
              <p className="text-xs text-blue-400 italic">
                Significance: A massive global event bringing economic activity and international attention to the New York metro area.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
