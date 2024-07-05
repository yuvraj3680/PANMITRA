import React from 'react'

const Addmoneyold = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-8 ">
    <div className="bg-white shadow-lg rounded-lg p-20 w-full max-w-5xl">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-700">Add Money UPI QR Automatic</h1>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        
        <div className="flex-1">
          <div className="mb-6">
            <label htmlFor="ID" className=" font-bold text-xl text-gray-700 mb-2">Amount
             </label>  
          <br />

            <input
              type="number"
              id="number"
              name="number"
              placeholder="Enter Amount"
              className=" px-96 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <span className='text-teal-500'>Minimum Amount Rs.100 to Maximum Amount Added Rs.5000</span>
          </div>
          <div className="mb-6">
            <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Generate QR Code
            </button>
          </div>
         
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default Addmoneyold
