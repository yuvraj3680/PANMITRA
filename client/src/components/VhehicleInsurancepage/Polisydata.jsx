import React from 'react'
import { ChevronUpIcon } from "@heroicons/react/solid";
const Polisydata = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="bg-gray-200 px-4 py-2 rounded-t-lg mb-4">
          <h1 className="text-lg font-bold text-gray-800">
          Insurance Policy Data
          </h1>
        </div>

        {/* Show Entries and Search */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
          <div className="flex  gap-20  items-center mb-2 sm:mb-0">
            
           
          </div>
          <div className="flex items-center">
            <label htmlFor="search" className="mr-2 font-semibold">
              Search
            </label>
            <input
              type="text"
              id="search"
              name="search"
              className="px-2 py-1 border border-gray-300 rounded bg-gray-200"
            />
          </div>
        </div>
        <div className="flex items-center mb-10 sm:mb-0   ">
          <label htmlFor="showEntries" className="mr-2 font-semibold">
            Show
          </label>
          <select
            id="showEntries"
            name="showEntries"
            className="px-2 py-1 border border-gray-300 rounded bg-gray-200"
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <label htmlFor="showEntries" className="ml-2 font-semibold">
            entries
          </label>
        </div>

        {/* Table Headers */}
        <div className="flex bg-white rounded-md mt-4 overflow-hidden shadow-md">
          <div className="flex w-full overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-200">
                <tr className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <th className="px-4 py-2 flex items-center cursor-pointer">
                    <span className="mr-1">SL NO</span>
                    <ChevronUpIcon className="h-4 w-4 text-gray-400" />
                  </th>
                  
                  <th className="px-4 py-2">USERNAME</th>
                  <th className="px-4 py-2">POLISY BOOKING DATE</th>
                  <th className="px-4 py-2">POLISY NUMBER</th>
                  <th className="px-4 py-2">AMOUNT</th>
                  <th className="px-4 py-2">POLISY STATUS</th>
                  <th className="px-4 py-2">POLISY DATA</th>
                 
                </tr>
                
              </thead>

                <span className='text-center ml-50'>No data available in table</span>
              
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Polisydata
