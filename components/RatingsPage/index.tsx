import {useEffect} from "react";

const RatingsPage = ({ratings}) => {
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