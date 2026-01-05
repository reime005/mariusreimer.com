import React from 'react';
import { GlobalStyle } from './src/components/GlobalStyle';

export const wrapRootElement = ({ element }) => (
  <>
    <GlobalStyle />
    {element}
  </>
);

// Disable Gatsby's link prefetching to prevent stale content
export const disableCorePrefetching = () => true;

// Unregister any existing service workers
export const onClientEntry = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((registration) => {
        registration.unregister();
      });
    });
  }
};
