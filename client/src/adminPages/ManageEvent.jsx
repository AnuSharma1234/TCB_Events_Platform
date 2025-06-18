import React, { useEffect, useState } from "react";
import { Link ,useParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../provider/authProvider";

const ManageEvent = () => {
    const [event, setEvent] = useState(null); 

    const {event_id} = useParams()

    const  {token} = useAuth()

    useEffect(() => {
        const fetchEventDetails = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/event/${event_id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setEvent(res.data.event);
            } catch (error) {
                console.error("Error fetching event details:", error.message);
            }
        };
        fetchEventDetails();
    }, [event_id, token]);

    return (
        <div className="min-h-screen bg-black text-white px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Text Content */}
            <div className="max-w-xl">
                {event ? (
                    <>
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                            {event.title || "Event Title"}
                        </h1>
                        <div className="grid grid-cols-2 gap-4 text-l font-bold mb-5">
                            <p>Date: {event.date || "N/A"}</p>
                            <p>Day: {event.day || "N/A"}</p>
                            <p>Venue: {event.venue || "N/A"}</p>
                            <p>Max Team Size: {event.teamSize || "N/A"}</p>
                        </div>
                        <p className="text-gray-300 mb-6 text-lg">
                            <span className="font-bold text-lg">Event Description: </span>
                            {event.otherDesc || "No description available"}
                        </p>
                        <div className="flex items-center gap-4 mb-10">
                            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold">
                                <Link to={`/admin/close/${event_id}`}>Close Event</Link>
                            </button>
                            <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2">
                                <span className="inline-block w-4 h-4 rounded-full bg-white"></span>
                                <Link to={`/admin/edit/${event_id}`}>Edit Event</Link>
                            </button>
                            <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2">
                                <span className="inline-block w-4 h-4 rounded-full bg-white"></span>
                                <Link to={`/admin/edit/${event_id}`}>Stop Registrations</Link>
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="text-center text-white">Loading event details...</div>
                )}
            </div>

            {/* Event Banner */}
            <div className="w-full md:max-w-lg rounded-xl overflow-hidden shadow-xl">
                <img
                    src={event?.eventBanner || "/images/placeholder.jpg"}
                    alt="Event Banner"
                    className="w-full object-cover"
                />
            </div>
        </div>
    );
};

export default ManageEvent;
