import React from "react";
import { RiDashboardFill } from "react-icons/ri";
import { FiCalendar } from "react-icons/fi";
import { HiOutlineTicket, HiOutlineUser } from "react-icons/hi";
import { IoMdAnalytics } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { Link, NavLink,Outlet } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";

const Sidebar = () => {
  return (
    <>
      <>
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ml-5 text-sm text-gray-500 rounded-lg sm:hidden  hover:text-[#FFCC00] focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            />
          </svg>
        </button>
        <div className="flex">
          <aside
            id="default-sidebar"
            className=" w-64 h-content sicky top-0 flex flex-col items-between px-3 transition-transform -translate-x-full sm:translate-x-0 bg-[#0F172A]"
            aria-label="Sidebar"
          >
            <div className="h-full  py-4 overflow-y-auto pt-8">
              <ul className="space-y-2 font-medium">
                <li>
                  <NavLink
                    to="/dashboard/home"
                    className={`flex items-center p-2 text-[#969BA0] rounded-lg dark:text-[#969BA0]  hover:text-[#FFCC00] dark:hover:bg-gray-700 ml-5`}
                  >
                    <RiDashboardFill className="text-xl" />
                    <span className="ml-5">Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/events"
                    className={`flex items-center p-2 text-[#969BA0] rounded-lg dark:text-[#969BA0]  hover:text-[#FFCC00] dark:hover:bg-gray-700 ml-5`}
                  >
                    <FiCalendar className="text-xl" />
                    <span className="flex-1 ml-5 whitespace-nowrap">Events</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/profile"
                    className="flex items-center p-2 text-[#969BA0] rounded-lg dark:text-[#969BA0]  hover:text-[#FFCC00] dark:hover:bg-gray-700 ml-5"
                  >
                    <HiOutlineUser className="text-xl" />
                    <span className="flex-1 ml-5 whitespace-nowrap">
                      Profile
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/analytics"
                    className="flex items-center p-2 text-[#969BA0] rounded-lg dark:text-[#969BA0]  hover:text-[#FFCC00] dark:hover:bg-gray-700 ml-5"
                  >
                    <IoMdAnalytics className="text-xl" />
                    <span className="flex-1 ml-5 whitespace-nowrap">
                      Analytics
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/tickets"
                    className="flex items-center p-2 text-[#969BA0] rounded-lg dark:text-[#969BA0]  hover:text-[#FFCC00] dark:hover:bg-gray-700 ml-5"
                  >
                    <HiOutlineTicket className="text-xl" />
                    <span className="flex-1 ml-5 whitespace-nowrap">
                      Tickets
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/chat"
                    className="flex items-center p-2 text-[#969BA0] rounded-lg dark:text-[#969BA0]  hover:text-[#FFCC00] dark:hover:bg-gray-700 ml-5"
                  >
                    <FaUsers className="text-xl" />
                    <span className="flex-1 ml-5 whitespace-nowrap">
                      Team Collabrotion
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/settings"
                    className="flex items-center p-2 text-[#969BA0] rounded-lg dark:text-[#969BA0]  hover:text-[#FFCC00] dark:hover:bg-gray-700 ml-5"
                  >
                    <IoSettingsOutline className="text-xl" />
                    <span className="flex-1 ml-5 whitespace-nowrap">
                      Settings
                    </span>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 pb-5">
              <li>
                <NavLink
                  to="/login"
                  className="flex items-center p-2 text-[#969BA0] rounded-lg dark:text-[#969BA0]  hover:text-[#FFCC00] dark:hover:bg-gray-700 ml-5"
                >
                  <BiLogOut className="text-xl" />
                  <span className="ml-5">Logout</span>
                </NavLink>
              </li>

              <div className="flex flex-col ml-5">
                <span className="font-bold text-[#969BA0] text-sm">
                  Plaventi Event Dashboard
                </span>
                <span className="text-[#969BA0] text-sm">
                  © 2023 All Rights Reserved
                </span>
              </div>
            </div>
          </aside>
          <div className="w-[82%] bg-red-500">
            <Outlet/>
          </div>
        </div>
      </>
    </>
  );
};

export default Sidebar;
