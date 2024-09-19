import { PropTypes } from "prop-types";
import { BsList } from "react-icons/bs";
import NotificationMenu from "./ui/menu/NotificationMenu";
import ProfileMenu from "./ui/menu/ProfileMenu";

const Navbar = ({ setIsOpen }) => {
  return (
    <div className="xl:w-5/6 w-full 2xl:max-w-[1640px] bg-dry grid md:grid-cols-2 grid-cols-12 items-center bg-opacity-95 fixed top-0 z-40 xs:px-8 px-2">
      {/*header left side*/}
      <div className="md:col-span-1 sm:col-span-11 col-span-10 flex gap-4 items-center md:py-0 py-4">
        <button onClick={() => setIsOpen(true)} className="open-btn block xl:hidden border text-2xl bg-greyed w-16 md:w-12 h-12 rounded-md flex-colo text-textGray transitions hover:bg-border center">
          <BsList className="text-gray-500"/>
        </button>
        <input
          type="text"
          placeholder="Search Patients"
          className="md:w-96 w-full h-12 text-sm text-main rounded-md bg-dry border border-border px-4"
        />
      </div>
      {/*header right side*/}
      <div className="md:col-span-1 sm:col-span-1 col-span-2 items-center justify-end pr-4 md:pr-0">
        <div className="float-right flex gap-4 items-center justify-center">
          {/* DropDown Notifications */}
          <NotificationMenu/>
          {/* DropDown Profile */}
          <div className="items-center md:flex hidden">
            <div className="text-sm w-full relative">
              <ProfileMenu/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

Navbar.propTypes = {
  setIsOpen: PropTypes.func,
};
