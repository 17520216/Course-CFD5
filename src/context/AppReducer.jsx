export default (state, action) => {
  switch (action.type) {
    case "VISIBLE": {
      return {
        ...state,
        visibleLogin: action.payload,
      };
    }
    case "MAKE_LOGIN": {
      localStorage.setItem("tokenUser", JSON.stringify(action.payload.token));
      localStorage.setItem("dataUser", JSON.stringify(action.payload));
      localStorage.setItem("localLogin", JSON.stringify(true));
      return {
        ...state,
        login: true,
        dataUser: action.payload,
        loading: false,
      };
    }
    case "MAKE_LOGOUT": {
      localStorage.clear();
      return {
        ...state,
        login: false,
      };
    }
    case "LOADING": {
      return {
        ...state,
        loading: true,
      };
    }

    default:
      return state;
  }
};
