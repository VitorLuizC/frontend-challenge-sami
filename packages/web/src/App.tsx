import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';

import client from './client';
import ProgressBar from './components/ProgressBar';
import useAsyncApolloClient from './hooks/useAsyncApolloClient';
import AppRouter from './routers/AppRouter';

const getApolloClient = () => client;

/**
 * Component that renders application. It's the **root** component.
 */
export default function App() {
  const client = useAsyncApolloClient(getApolloClient);

  if (!client) return <ProgressBar />;
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ApolloProvider>
  );
}
