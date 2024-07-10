import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddMoneyForm = () => {
  const [amount, setAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      // Do something with userId, e.g., fetch data based on userId
      console.log('User ID from localStorage:', userId);
    } else {
      console.log('User ID not found in localStorage');
    }
  }, []); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate amount
    const amountValue = parseFloat(amount);
    if (amountValue < 100 || amountValue > 5000 || isNaN(amountValue)) {
      setErrorMessage('Amount must be between 100 and 5000 Rs.');
      return;
    }

    try {
      // Get userId from localStorage
      // const userDetailsString = localStorage.getItem('UserDetails');
      const userId = localStorage.getItem('userId');
      if (!userId) {
        setErrorMessage('User ID not found. Please log in again.');
        return;
      }

      // const userDetails = JSON.parse(userDetailsString);
      // const userId = userDetails?.userId; // Ensure you're using the correct key based on your storage

      // Make API call to add money
      const response = await axios.post(`http://localhost:8000/wallet/${userId}/addMoney`, { amount: amountValue });

      // Clear form and error message
      setAmount('');
      setErrorMessage('');

      // Show success message
      alert(`Successfully added ${amountValue} Rs.`);
    } catch (error) {
      console.error('Error adding money:', error);
      setErrorMessage('Failed to add money. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-8">
      <div className="bg-white shadow-lg rounded-lg p-20 w-full max-w-5xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-700">Add Money</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            <div className="flex-1">
              <div className="mb-6">
                <label htmlFor="amount" className="font-bold text-xl text-gray-700 mb-2">
                  Amount <span className="text-red-600">(Min 100rs. Max 5000rs.)</span>
                </label>
                <br />
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter Amount"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  min="100"
                  max="5000"
                  required
                />
              </div>
              {errorMessage && (
                <div className="text-red-600 mb-4 text-center">{errorMessage}</div>
              )}
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

export default AddMoneyForm;
