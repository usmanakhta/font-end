import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./Component/Homepage/Homepage";
import Navbar from "./Component/Navbar/Navbar";
import Level from "./Component/Level/Level";
import DailyCombo from "./Component/Daily_Combo/DailyCombo";
import Daily_reward from './Component/DailyRewardSection/Daily_reward';
import Friend from './Component/Friend/Friend';
import Gift from './Component/Gift/Gift';
function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/reward" element={<Daily_reward />} />
          <Route path="/combo" element={<DailyCombo />} />
          <Route path="/level" element={<Level />} />
          <Route path="/friends" element={<Friend />} />
          <Route path="/gift" element={ <Gift/>} />
          
          
        </Routes>
        <Navbar />
      </Router>
     
    </div>
  );
}

export default App;
