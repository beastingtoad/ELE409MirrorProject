import React, {useState, useEffect} from 'react';
import Edit from "./components/edit";
import './App.css';
function Home(){
  return (
    <>
      <header className="App-header">
        <Edit />
      </header>
    </>
  );
}

export default Home;
