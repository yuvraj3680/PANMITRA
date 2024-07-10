import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Findpan = () => {
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [panData, setPanData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [charges, setCharges] = useState({
    description: '',
    amount: '40',
  });
  const [userId, setUserId] = useState('');

  useEffect(() => {
    // Fetch userId from localStorage on component mount
    const userId= localStorage.getItem('userId');
    if (userId) {
      // const userDetails = JSON.parse(userDetailsString);
      setUserId(userId);
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const handleAadhaarChange = (event) => {
    const value = event.target.value.replace(/\D/g, ''); // Remove non-digit characters
    if (value.length <= 12) {
      setAadhaarNumber(value);
    }
  };

  const handleSubmit = async () => {
    if (aadhaarNumber.length !== 12) {
      setError('Aadhaar number must be 12 digits long.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await axios.get(`http://localhost:8000/findpan/${aadhaarNumber}`);
      const responseData = response.data;

      if (responseData.status === '1') {
        if (responseData.data.status) {
          setPanData(responseData.data);
          await handlePostSubmit(); // Call handlePostSubmit after successful PAN data fetch
        } else {
          setError(responseData.data.msg);
          setPanData(null);
        }
      } else {
        setError('Unknown error occurred.');
        setPanData(null);
      }
    } catch (error) {
      console.error('Error fetching PAN data:', error);
      setError('Internal Server Error. Please try again later.');
      setPanData(null);
    } finally {
      setLoading(false);
    }
  };

  const handlePostSubmit = async () => {
    try {
      const postData = {
        description: `Aadhaar Number: ${aadhaarNumber}`,
        amount: charges.amount,
      };
      const response = await axios.post(`http://localhost:8000/wallet/${userId}/charges`, postData);
      console.log(response.data);
      setCharges({ ...charges, amount: response.data.balance });
    } catch (error) {
      console.error('Error processing charges:', error);
      setError('Internal Server Error. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-8 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-5xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-700">PAN Find New</h1>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="mb-8 lg:mb-0 lg:mr-8 w-full lg:w-1/2">
            <div className="mb-6">
              <label htmlFor="aadhaarNumber" className="block text-sm font-medium text-gray-700 mb-2">
                Aadhaar Number
              </label>
              <input
                type="text"
                id="aadhaarNumber"
                name="aadhaarNumber"
                value={aadhaarNumber}
                onChange={handleAadhaarChange}
                placeholder="Aadhaar Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {aadhaarNumber.length !== 12 && (
                <p className="text-red-600 mt-2">Aadhaar number must be 12 digits long.</p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
                Amount
              </label>
              <input
                type="text"
                id="amount"
                name="amount"
                value={charges.amount}
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <p className="text-red-600 mt-2">Instructions:</p>
              <p className="mb-2">Use Find PAN Service @ 40 Rs each and deliver better service to your customers.</p>
              <p className="text-red-600 mb-2">Aadhaar linked PAN Find instantly</p>
            </div>

            <button
              onClick={handleSubmit}
              className={`w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'SUBMIT'}
            </button>
          </div>

          <div className="flex-1">
            {panData && panData.status && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mt-4">
                <h2 className="text-lg font-semibold mb-2">PAN Number Fetched</h2>
                <p className="mb-2">Name: {panData.name}</p>
                <p className="mb-2">UID: {panData.uid}</p>
                <p className="mb-2">PAN: {panData.pan}</p>
              </div>
            )}

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mt-4">
                <p>{error}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Findpan;
