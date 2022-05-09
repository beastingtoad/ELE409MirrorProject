import React from "react";
import Clock from "./components/Clock";
import Weather from"./components/Weather";
import './Mirror.css';

const Mirror = () => {
  return (
      <>
          <header className="Mirror-header">
              <div style={{ Align: "left"}}>
                  <Clock />
                  <Weather />
              </div>
          </header>
      </>
  )
}

export default Mirror;
