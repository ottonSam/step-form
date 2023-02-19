type DataProps = {
    data: {
        name: string;
        email: string;
        review: string;
        comment: string;
    };
};


const Submission = ({ data }: DataProps) => {
    return (
        <div>
            <h2>Envio</h2>
            <p>
                <span>Satisfação com o produto:</span>
                {data.review}
            </p>
            <p>
                <span>Comentário:</span> {data.comment}
            </p>
        </div>
    );
}

export default Submission;