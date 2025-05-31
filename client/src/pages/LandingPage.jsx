import React from 'react';
import mockImage from '../assets/mockImage.png';
import {Link} from 'react-router-dom'


const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-gradient-to-br from-black via-[#0d0d0d] to-[#111] text-white">
      {/* Left Section */}
      <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Delightful events <br />
          <span className="bg-gradient-to-r from-[#4b6cb7] via-[#6b4cd3] to-[#fc6767] bg-clip-text text-transparent">
            start here.
          </span>
        </h1>
        <p className="text-gray-400 mt-4 max-w-md mb-7">
          Set up an event page, invite friends and sell tickets. Host a memorable event today.
        </p>
        <Link to='/login' className="mt-6 px-6 py-3 mr-4 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition">
          Login
        </Link>
        <Link to='/signup' className="mt-6 px-6 py-3 mr-4 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition">
            Sign-Up
        </Link>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative w-full max-w-md">
          <img
            src={mockImage}
            alt="Event Mockup"
            className="rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
