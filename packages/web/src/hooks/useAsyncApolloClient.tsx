import type ApolloClient from 'apollo-client';

import { useLayoutEffect, useState } from 'react';

import useIsMounted from './useIsMounted';

/**
 * Hook that resolves an async `ApolloClient` instance.
 * @param fn - An async function that returns an `ApolloClient` instance.
 */
const useAsyncApolloClient = <T,>(fn: () => Promise<ApolloClient<T>>) => {
  const isMounted = useIsMounted();
  const [client, setClient] = useState<null | ApolloClient<T>>(null);

  useLayoutEffect(() => {
    Promise.resolve(fn())
      .then((client) => {
        if (isMounted()) setClient(client);
      })
      .catch(() => console.warn("Coudn't resolve async ApolloClient."));
  }, []);

  return client;
};

export default useAsyncApolloClient;
