import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link } from "react-router-dom";
import ProfileImg from "../../../assets/profile-img.png";
import { FiUser } from "react-icons/fi";
import { MdOutlinePowerSettingsNew } from "react-icons/md";

export default function ProfileMenu() {
  return (
    <Menu className="text-sm w-full relative" as="div">
      {/* *** Profile Button *** */}
      <MenuButton>
        {/* *** Profile Button *** */}
        <div className="flex gap-4 items-center p-4 rounded-lg">
          <img
            src={ProfileImg}
            alt="profile"
            className="w-12 border border-border object-cover h-12 rounded-full"
            width={48}
            height={48}
          />
          <p className="text-sm text-textGray font-medium">Dr. Daudi</p>
        </div>
      </MenuButton>
      {/* *** Profile Menu *** */}
      <MenuItems className="flex flex-col z-50 gap-4 absolute left-0  bg-white rounded-md shadow-lg py-4 px-6 ring-1 ring-border focus:outline-none">
        <MenuItem>
          <Link
            to="/profile"
            className="flex gap-4 items-center hover:text-subMain"
          >
            <FiUser className="text-subMain" />
            Profile
          </Link>
        </MenuItem>
        <MenuItem>
          <button className="flex gap-4 items-center hover:text-subMain">
            <MdOutlinePowerSettingsNew className="text-subMain" />
            Logout
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
