import React from "react";
import "./Form.css";

const Form = ({ children, className }) => {
  return <form className={`${className}`}>{children}</form>;
};

export default Form;
