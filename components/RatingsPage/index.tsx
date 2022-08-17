import {useEffect} from "react";

interface Ratings {
    id: number;
    reviewer: string;
    category: number;
    comment: string;
    rating: number;
    created_at: string;
}

const RatingsPage = (ratings: Ratings) => {
    useEffect(() => {
        console.log(ratings);
    }, [ratings])

    return (
        <div>
            Ratings
        </div>
    );
};

export default RatingsPage;