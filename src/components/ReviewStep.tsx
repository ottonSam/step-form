type DataProps = {
    data: {
        review: string;
        comment: string;
    };
    updateFieldHandler: (key: string, value: string) => void;
};


const Review = ({ data, updateFieldHandler }: DataProps) => {
    return (
        <div>
            <div>
                <label>
                    <input
                        type="radio"
                        value="unsatisfied"
                        name="review"
                        checked={data.review === "unsatisfied"}
                        onChange={(e) => updateFieldHandler("review", e.target.value)}
                    />
                    <p>Insatisfeito</p>
                </label>
                <label>
                    <input
                        type="radio"
                        value="neutral"
                        name="review"
                        checked={data.review === "neutral"}
                        onChange={(e) => updateFieldHandler("review", e.target.value)}
                    />
                    <p>Poderia ser melhor</p>
                </label>
                <label>
                    <input
                        type="radio"
                        value="satisfied"
                        name="review"
                        checked={data.review === "satisfied"}
                        onChange={(e) => updateFieldHandler("review", e.target.value)}
                    />
                    <p>Satisfeito</p>
                </label>
                <label>
                    <input
                        type="radio"
                        value="very_satisfied"
                        name="review"
                        checked={data.review === "very_satisfied"}
                        onChange={(e) => updateFieldHandler("review", e.target.value)}
                    />
                    <p>Muito satisfeito</p>
                </label>
            </div>
            <div>
                <label htmlFor="comment">Comentário:</label>
                <textarea
                    name="comment"
                    id="comment"
                    placeholder="Conte como foi a sua experiência com o produto..."
                    value={data.comment || ""}
                    onChange={(e) => updateFieldHandler("comment", e.target.value)}
                ></textarea>
            </div>
        </div>
    );
}

export default Review;