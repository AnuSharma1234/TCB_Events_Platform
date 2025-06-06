import React from "react";
import Navbar from "../components/Navbar";

const EventRegister = () => {
  return (
    <div>
        <Navbar/>
    <div
      className="min-h-screen bg-cover bg-center bg-black flex items-center justify-center"
      //remember to add event banner as background image 
   >
      <div className="bg-zinc-900 bg-opacity-90 p-8 rounded-lg w-full max-w-md text-white">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold mt-4">Register for the event</h2>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Team Name</label>
            <input
              type="email"
              placeholder="team name"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 placeholder-gray-400 text-white"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Leader Name</label>
            <input
              type="text"
              placeholder="leader name"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 placeholder-gray-400 text-white"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Leader email</label>
            <input
              type="email"
              placeholder="leader@email.com"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Member 1 name</label>
            <input
              type="text"
              placeholder="member 1 name (if any)"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Member 2 name</label>
            <input
              type="text"
              placeholder="member 2 name (if any)"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Member 3 name</label>
            <input
              type="text"
              placeholder="member 3 name (if any)"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white"
            />
          </div>
          <div id="sizeAndYear" className="flex space-x-4">
            <div className="w-1/2 mb-3">
              <label htmlFor="size" className="block text-sm mb-1">
                Team Size
              </label>
              <select
                id="size"
                className="cursor-pointer w-full px-2 py-2 bg-gray-800 border border-gray-700 text-white text-sm rounded-md"
              >
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="w-1/2">
              <label htmlFor="year" className="block text-sm mb-1">
                Year
              </label>
              <select
                id="year"
                className="cursor-pointer w-full px-2 py-2 bg-gray-800 border border-gray-700 text-white text-sm rounded-md"
              >
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
              </select>
            </div>
          </div>
          <button className="w-full bg-cyan-500 hover:bg-cyan-700 font-bold text-white py-2 rounded-md">
            Register
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default EventRegister;
