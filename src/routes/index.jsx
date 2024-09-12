
import { Navigate, useRoutes } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout.jsx";
import RootLayout from "../layouts/RootLayout.jsx";
import Loadable from "../Loadable.jsx";
import { lazy } from "react";

const Router = () => {
    return useRoutes([
        {
            path: "/auth",
            element: <AuthLayout />,
            children: [
                { path: "login", element: <LoginPage /> },
                { path: "register", element: <div>register</div> },
            ]
        },
        {
            path: "/",
            element:<RootLayout/>,
            children:[
                {
                    element:<Navigate to={"/dashboard"} replace/>,
                    index:true
                },
                {
                    path:"dashboard",
                    element:<div>dashboard</div>
                },
                {
                    path:"profile",
                    element:<div>profile</div>
                }

            ]
        }
    ])
}

export default Router

const LoginPage = Loadable(lazy(()=>import("../pages/auth/Login.jsx")));