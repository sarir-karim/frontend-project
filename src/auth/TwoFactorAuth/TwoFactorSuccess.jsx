import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { MdVerified } from "react-icons/md";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const TwoFactorSuccess = () => {
  return (
    <>
      <Header />
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
              <form className="w-[65%] shadow-lg rounded-3xl p-6 ml-[18%] bg-[#FBFCFC] mt-[25%]">
                <div className="flex justify-center items-center flex-col">
                  <p className="mb-0 mr-4 text-3xl font-medium">
                    Two Step Authentication
                  </p>

                  <MdVerified className="text-4xl text-[#34A853;] mt-14" />
                  <div className="text-2xl font-bold text-[#34A853] mt-3">
                    Successfully Enabled
                  </div>
                  <span className="text-sm mt-2">
                    Your Number is Set as following +912365478965
                  </span>

                  <button
                    type="submit"
                    className="mt-10 mb-[0.125rem] block pr-[2rem] pl-[2rem] pt-[0.5rem] pb-[0.5rem] font-semibold bg-[#00CCFF] rounded-lg"
                  >
                    Done
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TwoFactorSuccess;
