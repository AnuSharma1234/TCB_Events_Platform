import React, { useState } from 'react';
import {toast , ToastContainer} from 'react-toastify'

const CreateEvent = () => {
    const [isApprovalRequired, setIsApprovalRequired] = useState(false);


    const [form , setForm] = useState({
        title : '',
        date : '',
        day : '',
        venue : '',
        teamSize : '',
        maxTeams : '',
        otherDesc : ''
    })

    const handleSuccess = (message) =>{
        toast.success(message , {
            position: 'top-right',
        })
    }

    const handleError = (error) =>{
        toast.error(error , {
            position: 'top-left',
        })
    }

    const submit = async e =>{
        e.preventDefault()

        try{
            const res = await axios.post('http://localhost:5000/admin',form)
            if(res.data.success){
                handleSuccess(res.data.message)
                navigate('/admin')
            }
        }catch(error){
            handleError(error)
        }
    }


  return (
    <div className="min-h-screen bg-[#1f1f1f] text-white p-8">
            <ToastContainer/>
      <div className="flex gap-6">
        {/* Left: Event Banner and Theme */}
        <div className="flex flex-col items-center">
          <img
            src="/banner.png"
            alt="Event Banner"
            className="w-64 h-64 rounded-xl object-cover"
          />
          <div className="flex items-center mt-4 gap-2">
            <div className="bg-[#2e2e2e] text-sm px-4 py-2 rounded-lg">
              Theme: <strong>Minimal</strong>
            </div>
            <button className="p-2 rounded-full bg-[#3a3a3a]">🔁</button>
          </div>
        </div>

            {/* Right: Event Details */}
            <form onSubmit={submit} className="flex-1 space-y-6">
          <div className="flex justify-between items-start bg-[#2e2e2e] rounded-lg p-4">
            <div className="space-y-2">
                <input 
                    type="text"
                    placeholder="Enter event title"
                    onChange={(e) => setForm({...form , title : e.target.value})}
                    className="text-3xl font-serif"
                    required
                />
            </div>
          </div>

          {/* Start / End Time */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-400">Date</label>
              <div className="flex gap-2 items-center bg-[#2e2e2e] p-2 rounded-lg">
                <input 
                    type="date" 
                    placeholder="Date of event"
                    onChange={(e) => setForm({...form , date : e.target.value})}
                    required
                />
             </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-400">Day</label>
              <div className="flex gap-2 items-center bg-[#2e2e2e] p-2 rounded-lg">
                <input
                    type="text"
                    placeholder="Day of event"
                    onChange={(e) => setForm({...form , day : e.target.value})}
                    required
                />
             </div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-[#2e2e2e] rounded-lg p-4">
            <input 
                type="text" 
                placeholder="Enter venue details"
                onChange={(e) => setForm({...form , venue : e.target.value })}
                required
                />
          </div>

          {/* Event Options */}
          <div className="space-y-4">
            <div className="bg-[#2e2e2e] p-4 rounded-lg flex justify-between items-center">
                <input 
                    type="number"
                    placeholder = "Team Size (optional)"
                    onChange = {(e) => setForm({...form , teamSize : e.target.value})}
                />
            </div>

            <div className="bg-[#2e2e2e] p-4 rounded-lg flex justify-between items-center">
              <span className="text-sm">Team Approval</span>
              <input
                type="checkbox"
                checked={isApprovalRequired}
                onChange={() => setIsApprovalRequired(!isApprovalRequired)}
                className="w-5 h-5"
              />
            </div>

            <div className="bg-[#2e2e2e] p-4 rounded-lg flex justify-between items-center">
                <input
                    type="number"
                    placeholder="Max teams(optional)"
                    onChange = {(e) => setForm({...form , maxTeams: e.target.value})}
                />
            </div>

            <div className="bg-[#2e2e2e] rounded-lg p-4">
                <input
                    type="text"
                    placeholder="Enter any other description"
                    onChange = {(e)=> setForm({...form , otherDesc : e.target.value})}
                />
            </div>

          </div>

          {/* Create Button */}
          <div className="pt-4">
            <button className="w-full py-3 rounded-md bg-white text-black font-semibold text-sm hover:bg-gray-200" type="submit">
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent
