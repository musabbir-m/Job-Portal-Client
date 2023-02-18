import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
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
                path: '/fresher',
                element: <Fresherall></Fresherall>,
                loader: ()=> fetch('http://localhost:5000/fresher')
            }

        ]
    }
]);

export default router;