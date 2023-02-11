type TextAreaProps = {
  handleOnChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name: string;
  value: string | number;
  label: string;
  required?: boolean | undefined;
  className?: string;
};

const TextArea = ({ className, handleOnChange, name, value, label, required }: TextAreaProps) => {
  return (
    <div className={`${className} form-field`}>
      <label htmlFor={label}>{label}</label>
      <textarea onChange={handleOnChange} name={name} value={value} required={required} />
    </div>
  );
};

export default TextArea;
