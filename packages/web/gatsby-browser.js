import React from 'react';
import { GlobalStyle } from './src/components/GlobalStyle';

export const wrapRootElement = ({ element }) => (
  <>
    <GlobalStyle />
    {element}
  </>
);
