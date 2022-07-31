import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";
import {useMemo} from "react";

const createApolloClient = () => {
    return new ApolloClient({
        link: new HttpLink({
            uri: 'https://amusing-krill-94.hasura.app/v1/graphql',
            headers: {
                'Content-Type': 'application/json',
                'x-hasura-admin-secret': 'boC5iHfKZM564RvZZ5UPpL9lp3MZLi2hMtKGsiU61P1sFRIjdzRbiRHIt6jDv3ap'
            }
        }),
        cache: new InMemoryCache()
    })
}

let apolloClient;
export default function initializeApollo(initialState = null) {
    const _apolloClient = apolloClient ? apolloClient : createApolloClient()

    if (initialState) {
        const existingCache = _apolloClient.extract();
        _apolloClient.cache.restore({...existingCache, ...initialState})
    }

    //  if mode is SSR
    if (typeof window === 'undefined') {
        return _apolloClient
    }

    //  create client once on frontend
    if (!apolloClient) {
        apolloClient = _apolloClient;
    }

    return _apolloClient;
}

export function useApollo(initialState) {
    return useMemo(() => initializeApollo(initialState), [initialState]);
};
