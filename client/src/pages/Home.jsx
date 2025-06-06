import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import getUserRole from "../provider/userRoleProvider";
import { useNavigate } from "react-router-dom";
import SpotlightCard from "../components/SpotlightCard";
import { Link } from 'react-router-dom'
import ManageEventButton from "../components/ManageEventButton";

const Home = () => {
    const navigate = useNavigate()
    const isAdmin = getUserRole()

    useEffect(()=>{
       if(isAdmin){
        navigate('/admin')
       }
    })

  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
        <Navbar/>
      {/* Hero Section */}
      <div className="relative w-full h-[600px]">
        {/* Event Card */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <SpotlightCard className="w-4xl mt-40">
            <h1 className="text-white font-bold text-2xl mb-3">
                Live Event
            </h1>
            <img
              src="https://images.unsplash.com/photo-1549924231-f129b911e442"
              alt="event preview"
              className="w-full h-[300px] border border-zinc-900 rounded-2xl object-cover"
            />
            <div className="p-4 flex-grow text-white">
             <h3 className="font-semibold text-2xl">HACKSPHERE 3.0</h3>
              <p className="text-16 text-white mt-1">
                Saturday, March 18
              </p>
              <p className="text-16 text-white mt-1">Offline Event • TCB</p>
            </div>
            <div className="p-4">
                <ManageEventButton/>
           </div>
        </SpotlightCard>
       </div>
      </div>
    </div>
  );
};

export default Home;
