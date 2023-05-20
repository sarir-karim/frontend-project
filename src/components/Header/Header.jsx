import React, { useState } from "react";
import logo from "../../assets/headerImgs/headerlogo.png";
import { Link } from "react-router-dom";
import { TbLogout } from "react-icons/tb";

const Header = () => {
  const [activeButton, setActiveButton] = useState("login");
  const [active, setActive] = useState("home");

  const toggleButton = (button) => {
    setActiveButton(button);
  };

  const activeBtn = (Link) => {
    setActive(Link);
  };
  return (
    <>
      <header>
        <nav className="bg-[#0F172A] border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-10">
            <Link to="/" className="flex items-center">
              <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            </Link>
            <div className="flex items-center lg:order-2">
              <div className="flex justify-center bg-[#666666] w-[100%] rounded-full  mt-0">
                <Link to="/login" onClick={() => toggleButton("login")}>
                  <button
                    className={`${
                      activeButton === "login"
                        ? "bg-[#00CCFF] text-black"
                        : "bg-[#666666] text-white "
                    }  font-bold ml-2 mt-1 mb-1 py-1.5 px-4 rounded-full focus:outline-none focus:shadow-outline inline-flex items-center gap-1`}
                  >
                    Login <TbLogout />
                  </button>
                </Link>
                <Link to="/signup" onClick={() => toggleButton("signup")}>
                  <button
                    className={`${
                      activeButton === "signup"
                        ? "bg-[#00CCFF] text-black"
                        : "bg-[#666666] text-white"
                    }  font-bold mr-2 mt-1 mb-1 py-1.5 px-4 rounded-full focus:outline-none focus:shadow-outline inline-flex items-center gap-1`}
                  >
                    Signup <TbLogout />
                  </button>
                </Link>
              </div>
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4  lg:flex-row lg:space-x-9 lg:mt-0">
                <li>
                  <Link
                    onClick={() => activeBtn("home")}
                    to="/"
                    className={`block py-2 pr-4 pl-3 border-b border-gray-100 lg:border-0  lg:p-0 text-white text-sm  ${
                      active === "home" ? " font-bold" : ""
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => activeBtn("about")}
                    to="/aboutus"
                    className={`block py-2 pr-4 pl-3 border-b border-gray-100 lg:border-0  lg:p-0 text-white text-sm   ${
                      active === "about" ? "font-medium" : ""
                    } `}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => activeBtn("service")}
                    to="/services"
                    className={`block py-2 pr-4 pl-3  border-b border-gray-100  lg:border-0  lg:p-0  text-white text-sm ${
                      active === "service" ? "font-medium" : ""
                    } `}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => activeBtn("event")}
                    to="/event"
                    className={`block py-2 pr-4 pl-3  border-b border-gray-100  lg:border-0  lg:p-0  text-white text-sm ${
                      active === "event" ? "font-medium" : ""
                    } `}
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => activeBtn("faqs")}
                    to="/faqs"
                    className={`block py-2 pr-4 pl-3  border-b border-gray-100  lg:border-0  lg:p-0  text-white text-sm ${
                      active === "faqs" ? "font-medium" : ""
                    } `}
                  >
                    FAQ's
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
