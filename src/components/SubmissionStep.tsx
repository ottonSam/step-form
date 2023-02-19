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
        <div className="Submission">
            <h1>Submission</h1>
        </div>
    );
}

export default Submission;