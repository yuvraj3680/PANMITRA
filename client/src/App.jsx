import "./App.css";
import React from 'react';
import { BrowserRouter } from "react-router-dom"; 
import Home from './components/Homepage/Home';


const App = () => {
  return (
   <> 
      <BrowserRouter>
        <Home/>
      </BrowserRouter>
     
   </>
  );
};

export default App;
