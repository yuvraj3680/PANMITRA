import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Headerpage/Header';
import Sidebar from '../Navbarpage/Sidebar';
import Dashboard from '../Dashboardpage/Dashboard';
import Recharge from '../MobileRecharge/Recharge';
import DTH from '../DTHpage/DTH';
import Registration from '../User/Registration';
import Profile from '../Profilepage/Profile';
import PaperlessNew from '../Paperlesspanpage/PaperlessNew';
import Paperlessminorpan from '../Paperlesspanpage/Paperlessminorpan';
import CoupenPurchese from '../UTIpanpage/CoupenPurchese';
import Passwordreset from '../UTIpanpage/Passwordreset';
import Psaprofileupdate from '../UTIpanpage/Psaprofileupdate';
import Utinewidapply from '../UTIpanpage/Utinewidapply';
import Utiewalletlogin from '../Uti-E-Wallet/Utiewalletlogin';
import Utiewalletrecord from '../Uti-E-Wallet/Utiewalletrecord';
import Nsdlesignpan from '../NSDLPAN/Nsdlesignpan';
import Nsdlincomplete from '../NSDLPAN/Nsdlincomplete';
import Nsdlpanhistory from '../NSDLPAN/Nsdlpanhistory';
import Nsdlekycpan from '../NSDLPAN/Nsdlekycpan';
import Findpan from '../Findpage/Findpan';
import Findhistory from '../Findpage/Findhistory';
import Insurancelogin from '../VhehicleInsurancepage/Insurancelogin';
import Outletapply from '../VhehicleInsurancepage/Outletapply';
import Polisydata from '../VhehicleInsurancepage/Polisydata';
import Addmoneynew from '../Wallatepage/Addmoneynew';
import Addmoneyold from '../Wallatepage/Addmoneyold';
import Wallaterecord from '../Wallatepage/Wallaterecord';
import Footer from '../FooterPage/Footer';

const Home = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <div className="hidden sm:block sm:w-64 bg-gray-200 overflow-y-auto">
          <Sidebar />
        </div>
        <div className="flex-1 p-2 sm:p-2 overflow-y-auto">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/recharge" element={<Recharge />} />
            <Route path="/dth" element={<DTH />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/new-pan" element={<PaperlessNew />} />
            <Route path="/minor" element={<Paperlessminorpan />} />
            <Route path="/coupen" element={<CoupenPurchese />} />
            <Route path="/password-reset" element={<Passwordreset />} />
            <Route path="/psa-profile-update" element={<Psaprofileupdate />} />
            <Route path="/uti-new-id" element={<Utinewidapply />} />
            <Route path="/uti-ewallet-login" element={<Utiewalletlogin />} />
            <Route path="/uti-ewallet-record" element={<Utiewalletrecord />} />
            <Route path="/nsdl-ekyc-pan" element={<Nsdlekycpan />} />
            <Route path="/nsdl-ekyc" element={<Nsdlesignpan />} />
            <Route path="/nsdl-incomplete" element={<Nsdlincomplete />} />
            <Route path="/nsdl-history" element={<Nsdlpanhistory />} />
            <Route path="/find-plan" element={<Findpan />} />
            <Route path="/find-history" element={<Findhistory />} />
            <Route path="/insurance-login" element={<Insurancelogin />} />
            <Route path="/insurance-apply" element={<Outletapply />} />
            <Route path="/policy-data" element={<Polisydata />} />
            <Route path="/add-money-new" element={<Addmoneynew />} />
            <Route path="/add-money-old" element={<Addmoneyold />} />
            <Route path="/wallet-record" element={<Wallaterecord />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
