import { Modal } from "antd";
import 'antd/dist/antd.css';
import { Dispatch, SetStateAction } from "react";

type ResultProps = {
  isModalVisible: boolean;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
  result: string;
}

const Result = ({ isModalVisible, setIsModalVisible, result }: ResultProps) => {

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal title="Result" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <img className="croppedImg" src={result} alt="croppedImg" />
    </Modal>
  );
};

export default Result;
