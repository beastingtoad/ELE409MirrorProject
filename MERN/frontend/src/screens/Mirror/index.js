import React from "react";
import Clock from "./components/Clock";
import Weather from "./components/Weather"
import MessageView from "./components/MessageView";
import './Mirror.css';

const Mirror = () => {
  return (
      <>
          <header className="Mirror-header">
              <div style={{ Align: "left"}}>
                  <Clock />
                  <Weather />
                  <MessageView />
              </div>
          </header>
      </>
  )
}

export default Mirror;
