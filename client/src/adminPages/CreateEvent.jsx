import React, { useState } from 'react';

const CreateEvent = () => {
  // State variables for various form inputs and toggles
  const [isPublic, setIsPublic] = useState(true);
  const [requireApproval, setRequireApproval] = useState(false);
  const [eventName, setEventName] = useState('');
  const [startDate, setStartDate] = useState('Event Day'); // Example date
  const [endDate, setEndDate] = useState('Sat, May 31'); // Example date
  const [eventLocation, setEventLocation] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [capacity, setCapacity] = useState('Unlimited');

  // Handler for creating the event (e.g., submitting data to an API)
  const handleCreateEvent = () => {
    // Log all current state values for debugging or submission
    console.log({
      eventName,
      startDate,
      endDate,
      eventLocation,
      eventDescription,
      isPublic,
      requireApproval,
      capacity,
    });
    // Placeholder for actual event creation logic (e.g., API call)
    alert('Event Created! (Check console for details)');
  };

  return (
    // Main container for the entire component with a black background
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {/* Central event creation card with a dark gray background */}
      <div className="bg-[#1E1E1E] rounded-lg shadow-xl w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-0 relative overflow-hidden">

        {/* Left Section: Event Image and Theme Options */}
        <div className="p-8 flex flex-col items-center justify-between bg-black md:rounded-l-lg rounded-t-lg md:rounded-tr-none">
          <div className="w-full flex justify-center mb-6">
            {/* Placeholder for event image */}
            <div className="relative w-64 h-64 bg-gray-700 rounded-lg overflow-hidden flex items-center justify-center">
              {/* Replace '/path/to/your/image.png' with your actual image path */}
              <img
                src="/path/to/your/image.png"
                alt="Event Visual"
                className="w-full h-full object-cover"
              />
              {/* Icon to change image */}
              <div className="absolute bottom-2 right-2 bg-gray-800 bg-opacity-70 text-white rounded-full p-2 cursor-pointer hover:bg-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-4 4 4 4-4V5h-2v5l-2-2-4 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* Theme selection and options */}
          <div className="w-full flex items-center justify-center space-x-2 bg-gray-800 p-3 rounded-lg">
            <div className="w-8 h-8 bg-gray-600 rounded-md"></div> {/* Small color indicator */}
            <select
              className="flex-grow bg-gray-800 text-white py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              value="Minimal" // Selected default option
              onChange={() => {}} // Add actual change handler if themes are dynamic
            >
              <option>Minimal</option>
              <option>Modern</option>
              <option>Classic</option>
            </select>
            {/* View/Edit theme buttons */}
            <button className="text-white p-2 rounded-md hover:bg-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5 4a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1H5zm0-1h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
              </svg>
            </button>
            <button className="text-white p-2 rounded-md hover:bg-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Section: Event Details Form */}
        <div className="p-8 bg-[#1E1E1E] text-white">
          {/* Calendar selection and Public toggle */}
          <div className="flex justify-end items-center mb-6">
            <div className="relative inline-block text-left mr-4">
              <select
                className="appearance-none bg-black text-white py-2 px-4 pr-8 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-600 cursor-pointer"
                value="Personal Calendar"
                onChange={() => {}} // Add actual change handler for calendar
              >
                <option>Personal Calendar</option>
                <option>Work Calendar</option>
              </select>
              {/* Dropdown arrow icon */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9l4.5 4.5z" />
                </svg>
              </div>
            </div>

            {/* Public/Private toggle switch */}
            <div className="flex items-center space-x-2 bg-black py-1 px-3 rounded-full cursor-pointer">
              <span className="text-white">Public</span>
              <div
                className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-200 ease-in-out ${
                  isPublic ? 'bg-green-600' : 'bg-gray-700' // Green when public, dark gray when private
                }`}
                onClick={() => setIsPublic(!isPublic)}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                    isPublic ? 'translate-x-4' : 'translate-x-0'
                  }`}
                ></div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-white">Event Name</h2>
          {/* Event Name input */}
          <input
            type="text"
            className="w-full bg-black text-white p-3 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-gray-600 placeholder-gray-400"
            placeholder="Enter Event Name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />

          {/* Start and End Date/Time Pickers */}
          <div className="mb-4">
            <div className='mb-3'>
              <label className="block text-sm font-medium mb-1 text-gray-300">Day</label>
              <div className="flex items-center space-x-2">
                <input
                  type="text" // Can be type="date" and type="time" for native pickers
                  className="flex-grow bg-black text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                  onChange={(e) => setStartDate(e.target.value)}
                  placeholder='Event Day'
                />
             </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">Date</label>
              <div className="flex items-center space-x-2">
                <input
                  type="date"
                  className="flex-grow bg-black text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                  placeholder='Date of Event'
                  onChange={(e) => setEndDate(e.target.value)}
                />
             </div>
            </div>
          </div>
          {/* Add Event Location */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-300">Add Event Venue</label>
            <input
              type="text"
              className="w-full bg-black text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 placeholder-gray-400"
              placeholder="venue details"
              onChange={(e) => setEventLocation(e.target.value)}
            />
          </div>

          {/* Add Description */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1 text-gray-300">Add Description</label>
            <textarea
              className="w-full bg-black text-white p-3 rounded-md resize-y min-h-[120px] focus:outline-none focus:ring-2 focus:ring-gray-600 placeholder-gray-400"
              placeholder="Add details about your event"
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
            ></textarea>
          </div>

          {/* Event Options Section */}
          <h3 className="text-xl font-semibold mb-4 text-white">Event Options</h3>
          <div className="space-y-4">
           {/* Require Approval toggle */}
            <div className="flex justify-between items-center bg-black p-3 rounded-md">
              <span className="text-lg text-white">Require Approval</span>
              <div
                className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-200 ease-in-out ${
                  requireApproval ? 'bg-green-600' : 'bg-gray-700'
                }`}
                onClick={() => setRequireApproval(!requireApproval)}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                    requireApproval ? 'translate-x-4' : 'translate-x-0'
                  }`}
                ></div>
              </div>
            </div>
            {/* Capacity input */}
            <div className="flex justify-between items-center bg-black p-3 rounded-md">
              <span className="text-lg text-white">Team Size</span>
              <input
                type="text"
                className="w-32 bg-black text-white p-1 rounded-md text-right focus:outline-none focus:ring-2 focus:ring-gray-600"
                placeholder='Team Size'
                onChange={(e) => setCapacity(e.target.value)}
              />
            </div>
          </div>

          {/* Create Event Button */}
          <button
            onClick={handleCreateEvent}
            className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-md mt-8 transition duration-300 ease-in-out"
          >
            Create Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;