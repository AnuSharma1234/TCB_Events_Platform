import React, { useState } from 'react';

const CreateEventForm = () => {
  const [isApprovalRequired, setIsApprovalRequired] = useState(false);

  return (
    <div className="min-h-screen bg-[#1f1f1f] text-white p-8">
      

      {/* Form Content */}
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
        <div className="flex-1 space-y-6">
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <div className="text-sm text-gray-400">Personal Calendar ⏷</div>
              <h1 className="text-3xl font-serif">Event Name</h1>
            </div>
            <div className="text-sm text-gray-400">Public ⏷</div>
          </div>

          {/* Start / End Time */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-400">Start</label>
              <div className="flex gap-2 items-center bg-[#2e2e2e] p-2 rounded-lg">
                <span>Sat, May 10</span>
                <span>01:00</span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-400">End</label>
              <div className="flex gap-2 items-center bg-[#2e2e2e] p-2 rounded-lg">
                <span>Sat, May 10</span>
                <span>02:00</span>
              </div>
            </div>
          </div>

          {/* Timezone */}
          <div className="text-sm text-gray-400">GMT+05:30 Calcutta</div>

          {/* Location */}
          <div className="bg-[#2e2e2e] rounded-lg p-4">
            <p className="text-gray-400 text-sm">Add Event Location</p>
            <p className="text-xs text-gray-500 mt-1">Offline location or virtual link</p>
          </div>

          {/* Description */}
          <div className="bg-[#2e2e2e] rounded-lg p-4">
            <p className="text-gray-400 text-sm">Add Description</p>
          </div>

          {/* Event Options */}
          <div className="space-y-4">
            <div className="bg-[#2e2e2e] p-4 rounded-lg flex justify-between items-center">
              <span className="text-sm">Tickets</span>
              <span className="text-sm text-gray-400">Free ✏️</span>
            </div>

            <div className="bg-[#2e2e2e] p-4 rounded-lg flex justify-between items-center">
              <span className="text-sm">Require Approval</span>
              <input
                type="checkbox"
                checked={isApprovalRequired}
                onChange={() => setIsApprovalRequired(!isApprovalRequired)}
                className="w-5 h-5"
              />
            </div>

            <div className="bg-[#2e2e2e] p-4 rounded-lg flex justify-between items-center">
              <span className="text-sm">Capacity</span>
              <span className="text-sm text-gray-400">Unlimited ✏️</span>
            </div>
          </div>

          {/* Create Button */}
          <div className="pt-4">
            <button className="w-full py-3 rounded-md bg-white text-black font-semibold text-sm hover:bg-gray-200">
              Create Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEventForm;
