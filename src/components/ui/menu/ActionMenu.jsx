import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link } from "react-router-dom";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { CgEye } from "react-icons/cg";
import { RiDeleteBinLine } from "react-icons/ri";


// eslint-disable-next-line react/prop-types
export default function ActionDropDown({ id }) {
  return (
    <Menu className="text-sm w-full relative" as="div">
      <MenuButton>
        <div className="bg-dry border text-main text-xl py-2 px-4 rounded-lg">
          <BiDotsHorizontalRounded />
        </div>
      </MenuButton>
      <MenuItems className="flex flex-col z-50 gap-4 absolute left-0  bg-white rounded-md shadow-lg py-4 px-6 ring-1 ring-border focus:outline-none">
        <MenuItem>
          <Link
            to={`view/:${id}`}
            className="flex gap-4 items-center hover:text-subMain"
          >
            <CgEye className="text-subMain" />
            View
          </Link>
        </MenuItem>
        <MenuItem>
          <button className="flex gap-4 items-center hover:text-subMain">
            <RiDeleteBinLine className="text-subMain" />
            Delete
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
