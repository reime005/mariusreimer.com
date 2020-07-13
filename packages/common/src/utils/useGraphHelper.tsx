import React, { useContext, useState } from 'react';

const GraphContext = React.createContext({
  first: 1,
  change: () => {},
});

export const useGraphHelper = () => {
  return useContext(GraphContext);
};

export const GraphContextProvider = props => {
  const [state] = useState({
    first: 1,
  });

  return (
    <GraphContext.Provider
      value={{
        ...state,
        change: () => {},
      }}
    >
      {props.children}
    </GraphContext.Provider>
  );
};
