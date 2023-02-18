import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About/About";
import Apply from "../Components/Apply/Apply";
import Contact from "../Components/Contact/Contact";
import Experienced from "../Components/Experienced/Experienced";
import Experiencedall from "../Components/Experienced/Experiencedall";
import Fresherall from "../Components/Fresher/Fresherall";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";
import Main from "../Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/fresherall",
        element: <Fresherall></Fresherall>,
        loader: () =>
          fetch("https://job-portal-server-smoky.vercel.app/fresher"),
      },
      {
        path: "/experiencedall",
        element: <Experiencedall></Experiencedall>,
        loader: () =>
          fetch("https://job-portal-server-smoky.vercel.app/experienced"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/apply",
        element: <Apply></Apply>,
      },
    ],
  },
]);

export default router;
