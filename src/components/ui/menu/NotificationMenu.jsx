import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link } from "react-router-dom";
import { BsChatLeftText } from "react-icons/bs";
import { MdOutlineNotifications } from "react-icons/md";
import { Notifications } from "../../../@facke-data/notifications";
import { MdCalendarMonth } from "react-icons/md";

export default function NotificationMenu() {
  return (
    <Menu>
      <MenuButton>
        <div className="relative">
          <MdOutlineNotifications className="text-2xl" />
          {/* padg */}
          <span className="w-5 h-5 center text-xs font-semibold text-white bg-subMain rounded-full absolute -top-3 -right-2">
            5
          </span>
        </div>
      </MenuButton>
      {/* *** Menu Header *** */}
      <MenuItems className="flex flex-col w-full sm:w-8/12 md:w-6/12  xl:w-2/6 top-20 right-0 gap-4 absolute bg-white rounded-md shadow-lg py-4 px-6 ring-1 ring-border focus:outline-none z-50">
        <div className="flex-btn flex-wrap gap-4">
          <h2 className="text-md font-medium text-main">Notifications</h2>
          <button className="px-4 py-2 hover:bg-text rounded-md text-subMain text-sm">
            Mark all read
          </button>
        </div>
        {/* *** Menu Items *** */}
        <div className="flex flex-col gap-4 overflow-y-auto max-h-[500px]">
          {Notifications.map((item) => (
            <MenuItem key={item.id}>
              <Link
                className="w-full p-4 border border-border rounded-lg"
                to={item.path}
              >
                <div className="grid xs:grid-cols-12 gap-4 items-center">
                  <div className="xs:col-span-2">
                    {item.type === "message" ? (
                      <span
                        className="bg-subMain text-white
                     w-12 h-12 rounded-full text-md center border-[.5px] border-subMain"
                      >
                        <BsChatLeftText size={14} />
                      </span>
                    ) : (
                      <span
                        className="bg-text text-subMain
                   w-12 h-12 rounded-full text-md center border-[.5px] border-subMain"
                      >
                        <MdCalendarMonth size={14} />
                      </span>
                    )}
                  </div>
                  <div className="xs:col-span-10 " role="none">
                    {item.type === "message" ? (
                      <p className="text-sm text-textGray" role="none">
                        <span className="text-main font-medium" role="none">
                          {item.sender}{" "}
                        </span>
                        {item.desc}{" "}
                      </p>
                    ) : (
                      <p className="text-sm text-textGray" role="none">
                        {item.desc}{" "}
                        <span className="text-main font-medium" role="none">
                          {item.sender}
                        </span>
                      </p>
                    )}

                    <div className="flex-btn gap-4" role="none">
                      <p
                        className="text-xs text-textGray mt-2 font-light"
                        role="none"
                      >
                        {item.sinceWhen}
                      </p>
                      <p className="text-xs text-textGray" role="none">
                        {item.sentAt}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}
