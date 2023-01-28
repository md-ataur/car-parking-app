import './Form.css';

type FormProps = {
    className: string;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    children: string | JSX.Element | JSX.Element[];
};

const Form = ({ handleSubmit, children, className, ...props }: FormProps) => {
    return (
        <form {...props} onSubmit={handleSubmit} className={`${className}`}>
            {children}
        </form>
    );
};

export default Form;
