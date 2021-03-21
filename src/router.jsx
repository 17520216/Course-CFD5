import MainLayout from "./layout/MainLayout";
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

const routers = [
  {
    path: "/email",
    component: Email,
    exact: true,
  },
  {
    path: "/",
    component: MainLayout,
    routers: [
      {
        path: "/contact",
        component: CoopPage,
      },
      {
        path: "/team",
        component: Team,
      },
      {
        path: "/course",
        component: CoursePage,
      },
      {
        path: "/profile",
        component: Profile,
      },
      {
        path: "/payment",
        component: Payment,
      },
      {
        path: "/course-detail",
        component: CourseDetail,
      },
      {
        path: "/payment",
        component: Payment,
      },
      {
        path: "/question",
        component: QA,
      },

      {
        path: "/register",
        component: RegisterPage,
      },
      {
        path: "/project",
        component: ProjectPage,
      },
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        component: Page404,
      },
    ],
  },
];
export default routers;
