import React from 'react';

const DeleteConfirmationModal = ({ onCancel, onConfirm, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-[#1e293b] text-white rounded-xl shadow-xl w-full max-w-md p-6 relative">
        {/* Close button */}
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-white">
          &times;
        </button>

        {/* Warning Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-gray-700 p-2 rounded-lg">
            <svg
              className="h-6 w-6 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M12 5a7 7 0 100 14 7 7 0 000-14z" />
            </svg>
          </div>
        </div>

        {/* Message */}
        <p className="text-center mb-2">
          <span className="text-blue-400 font-medium">@bonniegr</span>, are you sure you want to delete this product from platform?
        </p>
        <p className="text-center text-sm text-gray-400 mb-6">This action cannot be undone.</p>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={onCancel}
            className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md text-sm"
          >
            No, cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm text-white"
          >
            Yes, delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
