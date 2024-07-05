import React from 'react';

const DTH = () => {
  return (
    <div className="flex justify-center items-center bg-indigo-300 min-h-screen">
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Recharge DTH For DTH</h1>
        
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Customer ID no</label>
          <input
            type="tel"
            placeholder="Enter the Customer ID Number"
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            maxLength={10}
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Amount</label>
          <input
            type="tel"
            placeholder="Enter the Amount"
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            maxLength={10}
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Your Operator</label>
          <select
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Your Operator</option>
            <option value="airtel">Airtel</option>
            <option value="vodafone">Vodafone</option>
            <option value="idea">Idea</option>
            <option value="bsnl">BSNL</option>
          </select>
        </div>
        <button
          className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Proceed to Recharge
        </button>
      </div>
    </div>
  );
};

export default DTH;
