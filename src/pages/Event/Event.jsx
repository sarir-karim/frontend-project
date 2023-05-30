import React from "react";
import { Link } from "react-router-dom";
import { data } from "./data";
import Subscribe from "../../components/Subscribe/Subscribe";
import { BsFilterRight } from "react-icons/bs";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Event = () => {
  return (
    <>
    <Header/>
      {/* hero section */}
      <div className="text-center text-gray-800  px-6 flex flex-col justify-center items-center gap-6 bg-[#0F172A] py-14">
        <h1 className="text-3xl xl:text-4xl font-semibold text-white w-[50%]">
          <span className="text-yellow-500 font-semibold leading-14">
            {" "}
            Discover
          </span>{" "}
          Everyting you need to make your
          <span className="text-yellow-500 font-semibold">
            {" "}
            Event A Success
          </span>
        </h1>

        <div className="text-md text-center text-white opacity-[0.6] w-[45%]">
          Our event marketplace offers everything you need to make your event a
          success. Whether you're planning a wedding, corporate event, or
          private party, we've got you covered.
        </div>
        <Link
          className="inline-block px-14 py-3 mr-2 bg-[#00CCFF] text-black font-medium text-sm leading-snug  rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          href="#!"
          role="button"
        >
          Read More
        </Link>
      </div>

      <h2 className="text-4xl font-bold mb-3 mt-16 text-center capitalize">event management marketplace</h2>
          <p className="w-[40%] mx-auto mb-5 text-sm text-[#888888] text-center ">
          Simplify Your Event Planning Process with Our Marketplace
          </p>
        

      {/* search */}
      <div className="flex items-center justify-center w-[70%] mx-auto gap-3 ">
        <div className="items-center mt-2 mb-3 space-y-4  sm:flex sm:space-y-0 w-[100%] border rounded-lg">
          <div className="relative w-[100%]">
            <label
              htmlFor="email"
              className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email address
            </label>
            <input
              className="block p-3 pl-3  w-[100%] text-sm text-gray-900 bg-gray-50 rounded-lg bg-[#F0F4FF;]  sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 border-l-none outline-none"
              placeholder="Enter your email"
              type="email"
              id="email"
              required=""
            />
          </div>
          <div>
            <button
              type="submit"
              className="py-4 px-5 w-full text-sm font-medium text-center text-black rounded-lg  cursor-pointer bg-gray-50 sm:rounded-none sm:rounded-r-lg    "
            >
              <BsFilterRight />
            </button>
          </div>
        </div>
        

        <select
          id="countries"
          class="mt-[-5px] bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Filter By Name and Category</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>

      <div className="flex justify-center">
      <Link
            className="inline-block px-24 py-2.5 mr-2 bg-[#00CCFF] text-black font-medium text-sm leading-snug  rounded-full shadow-md hover:bg-blue-500 hover:text-white hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mt-4"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            href="#!"
            role="button"
          >
           Book Service Now
          </Link>
      </div>

      {/* events */}

      <div className=" ">
        <section className="mb-0 text-gray-800 text-center py-10 w-[80%] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-6  ">
            {data.map((data, index) => (
              <div
                className="mb-12 lg:mb-0 bg-white w-[95%] shadow-lg rounded-lg mt-10"
                key={index}
              >
                <img
                  className="rounded-lg shadow-lg mb-6 mx-auto mt-3"
                  src={data.img}
                  alt="avatar"
                  style={{ width: 460 }}
                />
                <h5 className="text-2xl font-bold mb-2">{data.name}</h5>
                <p className="text-sm text-black font-medium mb-1">
                  {data.subhead}
                </p>
                <p className="mb-3 text-sm px-9 pb-7 ">{data.para}</p>
              </div>
            ))}
          </div>
          <Link
            className="inline-block px-20 py-3 mr-2 bg-[#00CCFF] text-black font-medium text-sm leading-snug  rounded-full shadow-md hover:bg-blue-500 hover:text-white hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mt-20"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            href="#!"
            role="button"
          >
            Load More
          </Link>
        </section>
      </div>

      {/* subscribe */}

      <Subscribe />
      <Footer/>
    </>
  );
};

export default Event;
