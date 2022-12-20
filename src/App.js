import { BrowserRouter, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/scss/theme.scss";
import React from "react";


import Surveys from "./pages/Surveys";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Surveys />} />
         {/*} <Route path="/main" element={<MainLanding />} />
          <Route path="/streetLanding" element={<StreetIQ />} />
          <Route path="/landingPage" element={<LandingPage />} />
          <Route path="/surveyRewards" element={<SurveyRewards />} />
  <Route path="/destination" element={<Destination />} />*/}
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
