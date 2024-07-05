import React from 'react'
import INSURENCE from '../../assets/insurance1.png';
const Insurancelogin = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-8 ">
    <div className="bg-white shadow-lg rounded-lg p-20 w-full max-w-5xl">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-700">All Vehicle insurace Two Wheeler Four Wheeler, ETC</h1>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <div className="mb-8 lg:mb-0 lg:mr-8">
          <img src={INSURENCE} alt="UTI Wallet" className=" max-w-xs lg:max-w-sm" />
        </div>
        <div className="flex-1">
          <div className="mb-6">
            <label htmlFor="ID" className=" text-sm font-medium text-gray-700 mb-2">Outlet ID</label>
            <input
              type="text"
              id="ID"
              name="ID"
              placeholder="OUTLET"
              className=" px-40 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-6">
            <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
           LOGIN
            </button>
          </div>
          

        </div>
        
      </div>
    </div>
    <span>Copyright @ PANMITRA ONLINE SERVICE PRIVATE LIMITED 2017</span>
  </div>
  )
}

export default Insurancelogin
