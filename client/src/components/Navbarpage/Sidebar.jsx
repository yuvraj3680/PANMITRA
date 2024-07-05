import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ isSidebarOpen }) => {
  const [showDropdown, setShowDropdown] = useState({});

  const toggleDropdown = (menu) => {
    setShowDropdown((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <div className={`bg-blue-600 h-screen w-64 fixed top-4 left-0 overflow-y-auto shadow-lg transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-200 ease-in-out md:translate-x-0 md:relative md:h-auto md:w-auto hidden md:block`}>
      <div className="p-4">
        <ul className="space-y-2">
          <SidebarItem title="Dashboard" to="/dashboard" color="bg-blue-500" />
          <SidebarDropdown
            title="Paperless PAN"
            showDropdown={showDropdown.paperlessPAN}
            onClick={() => toggleDropdown("paperlessPAN")}
            color="bg-yellow-400"
            links={[
              { title: "Paperless New PAN", to: "/new-pan" },
              { title: "Paperless Minor PAN", to: "/minor" },
              { title: "Paperless PAN List", to: "/list" },
              { title: "Training Video", to: "/video" },
            ]}
          />
          <SidebarDropdown
            title="UTI Pan"
            showDropdown={showDropdown.utiPan}
            onClick={() => toggleDropdown("utiPan")}
            color="bg-green-500"
            links={[
              { title: "Coupon Purchase", to: "/coupon" },
              { title: "UTI New ID Apply", to: "/uti-new-id" },
              { title: "Password Reset", to: "/password-reset" },
              { title: "PSA Profile Update", to: "/psa-profile-update" },
            ]}
          />
          <SidebarDropdown
            title="UTI E-Wallet"
            showDropdown={showDropdown.utiEWallet}
            onClick={() => toggleDropdown("utiEWallet")}
            color="bg-purple-600"
            links={[
              { title: "UTI E-Wallet Login", to: "/uti-ewallet-login" },
              { title: "UTI E-Wallet Record", to: "/uti-ewallet-record" },
            ]}
          />
          <SidebarDropdown
            title="NSDL Plan"
            showDropdown={showDropdown.nsdlPlan}
            onClick={() => toggleDropdown("nsdlPlan")}
            color="bg-orange-500"
            links={[
              { title: "NSDL eKYC PAN", to: "/nsdl-ekyc-pan" },
              { title: "NSDL eSign PAN", to: "/nsdl-ekyc" },
              { title: "NSDL Incomplete", to: "/nsdl-incomplete" },
              { title: "NSDL PAN History", to: "/nsdl-history" },
            ]}
          />
          <SidebarDropdown
            title="Find"
            showDropdown={showDropdown.find}
            onClick={() => toggleDropdown("find")}
            color="bg-red-500"
            links={[
              { title: "Find Plan", to: "/find-plan" },
              { title: "Find History", to: "/find-history" },
            ]}
          />
          <SidebarDropdown
            title="Recharge"
            showDropdown={showDropdown.recharge}
            onClick={() => toggleDropdown("recharge")}
            color="bg-yellow-600"
            links={[
              { title: "Mobile Recharge", to: "/recharge" },
              { title: "DTH Recharge", to: "/dth" },
              { title: "Recharge History", to: "/recharge-history" },
              { title: "Commission Slab", to: "/commission-slab" },
            ]}
          />
          <SidebarDropdown
            title="Insurance"
            showDropdown={showDropdown.insurance}
            onClick={() => toggleDropdown("insurance")}
            color="bg-blue-800"
            links={[
              { title: "Insurance Login", to: "/insurance-login" },
              { title: "Insurance Apply", to: "/insurance-apply" },
              { title: "Policy Data", to: "/policy-data" },
            ]}
          />
          <SidebarDropdown
            title="Wallet"
            showDropdown={showDropdown.wallet}
            onClick={() => toggleDropdown("wallet")}
            color="bg-green-600"
            links={[
              { title: "Add Money New", to: "/add-money-new" },
              { title: "Add Money Old", to: "/add-money-old" },
              { title: "Wallet Record", to: "/wallet-record" },
            ]}
          />
        </ul>
      </div>
    </div>
  );
};

const SidebarItem = ({ title, to, color }) => (
  <li className={`py-2 px-4 hover:bg-gray-100 cursor-pointer rounded-md ${color}`}>
    <Link to={to}>{title}</Link>
  </li>
);

const SidebarDropdown = ({ title, onClick, showDropdown, links, color }) => (
  <li className="relative">
    <div className={`flex items-center justify-between py-2 px-4 hover:bg-gray-100 cursor-pointer rounded-md ${color}`} onClick={onClick}>
      <span>{title}</span>
      <FontAwesomeIcon icon={faChevronDown} className={`ml-2 transition-transform duration-200 ${showDropdown ? "rotate-180" : ""}`} />
    </div>
    {showDropdown && (
      <div className="bg-white border border-gray-300 rounded-md z-10 ml-4">
        <ul className="py-1">
          {links.map((link, index) => (
            <li key={index} className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
              <Link to={link.to}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    )}
  </li>
);

export default Sidebar;
