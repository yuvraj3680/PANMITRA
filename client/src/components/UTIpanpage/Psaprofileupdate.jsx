import React from 'react';

const Psaprofileupdate = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-5xl w-full">
        <div className="bg-slate-200 p-4 rounded-t-lg text-center">
          <h1 className="text-2xl font-bold text-gray-700">PSA Update Info</h1>
        </div>
        <div className="mt-6">
          <label htmlFor="id" className="block text-sm font-medium text-gray-700">
            UIE ID
          </label>
          <input
            type="text"
            id="id"
            name="name"
            placeholder="UIE ID"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mt-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            UTI Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter Email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mt-6">
          <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
            UTI Mobile Number
          </label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            placeholder="Enter the mobile number"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mt-8">
          <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Update Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Psaprofileupdate;
