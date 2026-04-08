import React from "react";

export default function Home() {
  const news = [
    {
      img: "budget.webp",
      alt: "NYC Budget Deficit",
      date: "Apr 1, 2026",
      title: "NYC Faces $5.4 Billion Budget Gap",
      body: "Mayor Mamdani and the City Council are clashing over how to close a $5.4 billion deficit, with disagreements over property tax hikes and service cuts.",
      significance: "The outcome will directly affect city services, schools, and public workers across all five boroughs.",
      link: "https://www.nyc.gov/mayors-office/news/2026/02/mayor-mamdani-releases-balanced-fiscal-year-2027-preliminary-bud",
    },
    {
      img: "tiktok.avif",
      alt: "TikTok Ban Reversed",
      date: "Mar 31, 2026",
      title: "NYC Government Returns to TikTok",
      body: "Mayor Mamdani reversed the city's TikTok ban, allowing agencies to post again under strict security rules to better communicate with New Yorkers.",
      significance: "Reflects the new administration's focus on accessible, social-media-forward civic communication.",
      link: "https://www.nytimes.com/2026/03/31/nyregion/mamdani-tiktok-nyc.html",   
    },
    {
      img: "sewer.jpg",
      alt: "Sewer Investment",
      date: "Mar 31, 2026",
      title: "$108M Investment to Upgrade NYC Sewers",
      body: "The city announced a $108 million plan to replace over 6,700 catch basins citywide over the next decade to reduce flooding from intense rainstorms.",
      significance: "Addresses growing climate-driven flooding as part of NYC's infrastructure resilience push.",
      link: "https://brooklyneagle.com/378462/mamdani-improve-sewer-performance/",  
    },
    {
      img: "dcs.webp",
      alt: "Office of Community Safety",
      date: "Mar 19, 2026",
      title: "NYC Launches Office of Community Safety",
      body: "Mayor Mamdani signed an executive order creating the new Office of Community Safety, focused on civilian mental health crisis response.",
      significance: "Aims to shift some public safety responsibilities from police to trained civilian responders.",
      link: "https://www.nytimes.com/2026/03/18/nyregion/mamdani-department-community-safety-nyc.html", 
    },
    {
      img: "housing.jpeg",
      alt: "Rental Rip-Off Hearings",
      date: "Mar 17, 2026",
      title: 'Mamdani Hosts "Rental Rip-Off" Hearings for Tenants',
      body: "The mayor launched a new forum where renters can bring complaints about bad landlords directly to housing officials — and the mayor himself.",
      significance: "Puts tenant protection at the center of the new administration's housing agenda.",
      link: "https://www.nyc.gov/main/rental-ripoff",   
    },
    {
      img: "childcare.webp",
      alt: "Free Child Care",
      date: "Mar 3, 2026",
      title: "NYC Launches Free Child Care for Two-Year-Olds",
      body: "Mayor Mamdani and Governor Hochul announced 2,000 free 2-K seats launching this fall in four communities, regardless of income or immigration status.",
      significance: "A cornerstone of Mamdani's push toward universal child care from six weeks to five years old.",
      link: "https://www.nyc.gov/mayors-office/news/2026/01/mayor-mamdani---governor-hochul-to-launch-free-child-care-for-tw",
    },
    {
      img: "inauguration.webp",
      alt: "Mamdani Inauguration",
      date: "Jan 1, 2026",
      title: "Zohran Mamdani Sworn In as NYC's 112th Mayor",
      body: "Mamdani was inaugurated in two ceremonies, becoming NYC's first Muslim and first South Asian mayor, and its youngest since 1892.",
      significance: "A historic shift in NYC leadership following the most-watched mayoral race in decades.",
      link: "http://npr.org/2026/01/01/nx-s1-5663372/zohran-mamdani-sworn-in-as-new-york-city-mayor-capping-historic-rise",   
    },
    {
      img: "wage.jpg",
      alt: "Minimum Wage Increase",
      date: "Jan 1, 2026",
      title: "NYC Minimum Wage Rises to $17/Hour",
      body: "New York City's minimum wage increased to $17 per hour as part of a new round of state labor laws taking effect in 2026.",
      significance: "Provides a direct wage boost to hundreds of thousands of low-income workers in the city.",
      link: "https://www.ny.gov/programs/new-york-states-minimum-wage",   
    },
    {
      img: "fifa.webp",
      alt: "FIFA World Cup",
      date: "Jun–Jul 2026 (Upcoming)",
      title: "FIFA World Cup Coming to MetLife Stadium",
      body: "MetLife Stadium will host eight World Cup matches this summer — the New York area's first Men's World Cup games since 1994.",
      significance: "A massive global event bringing economic activity and international attention to the New York metro area.",
      link: "https://www.metlifestadium.com/events/fifa-world-cup-2026",   
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Outfit:wght@400;500;600;700&display=swap');

        .news-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 4px 4px 0px #173B64;
          border: 2px solid #173B64;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: inherit;
        }
        .news-card:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0px #173B64;
        }
        .news-card img {
          width: 100%;
          height: auto;
          object-fit: contain;
          display: block;
          margin: 0 auto;
          background-color: #f8fafc;
        }
        .card-body {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .significance-tag {
          margin-top: auto;
          padding-top: 0.75rem;
          border-top: 1.5px dashed #B0CDEB;
          font-size: 0.78rem;
          color: #2563eb;
          font-style: italic;
          font-family: 'Outfit', sans-serif;
        }
        .hero-quote {
          background: white;
          border: 2px solid #173B64;
          border-radius: 20px;
          box-shadow: 4px 4px 0px #173B64;
          padding: 1.5rem 2rem;
          max-width: 520px;
          margin: 2rem auto 0;
          text-align: center;
          font-family: 'Outfit', sans-serif;
        }
      `}</style>

      <div
        className="min-h-screen w-screen overflow-y-auto"
        style={{ background: "linear-gradient(135deg, #fffbe8 0%, #f0f7ff 100%)", fontFamily: "'Outfit', sans-serif" }}
      >
        {/* Hero */}
        <div className="flex flex-col items-center px-8 pt-16 pb-12 text-center">
          <div className="inline-block bg-[#173B64] text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            Your City. Your Voice.
          </div>

          <h1
            className="text-6xl md:text-7xl text-[#173B64] mb-6 leading-tight"
            style={{ fontFamily: "'Bungee Shade', cursive" }}
          >
            Welcome to<br />Speak Up!!
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mb-4">
            Speak Up is a platform dedicated to helping New Yorkers understand local policies and initiatives. We break down government action and provide accessible opportunities so that everyone can actively engage with their community and have their voices heard.
          </p>

          <div className="hero-quote">
            <p className="text-gray-700 text-base italic mb-2">"Speak up, even if your voice shakes."</p>
            <p className="text-[#173B64] font-semibold text-sm">— Eleanor Roosevelt</p>
          </div>
        </div>

        {/* Section divider */}
        <div className="max-w-5xl mx-auto px-8 mb-10">
          <div className="flex items-center gap-4">
            <div className="flex-1 border-t-2 border-dashed border-[#B0CDEB]" />
            <h2
              className="text-3xl text-[#173B64] whitespace-nowrap"
              style={{ fontFamily: "'Bungee Shade', cursive" }}
            >
              NYC News
            </h2>
            <div className="flex-1 border-t-2 border-dashed border-[#FFE8A1]" />
          </div>
        </div>

        {/* News Grid */}
        <div className="px-8 pb-20 max-w-6xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
            {news.map((item, i) => (
              <a
                key={i}
                href={item.link} // <-- Changed this line to use the object's link property
                target="_blank"
                rel="noopener noreferrer"
                className="news-card break-inside-avoid mb-6 block"
              >
                <img src={item.img} alt={item.alt} />
                <div className="card-body">
                  <span className="text-xs font-semibold text-[#B0CDEB] uppercase tracking-widest mb-1 block">
                    {item.date}
                  </span>
                  <h4 className="text-lg font-bold text-[#173B64] mb-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed mb-2">
                    {item.body}
                  </p>
                  <div className="significance-tag">
                    {item.significance}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}