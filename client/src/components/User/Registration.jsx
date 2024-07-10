import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../Api"; // Assuming createUser function is correctly defined in Api.js
import panmitraLogo from "../../assets/panmitra.png";
import B2 from "../../assets/B2.jpg";
import B3 from "../../assets/B3.jpg";
import B4 from "../../assets/B4.jpg";

const Registration = () => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  // State to manage form input and captcha
  const [input, setInput] = useState({
    name: "",
    address: "",
    mobile: "",
    aadhar: "",
    amountType: "",
    username: "",
    pinCode: "",
    companyName: "",
    pan: "",
    charges: "",
    captchaInput: "",
    password: "",
    email: "",
    state: "" // Added state field
  });

  const [captcha, setCaptcha] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    generateCaptcha();
    loadFromLocalStorage();
  }, []);

  // Function to generate captcha
  const generateCaptcha = () => {
    const randomNum = Math.floor(1000 + Math.random() * 9000).toString();
    setCaptcha(randomNum);
  };

  // Function to load form data from local storage
  const loadFromLocalStorage = () => {
    const savedInput = localStorage.getItem("registrationInput");
    if (savedInput) {
      setInput(JSON.parse(savedInput));
    }
  };

  // Function to save form data to local storage
  const saveToLocalStorage = (data) => {
    localStorage.setItem("registrationInput", JSON.stringify(data));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.captchaInput !== captcha) {
      setError("Incorrect captcha");
      return;
    }

    try {
      const userData = await createUser(input);
      setInput({
        ...input,
        captchaInput: "",
        password: "",
      });
      setError(null);
      localStorage.removeItem("registrationInput"); // Clear saved input after successful registration

      // Save user details in localStorage after registration
      localStorage.setItem("UserDetails", JSON.stringify(userData));

      navigate("/login");
    } catch (error) {
      setError("Registration failed. Please try again later.");
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedInput = { ...input, [name]: value };
    setInput(updatedInput);
    saveToLocalStorage(updatedInput); // Save updated data to local storage
  };

  return (
    <div className="flex flex-col min-h-screen bg-indigo-300">
      {/* Header */}
      <header className="py-4 bg-white shadow-md">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src={panmitraLogo} alt="Panmitra Logo" className="h-10 mr-2" />
          </div>
          <div>
            <p className="text-sm">
              WhatsApp: 9008123198 | Email: panmitrauti@gmail.com
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-8xl mx-auto py-8 px-4 md:flex md:space-x-8">
        {/* Image Slider */}
        <div className="mt-40 w-full h-auto max-w-xl overflow-hidden relative mb-4 md:mb-0">
          <div ref={sliderRef} className="flex transition-all duration-500">
            {[B2, B3, B4].map((image, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                  style={{ minWidth: "100%", minHeight: "100%" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Registration Form */}
        <div className="w-full max-w-lg p-8 space-y-16 bg-white shadow-lg rounded-lg">
          <div>
            <h2 className="text-3xl font-extrabold text-center text-gray-900">
              Welcome to Panmitra
            </h2>
            <p className="mt-2 text-sm text-center text-gray-600">
              Or{" "}
              <button
                className="font-medium text-indigo-600 hover:text-indigo-500"
                onClick={() => navigate("/login")}
              >
                sign in to your account
              </button>
            </p>
          </div>
          <form className="mt-4 space-y-6" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={input.name}
                  onChange={handleChange}
                  type="text"
                  autoComplete="name"
                  required
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Login User ID
                </label>
                <input
                  id="username"
                  name="username"
                  value={input.username}
                  onChange={handleChange}
                  type="text"
                  autoComplete="username"
                  required
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="User ID"
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <input
                  id="address"
                  name="address"
                  value={input.address}
                  onChange={handleChange}
                  type="text"
                  autoComplete="address"
                  required
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Address"
                />
              </div>
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mobile No
                </label>
                <input
                  id="mobile"
                  name="mobile"
                  value={input.mobile}
                  onChange={handleChange}
                  type="text"
                  autoComplete="tel"
                  required
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Mobile No"
                />
              </div>
              <div>
                <label
                  htmlFor="aadhar"
                  className="block text-sm font-medium text-gray-700"
                >
                  Aadhaar No
                </label>
                <input
                  id="aadhar"
                  name="aadhar"
                  value={input.aadhar}
                  onChange={handleChange}
                  type="text"
                  autoComplete="aadhar"
                  required
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Aadhaar No"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  value={input.email}
                  onChange={handleChange}
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Email"
                />
              </div>
              <div>
                <label
                  htmlFor="amountType"
                  className="block text-sm font-medium text-gray-700"
                >                  Amount Type
                </label>
                <input
                  id="amountType"
                  name="amountType"
                  value={input.amountType}
                  onChange={handleChange}
                  type="text"
                  autoComplete="off"
                  required
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Amount Type"
                />
              </div>
              <div>
                <label
                  htmlFor="pan"
                  className="block text-sm font-medium text-gray-700"
                >
                  PAN No
                </label>
                <input
                  id="pan"
                  name="pan"
                  value={input.pan}
                  onChange={handleChange}
                  type="text"
                  autoComplete="off"
                  required
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="PAN No"
                />
              </div>
              <div>
                <label
                  htmlFor="charges"
                  className="block text-sm font-medium text-gray-700"
                >
                  Charges
                </label>
                <input
                  id="charges"
                  name="charges"
                  value={input.charges}
                  onChange={handleChange}
                  type="text"
                  autoComplete="off"
                  required
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Charges"
                />
              </div>
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Name
                </label>
                <input
                  id="companyName"
                  name="companyName"
                  value={input.companyName}
                  onChange={handleChange}
                  type="text"
                  autoComplete="off"
                  required
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Company Name"
                />
              </div>
              <div>
                <label
                  htmlFor="pinCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  PIN Code
                </label>
                <input
                  id="pinCode"
                  name="pinCode"
                  value={input.pinCode}
                  onChange={handleChange}
                  type="text"
                  autoComplete="postal-code"
                  required
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="PIN Code"
                />
              </div>
              <div>
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700"
                >
                  State
                </label>
                <input
                  id="state"
                  name="state"
                  value={input.state}
                  onChange={handleChange}
                  type="text"
                  autoComplete="off"
                  required
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="State"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  value={input.password}
                  onChange={handleChange}
                  type="password"
                  autoComplete="new-password"
                  required
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <label
                  htmlFor="captchaInput"
                  className="block text-sm font-medium text-gray-700"
                >
                  Captcha ({captcha})
                </label>
                <input
                  id="captchaInput"
                  name="captchaInput"
                  value={input.captchaInput}
                  onChange={handleChange}
                  type="text"
                  autoComplete="off"
                  required
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter Captcha"
                />
                {error && (
                  <p className="mt-2 text-sm text-red-600">{error}</p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-8xl mx-auto py-4 px-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">
              © 2024 Panmitra Online Services Pvt Ltd. All rights reserved.
            </p>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Registration;

