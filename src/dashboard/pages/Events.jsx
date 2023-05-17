import React from "react";
import img1 from "../assets/eventImages/img1.png";
import {HiUsers} from 'react-icons/hi'
import {BsBoxArrowUpRight,BsThreeDotsVertical} from 'react-icons/bs'
const Events = () => {
  return (
    <>
      <div className="bg-[#F4F6FA] px-7">
        <div className="flex justify-between items-center ">
          <span className="text-2xl font-semibold  ">Event Panel</span>
          <span className="text-md font-medium ">
            Sunday, 9 April 2024, 10:24PM
          </span>
        </div>

        <div className="flex justify-between">
          <div className="bg-white mt-9 w-[75%] rounded-lg ">
            {/* card compoennt */}
            <div className=" bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg" src={img1} alt="" />
              </a>
              <div className="p-5">
                <div className="flex justify-between items-end">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white w-[60%]">
                  Plevanti Atuhor Community Fun Hiking at Sibayak Mt.
                  </h5>
                  <div className="flex gap-2">
                    <button className="btn gap-2 bg-[#EDF2FF] text-black rounded-full border-none hover:text-white">
                      <HiUsers/>
                      Socials Activity
                    </button>
                    <button className="btn gap-1 bg-white text-black border-[#EDF2FF] rounded-full hover:text-white">
                    <BsBoxArrowUpRight/>
                    </button>
                    <button className="btn gap-1 bg-white text-black border-[#EDF2FF] rounded-full hover:text-white">
                    <BsThreeDotsVertical/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[23%] bg-white mt-9 rounded-xl pt-7 px-3">
            {/* Event Cards */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
