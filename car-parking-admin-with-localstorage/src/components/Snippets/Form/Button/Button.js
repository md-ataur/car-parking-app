import "./Button.css";

const Button = ({ className, children, ...rest }) => {
  return (
    <button type="button" {...rest} className="form-button">
      {children}
    </button>
  );
};

export default Button;
