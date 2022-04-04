import { useState } from "react";
import { Cropper, getCroppedImg } from "react-cropper-custom";
import { Area } from "./types/types";
import "./App.css"

const IMAGE = './2521.jpg';

const App = () => {
  const [img, setImg] = useState(IMAGE);
  const [zoom, setZoom] = useState(1);
  const onCropComplete = async (croppedArea: Area) => {
    try {
      const image = await getCroppedImg(IMAGE, croppedArea);
      setImg(image);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="container">
      <header className="header">
        React-cropper-custom
      </header>
      <div className="cropperWrapper">
        <Cropper
          src={IMAGE}
          width={300}
          height={300}
          zoom={zoom}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
        />
        <div>
          <span>zoom</span>
          <input
            type="range"
            min={1}
            max={3}
            step={0.1}
            value={zoom}
            onChange={(e) => setZoom(parseFloat(e.target.value))}
          />
        </div>
      </div>
      {/* <img className="croppedImg" src={img} alt="croppedImg" /> */}
    </div>
  );
};

export default App;
