import React, { useState } from "react";

const policies = [
    // Environmental
  {
    name: "Plastic Bag Ban",
    category: "Environmental",
    description: "Ban on single use plastic bags in stores.",
    link: "https://portal.311.nyc.gov/article/?kanumber=KA-02484",
  },

  // Education
  {
    name: "School Cellphone Ban",
    category: "Education",
    description: "Ban on using phones in classrooms during school hours.",
    link: "https://www.schools.nyc.gov/about-us/policies/cell-phone-and-electronic-device-policy",
  },

  // Housing & Development
  {
    name: "Fair Chance Housing Act (Local Law 24)",
    category: "Housing & Development",
    year: "Effective Jan 1, 2025",
    description: "Prohibits housing discrimination based on criminal history, reducing barriers for individuals with prior convictions seeking housing.",
    whoImpacts: "People with criminal records, tenants seeking affordable housing, landlords adapting to new regulations.",
    link: "https://www.nyc.gov/site/fairhousingnyc/resources/fair-chance-housing.page"
  },
  {
    name: "Affordable Housing Initiatives",
    category: "Housing & Development",
    year: "2024",
    description: "Adams administration created/preserved 13,000+ affordable housing units across 24 projects.",
    whoImpacts: "Low- and moderate-income households, communities facing gentrification pressures.",
    link: "https://www.nyc.gov/office-of-the-mayor/news/383-24"
  },
  {
    name: "Landlord Accountability Regulations",
    category: "Housing & Development",
    year: "Ongoing",
    description: "Landlords must provide safe, habitable living conditions, including essential services and hazard mitigation.",
    whoImpacts: "Renters, especially in older or low-income buildings.",
    link: "https://www.nyc.gov/site/hpd/renters/tenant-rights.page"
  },
  {
    name: "Rent Stabilization Program Updates",
    category: "Housing & Development",
    year: "2023–2024",
    description: "Updated rules to prevent steep rent hikes and unlawful evictions.",
    whoImpacts: "Rent-stabilized tenants and low-income families.",
    link: "https://rentguidelinesboard.cityofnewyork.us/"
  },
  {
    name: "NYC Housing Preservation Program",
    category: "Housing & Development",
    year: "2023",
    description: "Grants and incentives for landlords to maintain affordable units and rehabilitate older buildings.",
    whoImpacts: "Renters in aging housing stock, landlords participating in preservation programs.",
    link: "https://www.nyc.gov/site/hpd/services-and-information/housing-preservation.page"
  },

  // Education
  {
    name: "NYC Reads Literacy Curriculum",
    category: "Education",
    year: "2024–2025",
    description: "Mandates evidence-based reading curricula in public schools (early childhood → K–5).",
    whoImpacts: "Students in early education, teachers implementing new curricula, school administrators.",
    link: "https://www.schools.nyc.gov/learning/nyc-reads"
  },
  {
    name: "Peer-to-Peer Mental Health Training",
    category: "Education",
    year: "Nov 2024",
    description: "Public middle/high schools must offer peer-to-peer mental health training.",
    whoImpacts: "Students, counselors, educators addressing mental health.",
    link: "https://www.nyc.gov/office-of-the-mayor/news/501-24"
  },
  {
    name: "School-Based Mental Health Clinics",
    category: "Education",
    year: "Apr 2024",
    description: "16 clinics opened across Bronx & Central Brooklyn, serving 6,000+ students.",
    whoImpacts: "Students in underserved neighborhoods, school health staff.",
    link: "https://www.nyc.gov/office-of-the-mayor/news/142-24"
  },
  {
    name: "STEM Access Program",
    category: "Education",
    year: "2024",
    description: "Expands access to STEM courses for underrepresented students.",
    whoImpacts: "Minority students, girls in STEM, schools needing resources.",
    link: "https://www.schools.nyc.gov/learning/career-and-technical-education"
  },
  {
    name: "Universal Pre-K Expansion",
    category: "Education",
    year: "2023",
    description: "Adds more seats for 4-year-olds citywide to improve early childhood access.",
    whoImpacts: "Families with young children, early childhood educators.",
    link: "https://www.schools.nyc.gov/enrollment/enroll-grade-by-grade/pre-k"
  },

  // Criminal Justice
  {
    name: "Communities Not Cages Sentencing Reform",
    category: "Criminal Justice",
    year: "2024 (Proposed)",
    description: "Eliminates mandatory minimums, allowing judges to consider individual circumstances.",
    whoImpacts: "Incarcerated people, judges, attorneys, families of defendants.",
    link: "https://www.communityjusticeexchange.org/communities-not-cages"
  },
  {
    name: "Second Look Act",
    category: "Criminal Justice",
    year: "2025 (Introduced)",
    description: "Enables incarcerated individuals to petition for sentence reductions after serving part of their sentence.",
    whoImpacts: "Long-term inmates, parole boards, rehabilitation programs.",
    link: "https://www.nysenate.gov/legislation/bills/2025/S321"
  },
  {
    name: "Police Accountability Measures",
    category: "Criminal Justice",
    year: "Ongoing",
    description: "Strengthens oversight of NYPD via the NYC Police Reform & Reinvention Collaborative.",
    whoImpacts: "NYPD officers, residents in high-crime areas, civil rights groups.",
    link: "https://www1.nyc.gov/site/nypd/about/about-nypd/reform.page"
  },
  {
    name: "Bail Reform Implementation",
    category: "Criminal Justice",
    year: "2023",
    description: "Reduces pretrial detention for non-violent offenses.",
    whoImpacts: "Defendants charged with minor crimes, families of accused, legal system.",
    link: "https://www.nysenate.gov/legislation/laws/CPL/510.10"
  },
  {
    name: "Reentry Support Programs",
    category: "Criminal Justice",
    year: "2024",
    description: "Offers job training, mental health, and housing support for formerly incarcerated individuals.",
    whoImpacts: "Ex-offenders, workforce programs, community organizations.",
    link: "https://www.nyc.gov/site/doc/community/reentry.page"
  },

  // Economic Development
  {
    name: "Small Business Support",
    category: "Economic Development",
    year: "2024",
    description: "Provides resources/funding for small business growth.",
    whoImpacts: "Entrepreneurs, local business owners, economically disadvantaged communities.",
  },
  {
    name: "Job Training Programs",
    category: "Economic Development",
    year: "2024",
    description: "Equips residents with in-demand job skills.",
    whoImpacts: "Job seekers, underemployed workers, youth entering the workforce.",
  },
  {
    name: "Community Investment",
    category: "Economic Development",
    year: "2024",
    description: "Invests in neighborhood development and infrastructure.",
    whoImpacts: "Local residents, small businesses, neighborhood councils.",
  },
  {
    name: "NYC Tech Talent Pipeline",
    category: "Economic Development",
    year: "2023",
    description: "Expands tech training and internship opportunities.",
    whoImpacts: "Students, career changers, underrepresented tech applicants.",
  },
  {
    name: "Workforce Development Initiative",
    category: "Economic Development",
    year: "2024",
    description: "Vocational training & career counseling partnerships with local orgs.",
    whoImpacts: "Job seekers, local organizations, employers.",
  },

  // Transportation
  {
    name: "Public Transit Accessibility",
    category: "Transportation",
    year: "2024",
    description: "Improves infrastructure and services for all residents.",
    whoImpacts: "People with disabilities, commuters, low-income riders.",
  },
  {
    name: "Traffic Safety Initiatives",
    category: "Transportation",
    year: "2024",
    description: "Expands slow zones, enforces speed limits, reduces accidents.",
    whoImpacts: "Pedestrians, cyclists, drivers in busy neighborhoods.",
  },
  {
    name: "Sustainable Transportation",
    category: "Transportation",
    year: "2024",
    description: "Incentives for electric vehicles, infrastructure improvements.",
    whoImpacts: "Drivers, city planners, environmental advocates.",
  },
  {
    name: "Bus Network Redesign",
    category: "Transportation",
    year: "2023",
    description: "Updates bus routes to improve efficiency and accessibility.",
    whoImpacts: "Commuters, low-income neighborhoods, senior citizens.",
  },
  {
    name: "Pedestrian Safety Program",
    category: "Transportation",
    year: "2024",
    description: "Upgrades crosswalks, traffic lights, and signage.",
    whoImpacts: "Pedestrians, local businesses, schools near busy roads.",
  },

  // Environmental
  {
    name: "Climate Change Mitigation",
    category: "Environmental",
    year: "2024",
    description: "Energy efficiency programs, renewable energy initiatives.",
    whoImpacts: "Residents in climate-sensitive areas, low-income households, city agencies.",
  },
  {
    name: "Waste Management",
    category: "Environmental",
    year: "2024",
    description: "Recycling improvements, landfill reduction.",
    whoImpacts: "Residents, sanitation workers, environmental groups.",
  },
  {
    name: "Green Spaces",
    category: "Environmental",
    year: "2024",
    description: "Increases/maintains urban green spaces.",
    whoImpacts: "Communities in dense neighborhoods, public health programs.",
  },
  {
    name: "Urban Heat Island Reduction",
    category: "Environmental",
    year: "2024",
    description: "Plant trees and add reflective surfaces in heat-prone areas.",
    whoImpacts: "Residents in neighborhoods with low greenery, elderly populations.",
  },
  {
    name: "Waterfront Restoration Projects",
    category: "Environmental",
    year: "2023–2024",
    description: "Restores natural waterways to improve flood resilience.",
    whoImpacts: "Coastal communities, environmental advocacy groups, local businesses.",
  },

  // Civil Rights & Social Services
  {
    name: "Anti-Discrimination Laws",
    category: "Civil Rights & Social Services",
    year: "2024",
    description: "Prevents discrimination based on race, gender, and other factors.",
    whoImpacts: "Employees, students, marginalized communities.",
  },
  {
    name: "Social Welfare Programs",
    category: "Civil Rights & Social Services",
    year: "2024",
    description: "Food/housing support programs to promote social equity.",
    whoImpacts: "Low-income families, homeless populations, non-profits.",
  },
  {
    name: "Access to Healthcare",
    category: "Civil Rights & Social Services",
    year: "2024",
    description: "Expands access to mental health services and preventive care.",
    whoImpacts: "Residents in underserved areas, youth, seniors.",
  },
  {
    name: "Immigrant Services Expansion",
    category: "Civil Rights & Social Services",
    year: "2024",
    description: "Provides legal aid, language support, and social services for immigrants.",
    whoImpacts: "Immigrant communities, refugees, legal aid organizations.",
  },
  {
    name: "Disability Inclusion Programs",
    category: "Civil Rights & Social Services",
    year: "2023–2024",
    description: "Improves accessibility in public spaces and services.",
    whoImpacts: "Residents with disabilities, advocacy groups, city planners.",
  }
];

