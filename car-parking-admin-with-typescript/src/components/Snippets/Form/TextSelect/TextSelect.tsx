type TextSelectProps = {
    className?: string;
    label: string;
    children: string | JSX.Element | JSX.Element[];
};

const TextInput = ({ className, label, children }: TextSelectProps) => {
    return (
        <div className={`${className} form-field`}>
            <label htmlFor={label}>{label}</label>
            {children}
        </div>
    );
};

export default TextInput;
