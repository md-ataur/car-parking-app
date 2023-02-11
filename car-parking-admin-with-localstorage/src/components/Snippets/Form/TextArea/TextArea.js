import React from "react";

const TextArea = ({ className, label, ...rest }) => {
  return (
    <div className={`${className} form-field`}>
      <label htmlFor={label}>{label}</label>
      <textarea {...rest} />
    </div>
  );
};

export default TextArea;
