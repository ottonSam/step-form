type DataProps = {
    data: {
        review: string;
        comment: string;
    };
    updateFieldHandler: (key: string, value: string) => void;
};


const Review = ({ data, updateFieldHandler }: DataProps) => {
    return (
        <div className="Review">
            <h1>Review</h1>
        </div>
    );
}

export default Review;