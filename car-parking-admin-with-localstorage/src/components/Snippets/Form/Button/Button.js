/* eslint-disable react/button-has-type */
import "./Button.css";

const Button = ({ className, children, ...rest }) => {
  return (
    <button {...rest} className="form-button">
      {children}
    </button>
  );
};

export default Button;
