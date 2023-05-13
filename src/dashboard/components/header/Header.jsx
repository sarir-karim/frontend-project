import React from "react";
import headerlogo from "../../assets/headerlmages/headerlogo.png";
import proifleImg from "../../assets/headerlmages/profile.png";
import { FaUserCircle } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TbMessage } from "react-icons/tb";
import { BiSearchAlt } from "react-icons/bi";
const Header = () => {
  return (
    <>
      {/* header component */}
      <div className="navbar pl-[3rem] pr-[2rem] bg-[#0f172a] justify-between">
        <div className="flex w-[45%] ">
          <div className="flex w-[30%]">
            <img src={headerlogo} alt="" className="w-[100%]" />
          </div>
          <div className="flex items-center ml-14 gap-2">
            <FaUserCircle className="text-xl text-[#FAAB00]" />
            <div className="text-md font-bold text-white">Advin Clark</div>
          </div>
        </div>
        <div className="flex-none gap-3">
          <div className="items-center mt-2 mb-3 space-y-4  sm:flex sm:space-y-0 w-[100%] ">
            <div className="relative w-[100%]">
              <label
                htmlFor="email"
                className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email address
              </label>
              <input
                className=" focus:outline-none block p-[11px] pl-3  w-[15rem] text-sm text-gray-900 bg-gray-50 rounded-lg bg-[#F0F4FF;]  sm:rounded-none sm:rounded-l-lg  focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:border-primary-500 border-l-none outline-none"
                placeholder="Enter your email"
                type="email"
                id="email"
                required=""
              />
            </div>
            <div>
              <button
                type="submit"
                className="py-[11px] px-5 w-full text-sm font-medium text-center text-black rounded-lg  cursor-pointer bg-gray-50 sm:rounded-none sm:rounded-r-lg    "
              >
                <BiSearchAlt className="text-xl text-[#a4a4a4]" />
              </button>
            </div>
          </div>
          <div className="ml-[12rem] flex items-center gap-5">
            <button className="btn gap-2 hover:bg-gray-100 rounded-[20px] relative bg-white text-black text-2xl">
              <IoMdNotificationsOutline />
              <div className="absolute top-[-3px] w-[14px] h-[14px] rounded-full bg-[#FFCC00] right-[-3px] border-2 border-[#0f172a]"></div>
            </button>
            <button className="btn gap-2 hover:bg-gray-100 rounded-[20px] relative bg-white text-black text-2xl">
              <TbMessage />
              <div className="absolute top-[-3px] w-[14px] h-[14px] rounded-full bg-[#FFCC00] right-[-3px] border-2 border-[#0f172a]"></div>
            </button>
          </div>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-14 rounded-lg">
                <img src={proifleImg} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
          <select className="select select-bordered w-[5.2rem] rounded-[20px]">
            <option disabled selected value="EN">
             EN
            </option>
            <option value="EN">EN</option>
            <option value="hindi">Hindi</option>
            <option value="greedo">Greedo</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Header;
