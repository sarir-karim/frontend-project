import React from "react";
import { Link } from "react-router-dom";
import { data } from "./data";
import {FaUserCircle} from 'react-icons/fa'
import {GrMap} from 'react-icons/gr'
import {RiMoneyDollarCircleFill} from 'react-icons/ri'
import Subscribe from "../../components/Subscribe/Subscribe";
const Services = () => {
  return (
    <>
    {/* hero */}
      <div className="text-center text-gray-800  px-6 flex flex-col justify-center items-center gap-6 bg-[#0F172A] py-14">
        <h1 className="text-3xl  xl:text-4xl font-semibold text-white w-[50%]">
          Expert Event Management
          <span className="text-white text-3xl font-semibold">
            <span className="text-yellow-500 font-semibold"> Services</span> to
            <span className="text-yellow-500 font-semibold">
              {" "}
              Make Your
            </span>{" "}
            Event a Huge Success
          </span>
        </h1>
        <div className="text-md text-center text-white opacity-[0.6] w-[45%]">
          We specialize in providing top-notch event management services to make
          your event a huge success. Whether it's a corporate event, wedding,
          birthday party, or any other special occasion, we have got you
          covered.
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

        {/* sldier  */}
      </div>

      {/* SERVIES */}
      <div className=" ">
        <section className="mb-10 text-gray-800 text-center py-10 w-[80%] mx-auto">
          <h2 className="text-4xl font-extrabold mb-3 mt-10">Our Services</h2>
          <p className="w-[40%] mx-auto mb-5 text-sm text-[#888888] ">
          We are Offering Following Services. Explore and Make your event better than every one.
          </p>
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
           Book Service Now
          </Link>
        </section>
      </div>

      {/* Event planning */}
      <div className="flex flex-col gap-5 items-start pt-0 ">
        <div className="text-3xl font-bold  text-center mx-auto leading-[3rem]">
        Event Planning In 3 Easy Steps
        </div>
        <p className="text-black opacity-[0.6] text-center w-[37%] mx-auto mb-10">
        Every Event No Matter Simple Or Complex, Requires Detail Planning and Requirement.
        </p>
      
        <div className="flex w-full justify-center gap-16 pt-1">
        <div className="bg-[#0F172A] w-[35%] flex items-center justify-center flex-col gap-3  pt-5 pb-9 text-white rounded-lg">
            <FaUserCircle className="text-5xl text-[#FAAB00]"/>
            <span className="font-bold text-2xl"><span className="text-[#FFCC00]">About </span>You</span>
            <span className="font-thin text-sm tracking-wide w-[50%] text-center">Tell Us Who You are and For whom Event
you are planning</span>
          </div>
          <div className="bg-[#0F172A] w-[35%] flex items-center justify-center flex-col gap-3 pt-8 pb-9 text-white rounded-lg">
         <GrMap className="text-5xl bg-[#FAAB00] rounded-md"/>
            <span className="font-bold text-2xl mb-2"><span className="text-[#FFCC00]">Your </span> Location</span>
          
            <span className="font-thin text-sm tracking-wide">
            Enter Location where you want to 
conduct event
            </span>
          </div>
        </div>
          <div className="bg-[#0F172A] w-[35%] flex items-center justify-center flex-col gap-5 pt-8 pb-9 text-white rounded-lg mx-auto mt-8">
          <RiMoneyDollarCircleFill className="text-5xl text-[#FAAB00]"/> 
            <span className="font-bold text-2xl mb-2"><span className="text-[#FFCC00]">Pay  </span>to <span className="text-[#FFCC00]">Start</span></span>
            
            <span className="font-sm text-sm tracking-wide">Enter you Budget and Get started.</span>
          </div>
         
        
      </div>

      {/* Subscribe */}

      <Subscribe className="mt-[-20px]"/>
    </>
  );
};

export default Services;
