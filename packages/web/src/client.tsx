import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import type { PersistentStorage } from 'apollo-cache-persist/types';

const cache = new InMemoryCache();

const link = ApolloLink.from([
  createHttpLink({
    fetch: window.fetch,
    uri: 'http://127.0.0.1:3000/graphql',
  }),
]);

const client = persistCache({
  cache,
  storage: window.localStorage as PersistentStorage<unknown>,
}).then(
  () =>
    new ApolloClient({
      link,
      cache,
    }),
);

export default client;
