import { useState } from "react";
import { Cropper, getCroppedImg } from "react-cropper-custom";
import { Area } from "./types/types";
import { Button } from "antd";
import 'antd/dist/antd.css';
import "./App.scss"
import Result from "./components/result";
import Input from "./components/input";

const IMAGE = './2521.jpg';
const MIN = 1;
const MAX = 3;

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
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

  const showModal = () => {
    setIsModalVisible(true);
  }

  return (
    <div className="container">
      <header className="header">
        <h2>React-cropper-custom</h2>
        <div>Responsive and flexible cropper component with zoom and drag support for ReactJS</div>
      </header>
      <main className="content">
        <div className="cropperWrapper">
          <Cropper
            src={IMAGE}
            width={300}
            height={300}
            zoom={zoom}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
          />
        </div>
        <div>
          <Input zoom={zoom} setZoom={setZoom} min={MIN} max={MAX} />
        </div>
        <div>
          <Button type="primary" onClick={showModal}>result</Button>
        </div>
        <Result isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} result={img} />
      </main>
    </div>
  );
};

export default App;
