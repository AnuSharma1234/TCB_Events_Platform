import React from "react";
import { ToastContainer , toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateEvent = () => {
    const [form , setForm] = useState({
        title : "",
        date : "",
        day : "",
        venue : "",
        teamSize : "",
        otherDesc : "",
    })

    const handleError = (error) =>{
        toast.error(error , {
            position : "top-right"
        })
    }

    const handleSuccess = (message) =>{
        toast.success(message , {
            position : 'top-right'
        })
        navigate('/admin')
    }
    
    const navigate = useNavigate()

    const submit = async e =>{
        e.preventDefault()
        try{
            const res = await axios.post('http://localhost:5000/event',form)
            
            handleSuccess("Event created succesfully")
            
        }catch(error){
            console.log(error.message)
            handleError('Unable to create a event')
        }
    }


  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="bg-zinc-900 mt-7 p-6 rounded-md max-w-5xl mx-auto">
        <h2 className="text-lg font-semibold border-b border-gray-600 pb-2 mb-6">
          Create a new Event
        </h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-2">Event Name</label>
              <input
                className="bg-gray-800 px-4 py-2 rounded-md w-full"
                placeholder="Enter event name"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Venue</label>
              <input
                className="bg-gray-800 px-4 py-2 rounded-md w-full"
                placeholder="Venue for the event"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Day</label>
             <select id="day" 
              className="bg-gray-800 px-4 py-2 rounded-md w-full"
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
                placeholder="Price"
                defaultValue="$2999"
              />
            </div>
           <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm mb-2">Max Size of Team</label>
                <input
                  className="bg-gray-800 px-4 py-2 rounded-md w-full"
                  placeholder="105"
                />
              </div>
           </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-2">Description</label>
              <textarea
                className="bg-gray-800 px-4 py-2 rounded-md w-full h-32"
                placeholder="Write event description here"
              ></textarea>
            </div>
            <div>
              <label className="block text-sm mb-2">Event Banner</label>
              <div className="bg-gray-800 px-4 py-6 rounded-md border-2 border-dashed border-gray-600 flex items-center justify-center text-center">
                <div>
                  <svg
                    className="mx-auto mb-2 w-8 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 16V4m0 0L4 7m3-3l3 3M17 8v12m0 0l-3-3m3 3l3-3" />
                  </svg>
                  <input type="file" className="mb-3 pl-27" />
                  <p className="text-sm text-gray-400">Max. File Size: 30MB</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <button className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-md text-white">
              Create Event
            </button>
          </div>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default CreateEvent;
