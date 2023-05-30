import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const NewPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationError, setValidationError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setValidationError("Passwords do not match.");
      return;
    }
    // TODO: submit the new password to the server
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      {/* Hello world */}
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
              <form className="w-[65%] shadow-lg rounded-3xl p-6 ml-[18%] bg-[#FBFCFC] mt-[20%]">
                {/*Sign in section*/}
                <div className="flex flex-col items-start justify-center lg:justify-start">
                  <p className="mb-0 mr-4 text-2xl font-medium">
                    Reset Password
                  </p>
                  <div className="mt-3 text-sm">
                    <span>Enter New Password. </span>
                  </div>
                </div>

                {/* number */}
                <div className="mb-4">
                  <div
                    className="relative mb-1 mt-7"
                    data-te-input-wrapper-init=""
                  >
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={`peer  block min-h-[auto] w-full rounded-lg   px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border `}
                      placeholder="Email address"
                    />
                    
                    {validationError && (
                      <p className="text-red-500 text-sm">{validationError}</p>
                    )}
                    
                    <label
                      htmlFor="exampleFormControlInput2"
                      className="  pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary peer-focus:bg-[#FBFCFC] peer-focus:pl-1 peer-focus:pr-1 "
                    >
                      Password
                    </label>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      {showPassword ? (
                        <AiFillEyeInvisible
                          className="h-5 w-5 text-gray-400 cursor-pointer"
                          onClick={togglePasswordVisibility}
                        />
                      ) : (
                        <AiFillEye
                          className="h-5 w-5 text-gray-400 cursor-pointer"
                          onClick={togglePasswordVisibility}
                        />
                      )}
                    </div>
                    
                  </div>
                  <div
                    className="relative mb-1 mt-7"
                    data-te-input-wrapper-init=""
                  >
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="cpassword"
                      name="cpassword"
                      className={`peer  block min-h-[auto] w-full rounded-lg   px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border `}
                      placeholder="Email address"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {validationError && (
                      <p className="text-red-500 text-sm">{validationError}</p>
                    )}
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      {showPassword ? (
                        <AiFillEyeInvisible
                          className="h-5 w-5 text-gray-400 cursor-pointer"
                          onClick={togglePasswordVisibility}
                        />
                      ) : (
                        <AiFillEye
                          className="h-5 w-5 text-gray-400 cursor-pointer"
                          onClick={togglePasswordVisibility}
                        />
                      )}
                  
                    </div>
                    <label
                      htmlFor="exampleFormControlInput2"
                      className="  pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary peer-focus:bg-[#FBFCFC] peer-focus:pl-1 peer-focus:pr-1 "
                    >
                      Confirm Password
                    </label>
                    
                  </div>
                </div>

                <div className="mb-6 flex items-center mt-9 gap-4 ml-24">
                  <Link to="/resetcode">
                    <button className="mb-[0.125rem] block pr-[2rem] pl-[2rem] pt-[0.5rem] pb-[0.5rem] font-semibold bg-white border border-black rounded-lg">
                      Cancel
                    </button>
                  </Link>
                  <Link to="/resetsuccess">
                    <button
                      type="submit"
                      className="mb-[0.125rem] block pr-[2rem] pl-[2rem] pt-[0.5rem] pb-[0.5rem] font-semibold bg-[#00CCFF] rounded-lg cursor-pointer"
                    >
                      send Code
                    </button>
                  </Link>
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

export default NewPassword;
