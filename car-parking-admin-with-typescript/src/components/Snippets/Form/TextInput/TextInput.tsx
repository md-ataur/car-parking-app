interface TextFieldProps {
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  name: string;
  value: string | number;
  label: string;
  required?: boolean | undefined;
  className?: string;
}

const TextInput = (props: TextFieldProps) => {
  return (
    <div className={`${props?.className} form-field`}>
      <label htmlFor={props?.label}>{props?.label}</label>
      <input
        type={props?.type}
        onChange={props?.handleOnChange}
        name={props?.name}
        value={props?.value}
        required={props?.required}
      />
    </div>
  );
};

export default TextInput;
