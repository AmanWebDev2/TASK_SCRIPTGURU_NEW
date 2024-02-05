import React from "react";

const Toast = ({ message }) => {
  return (
    <div className="toast z-20">
      <div className="alert alert-info">
        <span>{message ? message : "New message arrived."}</span>
      </div>
    </div>
  );
};

export default Toast;
