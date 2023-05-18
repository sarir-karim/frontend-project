import React, { useState } from "react";
import img1 from "../assets/eventImages/img1.png";
import { HiUsers } from "react-icons/hi";
import { BsBoxArrowUpRight, BsThreeDotsVertical } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa";
import { BsCalendar2Date } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import img2 from "../assets/eventImages/img2.png";
import img3 from "../assets/eventImages/img3.png";
import { todoData } from "./data/hdata";
import { AiFillDelete } from "react-icons/ai";
import HomePieSmallChart from "./charts/HomeChart/homePieSmallChart";
import HomePieChart2 from "./charts/HomeChart/HomePieChart2";
import HomePieChart3 from "./charts/HomeChart/HomePieChart3";
import HomeLineChart from "./charts/HomeChart/HomeLineChart";
import HomeBarChart from "./charts/HomeChart/HomeBarChart";

const Events = () => {
  const [isShowMore, setIsShowMore] = useState(false);
  const [isShowTable, setIsShowTable] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  const toggleIsShowTable = () => {
    setIsShowTable(!isShowTable);
  };



  return (
    <>
      <div className="bg-[#F4F6FA] px-7">
        <div className="flex justify-between items-center pt-5 ">
          <span className="text-2xl font-semibold  ">Event Panel</span>
          <span className="text-md font-medium ">
            Sunday, 9 April 2024, 10:24PM
          </span>
        </div>

        <div className="flex justify-between">
          <div className="bg-[#F4F6FA] mt-9 w-[75%] rounded-xl mb-7 ">
            {/* card compoennt */}
            <div className=" bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 rounded-xl">
              <a href="#">
                <img className="rounded-lg" src={img1} alt="" />
              </a>
              <div className="p-5">
                <div className="flex justify-between items-end">
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white w-[60%]">
                    Plevanti Atuhor Community Fun Hiking at Sibayak Mt.
                  </h5>
                  <div className="flex gap-2">
                    <button className="btn gap-2 bg-[#EDF2FF] text-black rounded-full border-none hover:text-white">
                      <HiUsers />
                      Socials Activity
                    </button>
                    <button className="btn gap-1 bg-white text-black border-[#EDF2FF] rounded-full hover:text-white">
                      <BsBoxArrowUpRight />
                    </button>
                    <button className="btn gap-1 bg-white text-black border-[#EDF2FF] rounded-full hover:text-white">
                      <BsThreeDotsVertical />
                    </button>
                  </div>
                </div>
                {/* sections */}
                <div className="flex pt-7 gap-5">
                  <button className="btn  bg-white text-black border-[#EDF2FF] rounded-lg hover:text-white flex  gap-4 pt-2 pb-3 pl-4 pr-5">
                    <FaDollarSign className="text-md" />
                    <div className="">
                      <div className="text-gray-500 text-xs capitalize">
                        Total Price
                      </div>
                      <div className="text-semibold text-xs capitalize   ">
                        $124,00
                      </div>
                    </div>
                  </button>

                  <button className="btn  bg-white text-black border-[#EDF2FF] rounded-lg hover:text-white flex  gap-4 pt-2 pb-3 pl-4 pr-5">
                    <BsCalendar2Date className="text-md" />
                    <div className="">
                      <div className="text-gray-500 text-xs text-left capitalize">
                        Date
                      </div>
                      <div className="text-semibold text-xs text-left capitalize  ">
                        Sunday, 12 June 2020
                      </div>
                    </div>
                  </button>
                  <button className="btn  bg-white text-black border-[#EDF2FF] rounded-lg hover:text-white flex  gap-4 pt-2 pb-3 pl-4 pr-5">
                    <IoLocationSharp className="text-md" />
                    <div className="">
                      <div className="text-gray-500 text-xs text-left capitalize">
                        Location
                      </div>
                      <div className="text-semibold text-xs text-left capitalize ">
                        Blue Corner St. 123566 Franklin Avenue, London
                      </div>
                    </div>
                  </button>
                </div>

                <div className="pt-4">
                  <h3 className="text-md font-semibold">Read More Read Less</h3>

                  <p className="text-sm pt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat
                  </p>
                  {isShowMore && (
                    <p className="text-sm">
                      pariatur. Excepteur sint occaecat cupidatat non proident,
                      sunt in culpa qui officia deserunt mollit anim id est
                      laborum Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in
                      voluptate velit esse cillum dolore eu fugiat
                    </p>
                  )}
                  <div className="flex justify-center relative pt-4">
                    <button
                      onClick={toggleReadMoreLess}
                      className="btn  bg-black text-white border-[#EDF2FF] rounded-lg hover:text-white flex  gap-4 absolute bottom-[-2.5rem] "
                    >
                      {isShowMore ? <GoTriangleDown /> : <GoTriangleUp />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-9">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-[#FCFCFC;] dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-4 py-6">
                      Event ID
                    </th>
                    <th scope="col" className="px-4 py-6">
                      <div className="flex items-center">Date</div>
                    </th>
                    <th scope="col" className="px-4 py-6">
                      <div className="flex items-center">
                        Created By
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3 h-3 ml-1"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 320 512"
                          >
                            <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                          </svg>
                        </a>
                      </div>
                    </th>
                    <th scope="col" className="px-4 py-6">
                      <div className="flex items-center">Location</div>
                    </th>
                    <th scope="col" className="px-4 py-6">
                      <div className="flex items-center">Sold Ticket</div>
                    </th>
                    <th scope="col" className="px-6 py-6">
                      <div className="flex items-center">Refund</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-4 py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td className="px-4 py-6 text-xs">#0012451</td>
                    <td className="px-4 py-6 text-xs">04/08/2020 12:34 AM</td>
                    <td className="px-4 py-6 text-xs">Elisabeth Queen</td>
                    <td className="px-4 py-6 text-xs ">Medan, Indonesia</td>
                    <td className="px-4 py-6 text-xs ">NO</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-4 py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td className="px-4 py-6 text-xs">#0012451</td>
                    <td className="px-4 py-6 text-xs">04/08/2020 12:34 AM</td>
                    <td className="px-4 py-6 text-xs">Elisabeth Queen</td>
                    <td className="px-4 py-6 text-xs ">Medan, Indonesia</td>
                    <td className="px-4 py-6 text-xs ">NO</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-4 py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td className="px-4 py-6 text-xs">#0012451</td>
                    <td className="px-4 py-6 text-xs">04/08/2020 12:34 AM</td>
                    <td className="px-4 py-6 text-xs">Elisabeth Queen</td>
                    <td className="px-4 py-6 text-xs ">Medan, Indonesia</td>
                    <td className="px-4 py-6 text-xs ">NO</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-4 py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td className="px-4 py-6 text-xs">#0012451</td>
                    <td className="px-4 py-6 text-xs">04/08/2020 12:34 AM</td>
                    <td className="px-4 py-6 text-xs">Elisabeth Queen</td>
                    <td className="px-4 py-6 text-xs ">Medan, Indonesia</td>
                    <td className="px-4 py-6 text-xs ">NO</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-4 py-6 text-xs font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Microsoft Surface Pro
                    </th>
                    <td className="px-4 py-6 text-xs">#0012451</td>
                    <td className="px-4 py-6 text-xs">04/08/2020 12:34 AM</td>
                    <td className="px-4 py-6 text-xs">Elisabeth Queen</td>
                    <td className="px-4 py-6 text-xs ">Medan, Indonesia</td>
                    <td className="px-4 py-6 text-xs ">NO</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 mb-9">
                    <th
                      scope="row"
                      className="px-4  border-b py-6 text-xs font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Magic Mouse 2
                    </th>
                    <td className="px-4 py-6 text-xs">#0012451</td>
                    <td className="px-4 py-6 text-xs">04/08/2020 12:34 AM</td>
                    <td className="px-4 py-6 text-xs">Elisabeth Queen</td>
                    <td className="px-4 py-6 text-xs ">Medan, Indonesia</td>
                    <td className="px-4 py-6 text-xs ">NO</td>
                  </tr>
                  {isShowTable && (
                    <tr className="bg-white dark:bg-gray-800 mb-9">
                      <th
                        scope="row"
                        className="px-4 py-6 text-xs font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Magic Mouse 2
                      </th>
                      <td className="px-4 py-6 text-xs">#0012451</td>
                      <td className="px-4 py-6 text-xs">04/08/2020 12:34 AM</td>
                      <td className="px-4 py-6 text-xs">Elisabeth Queen</td>
                      <td className="px-4 py-6 text-xs ">Medan, Indonesia</td>
                      <td className="px-4 py-6 text-xs ">NO</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="flex justify-center relative pt-4">
              <button
                onClick={toggleIsShowTable}
                className="btn  bg-black text-white border-[#EDF2FF] rounded-lg hover:text-white flex  gap-4 absolute bottom-[-1rem] left-[23rem]"
              >
                {isShowTable ? <GoTriangleDown /> : <GoTriangleUp />}
              </button>
            </div>
          </div>
          <div className="w-[23%]  mt-9  ">
            <div className="bg-white pt-5 px-3 rounded-xl">
              <span className="font-semibold">Sales Summary</span>
              <div className="flex justify-between pt-3 items-center">
                <div className="text-gray-400 uppercase text-xs">
                  Ticket Sold
                </div>
                <div className="text-sm font-semibold">215,523 pcs</div>
              </div>
              <div id="chart ">
               <HomePieSmallChart/>
              </div>
              <div className="flex gap-3 justify-between items-center">
                <div className="w-32">
                  <div className="font-bold text-3xl">25 Left</div>
                  <span>Available Ticket</span>
                </div>
                <div className="w-24">
                <HomePieChart2/>
                </div>
              </div>
            </div>

            {/* people joined */}
            <div className="flex bg-white pt-2 px-3 py-3 rounded-xl mt-5 justify-center items-center">
              <div className="">
                <div>People Joined</div>
                <span className="text-4xl font-bold">1000</span>
              </div>
              <div className="w-[55%]">
                <HomeBarChart/>
              </div>
            </div>
            <div className="flex bg-white pt-2 px-3 py-0 rounded-xl mt-5 justify-between items-center">
              <div className="">
                <div>People In Waiting</div>
                <span className="text-4xl font-bold">856</span>
              </div>
              <div className="w-20">
                <HomePieChart3/>
              </div>
            </div>
            <div className=" bg-white pt-5 px-3 py-0 rounded-xl mt-5 justify-between items-center">
              <div className="">
                <div>Increase 25%</div>
                <span className="text-gray-400">Comparisson856</span>
              </div>
              <div className="w-full">
                    <HomeLineChart/>
              </div>
            </div>
            <div className=" bg-white pt-5 px-2 py-2 rounded-xl mt-5 justify-between items-center">
              {todoData.map((data, index) => (
                <div
                  className="flex items-center justify-between mb-3 "
                  key={index}
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="checkbox-xs checkbox-info "
                    />
                    <span className="text-sm"> {data.task}</span>
                  </div>
                  <div className="flex items-center">
                    <AiFillDelete className="text-red-500" />
                    <button className="btn btn-sm capitalize bg-[#F4F6FA] text-black">
                      {data.button}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
