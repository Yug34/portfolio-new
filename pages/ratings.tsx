import type {NextPage} from 'next'
import RatingsPage from "../components/RatingsPage";
import initializeApollo from "../lib/apollo";
import {GET_RATINGS} from "../graphql/queries";

export async function getStaticProps(context) {
    const client = initializeApollo();
    const {data} = await client.query({
        query: GET_RATINGS
    });

    return {
        props: {
            ratings: data.ratings
        }
    };
}

const Ratings: NextPage = (ratings: any) => {
    return <RatingsPage ratings={ratings.ratings}/>;
};

export default Ratings;
