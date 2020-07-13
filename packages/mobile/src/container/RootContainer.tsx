import React from 'react';

import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from '@reime005/common';
import { NavigationContainer } from '@react-navigation/native';

import { GlobalStateProvider } from '../state/GlobalStateProvider';
import { RootNavigationContainer } from './RootNavigationContainer';

const client = new ApolloClient({
  uri: 'https://mariusreimer.com/graphql',
  cache: new InMemoryCache().restore({}),
});

export const RootContainer = () => {
  return (
    <ThemeProvider>
      <ApolloProvider client={client}>
        <GlobalStateProvider>
          <NavigationContainer>
            <RootNavigationContainer />
          </NavigationContainer>
        </GlobalStateProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
};
