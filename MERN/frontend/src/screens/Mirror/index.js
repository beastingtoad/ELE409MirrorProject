import React from "react";
import Clock from "./components/Clock";
import MessagesList from "./components/recordList"
import Weather from "./components/Weather"
import './Mirror.css';

const Mirror = () => {
  return (
      <>
          <header className="Mirror-header">
              <div style={{ Align: "left"}}>
                  <Clock />
                  <Weather />
                  <MessagesList />
              </div>
          </header>
      </>
  )
}

export default Mirror;
