import React, { createContext, useReducer } from "react";
import { initialGlobalState, GlobalState, Action, Actions } from "./initialStates";

type Context = {
  state: typeof initialGlobalState;
  dispatch: React.Dispatch<Actions>;
}

const store = createContext<Context | undefined>(undefined);
const { Provider } = store;

const reducer = ((state: GlobalState, action: Actions): GlobalState => {
  switch(action.type) {
    case 'POST_ITEM_CLICK':
      return {
        ...state,
        currentPostID: action.payload.id
      }
    default:
      throw new Error();
  };
});

const GlobalStateProvider: React.FC = ( { children } ) => {
  const [state, dispatch] = useReducer(reducer, initialGlobalState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, GlobalStateProvider }
