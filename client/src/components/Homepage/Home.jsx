import React from 'react';
import Header from '../Headerpage/Header';
import Sidebar from '../Navbarpage/Sidebar';
import Routing from '../../RouteManager/Routing';
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
          <Routing />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
