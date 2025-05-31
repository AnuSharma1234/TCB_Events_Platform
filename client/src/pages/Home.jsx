import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import getUserRole from '../provider/userRoleProvider';
import { useNavigate } from 'react-router-dom';

const eventsData = {
  upcoming: [
    {
      id: 1,
      time: '6:00 PM',
      date: 'May 3',
      day: 'Saturday',
      title: 'Arbitrum: Origin Point',
      hosts: 'Mohammad Adnan Dalal & Ashutosh Pandey',
      location: 'Asterisk Co-working',
      goingCount: 67,
      image: '/arbitrum.png',
    },
  ],
  past: [
    {
      id: 2,
      time: '6:00 PM',
      date: 'Apr 26',
      day: 'Saturday',
      title: 'Stellar Big Bang: Nagpur Edition',
      hosts: 'Stellar India & Anshul Vora',
      location: 'Asterisk Co-working',
      goingCount: 40,
      image: '/stellar.png',
    },
    {
      id: 3,
      time: '4:00 PM',
      date: 'Apr 17',
      day: 'Thursday',
      title: 'CITREA NAGPUR CHAPTER',
      hosts: 'Cheesecake, Nishant Chinchole & Naman Gupta',
      location: 'IIIT Nagpur',
      goingCount: 61,
      image: '/citrea.png',
    },
  ],
};

const Home = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const navigate = useNavigate()

  const events = eventsData[activeTab];

  const role = getUserRole()

  useEffect(()=>{
    if(role){
        navigate('/admin')
    }
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-black text-white flex flex-col">
      {/* Navbar */}
      <Navbar/>
           {/* Tabs */}
      <div className="flex justify-center mt-6 space-x-2">
        <button
          onClick={() => setActiveTab('upcoming')}
          className={`px-4 py-1 rounded-full text-sm font-medium ${
            activeTab === 'upcoming' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'
          }`}
        >
          Upcoming
        </button>
        <button
          onClick={() => setActiveTab('past')}
          className={`px-4 py-1 rounded-full text-sm font-medium ${
            activeTab === 'past' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'
          }`}
        >
          Past
        </button>
      </div>

      {/* Events Timeline */}
      <main className="px-8 py-10">
        <h1 className="text-3xl font-semibold mb-6">Events</h1>
        <div className="space-y-10">
          {events.map((event) => (
            <div key={event.id} className="flex items-start space-x-6">
              <div className="w-24 text-right">
                <p className="text-lg">{event.date}</p>
                <p className="text-sm text-gray-500">{event.day}</p>
              </div>
              <div className="w-1 h-full bg-gray-600 rounded-full mx-3 mt-2" />
              <div className="flex-1 bg-[#1f1f2f] rounded-xl p-4 flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-400">{event.time}</p>
                  <h2 className="text-xl font-semibold">{event.title}</h2>
                  <p className="text-sm text-gray-400 mt-1">By {event.hosts}</p>
                  <p className="text-sm text-gray-500 mt-1">📍 {event.location}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-xs bg-green-700 px-2 py-1 rounded">Going</span>
                    <span className="text-sm text-gray-300">+{event.goingCount}</span>
                  </div>
                </div>
                <img src={event.image} alt={event.title} className="w-28 h-20 rounded-md object-cover" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
