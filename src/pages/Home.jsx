import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row h-screen w-screen bg-gradient-to-br from-white via-blue-50 to-yellow-50">

      {/* Speak Up Mission Yur! */}
      <div className="flex-1 flex flex-col justify-center items-center px-10 py-10">
        <h2 className="text-5xl font-extrabold text-blue-500 mb-6">
          Welcome to Speak Up!
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6 max-w-lg">
          Speak Up is a platform dedicated to helping New Yorkers understand policies in their own city. We simplify local government action to facilitate community and civic engagement, allowing everyone’s voice to be heard.
        </p>
        <p className="text-gray-600 italic">
          “Speak up, even if your voice shakes.”
        </p>
        <p className="text-gray-600">
          - Eleanor Roosevelt
        </p>
      </div>

      {/* NYC Current Events */}
      <div className="flex-1 bg-white shadow-md rounded-2xl p-8 mt-20 md:mt-20 mx-20">
        <h3 className="text-2xl font-semibold text-yellow-400 mb-6 text-center">
          New York City News & Updates
        </h3>

        <div className="space-y-6 text-left">
          {/*1*/}
          <div className="relative rounded-xl overflow-hidden h-48 shadow-lg">
            <img
              src="mayoraldebate.png"
              alt="Mayoral Debate"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 text-white">
              <h4 className="text-xl font-bold">Mayoral Election</h4>
              <p className="text-sm">
                Candidates Zohran Mamdami, Andrew Cuomo, and Curtis Sliwa debate
                housing, climate, and safety. Early voting begins next week!
              </p>
            </div>
          </div>

          {/*2*/}
          <div className="relative rounded-xl overflow-hidden h-48 shadow-lg">
            <img
              src="trains.jpg"
              alt="Train"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900 bg-opacity-40 flex flex-col justify-end p-4 text-white">
              <h4 className="text-xl font-bold">Transit Upgrades</h4>
              <p className="text-sm">
                The MTA is rolling out accessibility improvements across 12 key
                subway stations as part of its 2025 modernization plan.
              </p>
            </div>
          </div>

          {/*3*/}
          <div className="relative rounded-xl overflow-hidden h-48 shadow-lg">
            <img
              src="idk"
              alt="idk"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-yellow-700 bg-opacity-40 flex flex-col justify-end p-4 text-white">
              <h4 className="text-xl font-bold">idk</h4>
              <p className="text-sm">
                idk
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
