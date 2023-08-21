import React, { ButtonHTMLAttributes } from "react";
import "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: string | JSX.Element;
}

const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button {...props} className={`${className} form-button`}>
      {children}
    </button>
  );
};

export default Button;
