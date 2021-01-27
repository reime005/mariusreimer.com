import React, { createContext, useContext } from 'react';
import * as styledComponents from 'styled-components/native';

interface DefaultTheme {
  color: {
    primary: string;
  };
}

interface Action<T, P> {
  type: T;
  payload: P;
}

type Actions = Action<'TOGGLE_THEME', {}>;

export const lightTheme: styledComponents.DefaultTheme = {
  color: {
    primary: '#7f5af0',
    primaryMedium: 'rgba(98, 70, 234, 0.7)',
    primaryLight: 'rgba(98, 70, 234, 0.2)',
    white: '#fffffe',
    body: '#fff',
    font: '#121212',
    inlineCodeBG: 'rgba(104, 179, 171, 0.4)',
    inlineCodeFont: '#242424',
    lightBorder: 'rgba(0,0,0,.1)',
    itemHighlight: 'transparent',
    mediumBorder: 'rgba(230, 230, 230,1)',
    scroller: '#f1b883',
    yellow: '#ffd803',
    grey: 'rgba(0,0,0,.64)',
    link: '#6246ea',
    buttonBG: '#6246ea',
    buttonFont: '#d9d7e0',
    headLine: '#121212',
    backgroundColor1: 'rgb(255,255,255)',
    backgroundColor2: 'rgb(243,245,249)',
    stroke: '#181818',
    projectHeaderStroke: '#181818',
    listItemStroke: 'transparent',
    listBG: '#fffffe',
    listItemBG: '#d1d1e9',
    listItemHeadline: '#2b2c34',
    listItemFont: '#2b2c34',
    menuBG: 'transparent',
    aboutContainerBG: '#ebebeb',
  },
  h1: {
    fontWeight: 800,
  },
};

export const darkTheme: styledComponents.DefaultTheme = {
  color: {
    primary: '#7f5af0',
    primaryMedium: 'rgba(98, 70, 234, 0.8)',
    primaryLight: 'rgba(127, 90, 240, 0.7)',
    white: '#fffffe',
    body: '#16161a',
    font: '#94a1b2',
    inlineCodeBG: 'rgba(114,125,154,0.3)',
    inlineCodeFont: '#d9d7e0',
    lightBorder: 'rgba(255, 255, 255, 0.05)',
    itemHighlight: 'rgba(40, 44,1, 0.3)',
    mediumBorder: 'rgba(230, 230, 230,.6)',
    scroller: '#f29705',
    yellow: '#ffd803',
    grey: 'rgba(230, 230, 230,.6)',
    link: '#7f5af0',
    buttonBG: '#7f5af0',
    buttonFont: '#fffffe',
    headLine: '#fffffe',
    backgroundColor1: 'rgb(40, 44, 51)',
    backgroundColor2: 'rgb(54, 59, 69)',
    stroke: '#94a1b2',
    projectHeaderStroke: 'rgba(78, 85, 99)',
    listItemStroke: '#242629',
    listBG: '#242629',
    listItemBG: '#16161a',
    listItemHeadline: '#fffffe',
    listItemFont: '#94a1b2',
    menuBG: '#94a1b2',
    aboutContainerBG: '#000ccc',
  },
  h1: {
    fontWeight: 500,
  },
};

const {
  default: styled,
  css,
  ThemeProvider: SpecificThemeProvider,
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<
  DefaultTheme
>;

interface ThemeState {
  theme: 'light' | 'dark';
}

const initialState: ThemeState = {
  theme: 'light',
};

type Context = {
  state: typeof initialState;
  dispatch: React.Dispatch<Actions>;
};

const store = createContext<Context | undefined>(undefined);

const useToggleTheme = () => {
  const context = useContext(store);

  return {
    toggleTheme: () => {
      context?.dispatch({ type: 'TOGGLE_THEME', payload: {} });
    },
  };
};

export { css, SpecificThemeProvider, useToggleTheme };
export default styled;
