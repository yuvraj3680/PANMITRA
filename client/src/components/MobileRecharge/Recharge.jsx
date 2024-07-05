import React from 'react';

const Recharge = () => {
  return (
    <div className="flex justify-start  bg-indigo-300 min-h-screen">
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Recharge or Pay Mobile Bill</h1>
        <div className="mb-4">
          <label className="inline-flex items-center mr-4">
            <input type="radio" name="planType" value="prepaid" className="form-radio text-blue-600" />
            <span className="ml-2 text-lg">Prepaid</span>
          </label>
          <label className="inline-flex items-center">
            <input type="radio" name="planType" value="postpaid" className="form-radio text-blue-600" />
            <span className="ml-2 text-lg">Postpaid</span>
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Mobile Number</label>
          <input
            type="tel"
            placeholder="Enter Mobile Number"
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
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Amount</label>
          <div className='flex'>
            <div>
            <input
            type="number"
            placeholder="Amount"
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            maxLength={10}
          />
          </div>
          <div className=' mt-3 h-20  box-border text-center font-bold text-xl w-full '>
            <button>Plans</button>
          </div>
            
          </div>
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

export default Recharge;
