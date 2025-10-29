import React, { useState } from "react";

const policies = [
  {
    name: "Plastic Bag Ban",
    category: "Environmental",
    description: "Ban on single use plastic bags in stores.",
    link: "https://portal.311.nyc.gov/article/?kanumber=KA-02484",
  },
  {
    name: "School Cellphone Ban",
    category: "Education",
    description: "Ban on using phones in classrooms during school hours.",
    link: "https://www.schools.nyc.gov/about-us/policies/cell-phone-and-electronic-device-policy",
  },
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
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-blue-50 to-yellow-50">
      <div className="pt-36 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-blue-400">
          New York City Policies
        </h2>

        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
          <input
            type="text"
            placeholder="Search policies..."
            className="flex-1 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300"
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

        {/* Policies List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPolicies.map((policy) => (
            <div
              key={policy.name}
              className="relative rounded-2xl overflow-hidden shadow-lg bg-white transform transition-transform hover:scale-105 hover:shadow-2xl p-6"
            >
              <h3 className="text-xl font-bold mb-2 text-blue-500">{policy.name}</h3>
              <p className="text-sm text-gray-700 mb-2">{policy.description}</p>
              <p className="text-xs text-gray-400 mb-4">Category: {policy.category}</p>
              {policy.link && (
                <a
                  href={policy.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 font-medium underline hover:text-yellow-500"
                >
                  Learn More
                </a>
              )}
            </div>
          ))}

          {filteredPolicies.length === 0 && (
            <p className="text-gray-500 text-center col-span-full">
              No policies found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
