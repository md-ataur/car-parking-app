const TextInput = ({ className, label, children }) => {
  return (
    <div className={`${className} form-field`}>
      <label htmlFor={label}>{label}</label>
      {children}
    </div>
  );
};

export default TextInput;
