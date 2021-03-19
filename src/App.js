import Home from "./pages/home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./pages/Profiles";
import Payment from "./pages/Payment";
import Team from "./pages/Team";
import RegisterPage from "./pages/register";
import ProjectPage from "./pages/project";
import CoursePage from "./pages/course";
import CoopPage from "./pages/co-op";
import CourseDetail from "./pages/course-detail";
import QA from "./pages/QA";
import Login from "./components/Login";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Page404 from "./pages/page404";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route path="/payment" component={Payment} />
        <Route path="/team" component={Team} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/project" component={ProjectPage} />
        <Route path="/course" component={CoursePage} />
        <Route path="/contact" component={CoopPage} />
        <Route path="/course-detail" component={CourseDetail} />
        <Route path="/profile" component={Profile} />
        <Route path="/question" component={QA} />
        <Route path="/login" component={Login} />

        <Route exact path="/" component={Home} />

        <Route component={Page404} />
      </Switch>

      <Footer />
    </Router>
  );
}
export default App;
