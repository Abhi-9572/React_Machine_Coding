import React, { useState } from "react";
import Notification from "./Notification";

const useNotification = (position = "top-right") => {
  const [notification, setNotification] = useState(null);

  const triggerNotification = (notificationProps) => {
    setNotification(notificationProps);
    setTimeout(() => {
      setNotification(null);
    }, notificationProps?.duration);
  };

  const onClose = () => {
    setNotification(null);
  };

  const NotificationComponent = notification ? (
    <div>
      <Notification {...notification} onClose={onClose} />
    </div>
  ) : null;

  return {
    NotificationComponent,
    triggerNotification,
  };
};

export default useNotification;
