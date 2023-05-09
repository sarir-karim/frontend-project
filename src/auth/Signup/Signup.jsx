import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";

const Signup = () => {
  const [activeButton, setActiveButton] = useState("signup");

  const toggleButton = (button) => {
    setActiveButton(button);
  };
  return (
    <>
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
                <Link to="/login" onClick={() => toggleButton("login")}>
                  <button
                    className={`${
                      activeButton === "login"
                        ? "bg-white text-black"
                        : "bg-gray-400 text-white "
                    }  font-bold ml-3 mt-1 mb-1 py-1.5 px-4 rounded-full focus:outline-none focus:shadow-outline inline-flex items-center gap-1`}
                  >
                    Login <TbLogout />
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
                    Signup <TbLogout />
                  </button>
                </Link>
              </div>
              <form className="w-[75%] shadow-lg rounded-3xl p-7 pt-5 ml-[12%] bg-[#FBFCFC] mt-[3%] pb-2">
                {/*Sign in section*/}
                <div className="flex flex-col items-start justify-center lg:justify-start">
                  <p className="mb-0 mr-4 text-xl font-medium">
                    Sign up now to Access Our Platform.
                  </p>
                  <div className="flex gap-3 mt-4 text-sm">
                    <span>Already have an account?</span>
                    <Link to="/login" className="underline">Signin</Link>
                  </div>
                  {/* Facebook */}
                </div>
                <div className="flex items-center mt-4 gap-8">
                  {/* Email input */}
                  <div className="relative mb-4 " data-te-input-wrapper-init="">
                    <input
                      type="text"
                      className="peer  block min-h-[auto] w-[105%] rounded-lg px-3 py-[0.10rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border"
                      id="exampleFormControlInput2"
                      placeholder="Email address"
                    />
                    <label
                      htmlFor="exampleFormControlInput2"
                      className="  pointer-events-none absolute bg-transparent left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.10rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary peer-focus:bg-[#FBFCFC] peer-focus:pl-1 peer-focus:pr-1 peer-focus:text-sm peer-focus:mt-2 text-sm mt-1"
                    >
                      First Name
                    </label>
                  </div>
                  {/* Password input */}
                  <div className="relative mb-4" data-te-input-wrapper-init="">
                    <input
                      type="password"
                      className="peer rounded-lg block w-[100%] min-h-[auto] border px-3 py-[0.10rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput22"
                      placeholder="Password"
                    />
                    <label
                      htmlFor="exampleFormControlInput22"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.10rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary peer-focus:bg-[#FBFCFC] peer-focus:pl-1 peer-focus:pr-1 peer-focus:text-sm peer-focus:mt-2 text-sm mt-1"
                    >
                      Last Name
                    </label>
                  </div>
                </div>
                <div className="flex items-center mt-0 gap-8">
                  {/* Email input */}
                  <div className="relative mb-0 " data-te-input-wrapper-init="">
                    <input
                      type="email"
                      className="peer  block min-h-[auto] w-[107%] rounded-lg px-3 py-[0.10rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border"
                      id="exampleFormControlInput2"
                      placeholder="Email address"
                    />
                    <label
                      htmlFor="exampleFormControlInput2"
                      className="  pointer-events-none absolute bg-transparent left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.10rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary peer-focus:bg-[#FBFCFC] peer-focus:pl-1 peer-focus:pr-1 peer-focus:text-sm peer-focus:mt-2 text-sm mt-1"
                    >
                      Email
                    </label>
                  </div>
                  <div>
                    <select
                      id="countries"
                      class="bg-white border text-neutral-500 text-sm rounded-lg focus:ring-blue-500 block w-[13.5rem] p-[8px] pr-9 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-blue-500 outline-none"
                    >
                      <option selected>Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                </div>
                {/* Email input */}
                <div
                  className="relative mb-0 mt-4 "
                  data-te-input-wrapper-init=""
                >
                  <input
                    type="text"
                    className="peer  block min-h-[auto] w-[100%] rounded-lg px-3 py-[0.10rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border"
                    id="exampleFormControlInput2"
                    placeholder="Company"
                  />
                  <label
                    htmlFor="exampleFormControlInput2"
                    className="  pointer-events-none absolute bg-transparent left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.10rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary peer-focus:bg-[#FBFCFC] peer-focus:pl-1 peer-focus:pr-1 peer-focus:text-sm peer-focus:mt-2 text-sm mt-1"
                  >
                    Company
                  </label>
                  {/* age */}
                  <select
                        id="countries"
                        class="bg-white border mt-5  text-sm rounded-lg focus:ring-blue-500 block w-[100%] p-[8px] pr-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-blue-500 outline-none text-neutral-500"
                      >
                        <option selected>Age</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                      </select>

                  {/* mobile and country */}

                  <div className="flex items-center mt-4 gap-8">
                    {/* Email input */}
                    <div
                      className="relative mb-0 "
                      data-te-input-wrapper-init=""
                    >
                      <input
                        type="numer"
                        className="peer  block min-h-[auto] w-[107%] rounded-lg px-3 py-[0.10rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border"
                        id="exampleFormControlInput2"
                        placeholder="Email address"
                      />
                      <label
                        htmlFor="exampleFormControlInput2"
                        className="  pointer-events-none absolute bg-transparent left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.10rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary peer-focus:bg-[#FBFCFC] peer-focus:pl-1 peer-focus:pr-1 peer-focus:text-sm peer-focus:mt-2 text-sm mt-1"
                      >
                        Mobile
                      </label>
                    </div>
                    <div>
                      <select
                        id="countries"
                        class="bg-white border  text-sm rounded-lg focus:ring-blue-500 block w-[13.5rem] p-[8px] pr-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-blue-500 outline-none text-neutral-500"
                      >
                        <option selected>Country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* signin button */}

                <button
                  type="submit"
                  className="w-full mt-5 text-black bg-[#00CCFF] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign up
                </button>

                {/* agree checkbox */}
                <div className="flex items-start mt-4">
                  <div className="flex items-center h-5 ">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      I agree to the{" "}
                      <a
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>

                <div className="border mt-4"></div>

                {/* Login button */}
                <div className="text-center lg:text-left">
                  {/* Register link */}
                  <p className="mb-0 mt-2 pt-1 text-xs  text-[#84818A;]">
                    By registering, you agree to the processing of your personal
                    data to our as described in the Privacy Statement.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
