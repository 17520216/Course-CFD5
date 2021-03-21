export default (state, action) => {
  switch (action.type) {
    case "VISIBLE": {
      return {
        ...state,
        visibleLogin: action.payload,
      };
    }
    case "MAKE_LOGIN": {
      return {
        ...state,
        login: action.payload,
      };
    }

    default:
      return state;
  }
};
