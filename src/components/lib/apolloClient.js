import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://z1/graphql',
  cache: new InMemoryCache(),
});

export default client;
