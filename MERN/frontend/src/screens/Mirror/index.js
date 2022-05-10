import React from "react";
import Clock from "./components/Clock";
import Weather from "./components/Weather"
import Messages from "./components/MessageView";
import './Mirror.css';

const Mirror = () => {
  return (
      <>
          <header className="Mirror-header">
              <div style={{ Align: "left"}}>
                  <Clock />
                  <Weather />
                  <Messages />
              </div>
          </header>
      </>
  )
}

export default Mirror;
