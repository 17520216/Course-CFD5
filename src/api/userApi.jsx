export default {
  //   login: (form) => {
  //     fetch("http://cfd-reactjs.herokuapp.com/elearning/v4/login", {
  //       method: "POST",
  //       body: JSON.stringify(form),
  //       "Content-Type": "application/json",
  //     }).then((res) => res.json());
  //   },
  login: (data) => {
    return fetch("http://cfd-reactjs.herokuapp.com/elearning/v4/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': 'Bearer [Token]'
      },
    }).then((res) => res.json());
  },
  updateInfo: (data) => {
    let token = JSON.parse(localStorage.getItem("tokenUser"));
    return fetch(
      "http://cfd-reactjs.herokuapp.com/elearning/v4/profile/update",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.accessToken}`,
        },
      }
    ).then((res) => res.json());
  },
  getDataHome: () => {
    return fetch("http://cfd-reactjs.herokuapp.com/elearning/v4/home", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': 'Bearer [Token]'
      },
    }).then((res) => res.json());
  },
};