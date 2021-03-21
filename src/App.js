import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import routers from "./router";
import renderRouter from "./core/routerConfig";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>{renderRouter(routers)}</Router>
    </GlobalProvider>
  );
}
export default App;
