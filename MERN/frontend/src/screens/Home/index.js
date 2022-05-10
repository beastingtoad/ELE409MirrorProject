import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import {Button} from '@mui/material'
import axios from "axios";
import './App.css';
function Home(){
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/screens/Home/index.js</code> and save to reload.
        </p>
        <div style={{display: "flex", textAlign: "center", width: "100%", flexDirection: "row", justifyContent: "space-around"}}>
          <p style={{fontSize: "1rem", flex: 1}}>
          </p>
        </div>
      </header>
    </>
  );
}

export default Home;
