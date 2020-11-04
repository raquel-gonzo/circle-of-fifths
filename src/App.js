import "./App.css";
import React, { useState } from 'react'; 
import scales from './scales.json';
import Circle from "./components/Circle";
import FlatIO from "./components/FlatIO";

function App() {

  const [scaleSrc, setScaleSrc] = useState("");

  const renderMusic = (e, scale) => {
    e.preventDefault();
    // console.log(scale.src)
    setScaleSrc(scale.src)
    console.log(scaleSrc);
  };
  
  return (
    <div className="App">
      <div id="container">
        <div id="circle-container">
          <Circle scales={scales} renderMusic={renderMusic} />
        </div>

        <div id="flatio-container">
          <FlatIO music={scales}/>
        </div>
      </div>
    </div>
  );
}

export default App;
