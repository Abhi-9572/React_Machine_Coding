import React from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineClose,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from "react-icons/ai";

import "./Notification.css";
const Notification = ({ type = "success", message, onClose = () => {} }) => {
  const iconStyles = { marginRight: "10px" };
  const icons = {
    success: <AiOutlineCheckCircle style={iconStyles} />,
    info: <AiOutlineInfoCircle style={iconStyles} />,
    warning: <AiOutlineWarning style={iconStyles} />,
    error: <AiOutlineCloseCircle style={iconStyles} />,
  };
  return (
    <div className={`notification ${type}`}>
      {icons[type]}
      {message}
      <AiOutlineClose
        color="white"
        className="closeBtn"
        onClick={() => onClose()}
      />
    </div>
  );
};

export default Notification;
