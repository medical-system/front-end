
import { Navigate, useRoutes } from "react-router-dom";
import RootLayout from "../layouts/RootLayout.jsx";
import Loadable from "../Loadable.jsx";
import Login from "../pages/auth/Login.jsx";
import { lazy } from "react";
import Register from "../pages/auth/Register.jsx";
import {Dashboard} from "../pages";

const Router = () => {
    return useRoutes([
        {
            path: "/auth",
            element: <AuthLayoutPage />,
            children: [
                { path: "login", element: <Login /> },
                { path: "register", element: <Register /> },
            ]
        },
        {
            path: "/",
            element: <RootLayout />,
            children: [
                {
                    element: <Navigate to={"dashboard"} replace />,
                    index: true
                },
                {
                    element: <Dashboard />,
                    path: "dashboard"
                },
            ]
        },
        {
            path: "*",
            element: <h2>Not Found</h2>
        }
    ])
}

export default Router

const AuthLayoutPage = Loadable(lazy(() => import("../layouts/AuthLayout.jsx")));