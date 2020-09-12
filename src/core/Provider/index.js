import React from "react";
import { useReducer } from "reinspect";
import initialState from "core/initalState";
import reducer from "core/reducer";

export const GlobalContext = React.createContext();

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const myDispatch = (type, payload) => {
    dispatch({ type, payload });
  };

  return (
    <GlobalContext.Provider value={{ state, dispatch: myDispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Provider;
