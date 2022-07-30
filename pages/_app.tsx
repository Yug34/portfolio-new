import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Layout from "../components/Common/Layout";
import {ApolloProvider} from "@apollo/client";
import {useApollo} from "../lib/apollo";

function MyApp({Component, pageProps}: AppProps) {
    const client = useApollo(pageProps.initialApolloProps);

    return (
        <ApolloProvider client={client}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ApolloProvider>
    )
}

export default MyApp
