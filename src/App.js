import "./App.css";
import React, { useState } from "react";
import scales from "./scales.json";
import Circle from "./components/Circle";
import FlatIO from "./components/FlatIO";

function App() {
  const [scaleSrc, setScaleSrc] = useState("");
  const [embedId, setEmbedId] = useState("");
  const [title, setTitle] = useState("");

  const renderMusic = (e, scale) => {
    e.preventDefault();
    setScaleSrc(scale.src);
    setEmbedId(scale.embedId);
    setTitle(scale.title);
  };

  return (
    <div className="App">
      <div id="container">
        <div id="circle-container">
          <Circle scales={scales} renderMusic={renderMusic} />
          <div id="get-started">
            <h3>Get Started:</h3>
            <ul>
              <li>
                Click on a{" "}
                <a href="https://www.musictheory.net/lessons/24#:~:text=A%20key%20signature%20is%20a,the%20beginning%20of%20the%20measure.">
                  Key Signature
                </a>.
              </li>
              <li>Scales and exercises will show down below.</li>
              <li>
                Listen to the music by pressing the 'play' button in the lower
                left corner of the page.
              </li>
              <li>
                Print this sheet music by pressing the '...' in the lower right
                corner of the page.
              </li>
              <li>
                Note: This is currently for treble clef only 🎼
              </li>
            </ul>
          </div>
        </div>

        <div id="flatio-container">
          <FlatIO
            scales={scales}
            scaleSrc={scaleSrc}
            embedId={embedId}
            title={title}
          />
        </div>
      </div>
      <div id="footer">
        <p>
          View this project on GitHub
        </p>
        <a href="https://github.com/raquel-gonzo/circle-of-fifths">
            <img
              id="github-img"
              alt="GitHub"
              src="https://res.cloudinary.com/raquel-gonzo/image/upload/c_scale,w_250/v1604183366/GitHub_SVG.svg"
            />
          </a>
      </div>
    </div>
  );
}

export default App;
