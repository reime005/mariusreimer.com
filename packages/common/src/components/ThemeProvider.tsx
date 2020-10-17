import React, { useReducer, createContext, useContext } from 'react';
import { Platform } from 'react-native';
import { SpecificThemeProvider, lightTheme, darkTheme } from './theme';

export type Themes = 'light' | 'dark';

interface ThemeState {
  theme: Themes;
}

const DEFAULT_THEME: Themes = 'light';

const ALL_THEMES: Themes[] = ['dark', 'light'];

const initialState: ThemeState = {
  theme: Platform.OS === 'web' ? (window as any).__theme : DEFAULT_THEME,
};

type Context = {
  state: typeof initialState;
  dispatch: React.Dispatch<Actions>;
};

interface Action<T, P> {
  type: T;
  payload: P;
}

type Actions = Action<'TOGGLE_THEME', null> | Action<'SET_THEME', Themes>;

const store = createContext<Context | undefined>(undefined);
const { Provider } = store;

const reducer = (state: ThemeState, action: Actions): ThemeState => {
  switch (action.type) {
    case 'SET_THEME':
    case 'TOGGLE_THEME': {
      let theme: Themes = state.theme === 'light' ? 'dark' : 'light';

      if (action.payload) {
        theme = action.payload;
      }

      if (typeof window !== 'undefined') {
        (window as any).__setPreferredTheme(theme);
      }

      return {
        ...state,
        theme,
      };
    }
    default:
      throw new Error();
  }
};

export const ThemeProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Provider value={{ state, dispatch }}>
      <SpecificThemeProvider
        theme={state.theme === 'light' ? lightTheme : darkTheme}
      >
        {children}
      </SpecificThemeProvider>
    </Provider>
  );
};

export const useTheme = () => {
  const context = useContext(store);

  return {
    toggleTheme: () => {
      context?.dispatch({ type: 'TOGGLE_THEME', payload: null });
    },
    setTheme: theme => {
      context?.dispatch({ type: 'SET_THEME', payload: theme });
    },
    theme: context?.state.theme,
  };
};
