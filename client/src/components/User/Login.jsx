import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import panmitra from "../../assets/panmitra.png";
import B2 from "../../assets/B2.jpg";
import B3 from "../../assets/B3.jpg";
import B4 from "../../assets/B4.jpg";

const API_URL = 'http://localhost:8000/user/login';

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({ username: '', password: '', captchaInput: '' });
  const [captcha, setCaptcha] = useState("");
  const [error, setError] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    generateCaptcha();
  }, []);

  // Function to generate captcha
  const generateCaptcha = () => {
    const randomNum = Math.floor(1000 + Math.random() * 9000).toString();
    setCaptcha(randomNum);
  };

  // Handle input change
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setError(null);  // Clear error on input change
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.captchaInput !== captcha) {
      setError("Incorrect captcha");
      generateCaptcha();  // Regenerate captcha on incorrect attempt
      return;
    }

    try {
      // Sending POST request to backend API for login
      const response = await axios.post(API_URL, {
        username: input.username,
        password: input.password
      });

      console.log('Server response:', response.data.data);

      // Handling successful login response
      if (response.data.status === '1' && response.data.token && response.data.data) {
        localStorage.setItem('token', response.data.token); // Storing token in localStorage
        localStorage.setItem('UserDetails', JSON.stringify(response.data.data)); // Storing user data in localStorage
        navigate('/'); // Redirecting to home page after successful login
      } else {
        setError("Invalid response from server");
      }
    } catch (error) {
      // Handling errors from API or network issues
      if (error.response && error.response.status === 401) {
        setError("Invalid Credentials: Wrong Username or Password");
      } else {
        setError("Something went wrong. Please try again later.");
      }
    }
  };

  // Function to navigate to registration page
  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="flex flex-col bg-blue-800 min-h-screen">
      {/* Header */}
      <header className="py-4 bg-white shadow-md">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src={panmitra} alt="Panmitra Logo" className="h-10 mr-2" />
            <p className="text-sm">
              WhatsApp: 9008123198 | Email: panmitrauti@gmail.com
            </p>
          </div>
        </div>
      </header>

      {/* Main Content: Slider and Login Form */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Image Slider */}
        <div className="w-full md:w-1/2">
          <div className="max-w-xl mx-auto overflow-hidden md:mt-0">
            <div ref={sliderRef} className="flex transition-transform duration-500 ease-in-out mt-24">
              {[B2, B3, B4].map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Login Form */}
        <div className="w-full md:w-1/2 bg-white p-8 md:p-12 flex items-center justify-center">
          <div className="max-w-md w-full">
            <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">Welcome to PAN MITRA</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                <input
                                  id="username"
                                  name="username"
                                  value={input.username}
                                  onChange={handleChange}
                                  type="text"
                                  autoComplete="username"
                                  required
                                  className="block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                  placeholder="Enter your username"
                                />
                              </div>
                              <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                <input
                                  id="password"
                                  name="password"
                                  value={input.password}
                                  onChange={handleChange}
                                  type="password"
                                  autoComplete="current-password"
                                  required
                                  className="block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                  placeholder="Password"
                                />
                              </div>
                              <div>
                                <label htmlFor="captcha" className="block text-sm font-medium text-gray-700">Captcha</label>
                                <div className="flex items-center mt-1">
                                  <div className="bg-gray-100 border border-gray-300 p-2 rounded-md text-lg font-semibold text-gray-900">{captcha}</div>
                                  <input
                                    id="captcha"
                                    name="captchaInput"
                                    value={input.captchaInput}
                                    onChange={handleChange}
                                    type="text"
                                    autoComplete="off"
                                    required
                                    className="block w-full px-3 ml-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                    placeholder="Enter the number shown above"
                                  />
                                </div>
                                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                  />
                                  <label htmlFor="remember-me" className="ml-2 text-sm text-gray-900">Remember me and you</label>
                                </div>
                                <div className="text-sm">
                                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
                                </div>
                              </div>
                              <div>
                                <button
                                  type="submit"
                                  className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                  Sign in
                                </button>
                              </div>
                            </form>
                            <div className="text-center mt-4">
                              <p className="text-sm text-gray-600">Don't have an account yet?</p>
                              <button
                                onClick={handleRegisterClick}
                                className="mt-1 text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline"
                              >
                                Register now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                
                      {/* Footer */}
                      <footer className="py-4 bg-gray-100 mt-auto">
                        <div className="max-w-4xl mx-auto px-4 text-center text-gray-600">
                          <p>&copy; {new Date().getFullYear()} PANMITRA. All rights reserved.</p>
                          <p>BELGAUM, KARNATAKA 591109</p>
                        </div>
                      </footer>
                    </div>
                  );
                }
                
                export default Login;
                
