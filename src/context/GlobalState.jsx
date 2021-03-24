import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//InitialState
const initialState = {
  transactions: [],
  oneTransaction: [],
  error: null,
  loading: true,
  login: false,
  visibleLogin: "none",
};

// Create Context

export const GlobalContext = createContext(initialState);

// Provider Component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  //Action
  function showLogin() {
    dispatch({
      type: "VISIBLE",
      payload: "flex",
    });
  }
  function hideLogin() {
    dispatch({
      type: "VISIBLE",
      payload: "none",
    });
  }
  function makeLogin() {
    dispatch({
      type: "MAKE_LOGIN",
      payload: true,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        login: state.login,
        visibleLogin: state.visibleLogin,
        showLogin,
        makeLogin,
        hideLogin,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
