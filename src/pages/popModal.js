import React from "react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { Modal } from "antd";
 
const MyModal = NiceModal.create((props) => {
  const {title,inner,onOk,onCancel } = props;
  const modal = useModal();
 
  const handleOk = () => {
    // console.log("编写自己的onOk逻辑");
    if (onOk) {
     onOk();
    }
    modal.hide();
  };
  const handleCancel=()=>{
    modal.hide();
  }
 
  return (
    <Modal
      title={title}
      open={modal.visible}
      onOk={handleOk}

      onCancel={handleCancel}
      afterClose={modal.remove}
    >
    {inner}
    </Modal>
  );
});
 
MyModal.propTypes = {};
 
export default MyModal;