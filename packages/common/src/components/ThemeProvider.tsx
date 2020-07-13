import React, { useReducer, createContext, useContext } from 'react';
import { SpecificThemeProvider, lightTheme, darkTheme } from './theme';

export type Themes = 'light' | 'dark';

interface ThemeState {
  theme: Themes;
}

const initialState: ThemeState = {
  theme: 'light',
};

type Context = {
  state: typeof initialState;
  dispatch: React.Dispatch<Actions>;
};

interface Action<T, P> {
  type: T;
  payload: P;
}

type Actions = Action<'TOGGLE_THEME', {}> | Action<'SET_THEME', Themes>;

const store = createContext<Context | undefined>(undefined);
const { Provider } = store;

const reducer = (state: ThemeState, action: Actions): ThemeState => {
  switch (action.type) {
    case 'TOGGLE_THEME': {
      let theme: Themes = state.theme === 'light' ? 'dark' : 'light';

      return {
        ...state,
        theme,
      };
    }
    case 'SET_THEME': {
      return {
        ...state,
        theme: action.payload,
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
      context?.dispatch({ type: 'TOGGLE_THEME', payload: {} });
    },
    setTheme: theme => {
      context?.dispatch({ type: 'SET_THEME', payload: theme });
    },
    theme: context?.state.theme,
  };
};
