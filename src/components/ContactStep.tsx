type DataProps = {
    data: {
        name: string;
        email: string;
    };
    updateFieldHandler: (key: string, value: string) => void;
};


const Contact = ({ data, updateFieldHandler }: DataProps) => {
    return (
        <div className="Contact">
            <h1>Contact</h1>
        </div>
    );
}

export default Contact;