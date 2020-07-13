import * as React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import {
  useTheme,
  lightTheme,
  darkTheme,
  ThemeProvider,
} from '@reime005/common';
import { ThemeProvider as WebThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { getItem } from '../utils/storageHelper';

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            id
          }
        }
      `}
      render={() => (
        <div
          style={{
            minHeight: '100vh',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            paddingBottom: 32,
          }}
        >
          <ThemeProvider>
            <WebProviderWrapper>
              <Style />
              {children}
            </WebProviderWrapper>
          </ThemeProvider>
        </div>
      )}
    />
  );
};

const WebProviderWrapper = ({ children }) => {
  const { theme } = useTheme();

  return (
    <WebThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      {children}
    </WebThemeProvider>
  );
};

const Style = () => {
  const { theme, toggleTheme, setTheme } = useTheme();

  React.useEffect(() => {
    let persistedTheme = getItem('theme');

    if (
      ['dark', 'light'].includes(persistedTheme) &&
      theme !== persistedTheme
    ) {
      setTheme(persistedTheme);
    } else if (
      window &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches === true
    ) {
      setTheme('dark');
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <GlobalStyle theme={theme} />;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
