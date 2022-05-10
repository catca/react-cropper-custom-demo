import { useEffect, useState } from "react";
import { Cropper, getCroppedImg } from "react-cropper-custom";
import "react-cropper-custom/dist/index.css";
import { Area } from "./types/types";
import { Button } from "antd";
import "antd/dist/antd.css";
import "./App.scss";
import Result from "./components/result";
import Input from "./components/zoom/zoom";
import Aspect from "./components/Aspect";

const IMAGE = "./cat.jpg";
const MIN = 1;
const MAX = 3;

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [cropArea, setCropArea] = useState<Area>({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });
  const [img, setImg] = useState(IMAGE);
  const [zoom, setZoom] = useState(1);
  const [aspect, setAspect] = useState(1);

  const onCropComplete = (croppedArea: Area) => {
    setCropArea(croppedArea);
  };

  const showModal = async () => {
    try {
      const image = await getCroppedImg(IMAGE, cropArea, {
        width: 1200,
        height: 1200 * aspect,
      });
      setImg(image);
    } catch (e) {
      console.error(e);
    }
    setIsModalVisible(true);
  };

  return (
    <div className="container">
      <header className="header">
        <h2>React-cropper-custom</h2>
        <div>
          Responsive and flexible cropper component with zoom and drag support
          for ReactJS
        </div>
      </header>
      <main className="content">
        <div className="cropperWrapper">
          <Cropper
            src={IMAGE}
            zoom={zoom}
            aspect={aspect}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
          />
        </div>
        <div>
          <Input zoom={zoom} setZoom={setZoom} min={MIN} max={MAX} />
        </div>
        <div>
          <Aspect aspect={aspect} setAspect={setAspect} />
        </div>
        <div>
          <Button type="primary" onClick={showModal}>
            result
          </Button>
        </div>
        <Result
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          result={img}
        />
      </main>
    </div>
  );
};

export default App;
