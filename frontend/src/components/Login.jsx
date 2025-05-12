import React from 'react';

const LoginCard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0d0d0d] to-[#111] flex items-center justify-center px-4">
      <div className="bg-black/40 backdrop-blur-lg p-8 rounded-2xl w-full max-w-sm shadow-xl text-gray-200">
        <div className="flex justify-center mb-6">
          <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-2xl"></div>
        </div>

        <h2 className="text-center text-lg font-semibold">Welcome to TCB Events</h2>
        <p className="text-center text-sm text-gray-400 mb-6">
          Please sign in or sign up below.
        </p>

        <div className="mb-4">
          <label className="block text-sm mb-1">Email</label>
          <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
            <span></span>
          </div>
          <input
            type="email"
            placeholder="you@email.com"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <label className="block text-sm mb-1 mt-4">Password</label>
          <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
            <span></span>
          </div>
          <input
            type="password"
            placeholder="password"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
        </div>

        <button className="w-full py-2 mt-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition">
          Continue with Email
        </button>

      </div>
    </div>
  );
};

export default LoginCard;
