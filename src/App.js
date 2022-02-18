import { BrowserRouter,Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './assets/scss/theme.scss'
import React from 'react';

import StreetIQ from './pages/street-iq';
import MainLanding from "./pages/main-landing";
import LandingPage from "./pages/landing-page";
import SurveyRewards from "./pages/survey-rewards";
import Destination from "./pages/destination";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLanding/>} />
          <Route path="/streetLanding" element={<StreetIQ/>} />
          <Route path="/landingPage" element={<LandingPage />} />
          <Route path="/surveyRewards" element={<SurveyRewards />} />
          <Route path="/destination" element={<Destination />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
