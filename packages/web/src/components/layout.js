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
import { DarkGistsStyle, GlobalStyle, LightGistsStyle } from './GlobalStyle';

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
  const { theme } = useTheme();

  return (
    <>
      <GlobalStyle theme={theme} />
      {theme === 'dark' && <DarkGistsStyle />}
      {theme === 'light' && <LightGistsStyle />}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
