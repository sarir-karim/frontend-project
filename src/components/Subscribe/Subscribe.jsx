import React from "react";
import { Link } from "react-router-dom";
import {HiOutlineMailOpen} from 'react-icons/hi'

const Subscribe = () => {
  return (
    <>
      <section className="bg-[#F9FAFC] mt-20 pt-[1px] py-14">
        <div className="py-10 px-4 mx-auto w-[70%]  lg:px-6 subscribe rounded-lg mt-[5%]">
          <div className="mx-auto max-w-screen-lg sm:text-center">
            <h2 className="mb-4 text-3xl tracking-tight font-semibold text-white sm:text-4xl w-[38%] mx-auto flex flex-col gap-4">
              <span>Drop your Email And</span>
              <span>
                {" "}
                <span className="text-yellow-500">Subscribe Us</span>...!
              </span>
            </h2>
            <p className="mx-auto mb-8 text-sm font-light text-gray-500 md:mb-12 text-white w-[53%]">
              our mission is to provide top-notch services and products to our
              customers. We take pride in delivering high-quality work that
              exceeds expectations and builds long-term relationships with our
              clients.
            </p>
            <form action="#">
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="relative w-full">
                  <label
                    htmlFor="email"
                    className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email address
                  </label>
                  <input
                    className="block p-3 pl-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg bg-[#F0F4FF;] border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 border-l-none outline-none"
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                    required=""
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="py-4 px-5 w-full text-sm font-medium text-center text-black rounded-lg  cursor-pointer bg-[#F0F4FF;] sm:rounded-none sm:rounded-r-lg    "
                  >
                   <HiOutlineMailOpen/>
                  </button>
                </div>
              </div>
              <Link
                className="inline-block px-28 py-3 mr-2 bg-[#00CCFF] text-black font-medium text-sm leading-snug  rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  hover:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mt-4"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                href="#!"
                role="button"
              >
                Subscribe
              </Link>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
