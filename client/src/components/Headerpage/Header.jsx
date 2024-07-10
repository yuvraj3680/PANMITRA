import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faComment } from "@fortawesome/free-solid-svg-icons";
import K2 from "../../assets/k2.png";
import axios from "axios";

const Header = ({ toggleSidebar }) => {
  const [showDropdown, setShowDropdown] = useState({});
  const [balance, setBalance] = useState(0);
  const [emailId, setEmailId] = useState(null);
  const [userId, setUserId] = useState(null); // State to hold userId
  const [showPopover, setShowPopover] = useState(false); // State for popover visibility
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      setUserId(userId); // Set userId from localStorage
    } else {
      console.log('User ID not found in localStorage');
    }
  }, []);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        if (!userId) {
          console.log("User ID not found in state");
          return;
        }

        const response = await axios.get(`http://localhost:8000/wallet/${userId}/balance`);
        setBalance(response.data.balance);
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    };

    fetchBalance();
  }, [userId]); // Fetch balance whenever userId changes

  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/login");
  };

  const toggleDropdown = (menu) => {
    setShowDropdown((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <div className="bg-blue-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button className="block sm:hidden text-white" onClick={toggleSidebar}>
            ☰
          </button>

          <h1 className="text-2xl font-bold text-white">PANMITRA</h1>

          <div className="hidden sm:flex items-center space-x-4">
            {/* Dropdown items */}
          </div>

          <div className="hidden sm:flex items-center space-x-4 text-white">
            <h1 className="text-center">Balance: {balance} Rs.</h1>
          </div>

          <div className="relative">
            <button onClick={() => setShowPopover(true)} className="focus:outline-none">
              <img
                src={K2}
                alt="User Avatar"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
            </button>
            {showPopover && (
              <div className="absolute right-0 mt-2 w-72 bg-white border rounded-lg shadow-lg py-2 z-10">
                <h1 className="ml-4 text-xl font-bold">{emailId}</h1>
                <div className="px-4">
                  <Link to="/profile">
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Profile
                    </button>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Conditional mobile sidebar placeholder */}
      <div className="sm:hidden bg-gray-200 h-10">
        {/* Mobile specific content */}
      </div>
    </div>
  );
};

export default Header;
