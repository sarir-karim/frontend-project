import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";
import { IoLogoUsd } from "react-icons/io";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoTicket } from "react-icons/io5";
import { BiTimeFive } from "react-icons/bi";
import { hdata } from "./data/hdata";
import {sideData} from './data/hdata'
const Home = () => {
  const [activeButton, setActiveButton] = useState("login");
  const toggleButton = (button) => {
    setActiveButton(button);
  };
  return (
    <div className="bg-[#F4F6FA] px-7 pt-7">
      <div className="flex justify-between  ">
        <span className="text-lg font-medium ">Hi Good Morning</span>
        <span className="text-md font-medium ">
          Sunday, 9 April 2024, 10:24PM
        </span>
      </div>
      {/* heading */}
      <div className="font-bold mt-2 text-2xl">
        Welcome to Plaventi Events Management
      </div>
      <div className="flex justify-between pt-4">
        <div className="flex gap-5">
          {" "}
          <button className="btn bg-white btn-outline text-[11px] rounded-[15px] btn-sm pt-3 pl-4 pr-4 pb-6">
            All
          </button>
          <button className="btn bg-white btn-outline text-[11px] rounded-[15px] btn-sm pt-3 pl-4 pr-4 pb-6">
            Refunded
          </button>
          <button className="btn bg-white btn-outline text-[11px] rounded-[15px] btn-sm pt-3 pl-4 pr-4 pb-6">
            Canceled
          </button>
        </div>
        <button className="btn bg-black text-white btn-outline text-[11px] rounded-[15px] btn-sm pt-3 pl-4 pr-4 pb-6">
          Contact Suppot
        </button>
      </div>

      {/* main two sections */}

      <div className="flex justify-between">
        <div className="bg-white mt-9 w-[75%] rounded-xl ">
          <div className="flex items-center justify-between">
            <div className="flex justify-center bg-[#666666] w-[18.4rem] rounded-full  mt-3 ml-3">
              <Link to="" onClick={() => toggleButton("login")}>
                <button
                  className={`${
                    activeButton === "login"
                      ? "bg-[#00CCFF] text-black"
                      : "bg-[#666666] text-white "
                  }  font-bold ml-1 mt-1 mb-1 py-2 px-4 rounded-full focus:outline-none focus:shadow-outline inline-flex items-center gap-1`}
                >
                  Upcoming Events
                </button>
              </Link>
              <Link to="" onClick={() => toggleButton("signup")}>
                <button
                  className={`${
                    activeButton === "signup"
                      ? "bg-[#00CCFF] text-black"
                      : "bg-[#666666] text-white"
                  }  font-bold mr-1 mt-1 mb-1 py-2 px-4 rounded-full focus:outline-none focus:shadow-outline inline-flex items-center gap-1`}
                >
                  Live Events
                </button>
              </Link>
            </div>
            <CiMenuKebab className="text-2xl mr-3 cursor-pointer" />

          </div>

          {/* card compoennt */}

          <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto">
              <div className="grid grid-cols-3 -m-4">
                {hdata.map((data, index) => (
                  <div className="p-2 w-[100%]" key={index}>
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <img
                        className="lg:h-32 md:h-36 w-full object-cover object-center"
                        src={data.img}
                        alt="blog"
                      />
                      <div className="p-3">
                        <h1 className="title-font text-md font-medium text-gray-900 mb-1 leading-normal">
                          {data.title}
                        </h1>
                        <h2 className=" text-sm title-font font-medium mb-1 text-black">
                          {data.subtitle}
                        </h2>
                        <p className="text-xs mb-2">{data.para}</p>
                        <div className="flex items-center flex-wrap ">
                          <a className="text-black inline-flex font-medium items-center md:mb-2 lg:mb-0 text-xs">
                            <IoLogoUsd className="mr-2" />
                            {data.price}
                          </a>
                          <span className="text-black font-medium mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-xs pr-3 py-1 ">
                            <AiOutlineCalendar className="mr-2" />
                            {data.date}
                          </span>
                        </div>
                        <div className="flex items-center flex-wrap mt-1 ">
                          <a className="text-black inline-flex font-medium items-center md:mb-2 lg:mb-0 text-xs">
                            <IoTicket className="mr-2" />
                            {data.ticket}
                          </a>
                          <span className="text-black font-medium mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-xs pr-3 py-1 ">
                            <BiTimeFive className="mr-2" />
                            {data.time}
                          </span>
                        </div>
                        <div className="flex justify-end">
                          <input
                            type="checkbox"
                            className="checkbox-xs checkbox-info "
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          <div className="flex justify-end pb-4">
          <Link
          className="inline-block px-14 py-3 mr-2 bg-[#00CCFF] text-black font-medium text-sm leading-snug  rounded-full shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          href="#!"
          role="button"
        >
          View Event
        </Link>
          </div>
          </section>
        </div>
        <div className="w-[23%] bg-white mt-9 rounded-xl pt-7 px-3">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <div className="text-lg font-medium mb-0 pb-0">Past Events</div>
              <span className="text-xs">Filter</span>
            </div>
            <select className="select select-bordered bg-[#EDF2FF] w-[5.9rem]  rounded-[20px] pl-1.5 focus:outline-none pb-[0] pt-[0] ">
              <option  selected value="Newest">
              Newest
              </option>
              <option value="Older">Older</option>
            </select>
          </div>

          {/* Event Cards */}
        {sideData.map((sdata,index)=>(
            <div className="pt-5 border-b pb-3" key={index}>
            <div className="text-md font-medium">{sdata.Event}</div>
            <div className="flex items-end justify-between">
              <div className="flex gap-2 mt-3 items-center">
                <div className="rounded-full">
                  <img src={sdata.img} alt="" />
                </div>
                <div className="flex flex-col">
                  <div className="text-sm">{sdata.Name}</div>
                  <div className="text-xs">{sdata.timeline}</div>
                </div>
              </div>
              <button className="btn btn-sm text-sm lowercase hover:text-white bg-[#EDF2FF] text-black outline-none border-none rounded-full">{sdata.button}</button>
            </div>
          </div>
        ))}
         
        </div>
      </div>
    </div>
  );
};

export default Home;
