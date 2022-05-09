import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import {Button} from '@mui/material'
import axios from "axios";
import './App.css';

function Home() {
  const [temp, setTemp] = useState(0);
  /**
   * Add pressure and humidity to state here
   */

  const [message, setMessage] = useState('');

  const onChange = (event) => {
    setMessage(event.target.value);
  }

  useEffect(() => {
    let eventSource = new EventSource("http://192.168.1.5:9980/readtemp")
    eventSource.onmessage = e => {
      //console.log(JSON.stringify(e.data));
      setTemp(e.data)
    }
  }, []);

  /**
   * Add useEffect statements for pressure and humidity here
   */


  // -----------------------------------------------------

  /**
   *
   * Add the sendText function here
   */

  const sendRainbow = (e) => {
    e.preventDefault();
    fetch("http://192.168.1.5:9980/rainbow", {
      method: "POST",
      cache: "no-cache",
      mode: "cors",
      headers: {
        "content_type": "application/json",
      },
      body: JSON.stringify({rainbow: true})
    })
  }


  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/screens/Home/index.js</code> and save to reload.
        </p>
        <div style={{display: "flex", textAlign: "center", width: "100%", flexDirection: "row", justifyContent: "space-around"}}>
          <p style={{fontSize: "1rem", flex: 1}}>
            Temperature: {temp}C
          </p>

        </div>
      </header>
    </>
  );
}

export default Home;
