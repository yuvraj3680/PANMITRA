import React from 'react';

const Addmoneynew = ({ updateBalance }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const amount = event.target.elements.amount.value;
    // Simulate adding money (replace with actual logic)
    updateBalance(amount); // Update balance in header
    alert(`Successfully added ${amount} Rs.`);
    event.target.reset(); // Reset form after submission
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-8 ">
      <div className="bg-white shadow-lg rounded-lg p-20 w-full max-w-5xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-700">Add Money</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            <div className="flex-1">
              <div className="mb-6">
                <label htmlFor="amount" className="font-bold text-xl text-gray-700 mb-2">
                  Amount{' '}
                  <span className="text-red-600">
                    (Min 100rs. Max 5000rs.)
                  </span>
                </label>
                <br />
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  placeholder="Enter Amount"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  min="100"
                  max="5000"
                  required
                />
              </div>
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add Money
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addmoneynew;
