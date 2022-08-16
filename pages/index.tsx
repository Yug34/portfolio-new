//TODO:
//  for a canvas feel -- can use a large PNG
//  for a grid -- can use

import type {NextPage} from 'next'
import initializeApollo from "../lib/apollo";
import HomePage from "../components/HomePage";
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

const Home: NextPage = ({ratings}) => {
    return (
        <HomePage ratings={ratings}/>
    );
};

export default Home
