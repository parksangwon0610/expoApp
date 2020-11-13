import { ApolloClient, InMemoryCache, HttpLink, split } from '@apollo/client'
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

const HTTP_ENDPOINT = "http://localhost:1337/graphql";
const WS_ENDPOINT = "ws://localhost:3000/graphql";

const httpLink = new HttpLink({
    uri: HTTP_ENDPOINT,
});
const wsLink = new WebSocketLink({
    uri: WS_ENDPOINT,
    options: {
        reconnect: true
    }
});

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
);

export const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache()
});

export default client;
