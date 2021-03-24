import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRouter(props) {
  const { login } = useContext(GlobalContext);
  console.log(login);

  return login ? <Route {...props} /> : <Redirect to="/" />;
}
