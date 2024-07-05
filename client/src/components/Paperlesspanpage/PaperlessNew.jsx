import axios from "axios";
import React, { useState } from "react";

const PaperlessNew = () => {
  const states = [
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Ladakh",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const [formData, setFormData] = useState({
    title : "",
    firstName: "",
    middleName: "",
    lastName: "",
    nameOnCard: "",
    dateOfBirth: "",
    gender: "",
    fatherFirstName: "",
    fatherMiddleName: "",
    fatherLastName: "",
    aadhaarNumber: "",
    nameAsPerAadhaar: "",
    mobileNumber: "",
    emailAddress: "",
    addressFlat: "",
    addressBuilding: "",
    addressStreet: "",
    addressArea: "",
    state: "",
    city: "",
    pincode: "",
    panCardType: "",
    proofOfIdentity: "",
    proofOfAddress: "",
    proofOfDOB: "",
    aadharFront: null,
    aadharBack: null,
    guardianKYCFront: null,
    guardianKYCBack: null,
    photo: null,
    signature: null,
    charges: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/newpan/", formData);
      console.log(response.data);
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-7xl bg-white rounded-lg shadow-lg p-6">
        <div className="bg-gray-200 rounded-t-lg p-4">
          <h1 className="text-xl font-bold text-gray-800">
            PAN New Application (Form for INDIAN Citizen)
          </h1>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2 md:grid-cols-3">
            <div className="sm:col-span-1">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter the title"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              
              <div className="sm:col-span-1">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="middleName" className="block text-sm font-medium text-gray-700">
                  Middle Name
                </label>
                <input
                  type="text"
                  id="middleName"
                  name="middleName"
                  placeholder="Enter Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={formData.middleName}
                  onChange={handleChange}
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="nameOnCard" className="block text-sm font-medium text-gray-700">
                  Name on Card
                </label>
                <input
                  type="text"
                  id="nameOnCard"
                  name="nameOnCard"
                  placeholder="Enter Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={formData.nameOnCard}
                  onChange={handleChange}
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
                  Date of Birth (18+ age only)*
                </label>
                <input
                  type="text"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  placeholder="Enter Date of Birth"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="transgender">Transgender</option>
                </select>
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="fatherFirstName" className="block text-sm font-medium text-gray-700">
                  Father's First Name
                </label>
                <input
                  type="text"
                  id="fatherFirstName"
                  name="fatherFirstName"
                  placeholder="Enter Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={formData.fatherFirstName}
                  onChange={handleChange}
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="fatherMiddleName" className="block text-sm font-medium text-gray-700">
                  Father's Middle Name
                </label>
                <input
                  type="text"
                  id="fatherMiddleName"
                  name="fatherMiddleName"
                  placeholder="Enter Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={formData.fatherMiddleName}
                  onChange={handleChange}
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="fatherLastName" className="block text-sm font-medium text-gray-700">
                  Father's Last Name
                </label>
                <input
                  type="text"
                  id="fatherLastName"
                  name="fatherLastName"
                  placeholder="Enter Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={formData.fatherLastName}
                  onChange={handleChange}
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="aadhaarNumber" className="block text-sm font-medium text-gray-700">
                  Aadhaar Number
                </label>
                <input
                  type="text"
                  id="aadhaarNumber"
                  name="aadhaarNumber"
                  placeholder="Enter Aadhaar Number"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={formData.aadhaarNumber}
                  onChange={handleChange}
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="aadhaarName" className="block text-sm font-medium text-gray-700">
                name As Per Aadhaar
                </label>
                <input
                  type="text"
                  id="aadhaarName"
                  name="nameAsPerAadhaar"
                  placeholder="Enter Name on Aadhaar"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={formData.nameAsPerAadhaar}
                  onChange={handleChange}
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">
                  Mobile Number
                </label>
                <input
                  type="text"
                  id="mobileNumber"
                  name="mobileNumber"
                  placeholder="Enter Mobile Number"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="text"
                  id="emailAddress"
                  name="emailAddress"
                  placeholder="Enter Email Address"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={formData.emailAddress}
                  onChange={handleChange}
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="addressFlat" className="block text-sm font-medium text-gray-700">
                  Flat / Room No.
                </label>
                <input
                  type="text"
                  id="addressFlat"
                  name="addressFlat"
                  placeholder="Enter Flat / Room No."
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={formData.addressFlat}
                  onChange={handleChange}
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="addressBuilding" className="block text-sm font-medium text-gray-700">
                  Building / Block
                </label>
                <input
                  type="text"
                  id="addressBuilding"
                  name="addressBuilding"
                  placeholder="Enter Building / Block"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={formData.addressBuilding}
                  onChange={handleChange}
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="addressStreet" className="block text-sm font-medium text-gray-700">
                  Road / Street / Lane
                </label>
                <input
                  type="text"
                  id="addressStreet"
                  name="addressStreet"
                  placeholder="Enter Road / Street / Lane"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={formData.addressStreet}
                  onChange={handleChange}
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="addressArea" className="block text-sm font-medium text-gray-700">
                  Area / Locality
                </label>
                <input
                  type="text"
                  id="addressArea"
                  name="addressArea"
                  placeholder="Enter Area / Locality"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={formData.addressArea}
                  onChange={handleChange}
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                  State / Union Territory
                </label>
                <select
                  id="state"
                  name="state"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={formData.state}
                  onChange={handleChange}
                >
                  <option value="">Select State / Union Territory</option>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  Town / City / District
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Enter Town / City / District"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">
                  Pincode
                </label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  placeholder="Enter Pincode"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={formData.pincode}
                  onChange={handleChange}
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="panCardType" className="block text-sm font-medium text-gray-700">
                  PAN Card Type
                </label>
                <select
                  id="panCardType"
                  name="panCardType"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={formData.panCardType}
                  onChange={handleChange}
                >
                  <option value="">Select PAN Card Type</option>
                  <option value="individual">Individual</option>
                  <option value="huf">HUF</option>
                  <option value="firm">Firm</option>
                  <option value="company">Company</option>
                  <option value="association">Association</option>
                </select>
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="proofOfIdentity" className="block text-sm font-medium text-gray-700">
                  Proof of Identity
                </label>
                <input
                  type="text"
                  id="proofOfIdentity"
                  name="proofOfIdentity"
                  placeholder="Enter Proof of Identity"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={formData.proofOfIdentity}
                  onChange={handleChange}
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="proofOfAddress" className="block text-sm font-medium text-gray-700">
                  Proof of Address
                </label>
                <input
                  type="text"
                  id="proofOfAddress"
                  name="proofOfAddress"
                  placeholder="Enter Proof of Address"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={formData.proofOfAddress}
                  onChange={handleChange}
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="proofOfDOB" className="block text-sm font-medium text-gray-700">
                  Proof of Date of Birth
                </label>
                <input
                  type="text"
                  id="proofOfDOB"
                  name="proofOfDOB"
                  placeholder="Enter Proof of Date of Birth"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={formData.proofOfDOB}
                  onChange={handleChange}
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="aadharFront" className="block text-sm font-medium text-gray-700">
                  Aadhaar Front Copy
                </label>
                <input
                  type="file"
                  id="aadharFront"
                  name="aadharFront"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  onChange={handleChange}
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="aadharBack" className="block text-sm font-medium text-gray-700">
                  Aadhaar Back Copy
                </label>
                <input
                  type="file"
                  id="aadharBack"
                  name="aadharBack"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  onChange={handleChange}
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="guardianKYCFront" className="block text-sm font-medium text-gray-700">
                  Guardian KYC Front Copy
                </label>
                <input
                  type="file"
                  id="guardianKYCFront"
                  name="guardianKYCFront"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  onChange={handleChange}
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="guardianKYCBack" className="block text-sm font-medium text-gray-700">
                  Guardian KYC Back Copy
                </label>
                <input
                  type="file"
                  id="guardianKYCBack"
                  name="guardianKYCBack"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  onChange={handleChange}
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                  Photo
                </label>
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  onChange={handleChange}
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="signature" className="block text-sm font-medium text-gray-700">
                  Signature
                </label>
                <input
                  type="file"
                  id="signature"
                  name="signature"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  onChange={handleChange}
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="charges" className="block text-sm font-medium text-gray-700">
                  Charges
                </label>
                <input
                  type="text"
                  id="charges"
                  name="charges"
                  placeholder="Enter Charges"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={formData.charges}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaperlessNew;
