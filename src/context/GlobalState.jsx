import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//InitialState
const initialState = {
  error: null,
  loading: true,
  login: false,
  visibleLogin: "none",
  dataUser: "",
};

// Create Context

export const GlobalContext = createContext(initialState);

// Provider Component

export const GlobalProvider = ({ children }) => {
  let dataLocal = JSON.parse(localStorage.getItem("dataUser"));
  let dataLogin = JSON.parse(localStorage.getItem("localLogin"));

  const [state, dispatch] = useReducer(AppReducer, initialState);
  //Action

  // function handleLoading() {
  //   dispatch({
  //     type: "LOADING",
  //   });
  // }

  function showLogin() {
    dispatch({
      type: "VISIBLE",
      payload: "flex",
    });
  }
  // function setLoading(loading) {
  //   dispatch({
  //     type: "LOADING",
  //     payload: loading,
  //   });
  // }
  function hideLogin() {
    dispatch({
      type: "VISIBLE",
      payload: "none",
    });
  }
  function makeLogin(data) {
    dispatch({
      type: "MAKE_LOGIN",
      payload: data,
    });
  }
  function makeLogout() {
    dispatch({
      type: "MAKE_LOGOUT",
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        dataUser: dataLocal || state.dataUser,
        login: dataLogin || state.login,
        visibleLogin: state.visibleLogin,
        showLogin,
        makeLogin,
        hideLogin,
        makeLogout,
        loading: state.loading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
