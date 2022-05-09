import React from "react";
import Clock from "./components/Clock";
import Edit from "./components/edit"
import Create from "./components/creat"
import RecordList from "./components/recordList"
import Weather from "./components/Weather"
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
