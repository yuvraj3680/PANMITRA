import React from 'react';
import UTI from '../../assets/utiewalletimg.png';

const Utiewalletlogin = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-8 ">
      <div className="bg-white shadow-lg rounded-lg p-20 w-full max-w-7xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-700">Onboard</h1>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="mb-8 lg:mb-0 lg:mr-8">
            <img src={UTI} alt="UTI Wallet" className=" max-w-xs lg:max-w-sm" />
          </div>
          <div className="flex-1">
            <div className="mb-6">
              <label htmlFor="ID" className=" text-sm font-medium text-gray-700 mb-2">Outlet ID</label>
              <input
                type="text"
                id="ID"
                name="ID"
                placeholder="PM9767258186UTI9767258186"
                className=" px-40 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-6">
              <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Register UTISLPAN
              </button>
            </div>
            <span className="text-red-600 block mb-2">
              Need To Login Minimum 1 Coupon Amount Wallet Balance
            </span>
            <span className='text-teal-500'>
            Physical-Coupon Charges: 100
            </span> <br />
            <span className='text-teal-500'>
            Digital-Coupon Charges: 103
            </span><br />
            <span className='text-teal-500'>
            E-Coupon Charges: 72
            </span>

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Utiewalletlogin;
