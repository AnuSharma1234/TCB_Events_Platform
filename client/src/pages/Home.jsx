import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import getUserRole from "../provider/userRoleProvider";

export default function Home() {
    const navigate = useNavigate()
    const isAdmin = getUserRole()

    useEffect(()=>{
        if(isAdmin){
            navigate('/admin')
        }
    })

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Keep existing navbar */}
      <header className="flex bg-black justify-between items-center px-6 py-4 border-b border-gray-700">
        <div className="text-2xl font-semibold">
          <span className="text-white">Event</span>
          <span className="text-cyan-500">Breakers</span>
        </div>
        <div className="space-x-4">
          <Link to='/'>
            <button className="bg-cyan-500 font-bold px-4 py-1 rounded-md text-sm text-white cursor-pointer hover:bg-cyan-600">
              Events
            </button>
          </Link>
          <Link to='/logout'>
            <button className="text-cyan-500 bg-amber-50 font-bold px-4 py-1 rounded-md text-sm cursor-pointer hover:bg-cyan-600">
              Logout
            </button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex p-6 gap-6">
        {/* Main Event Section */}
        <div className="flex-1">
          <div className="bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-700">
            <div className="relative">
              {/* Event Banner */}
              <div className="relative h-[400px] bg-gradient-to-br from-gray-700 to-gray-900">
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                    LIVE NOW
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 border-4 border-gray-400/30 rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-gray-400/10 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div className="p-8 bg-gray-800/90">
                <h1 className="text-3xl font-bold text-white mb-4">
                  Tech Innovation Summit 2024
                </h1>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Join industry leaders and innovators for a day of cutting-edge technology discussions, networking, and breakthrough announcements.
                </p>

                {/* Event Meta Information */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Calendar className="w-5 h-5 text-cyan-400" />
                    <span>December 18, 2024</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    <span>2:00 PM - 8:00 PM EST</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <span>San Francisco Convention Center</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Users className="w-5 h-5 text-cyan-400" />
                    <span>2,847 attendees</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                    <Link to='/register'>
                  <button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 px-6 py-3 rounded-xl font-medium transition-colors cursor-pointer">
                    Register
                  </button>
                  </Link>
               </div>
              </div>
            </div>
          </div>
        </div>

        {/* Past Events Sidebar */}
        <div className="w-80 shrink-0">
          <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-6">
            <h2 className="text-xl font-bold text-white mb-6">Past Events</h2>
            <div className="space-y-4">
              {[
                {
                  title: "AI & Machine Learning Conference",
                  date: "Nov 15, 2024"
                },
                {
                  title: "Startup Pitch Competition",
                  date: "Oct 28, 2024"
                },
                {
                  title: "Digital Marketing Masterclass",
                  date: "Oct 12, 2024"
                },
                {
                  title: "Web Development Workshop",
                  date: "Sep 30, 2024"
                }
              ].map((event, index) => (
                <div key={index} className="bg-gray-700/50 rounded-xl p-4 hover:bg-gray-700 transition-colors cursor-pointer border border-gray-600">
                  <div className="bg-gray-600/50 h-24 rounded-lg mb-3"></div>
                  <h3 className="font-semibold text-white mb-1">{event.title}</h3>
                  <p className="text-gray-400 text-sm">{event.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}