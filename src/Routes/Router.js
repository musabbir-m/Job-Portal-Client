import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Experienced from "../Components/Experienced/Experienced";
import Experiencedall from "../Components/Experienced/Experiencedall";
import Fresherall from "../Components/Fresher/Fresherall";
import Home from "../Components/Home/Home";
import SignUp from "../Components/SignUp/SignUp";
import Main from "../Layout/Main";

const router= createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
    
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/fresherall',
                element: <Fresherall></Fresherall>,
                loader: ()=> fetch('http://localhost:5000/fresher')
            },
            {
                path: '/experiencedall',
                element: <Experiencedall></Experiencedall>,
                loader: ()=> fetch('http://localhost:5000/experienced')
            },

        ]
    }
]);

export default router;