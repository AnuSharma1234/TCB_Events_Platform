import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {

    return(
        <header className="flex bg-black justify-between items-center px-6 py-4 border-b border-gray-700">
            <div className="text-2xl font-semibold">
          <span className="text-white">Event</span>
          <span className="text-cyan-500">Breakers</span>
        </div>
        <div className="space-x-4">
            <Link to='/'><button className="bg-cyan-500 font-bold px-4 py-1 rounded-md text-sm text-white cursor-pointer hover:bg-cyan-600">Events</button></Link>
          <Link to='/logout'><button className="text-cyan-500 bg-amber-50 font-bold px-4 py-1 rounded-md text-sm cursor-pointer hover:bg-cyan-600">Logout</button></Link>
       </div>
 
        </header>
    )
}

export default Navbar
