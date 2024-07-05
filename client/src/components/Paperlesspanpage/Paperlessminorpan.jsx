import axios from "axios";
import React, { useState } from "react";

const Paperlessminorpan = () => {
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

  const [fromData, setFormData] = useState({
    title: "",
    lastName: "",
    firstName: "",
    middleName: "",
    nameOnCard: "",
    dateOfBirth: "",
    gender: "",
    fatherLastName: "",
    fatherFirstName: "",
    fatherMiddleName: "",
    aadhaarNumber: "",
    nameAsPerAadhaar: "",
    mobileNumber: "",
    emailAddress: "",
    flatRoomDoorBlockNo: "",
    buildingVillageName: "",
    roadStreetLanePostOffice: "",
    areaLocalitySubDivision: "",
    state: "",
    townCityDistrict: "",
    pinCode: "",
    panCardType: "",

    RAtitle: "",
    RAlastName: "",
    RAfirstName: "",
    RAmiddleName: "",
    RAflatRoomDoorBlockNo: "",
    RAbuildingVillageName: "",
    RAroadStreetLanePostOffice: "",
    RAareaLocalitySubDivision: "",
    RAtownCityDistrict: "",
    RAstate: "",
    RApinCode: "",

    proofOfIdentity: "",
    proofOfAddress: "",
    proofOfDOB: "",
    aadharCardImage: "",
    aadharBackImage: "",
    guardianKYCfile: "",
    guardianKYCfileBack: "",
    photo: "",
    signature: "",
    charges: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...fromData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/minorpan/', fromData);
      console.log('Response:', response.data);
      setShowPopup(true); // Show popup on successful submission
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-7xl bg-white rounded-lg shadow-lg p-6">
        <div className="bg-gray-200 rounded-t-lg p-4">
          <h1 className="text-xl font-bold text-gray-800">
            PAN New Application (Form for INDIAN Citizen)
          </h1>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2 md:grid-cols-3">
              <div className="sm:col-span-1">
                <label
                  htmlFor="nameTitle"
                  className="block text-sm font-medium text-gray-700"
                >
                  Select Name Title
                </label>
                <input
                  type="text"
                  id="nameTitle"
                  name="title"
                  placeholder="Enter Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.title}
                  onChange={handlechange}
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md  "
                  value={fromData.firstName} 
                  onChange={handlechange}
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="middleName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Middle Name
                </label>
                <input
                  type="text"
                  id="middleName"
                  name="middleName"
                  placeholder="Enter Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.middleName}
                  onChange={handlechange}
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.lastName}
                  onChange={handlechange}
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="nameOnCard"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name on Card
                </label>
                <input
                  type="text"
                  id="nameOnCard"
                  name="nameOnCard"
                  placeholder="Enter Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.nameOnCard}
                  onChange={handlechange}
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="dateOfBirth"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date of Birth (18+ age only)*
                </label>
                <input
                  type="text"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  placeholder="Enter Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.dateOfBirth}
                  onChange={handlechange}
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium text-gray-700"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.gender}
                  onChange={handlechange}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="transgender">Transgender</option>
                </select>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="fatherFirstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Father's First Name
                </label>
                <input
                  type="text"
                  id="fatherFirstName"
                  name="fatherFirstName"
                  placeholder="Enter Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.fatherFirstName}
                  onChange={handlechange}
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="fatherMiddleName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Father's Middle Name
                </label>
                <input
                  type="text"
                  id="fatherMiddleName"
                  name="fatherMiddleName"
                  placeholder="Enter Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.fatherMiddleName}
                  onChange={handlechange}
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="fatherLastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Father's Last Name
                </label>
                <input
                  type="text"
                  id="fatherLastName"
                  name="fatherLastName"
                  placeholder="Enter Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.fatherLastName}
                  onChange={handlechange}
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="aadhaarNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Aadhaar Number
                </label>
                <input
                  type="text"
                  id="aadhaarNumber"
                  name="aadhaarNumber"
                  placeholder="Enter Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.aadhaarNumber}
                  onChange={handlechange}
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="aadhaarName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name As Per Aadhaar
                </label>
                <input
                  type="text"
                  id="aadhaarName"
                  name="nameAsPerAadhaar"
                  placeholder="Enter Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.nameAsPerAadhaar}
                  onChange={handlechange}
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="mobileNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mobile Number
                </label>
                <input
                  type="text"
                  id="mobileNumber"
                  name="mobileNumber"
                  placeholder="Enter Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.mobileNumber}
                  onChange={handlechange}
                />
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="emailAddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="text"
                  id="emailAddress"
                  name="emailAddress"
                  placeholder="emailAddress"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.emailAddress}
                  onChange={handlechange}
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="emailAddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  Flat/Room/Door/Block No
                </label>
                <input
                  type="text"
                  id="emailAddress"
                  name="flatRoomDoorBlockNo"
                  placeholder="Flat/Room/Door/Block No"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.flatRoomDoorBlockNo}
                  onChange={handlechange}
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="emailAddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  Building/Village Name
                </label>
                <input
                  type="text"
                  id="emailAddress"
                  name="buildingVillageName"
                  placeholder="Building/Village "
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.buildingVillageName}
                  onChange={handlechange}
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="emailAddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  Road/Street/Lane/Post Office
                </label>
                <input
                  type="text"
                  id="emailAddress"
                  name="roadStreetLanePostOffice"
                  placeholder="Road/Street/Lane/Post Office "
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.roadStreetLanePostOffice}
                  onChange={handlechange}
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="emailAddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  Area/Locality/Sub-Division
                </label>
                <input
                  type="text"
                  id="emailAddress"
                  name="areaLocalitySubDivision"
                  placeholder="Area/Locality/Sub-Division"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.areaLocalitySubDivision}
                  onChange={handlechange}
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700"
                >
                  State/Union Territory
                </label>
                <select
                  id="state"
                  name="state"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.state}
                  onChange={handlechange}
                >
                  <option value="">Select State</option>
                  {states.map((state, index) => (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="emailAddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  Town/City/District
                </label>
                <input
                  type="text"
                  id="emailAddress"
                  name="townCityDistrict"
                  placeholder="Town/City/District "
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.townCityDistrict}
                  onChange={handlechange}
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Pincode
                </label>
                <textarea
                  id="pincode"
                  name="pinCode"
                  placeholder="Enter Pincode"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.pinCode}
                  onChange={handlechange}
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="panCardType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Pan Card Type
                </label>

                <select
                  name="panCardType"
                  id="panCardType"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.panCardType}
                  onChange={handlechange}
                >
                  <option value="">Minor</option>
                  <option value="">Minor</option>
                </select>
              </div>
            </div>

            <div>
              <h1 className="text-3xl font-bold">
                Representative Assessee (RA)
              </h1>
              <p>
                -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
              </p>
            </div>

            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2 md:grid-cols-3">
              <div className="sm:col-span-1">
                <label
                  htmlFor="nameTitle"
                  className="block text-sm font-medium text-gray-700"
                >
                  Select Name Title
                </label>
                <input
                  type="text"
                  id="nameTitle"
                  name="RAtitle"
                  placeholder="Enter Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.RAtitle}
                  onChange={handlechange}
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name=" RAfirstName"
                  placeholder="Enter Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.RAfirstName}
                  onChange={handlechange}
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="middleName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Middle Name
                </label>
                <input
                  type="text"
                  id="middleName"
                  name="RAmiddleName"
                  placeholder="Enter Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.RAmiddleName}
                  onChange={handlechange}
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="RAlastName"
                  placeholder="Enter Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.RAlastName}
                  onChange={handlechange}
                />
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="emailAddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  Building/Village Name
                </label>
                <input
                  type="text"
                  id="emailAddress"
                  name="RAbuildingVillageName"
                  placeholder="Building/Village "
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.RAbuildingVillageName}
                  onChange={handlechange}
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="emailAddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  Road/Street/Lane/Post Office
                </label>
                <input
                  type="text"
                  id="emailAddress"
                  name="RAroadStreetLanePostOffice"
                  placeholder="Road/Street/Lane/Post Office "
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.RAroadStreetLanePostOffice}
                  onChange={handlechange}
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="emailAddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  flat/RoomDoor/BlockNo
                </label>
                <input
                  type="text"
                  id="emailAddress"
                  name="RAflatRoomDoorBlockNo"
                  placeholder="Road/Street/Lane/Post Office "
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.RAflatRoomDoorBlockNo}
                  onChange={handlechange}
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="emailAddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  Area/Locality/Sub-Division
                </label>
                <input
                  type="text"
                  id="emailAddress"
                  name="RAareaLocalitySubDivision"
                  placeholder="Area/Locality/Sub-Division"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.RAareaLocalitySubDivision}
                  onChange={handlechange}
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700"
                >
                  State/Union Territory
                </label>
                <select
                  id="state"
                  name="RAstate"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.RAstate}
                  onChange={handlechange}
                >
                  <option value="">Select State</option>
                  {states.map((state, index) => (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="emailAddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  Town/City/District
                </label>
                <input
                  type="text"
                  id="emailAddress"
                  name="RAtownCityDistrict"
                  placeholder="Town/City/District "
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.RAtownCityDistrict}
                  onChange={handlechange}
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Pincode
                </label>
                <textarea
                  id="pincode"
                  name="RApinCode"
                  placeholder="Enter Pincode"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.RApinCode}
                  onChange={handlechange}
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="panCardType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Pan Card Type
                </label>

                <select
                  name=""
                  id=""
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.title}
                  onChange={handlechange}
                >
                  <option value="">Minor</option>
                  <option value="">Minor</option>
                </select>
              </div>
            </div>
            <div>
              <p>
                -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
              </p>
            </div>

            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2 md:grid-cols-3">
              <div className="sm:col-span-1">
                <label
                  htmlFor="proofOfIdentity"
                  className="block text-sm font-medium text-gray-700"
                >
                  Proof of Identity
                </label>

                <input
                  type="text"
                  id="proofOfIdentity"
                  name="proofOfIdentity"
                  placeholder="Enter Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.proofOfIdentity}
                  onChange={handlechange}
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="proofOfAddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  Proof of Address
                </label>
                <input
                  type="text"
                  id="proofOfAddress"
                  name="proofOfAddress"
                  placeholder="Enter Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.proofOfAddress}
                  onChange={handlechange}
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="proofOfDOB"
                  className="block text-sm font-medium text-gray-700"
                >
                  Proof of DOB
                </label>
                <input
                  type="text"
                  id="proofOfDOB"
                  name="proofOfDOB"
                  placeholder="Enter Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.proofOfDOB}
                  onChange={handlechange}
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="aadharFront"
                  className="block text-sm font-medium text-gray-700"
                >
                  Aadhar Card (Image/Pdf)(Color Img)
                </label>
                <input
                  type="file"
                  id="aadharFront"
                  name="aadharCardImage"
                  accept="image/*, .pdf"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.aadharCardImage}
                  onChange={handlechange}
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="aadharBack"
                  className="block text-sm font-medium text-gray-700"
                >
                  Aadhar Back (Image/Pdf)(Color Img)
                </label>
                <input
                  type="file"
                  id="aadharBack"
                  name="aadharBackImage"
                  accept="image/*, .pdf"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.aadharBackImage}
                  onChange={handlechange}
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Guardian KYC (Full Kyc)
                </label>
                <input
                  type="file"
                  id="photo"
                  name="guardianKYCfile"
                  accept="image/*"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.guardianKYCfile}
                  onChange={handlechange}
                />
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Guardian KYC (Back Kyc)
                </label>
                <input
                  type="file"
                  id="photo"
                  name="guardianKYCfileBack"
                  accept="image/*"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.guardianKYCfileBack}
                  onChange={handlechange}
                />
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Photo(213x213px)(Color Photo)
                </label>
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  accept="image/*"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.photo}
                  onChange={handlechange}
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="signature"
                  className="block text-sm font-medium text-gray-700"
                >
                  Signature (Color Img)
                </label>
                <input
                  type="file"
                  id="signature"
                  name="signature"
                  accept="image/*"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.signature}
                  onChange={handlechange}
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="charges"
                  className="block text-sm font-medium text-gray-700"
                >
                  Charges
                </label>
                <input
                  type="text"
                  id="charges"
                  name="charges"
                  placeholder="Enter Charges"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={fromData.charges}
                  onChange={handlechange}
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="mt-6 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Apply
                </button>
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
    </div>
  );
};

export default Paperlessminorpan;
