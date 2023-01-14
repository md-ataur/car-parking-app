const TextInput = ({ className, label, ...rest }) => {
    return (
        <div className={`${className} form-field`}>
            <label htmlFor={label}>{label}</label>
            <input {...rest} />
        </div>
    );
};

export default TextInput;
