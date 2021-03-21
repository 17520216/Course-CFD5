import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//InitialState
const initialState = {
  transactions: [],
  oneTransaction: [],
  erro: null,
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
    try {
      dispatch({
        type: "VISIBLE",
        payload: "flex",
      });
    } catch (error) {
      return;
    }
  }
  function hideLogin() {
    try {
      dispatch({
        type: "VISIBLE",
        payload: "none",
      });
    } catch (error) {
      return;
    }
  }
  function makeLogin() {
    try {
      dispatch({
        type: "MAKE_LOGIN",
        payload: true,
      });
    } catch (error) {
      return;
    }
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
