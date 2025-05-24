import React, { useState , useEffect } from 'react';
import axios from 'axios'
import {useAuth} from '../provider/authProvider.jsx'

const Home = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
    const token  = useAuth()

    const [event , setEvent] = useState({

    })


    const fetchData = async () => {
        try{
            const response = await axios.get('http://localhost:5000/event',{
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })
            events = response.data
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])


    return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-black text-white flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
        <div className="flex space-x-6 items-center">
          <span className="text-white font-semibold">✨</span>
          <a href="#" className="text-lg">thecodebreakers</a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="w-6 h-6 rounded-full bg-gray-600"></button>
        </div>
      </header>

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
        <h1 className="text-3xl font-semibold mb-6">Live Events</h1>
        <div className="space-y-10">
            <div key={events.id} className="flex items-start space-x-6">
              <div className="w-24 text-right">
                <p className="text-lg">{events.date}</p>
                <p className="text-sm text-gray-500">{events.day}</p>
              </div>
              <div className="w-1 h-full bg-gray-600 rounded-full mx-3 mt-2" />
              <div className="flex-1 bg-[#1f1f2f] rounded-xl p-4 flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-400">{events.time}</p>
                  <h2 className="text-xl font-semibold">{events.title}</h2>
                  <p className="text-sm text-gray-400 mt-1">By {events.hosts}</p>
                  <p className="text-sm text-gray-500 mt-1">📍 {events.location}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-xs bg-green-700 px-2 py-1 rounded">Going</span>
                    <span className="text-sm text-gray-300">+{events.goingCount}</span>
                  </div>
                </div>
                <img src={events.image} alt={events.title} className="w-28 h-20 rounded-md object-cover" />
              </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
