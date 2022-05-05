import { Select } from "antd";
import 'antd/dist/antd.css';
import { Dispatch, SetStateAction } from "react";

type AspectProps = {
  aspect: number;
  setAspect: Dispatch<SetStateAction<number>>;
}

const Aspect = ({ aspect, setAspect }: AspectProps) => {
  const { Option } = Select;

  const handleChange = (value: SetStateAction<number>) => {
    setAspect(value)
  }

  return (
    <div className="inputContainer">
      <div className="intro">
        aspect
      </div>
      <Select defaultValue={aspect} style={{ width: 120 }} onChange={handleChange}>
        <Option value={1}>1</Option>
        <Option value={9 / 16}>9:16</Option>
        <Option value={8 / 9}>8:9</Option>
        <Option value={4 / 3}>4:3</Option>
      </Select>
    </div>
  );
};

export default Aspect;
