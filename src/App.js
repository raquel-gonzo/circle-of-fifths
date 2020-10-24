import './App.css';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

function App() {
  return (
    <div className="App">
      <Image cloudName="raquel-gonzo" publicId="violin%20lessons/Circle-of-Fifths-Keys_sneblg.png" ></Image>
    </div>
  );
}

export default App;
