interface RatingsPagePropType {
    ratings: {
        id: number;
        reviewer: string;
        category: number;
        comment: string;
        rating: number;
        created_at: string;
    }[];
}

const RatingsPage = (props: RatingsPagePropType) => {
    const { ratings } = props;

    return (
        <div>
            {ratings.map((rating) => (
                <div key={rating.reviewer}>{rating.reviewer}</div>
            ))}
        </div>
    );
};

export default RatingsPage;