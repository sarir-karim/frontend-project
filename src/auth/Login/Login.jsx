import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import {TbLogout} from 'react-icons/tb'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Login = () => {
  const [activeButton, setActiveButton] = useState("login");

  const toggleButton = (button) => {
    setActiveButton(button);
  };
  return (
    <>
    <Header/>
      <section className="h-screen">
        <div className="h-screen">
          {/* Left column container with background*/}
          <div className=" flex h-full flex-wrap bg-[#0F172A]">
            <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-2/4 bg-[#0F172A] flex items-center justify-center flex-col">
              <img src={logo} className="w-[30%] " alt="Sample image" />

              <div className="flex items-center  gap-1 absolute  bottom-7 left-20">
                <HiOutlineArrowNarrowLeft className="text-[#FFCC00] text-xl" />
                <Link className="text-white underline">Back to Home</Link>
              </div>
            </div>
            {/* Right column container */}
            <div className=" w-3/6 bg-[#F4F7F7] rounded-tl-[7%] ">
              <div className="flex justify-center bg-gray-400 w-[31%] rounded-full ml-[50%] mt-[3%]">
               <Link to="/login"  onClick={() => toggleButton("login")}>
               <button 
                  className={`${
                    activeButton === "login"
                      ? "bg-white text-black"
                      : "bg-gray-400 text-white "
                  }  font-bold ml-3 mt-1 mb-1 py-1.5 px-4 rounded-full focus:outline-none focus:shadow-outline inline-flex items-center gap-1`}
                 
                >
                  Login <TbLogout/>
                </button>
               </Link>
                <Link to="/signup" onClick={() => toggleButton("signup")}>
                <button
                  className={`${
                    activeButton === "signup"
                      ? "bg-white text-black"
                      : "bg-gray-400 text-white"
                  }  font-bold mr-3 mt-1 mb-1 py-1.5 px-4 rounded-full focus:outline-none focus:shadow-outline inline-flex items-center gap-1`}
                  
                >
                  Signup <TbLogout/>
                </button>
                </Link>
              </div>
              <form className="w-[65%] shadow-lg rounded-3xl p-6 ml-[18%] bg-[#FBFCFC] mt-[3%]">
                {/*Sign in section*/}
                <div className="flex flex-col items-start justify-center lg:justify-start">
                  <p className="mb-0 mr-4 text-3xl font-medium">Sign in</p>
                  <div className="flex gap-3 mt-3 text-sm">
                    <span>New user?</span>
                    <Link to="/signup" className="underline">Create an Account</Link>
                  </div>
                  {/* Facebook */}
                </div>
                {/* Email input */}
                <div
                  className="relative mb-6 mt-7"
                  data-te-input-wrapper-init=""
                >
                  <input
                    type="text"
                    className="peer  block min-h-[auto] w-full rounded-lg   px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                  />
                  <label
                    htmlFor="exampleFormControlInput2"
                    className="  pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary peer-focus:bg-[#FBFCFC] peer-focus:pl-1 peer-focus:pr-1 "
                  >
                    Email address
                  </label>
                </div>
                {/* Password input */}
                <div className="relative mb-6" data-te-input-wrapper-init="">
                  <input
                    type="password"
                    className="peer rounded-lg block min-h-[auto] w-full  border px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput22"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="exampleFormControlInput22"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary peer-focus:bg-[#FBFCFC] peer-focus:pl-1 peer-focus:pr-1 peer-focus:pb-0"
                  >
                    Password
                  </label>
                </div>
                <div className="mb-6 flex items-center justify-between">
                  {/*Forgot password link*/}
                  <Link to="/resetpassword">Forgot password?</Link>
                  {/* Remember me checkbox */}
                  <Link className="mb-[0.125rem] block pr-[1.8rem] pl-[1.8rem] pt-[0.4rem] pb-[0.4rem] bg-[#00CCFF] rounded-lg" to="/dashboard">
                    Signin
                  </Link>
                </div>
                <div class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  <p class="mx-4 mb-0 text-center font-semibold dark:text-white">
                    Or
                  </p>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    class="text-black bg-white hover:bg-gray-50  border rounded-lg focus:outline-none focus:ring-[#4285F4]/50 font-medium text-md px-[13%] py-2.5  text-center inline-flex items-center dark:focus:ring-[#4285F4]/55  mb-2 gap-2"
                  >
                    <FcGoogle />
                    Google
                  </button>
                  <button
                    type="button"
                    class="text-black bg-white hover:bg-gray-50  border rounded-lg focus:outline-none focus:ring-[#3b5998]/50 font-medium text-md px-[13%] py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55  mb-2 gap-2"
                  >
                    <FaFacebook className="text-[#0D99FF]" />
                    Facebook
                  </button>
                </div>
                {/* Login button */}
                <div className="text-center lg:text-left">
                  {/* Register link */}
                  <p className="mb-0 mt-2 pt-1 text-sm font-semibold text-[#84818A]">
                    Protected by reCAPTCHA and subject to the{" "}
                    <Link className="font-medium text-black">
                      Cuboid Privacy Policy{" "}
                    </Link>{" "}
                    and{" "}
                    <Link className="font-medium text-black">
                      Terms of Service.
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Login;
