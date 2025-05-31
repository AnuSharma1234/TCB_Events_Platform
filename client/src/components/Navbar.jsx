import React from "react"
import CreateEventButton from "./CreateEventButton.jsx"
import EventButton from "./EventButton.jsx"

const Navbar = () => {

    return(
        <header className="flex bg-gray-900 justify-between items-center px-6 py-4 border-b border-gray-700">
        <div className="flex space-x-6 text-white items-center">
          <span className="text-white font-semibold">✨</span>
          <a href="/" className="text-sm hover:underline">thecodebreakers</a>
          <EventButton/>
      </div>
        <div className="flex items-center text-white space-x-4">
            <CreateEventButton/>
            <button className="w-6 h-6 rounded-full bg-gray-600"></button>
        </div>
        </header>
    )
}

export default Navbar
