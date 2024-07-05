import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faComment } from "@fortawesome/free-solid-svg-icons";
import K2 from "../../assets/k2.png";
import axios from "axios";

const Header = ({ toggleSidebar }) => {
  const [showDropdown, setShowDropdown] = useState({});
  const [showPopover, setShowPopover] = useState(false);
  const [balance, setBalance] = useState(0); // Initialize balance state
  const navigate = useNavigate();
  const[emailid,setEmailId] = useState(null);


  useEffect(() => {
    (()=>{
      const userDetailsString = localStorage.getItem('UserDetails');
      if (userDetailsString) {
        const userDetails = JSON.parse(userDetailsString);
        setEmailId(userDetails?.email);
      } else {
        console.log('UserDetails not found in localStorage');
      }
    })()
  })

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        // Get userId from localStorage
        const userDetailsString = localStorage.getItem('UserDetails');
        if (!userDetailsString) {
          console.log('UserDetails not found in localStorage');
          return;
        }

        const userDetails = JSON.parse(userDetailsString);
        const userId = userDetails?.id;
        if (!userId) {
          console.log('User ID not found in UserDetails');
          return;
        }

        const response = await axios.get(`http://localhost:8000/wallate/${userId}/balance`);
        console.log(response.data);
        setBalance(response.data.balance);
      } catch (error) {
        console.error('Error fetching balance:', error);
        // Handle error state or alert the user
      }
    };

    fetchBalance();
  }, []); // Empty dependency array means this effect runs once on mount

  const handleLogout = () => {
    localStorage.removeItem('UserDetails'); // Clear UserDetails on logout
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
          <button
            className="block sm:hidden text-white"
            onClick={toggleSidebar}
          >
            ☰
          </button>

          <h1 className="text-2xl font-bold text-white">PANMITRA</h1>

          <div className="hidden sm:flex items-center space-x-4">
            <DropdownItem
              title="Support Contacts"
              icon={faComment}
              menu="support"
              onClick={() => toggleDropdown("support")}
              showDropdown={showDropdown.support}
            />

            {/* Add more dropdown items as needed */}

          </div>

          <div className="hidden sm:flex items-center space-x-4 text-white">
            <h1 className="text-center">Balance: {balance} Rs.</h1>
          </div>

          <div className="relative">
            <button
              onClick={() => setShowPopover(!showPopover)}
              className="focus:outline-none"
            >
              <img
                src={K2}
                alt="User Avatar"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
            </button>
            {showPopover && (
              <div className="absolute right-0 mt-2 w-72 bg-white border rounded-lg shadow-lg py-2 z-10">
                <h1 className="ml-4 text-xl font-bold">{emailid}</h1> 
                <div className="px-4">
                  {/* User profile dropdown content */}
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

const DropdownItem = ({ title, icon, menu, onClick, showDropdown }) => (
  <div className="relative">
    <div className="flex items-center cursor-pointer" onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
      <span className="ml-1">{title}</span>
      <FontAwesomeIcon
        icon={faChevronDown}
        className={`ml-2 transition-transform duration-200 ${
          showDropdown ? "rotate-180" : ""
        }`}
      />
    </div>
    {showDropdown && (
      <DropdownMenu
        menu={menu}
        links={[
          { title: "Only WhatsApp - 9767528186", to: "#" },
          { title: "Raise Complaints", to: "#" },
          { title: "Complaints History", to: "#" },
        ]}
      />
    )}
  </div>
);

const DropdownMenu = ({ menu, links }) => (
  <div className="absolute top-full left-0 mt-1 border border-gray-300 rounded-md shadow-md bg-white z-10 w-48">
    <ul className="py-1">
      {links.map((link, index) => (
        <li
          key={index}
          className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
        >
          <Link to={link.to} className="block">{link.title}</Link>
        </li>
      ))} 
    </ul>
  </div>
);

export default Header;
