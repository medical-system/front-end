import { Outlet } from "react-router-dom";
import Logo from '../assets/logo.png'
const AuthLayout = () => {
  return (
    <div className="max-w-full min-h-screen flex justify-center items-center m-3">
      <div className="md:w-2/5 p-8 rounded-2xl mx-auto bg-white gap-4 flex-colo text-center">

      {/* logo */}
      <div>
        <img src={Logo} alt="logo" className="w-48 h-16 object-contain mx-auto"/>
      </div>

        {/* form */}
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
