import React from "react";
import HomePage from './pages/HomePage'

// import GameContainer from "./GameContainer";
import './index.css';

export default function App() {
  return (
    <div className="App">
      <HomePage />
      {/* <GameContainer num1={0} num2={0} sum={0} score={0} /> */}
    </div>
  );
}