import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import {
  Routes,
  Route } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  HomeScreen,
  MirrorScreen
} from "./screens";


function App() {
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);



  return (
      <div style={{width: "100%"}}>
        <Routes>
          {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
          <Route path="/Mirror" element={<MirrorScreen />}/>
          <Route path="/" element={<HomeScreen />}/>
        </Routes>
      </div>
  );
}

export default App;
