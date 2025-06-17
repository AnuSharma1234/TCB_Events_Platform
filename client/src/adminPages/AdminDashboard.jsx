import React, { useEffect, useState } from "react";
import getUserRole from "../provider/userRoleProvider";
import { useNavigate } from "react-router-dom";
import SpotlightCard from "../components/SpotlightCard";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../provider/authProvider";

const AdminDashboard = () => {
    const navigate = useNavigate();
    const isAdmin = getUserRole();
    const [events, setEvents] = useState([]); // State to store all events
    const { token } = useAuth();

    useEffect(() => {
        if (!isAdmin) {
            navigate("/");
        }

        // Fetch event data from the API
        const fetchEvents = async () => {
            try {
                const res = await axios.get("http://localhost:5000/event/", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setEvents(res.data.allEvents); // Store all events in state
            } catch (error) {
                console.error("Error fetching event data:", error.message);
            }
        };

        fetchEvents();
    }, [isAdmin, navigate]);

    // Filter events where isLive is true
    const liveEvents = events.filter((event) => event.isLive);

    return (
        <div className="min-h-screen bg-black">
            {/* Navbar */}
            <header className="flex bg-black justify-between items-center px-6 py-4 border-b border-gray-700">
                <div className="text-2xl font-semibold">
                    <span className="text-white">Event</span>
                    <span className="text-cyan-500">Breakers</span>
                </div>
                <div className="space-x-4">
                    <Link to="/">
                        <button className="bg-cyan-500 font-bold px-4 py-1 rounded-md text-sm text-white cursor-pointer hover:bg-cyan-600">
                            Events
                        </button>
                    </Link>
                    <button className="text-white cursor-pointer font-bold bg-cyan-500 px-4 py-1 rounded-md text-sm hover:bg-cyan-600">
                        <Link to="/admin/create">Create Event</Link>
                    </button>
                    <Link to="/logout">
                        <button className="text-cyan-500 bg-amber-50 font-bold px-4 py-1 rounded-md text-sm cursor-pointer hover:bg-cyan-600">
                            Logout
                        </button>
                    </Link>
                </div>
            </header>

            {/* Hero Section */}
            <div className="relative w-full h-auto px-6 py-10">
                {/* Display live events */}
                {liveEvents.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {liveEvents.map((event) => (
                            <SpotlightCard key={event._id} className="w-full">
                                <h1 className="text-white font-bold text-2xl mb-3">
                                    Live Event
                                </h1>
                                <img
                                    src={event.eventBanner || "https://via.placeholder.com/300"}
                                    alt="event preview"
                                    className="w-full h-[300px] border border-zinc-900 rounded-2xl object-cover"
                                />
                                <div className="p-4 flex-grow text-white">
                                    <h3 className="font-semibold text-2xl">{event.title}</h3>
                                    <p className="text-16 text-white mt-1">{event.date}</p>
                                    <p className="text-16 text-white mt-1">{event.venue}</p>
                                </div>
                                <div className="p-4">
                                    <Link to={`/admin/manage/${event._id}`} className="bg-cyan-500 text-white px-6 py-2 rounded-md hover:bg-cyan-600 cursor-pointer font-bold">Manage Event</Link>
                                </div>
                            </SpotlightCard>
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-white mt-20">No live events available</div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