export default function Policies() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const filteredPolicies = policies.filter((policy) => {
    return (
      policy.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (categoryFilter === "" || policy.category === categoryFilter)
    );
  });

  const categories = [...new Set(policies.map((p) => p.category))];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Outfit:wght@400;500;600;700&display=swap');

        .policy-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 4px 4px 0px #173B64;
          border: 2px solid #173B64;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
          font-family: 'Outfit', sans-serif;
        }
        .policy-card:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0px #173B64;
        }
        .policy-footer {
          margin-top: auto;
          padding-top: 0.75rem;
          border-top: 1.5px dashed #B0CDEB;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .search-input, .category-select {
          border: 2px solid #173B64;
          border-radius: 12px;
          padding: 0.65rem 1rem;
          font-family: 'Outfit', sans-serif;
          font-size: 0.95rem;
          background: white;
          box-shadow: 2px 2px 0px #173B64;
          outline: none;
          transition: box-shadow 0.15s ease;
        }
        .search-input:focus, .category-select:focus {
          box-shadow: 4px 4px 0px #173B64;
        }
      `}</style>

      <div
        className="min-h-screen w-full"
        style={{
          background: "linear-gradient(135deg, #fffbe8 0%, #f0f7ff 100%)",
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        {/* Hero */}
        <div className="flex flex-col items-center px-8 pt-16 pb-10 text-center">
          <div className="inline-block bg-[#173B64] text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            Know What's Happening
          </div>
          <h1
            className="text-6xl md:text-7xl text-[#173B64] mb-4 leading-tight"
            style={{ fontFamily: "'Bungee Shade', cursive" }}
          >
            NYC Policies
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            Browse the policies shaping New York City.
          </p>
        </div>

        {/* Section divider */}
        <div className="max-w-5xl mx-auto px-8 mb-8">
          <div className="flex items-center gap-4">
            <div className="flex-1 border-t-2 border-dashed border-[#B0CDEB]" />
            <h2
              className="text-2xl text-[#173B64] whitespace-nowrap"
              style={{ fontFamily: "'Bungee Shade', cursive" }}
            >
              Browse All
            </h2>
            <div className="flex-1 border-t-2 border-dashed border-[#FFE8A1]" />
          </div>
        </div>

        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 justify-center px-8 max-w-4xl mx-auto">
          <input
            type="text"
            placeholder="Search policies..."
            className="search-input flex-1"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="category-select"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Policies Grid */}
        <div className="px-8 pb-20 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPolicies.map((policy) => (
              <div key={policy.name} className="policy-card">
                {/* Category pill */}
                <span className="inline-block self-start bg-[#173B64] text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
                  {policy.category}
                </span>

                <h3 className="text-xl font-bold text-[#173B64] mb-2 leading-snug">
                  {policy.name}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-2">
                  {policy.description}
                </p>

                {policy.whoImpacts && (
                  <p className="text-xs text-gray-500 italic mb-2">
                    <span className="font-semibold not-italic text-[#173B64]">Who it impacts: </span>
                    {policy.whoImpacts}
                  </p>
                )}

                <div className="policy-footer">
                  {policy.year && (
                    <span className="text-xs font-semibold text-[#B0CDEB] uppercase tracking-widest">
                      {policy.year}
                    </span>
                  )}
                  {policy.link && (
                    <a
                      href={policy.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-[#173B64] underline decoration-[#FFE8A1] decoration-2 underline-offset-2 hover:text-blue-600 transition-colors"
                    >
                      Learn More →
                    </a>
                  )}
                </div>
              </div>
            ))}

            {filteredPolicies.length === 0 && (
              <p className="text-gray-500 text-center col-span-full py-12 text-lg">
                No policies found.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
