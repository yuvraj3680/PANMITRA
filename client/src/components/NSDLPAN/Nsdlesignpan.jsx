import React, { useState, useEffect } from 'react';
import axios from 'axios';
import esign from '../../assets/nsdlesignpan.png';

const Nsdlesignpan = () => {
  const [formData, setFormData] = useState({
    panOption: '',
    name: '',
    dateOfBirth: '',
    gender: '',
    mobileNumber: '',
    email: '',
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

   
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/nsdl-e-sign', formData);
      console.log('Response:', response.data);
      
      setShowPopup(true);
    } catch (error) {
      console.error('Error:', error);
      
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    // You can add any side effects here if needed when the component mounts
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-8 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-5xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-700">NSDL e-Sign PAN Card Apply</h1>
          <span className="text-red-600 block mb-2">
            NSDL Failed/Pending Transaction Auto Refunding in 4 to 6 Hours
          </span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            <div className="mb-8 lg:mb-0 lg:mr-8">
              <img src={esign} alt="UTI Wallet" className="max-w-xs lg:max-w-sm" />
            </div>
            <div className="flex-1">
              <div className="mb-6">
                <label htmlFor="panOption" className="block text-sm font-medium text-gray-700 mb-2">
                  Select Application Type (New Or Correction)
                </label>
                <select
                  name="panOption"
                  id="panOption"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={formData.panOption}
                  onChange={handleChange}
                >
                  <option value="PAN">New PANCARD Application(FROM 49A)</option>
                  <option value="Correction">Correction Pan Application (Changes/Reprint/Correction)</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name (As in Aadhaar Card)
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="NAME (As in Aadhaar Card)"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col lg:flex-row lg:space-x-4 mb-6">
                <div className="flex-1 mb-6 lg:mb-0">
                  <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                    Gender
                  </label>
                  <select
                    name="gender"
                    id="gender"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row lg:space-x-4 mb-6">
                <div className="flex-1 mb-6 lg:mb-0">
                  <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    id="mobileNumber"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email ID
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email ID"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-6">
                <span className="text-red-600 block mb-2">Application Charge is Rs.103</span>
                <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Submission Successful!</h2>
            <p className="mb-4">Your application has been submitted successfully.</p>
            <button
              className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={handleClosePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nsdlesignpan;






