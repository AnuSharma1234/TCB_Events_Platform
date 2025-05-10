import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-[#1f1f1f] text-gray-300 flex justify-between items-center px-6 py-3 text-sm">
      {/* Left side */}
      <div className="flex items-center space-x-6">
        <span className="text-yellow-400">✨</span>
        <Link to='' className='hovet:text-white'>Events</Link>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-6">
        <span className="text-gray-400">12:42 AM GMT+5:30</span>
        <a href="#" className="text-white font-medium hover:underline">Create Event</a>
        <Link to='/userProfile' className='w-5 h-5 rounded-full bg-gray-500'/>
      </div>
    </nav>
  );
};

export default Navbar;
