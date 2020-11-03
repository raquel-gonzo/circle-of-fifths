import "./App.css";
import Circle from "./components/Circle";
import FlatIO from "./components/FlatIO";

function App() {

  

  return (
    <div className="App">
      <div id="container">
        <div id="circle-container">
          <Circle />
        </div>

        <div id="flatio-container">
          <FlatIO />
        </div>
      </div>
    </div>
  );
}

export default App;
