import { HeartSVG } from "./HeartSVG";

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
        <div style={{display: "flex", flexDirection: 'column', marginTop: '1rem'}}>
            {ratings.map((rating) => (
                <div key={rating.id}>
                    <HeartSVG count={rating.rating}/>
                </div>
            ))}
        </div>
    );
};

export default RatingsPage;