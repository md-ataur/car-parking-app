import React from "react";
import "./Form.css";

const Form = ({ children, className, ...rest }) => {
  return (
    <form className={`${className}`} {...rest}>
      {children}
    </form>
  );
};

export default Form;
