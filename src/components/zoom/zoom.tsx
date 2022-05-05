import { Col, InputNumber, Row, Slider } from "antd";
import 'antd/dist/antd.css';
import './zoom.scss';
import { Dispatch, SetStateAction } from "react";

type InputProps = {
  zoom: number;
  setZoom: Dispatch<SetStateAction<number>>;
  min: number;
  max: number;
}

const Input = ({ zoom, setZoom, min, max }: InputProps) => {
  const onChange = (value: number) => {
    if (isNaN(value)) {
      return;
    }
    setZoom(value);
  };

  return (
    <div className="inputContainer">
      <div className="intro">
        zoom
      </div>
      <div className="sliderWrapper">
        <Slider
          min={min}
          max={max}
          onChange={onChange}
          value={typeof zoom === 'number' ? zoom : 0}
          step={0.1}
        />
      </div>
      <div>
        <InputNumber
          min={min}
          max={max}
          style={{ margin: '0 16px' }}
          step={0.1}
          value={zoom}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Input;
