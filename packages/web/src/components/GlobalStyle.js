import { createGlobalStyle } from 'styled-components';
import { darkTheme, lightTheme } from '@reime005/common';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    height: 100%;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: 'Lato';
    background-color: ${({ theme }) =>
      theme === 'dark' ? darkTheme.color.body : lightTheme.color.body};
    color: ${({ theme }) =>
      theme === 'dark' ? darkTheme.color.font : lightTheme.color.font};

    &.mobile {
      overflow: hidden;
      max-height: 100vh;
    }
  }
  button {
    background-color: ${({ theme }) => (theme === 'dark' ? '#282c33' : '#fff')};
  }
  a {
    font-weight: 500;
    line-height: 1.25em;

    color: ${({ theme }) =>
      theme === 'dark' ? darkTheme.color.link : lightTheme.color.link};
      text-decoration: none;
    :hover {
      text-decoration: underline;
    }
    :visited {
      color: ${({ theme }) =>
        theme === 'dark' ? darkTheme.color.link : lightTheme.color.link};
    }
  }
  #tableText {
    color: ${({ theme }) =>
      theme === 'dark' ? darkTheme.color.font : lightTheme.color.font};
  }
  #table {
    border-color: ${({ theme }) =>
      theme === 'dark' ? darkTheme.color.stroke : lightTheme.color.stroke};
  }
  main {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    height: 100%;
    width: 100%;
  }
  p {
    margin-bottom: 1.33em;
  }
  ul {
    margin-top: 1.33em;
    list-style-type: square;
  }
  li {
    margin-bottom: 8px;
  }
  img {
    margin: 0;
  }
  .strong,
  strong {
    font-weight: 900;
    color: ${({ theme }) =>
      theme === 'dark' ? darkTheme.color.primary : lightTheme.color.primary};
  }
  .lighter,
  lighter {
    color: ${({ theme }) =>
      theme === 'dark'
        ? darkTheme.color.primaryLight
        : lightTheme.color.primaryMedium};
  }
  @media screen and (max-width: 570px) {
    main h1 {
      width: 100%;
    }
  }
  .device .device-content {
    overflow: hidden;
    background: #1e5284;
  }
`;
