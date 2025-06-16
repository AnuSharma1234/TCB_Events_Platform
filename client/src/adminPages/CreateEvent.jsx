import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../provider/authProvider";

const CreateEvent = () => {
    const navigate = useNavigate();

    const {token} = useAuth()
    
    const [form, setForm] = useState({
        title: "",
        eventBanner: null,
        date: "",
        day: "",
        venue: "",
        teamSize: "",
        otherDesc: "",
    });

    const handleError = (error) => {
        toast.error(error, {
            position: "top-right",
        });
    };

    const handleSuccess = (message) => {
        toast.success(message, {
            position: "top-right",
        });
    };

    const validateForm = () => {
        const missingFields = [];
        if (!form.title) missingFields.push("Event Name");
        if (!form.date) missingFields.push("Date");
        if (!form.day) missingFields.push("Day");
        if (!form.venue) missingFields.push("Venue");
        if (!form.teamSize) missingFields.push("Team Size");

        if (missingFields.length > 0) {
            handleError(`Please fill in the following fields: ${missingFields.join(", ")}`);
            return false;
        }
        return true;
    };

    const submit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const formData = new FormData();
            Object.keys(form).forEach((key) => {
                formData.append(key, form[key]);
            });

            const res = await axios.post("http://localhost:5000/event", formData, {
                headers: {
                    Authorization : `Bearer ${token}`
                },
            });

            if (res.data.success) {
                handleSuccess("Event created successfully");
                setTimeout(() => {
                    navigate("/admin");
                }, 3000);
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || error.message || "An error occurred";
            console.log(errorMessage);
            handleError(errorMessage);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white p-6">
            <div className="bg-zinc-900 mt-7 p-6 rounded-md max-w-5xl mx-auto">
                <h2 className="text-lg font-semibold border-b border-gray-600 pb-2 mb-6">
                    Create a new Event
                </h2>
                <form className="space-y-6" onSubmit={submit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm mb-2">Event Name</label>
                            <input
                                className="bg-gray-800 px-4 py-2 rounded-md w-full"
                                type="text"
                                id="title"
                                name="title"
                                placeholder="Enter event name"
                                onChange={(e) => setForm({ ...form, title: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-2">Venue</label>
                            <input
                                className="bg-gray-800 px-4 py-2 rounded-md w-full"
                                type="text"
                                placeholder="Venue for the event"
                                name="venue"
                                onChange={(e) => setForm({ ...form, venue: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-2">Day</label>
                            <select
                                id="day"
                                className="bg-gray-800 px-4 py-2 rounded-md w-full"
                                placeholder="Day"
                                onChange={(e) => setForm({ ...form, day: e.target.value })}
                            >
                                <option value="Monday">Monday</option>
                                <option value="Tuesday">Tuesday</option>
                                <option value="Wednesday">Wednesday</option>
                                <option value="Thursday">Thursday</option>
                                <option value="Friday">Friday</option>
                                <option value="Saturday">Saturday</option>
                                <option value="Sunday">Sunday</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm mb-2">Date</label>
                            <input
                                type="date"
                                className="bg-gray-800 px-4 py-2 rounded-md w-full"
                                placeholder="Date"
                                name="date"
                                onChange={(e) => setForm({ ...form, date: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-2">Max Size of Team</label>
                            <input
                                className="bg-gray-800 px-4 py-2 rounded-md w-full"
                                placeholder="1-4"
                                name="teamSize"
                                type="text"
                                onChange={(e) => setForm({ ...form, teamSize: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm mb-2">Description</label>
                            <textarea
                                className="bg-gray-800 px-4 py-2 rounded-md w-full h-32"
                                placeholder="Write event description here"
                                name="otherDesc"
                                onChange={(e) => setForm({ ...form, otherDesc: e.target.value })}
                            ></textarea>
                        </div>
                        <div>
                            <label className="block text-sm mb-2">Event Banner</label>
                            <div className="bg-gray-800 px-4 py-6 rounded-md border-2 border-dashed border-gray-600 flex items-center justify-center text-center">
                                <div>
                                    <input
                                        type="file"
                                        className="mb-3"
                                        name="eventBanner"
                                        onChange={(e) => setForm({ ...form, eventBanner: e.target.files[0] })}
                                    />
                                    <p className="text-sm text-gray-400">Max. File Size: 30MB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button
                            className="bg-cyan-600 hover:bg-cyan-700 cursor-pointer px-4 py-2 rounded-md text-white"
                            type="submit"
                        >
                            Create Event
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default CreateEvent;
