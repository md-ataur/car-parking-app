interface TextFieldProps {
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  name: string;
  value: string | number;
  label: string;
  required?: boolean | undefined;
  className?: string;
}

const TextInput = ({
  className,
  handleOnChange,
  label,
  type,
  name,
  value,
  required,
}: TextFieldProps) => {
  return (
    <div className={`${className} form-field`}>
      <label htmlFor={label}>{label}</label>
      <input type={type} onChange={handleOnChange} name={name} value={value} required={required} />
    </div>
  );
};

export default TextInput;
