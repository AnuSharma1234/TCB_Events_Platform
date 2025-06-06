import React from 'react';
import {Link} from 'react-router-dom'

const ManageEvent = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Text Content */}
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            HACKSPHERE 3.0
        </h1>
        <div className='grid grid-cols-2 gap-4 text-l font-bold mb-5'>
            <p>Date : 12/2/24</p>
            <p>Day : Monday</p>
            <p>Venue : DT-701</p>
            <p>Max Team Size : 3</p>
        </div>
        <p className="text-gray-300 mb-6 text-lg">
            <span className='font-bold text-lg'>Event Description : </span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, maiores quia enim totam et ipsa quidem provident molestias dicta minus officia odit minima voluptatum corporis quas officiis maxime assumenda praesentium?
        </p>
        <div className="flex items-center gap-4 mb-10">
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold">
            <Link to='/admin/close'>Close Event</Link>
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2">
            <span className="inline-block w-4 h-4 rounded-full bg-white"></span> <Link to='/admin/edit'>Edit Event</Link> 
          </button>
        </div>
     </div>

      <div className="w-full md:max-w-lg rounded-xl overflow-hidden shadow-xl">
        <img
          src="/images/volunteers.jpg"
          alt="Event Banner"
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};

export default ManageEvent;
