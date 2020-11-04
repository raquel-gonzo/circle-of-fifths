import "./App.css";
import React, { useState } from 'react'; 
import scales from './scales.json';
import Circle from "./components/Circle";
// import FlatIO from "./components/FlatIO";

function App() {
  
  return (
    <div className="App">
      <div id="container">
        <div id="circle-container">
          <Circle scales={scales} />
        </div>

        <div id="flatio-container">
          {/* <FlatIO music={scales}/> */}
        </div>
      </div>
    </div>
  );
}

export default App;
