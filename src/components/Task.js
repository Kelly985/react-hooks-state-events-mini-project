import React from "react";

const Task = ({ text, category }) => {
  return (
    <div className="task">
      <div className="label">{text}</div>
      <div className="category">{category}</div>
    </div>
  );
};

export default Task;
