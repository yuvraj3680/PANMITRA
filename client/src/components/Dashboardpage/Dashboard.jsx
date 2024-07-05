import React from "react";
import { useNavigate ,Link } from "react-router-dom";
import Header from "../Headerpage/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faTv,
  faQrcode,
  faIndianRupeeSign,
  faIdCard,
  faLocationArrow,
  faSearch,
  faCrop,
  faPercent,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 px-4">
        <DashboardItem
          icon={faMobileAlt}
          title="Prepaid Mobile"
          description="Recharge your prepaid mobile"
          onClick={() => navigate("/recharge")}
          color="bg-yellow-400"
        />
        <DashboardItem
          icon={faTv}
          title="DTH/D2H"
          description="Recharge your DTH/D2H connection"
          onClick={() => navigate("/dth")}
          color="bg-blue-500"
        />
        <DashboardItem
          icon={faQrcode}
          title="Coupon Purchase"
          description="Purchase coupons using QR code"
          onClick={() => navigate("/coupon")}
          color="bg-rose-500"
        />
        <DashboardItem
          icon={faIndianRupeeSign}
          title="Add Money QR Scan"
          description="Scan QR code to add money"
          onClick={() => navigate("/addmoney")}
          color="bg-sky-700"
        />
        <DashboardItem
          icon={faIdCard}
          title="Paperless PAN"
          description="100% paperless PAN apply"
          onClick={() => navigate("/new-pan")}
          color="bg-green-500"
        />
        <DashboardItem
          icon={faLocationArrow}
          title="NSDL e-KYC PAN"
          description="OTP/Biometric through New & CR PAN"
          onClick={() => navigate("/nsdl-ekyc-pan")}
          color="bg-violet-800"
        />
        <DashboardItem
          icon={faIdCard}
          title="NSDL eSign(Photo & Sign)"
          description="OTP/Biometric through New & CR"
          onClick={() => navigate("/nsdl-ekyc")}
          color="bg-neutral-500"
        />

        {/* <DashboardItem 
          icon={faLocationArrow} 
          title="UTI LOGIN NEW" 
          description="UTI eKYC" 
          onClick={() => <a href="https://www.psaonline.utiitsl.com/psapanservices/forms/login.html/loginHome">UTI LOGIN NEW</a>} 
          color="bg-yellow-400"
        /> */}

        <Link to="https://www.psaonline.utiitsl.com/psapanservices/forms/login.html/loginHome">
          <DashboardItem
            icon={faLocationArrow}
            title="UTI LOGIN NEW"
            description="UTI eKYC"
            color="bg-yellow-400"
          />
        </Link>
        <Link to="https://tin.tin.nsdl.com/pantan/StatusTrack.html">
        <DashboardItem
          icon={faSearch}
          title="NSDL PAN TRACK"
          description="NSDL"
          onClick={() => navigate("/nsdl-pan-track")}
          color="bg-stone-500"
        />
        </Link>

        <Link to="https://www.trackpan.utiitsl.com/PANONLINE/forms/TrackPan/trackApp#forward">
        <DashboardItem
          icon={faSearch}
          title="UTI PAN TRACK"
          description="Coupon No. & DOB"
          onClick={() => navigate("/uti-pan-track")}
          color="bg-red-500"
        />
        </Link>
        <DashboardItem
          icon={faCrop}
          title="UTI Password Reset"
          description="Without OTP"
          onClick={() => navigate("/uti-password-reset")}
          color="bg-cyan-400"
        />

        <Link to="https://panmitra.com/portallogin/ps-crop-tool.php">
        <DashboardItem
          icon={faCrop}
          title="Photo Sign Crop"
          description="Crop Tool"
          onClick={() => navigate("/photo-sign-crop")}
          color="bg-green-400"
        />
        </Link>
        <DashboardItem
          icon={faSearch}
          title="Raise Query"
          description="Complaints Raise"
          onClick={() => navigate("/raise-query")}
          color="bg-pink-600"
        />
        <DashboardItem
          icon={faSearch}
          title="PAN Find"
          description="Only Adhar Linked Find"
          onClick={() => navigate("/pan-find")}
          color="bg-stone-300"
        />
        <DashboardItem
          icon={faPercent}
          title="My Commission Slab"
          description="View commission slab details"
          onClick={() => navigate("/commission-slab")}
          color="bg-yellow-300"
        />
        <DashboardItem
          icon={faQrcode}
          title="My Profile"
          description="View and edit profile details"
          onClick={() => navigate("/profile")}
          color="bg-fuchsia-400"
        />
      </div>
    </>
  );
};

// Dashboard item component
const DashboardItem = ({ icon, title, description, onClick, color }) => {
  return (
    <div
      className={`${color} rounded-lg shadow-lg p-6 border-b-2 cursor-pointer transition-transform transform hover:scale-105`}
      onClick={onClick}
    >
      <div className="text-center">
        <div className="text-3xl mb-2 text-white">
          <FontAwesomeIcon icon={icon} />
        </div>
        <h1 className="text-xl font-semibold mb-1 text-white">{title}</h1>
        <p className="text-sm text-gray-800">{description}</p>
      </div>
    </div>
  );
};

export default Dashboard;
