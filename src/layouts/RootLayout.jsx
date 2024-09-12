// ** React Router Imports
import { Navigate, Outlet } from "react-router-dom";

// ** Components **
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  const isAuth = true;

  if (!isAuth) {
    return <Navigate to="/auth/login" />;
  }
  return (
    // **** MAIN LAYOUT ****
    <div className="grid xl:grid-cols-12 w-full 2xl:max-w-[2000px]">
      <div className="col-span-2 xl:block hidden">
        <Sidebar />
      </div>
      <main className="col-span-10 xl:h-screen overflow-y-scroll relative">
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
