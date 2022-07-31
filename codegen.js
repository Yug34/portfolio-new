module.exports = {
    schema: [
        {
            'https://amusing-krill-94.hasura.app/v1/graphql': {
                headers: {
                    'x-hasura-admin-secret': 'boC5iHfKZM564RvZZ5UPpL9lp3MZLi2hMtKGsiU61P1sFRIjdzRbiRHIt6jDv3ap'
                }
            }
        }
    ],
    documents: ['./components/**/graphql/*.{ts,js}', './lib/**/graphql/*.{ts,js}', 'graphql/**/*.{ts,js}'],
    overwrite: true,
    generates: {
        './types/graphql/generated/graphql.tsx': {
            plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
            config: {
                skipTypename: false,
                withHooks: true,
                withHOC: false,
                withComponent: false
            }
        },
        './graphql.schema.json': {
            plugins: ['introspection']
        }
    }
};