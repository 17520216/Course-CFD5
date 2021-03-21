import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Profile from "./pages/Profiles";
import Payment from "./pages/Payment";
import Team from "./pages/Team";
import RegisterPage from "./pages/register";
import ProjectPage from "./pages/project";
import CoursePage from "./pages/course";
import CoopPage from "./pages/co-op";
import CourseDetail from "./pages/course-detail";
import QA from "./pages/QA";
import Page404 from "./pages/page404";
import Email from "./pages/email/email";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/payment" component={Payment} />
          <Route path="/team" component={Team} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/project" component={ProjectPage} />
          <Route path="/course" component={CoursePage} />
          <Route path="/contact" component={CoopPage} />
          <Route path="/course-detail" component={CourseDetail} />
          <Route path="/question" component={QA} />
          <Route path="/email" component={Email} />
          <Route exact path="/" component={Home} />

          <Route component={Page404} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}
export default App;
