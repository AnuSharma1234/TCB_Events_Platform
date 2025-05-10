import React from 'react';

const UserProfile = () => {
  return (
    <div className="min-h-screen bg-[#1f1f1f] text-white px-8 py-6">

      {/* Profile Section */}
      <div className="flex flex-col items-center text-center">
        <div className="w-28 h-28 rounded-full bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 flex items-center justify-center text-4xl text-black font-bold mb-4">
          🙂
        </div>
        <h2 className="text-2xl font-semibold">Anurag Sharma</h2>
        <p className="text-gray-400 text-sm mt-1">📅 Joined August 2024</p>
        <p className="text-gray-400 text-sm mt-1">0 Hosted • 7 Attended</p>
      </div>

      {/* No Events Section */}
      <div className="flex flex-col items-center mt-20 text-center">
        <img
          src="/calendar-zero.png"
          alt="No Events"
          className="w-24 h-24 mb-4 opacity-70"
        />
        <h3 className="text-lg font-medium">Nothing Here, Yet</h3>
        <p className="text-gray-500 text-sm mt-1">
          Anurag Sharma has no public events at this time.
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
