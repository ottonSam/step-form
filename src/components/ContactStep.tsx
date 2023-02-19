type DataProps = {
    data: {
        name: string;
        email: string;
    };
    updateFieldHandler: (key: string, value: string) => void;
};


const Contact = ({ data, updateFieldHandler }: DataProps) => {
    return (
        <div>
            <h2>Identificação</h2>
            <div>
                <label htmlFor="name">Nome:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Digite o seu nome"
                    value={data.name || ""}
                    onChange={(e) => updateFieldHandler("name", e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="name">E-mail:</label>
                <input
                    name="email"
                    id="email"
                    placeholder="Digite o seu e-mail"
                    value={data.email || ""}
                    onChange={(e) => updateFieldHandler("email", e.target.value)}
                />
            </div>
        </div>
    );
}

export default Contact;