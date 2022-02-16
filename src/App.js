import { BrowserRouter,Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './assets/scss/theme.scss'
import React from 'react';

import StreetIQ from './pages/street-iq';
import MainLanding from "./pages/main-landing";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLanding/>} />
          <Route path="/streetLanding" element={<StreetIQ/>} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
