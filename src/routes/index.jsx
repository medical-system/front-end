
import { Navigate, useRoutes } from "react-router-dom";
import RootLayout from "../layouts/RootLayout.jsx";
import Loadable from "../Loadable.jsx";
import Login from "../pages/auth/Login.jsx";
import { lazy } from "react";
import Register from "../pages/auth/Register.jsx";
import CreatePatient from "../pages/CreatePatient.jsx";
import ViewPatient from "../pages/ViewPatient.jsx";

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
            element:<RootLayout/>,
            children:[
                {
                    element:<Navigate to={"/dashboard"} replace/>,
                    index:true
                },
                {
                    path:"dashboard",
                    element:<DashboardPage/>
                },
                {
                    path:"profile",
                    element:<ProfilePage/>
                },
                {
                    path:"patients",
                    element:<PatientPage/>,
                },
                {
                    path:"patients/create",
                    element:<CreatePatient/>,
                },
                {
                    path:"patients/view/:slug",
                    element:<ViewPatient/>,
                },

            ]
        }
    ])
}

export default Router

const AuthLayoutPage = Loadable(lazy(()=>import("../layouts/AuthLayout.jsx")));
const DashboardPage = Loadable(lazy(()=>import("../pages/Dashboard.jsx")));
const ProfilePage = Loadable(lazy(()=>import("../pages/Profile.jsx")));
const PatientPage = Loadable(lazy(()=>import("../pages/Patients.jsx")));