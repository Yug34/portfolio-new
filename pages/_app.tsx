import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Layout from "../components/Layout";
import {ApolloProvider} from "@apollo/client";
import {useApollo} from "../lib/apollo";
import Head from "next/head";

const textToLoad: string = "Hey!%20I'm";

function MyApp({Component, pageProps}: AppProps) {
    const client = useApollo(pageProps.initialApolloProps);

    return (
        <>
            <Head>
                <title>Yug Gajjar</title>
                {/* TODO: meta tags */}
                <meta name="Yug Gajjar Portfolio" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"} />
                <link href={`https://fonts.googleapis.com/css2?family=Dancing+Script&text=${textToLoad}:wght@500&display=swap`} rel="stylesheet" />
            </Head>

            <ApolloProvider client={client}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ApolloProvider>
        </>
    )
}

export default MyApp
