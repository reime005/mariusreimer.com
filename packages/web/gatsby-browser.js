import React, { useContext } from 'react';
import { ThemeProvider, useTheme } from '@reime005/common';
import { GlobalStyle } from './src/components/GlobalStyle';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <Style />
    {element}
  </ThemeProvider>
);

const Style = () => {
  const { theme } = useTheme();

  return <GlobalStyle theme={theme} />;
};
