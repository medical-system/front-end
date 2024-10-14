
import { Navigate, useRoutes } from "react-router-dom";
import RootLayout from "../layouts/RootLayout.jsx";
import Login from "../pages/auth/Login.jsx";
import Register from "../pages/auth/Register.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import AuthLayout from "../layouts/AuthLayout.jsx";

const Router = () => {
    return useRoutes([
        {
            path: "/auth",
            element: < AuthLayout/>,
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

// const DashboardPage = Loadable(lazy(() => import("../pages/Dashboard.jsx")));