//TODO:
//  for a canvas feel -- can use a large PNG
//  for a grid -- can use

import type {NextPage} from 'next'
import Head from "next/head";
import initializeApollo from "../lib/apollo";
import {gql} from "@apollo/client";
import HomePage from "../components/HomePage";

export async function getStaticProps(context) {
    const client = initializeApollo();
    const {data} = await client.query({
        query: gql`query getRatings {
            ratings {
                id
                reviewer
                comment
                rate
            }
        }`
    })

    return {
        props: {
            ratings: data.ratings
        }
    }
}

const Home: NextPage = ({ratings}) => {
    return (
        <HomePage ratings={ratings}/>
    )
}

export default Home
