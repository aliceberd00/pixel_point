import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import StartInterface from "./Components/StartInterface/StartInterface";
import Information from "./Components/Information/Information";

function App() {
  return (
    <>
      <Header/>
      <StartInterface/>
      <Information/>
    </>
  );
}

export default App;
