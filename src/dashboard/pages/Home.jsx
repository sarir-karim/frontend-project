import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";
import img1 from '../assets/homeImages/img1.png'
import img2 from '../assets/homeImages/img2.png'
import img3 from '../assets/homeImages/img3.png'
import {IoLogoUsd} from 'react-icons/io'
import {AiOutlineCalendar} from 'react-icons/ai'
import {IoTicket} from 'react-icons/io5'
import {BiTimeFive} from 'react-icons/bi'
import {hdata} from './data/hdata'
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

      <div className="flex">
        <div className="bg-white mt-9 w-[77%] rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex justify-center bg-[#666666] w-[36%] rounded-full  mt-3 ml-3">
              <Link to="" onClick={() => toggleButton("login")}>
                <button
                  className={`${
                    activeButton === "login"
                      ? "bg-[#00CCFF] text-black"
                      : "bg-[#666666] text-white "
                  }  font-bold ml-2 mt-1 mb-1 py-2 px-4 rounded-full focus:outline-none focus:shadow-outline inline-flex items-center gap-1`}
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
                  }  font-bold mr-2 mt-1 mb-1 py-2 px-4 rounded-full focus:outline-none focus:shadow-outline inline-flex items-center gap-1`}
                >
                  Live Events
                  
                </button>
              </Link>
            </div>
            <CiMenuKebab className="text-xl" />
          </div>

          {/* card compoennt */}

          <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto">
              <div className="grid grid-cols-3 -m-4">
               {hdata.map((data,index)=>(
                 <div className="p-4 md:w-[100%]">
                 <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                   <img
                     className="lg:h-32 md:h-36 w-full object-cover object-center"
                     src={img1}
                     alt="blog"
                   />
                   <div className="p-3">
                     <h1 className="title-font text-lg font-medium text-gray-900 mb-2 leading-normal">
                     {data.title}
                     </h1>
                     <h2 className="tracking-widest text-sm title-font font-medium mb-1 text-black">
                     {data.subtitle}
                     </h2>
                     <p className="text-xs mb-2">
                    {data.para}
                     </p>
                     <div className="flex items-center flex-wrap ">
                       <a className="text-black inline-flex items-center md:mb-2 lg:mb-0">
                        <IoLogoUsd className="mr-2"/>
                      {data.price}
                       </a>
                       <span className="text-black mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
                        <AiOutlineCalendar className="mr-2"/>
                       {data.date}
                       </span>
                       
                     </div>
                     <div className="flex items-center flex-wrap mt-1 ">
                       <a className="text-black inline-flex items-center md:mb-2 lg:mb-0">
                        <IoLogoUsd className="mr-2"/>
                        {data.ticket}
                       </a>
                       <span className="text-black mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
                        <AiOutlineCalendar className="mr-2"/>
                        {data.time}
                       </span>
                       
                     </div>
                   </div>
                 </div>
               </div>
               ))}
               
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
