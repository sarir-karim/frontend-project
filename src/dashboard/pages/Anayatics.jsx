import React from "react";
import { BsFillTriangleFill } from "react-icons/bs";
import PieChart from "./charts/PieChart";
import ColumnChart from "./charts/ColumnChart";
import { BsFillCircleFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoTicket } from "react-icons/io5";
import SmallColChart from "./charts/SmallColChart";
import { trendingData } from "./data/hdata";
import AdultChart from "./charts/AdultChart";
import YoungChart from "./charts/YoungChart";
import SmallPieChart from "./charts/SmallPieChart";
import SmallLineChart from "./charts/SmallLineChart";
import SalesSummeryChart from "./charts/SalesSummeryChart";
import RevenueChart from "./charts/RevenueChart";
const Anayatics = () => {
  return (
    <>
      <div className=" bg-[#F4F6FA] px-4">
        <div className="flex justify-between items-center pt-5 ">
          <span className="text-md  ">Hi! Good Morning</span>
          <span className="text-md font-medium ">
            Sunday, 9 April 2024, 10:24PM
          </span>
        </div>

        <div className="flex justify-between pt-2 items-center">
          <p className="text-3xl font-bold">Analytics</p>
          <div className="flex items-center gap-3">
            <button className="btn bg-black btn-outline text-[11px] text-white rounded-[15px] btn-sm pt-4 pb-4 pl-4 pr-4 pb-6">
              All
            </button>
            <select className="select select-bordered bg-[#EDF2FF] w-[10.9rem]  rounded-[20px] pl-1.5 focus:outline-none  ">
              <option selected value="Newest">
                Filter event by
              </option>
              <option value="Older">Older</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between ">
          <div className="mt-9 w-[75%] rounded-xl ">
            <div className="flex justify-between">
              <div className="flex bg-white px-2 py-3 w-64 justify-center gap-10 h-20 items-center rounded-lg">
                <div className="w-10 cursor-pointer">
                  <SmallColChart className="h-10" />
                </div>
                <div className="mt-3">
                  <span>Income</span>
                  <p className="font-bold">$126,000</p>
                </div>
              </div>
              <div className="flex bg-white px-2 py-3 w-64 justify-center h-20  gap-10 items-center rounded-lg">
                <div className="w-10 cursor-pointer">
                  <SmallLineChart />
                </div>
                <div className="mt-3">
                  <span>Events</span>
                  <p className="font-bold">109,511</p>
                </div>
              </div>
              <div className="flex bg-white px-2 py-3 h-20 w-64 gap-9 justify-center gap-4 items-center rounded-lg">
                <div className="w-10 cursor-pointer mt-1">
                  <SmallPieChart />
                </div>
                <div className=" items-center ">
                  <span className="text-sm">Increase In Sales</span>
                  <div className="flex items-center gap-2">
                    <p className="font-bold">59%</p>
                    <BsFillTriangleFill className="text-[#00CCFF]" />
                  </div>
                </div>
              </div>
            </div>

            {/* pie chat */}
            <div className="flex justify-between mt-6 items-start">
              <div className="bg-white w-[65%] p-3 rounded-xl">
                <div className="flex justify-between px-4 ">
                  <div className="">
                    <p className="text-sm font-bold">Sales Comparison</p>
                    <span className="text-sm">Events By Date</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold">57%</span>
                    <BsFillTriangleFill className="text-[#00CCFF]" />
                  </div>
                </div>
                <div className="px-5">
                  <ColumnChart />
                </div>
              </div>
              <div className="bg-white w-[31%] p-3 rounded-lg">
                <div className="flex justify-between  ">
                  <div className="">
                    <p className="text-sm font-bold">Pie Chart</p>
                    <span className="text-sm">Ticket Sold</span>
                  </div>
                  <select className="select select-sm select-bordered bg-[#EDF2FF] w-[6.9rem]  rounded-[20px] pl-1.5  focus:outline-none  ">
                    <option selected value="Newest">
                      Filter event by
                    </option>
                    <option value="Older">Older</option>
                  </select>
                </div>
                <div id="chart">
                  <PieChart />
                  <div className="flex gap-5 ml-5">
                    <div className="flex items-center gap-2">
                      <BsFillCircleFill className="text-xs text-red-500" />
                      <span className="text-sm">Ticket A</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BsFillCircleFill className="text-xs text-green-500" />
                      <span className="text-sm">Ticket C</span>
                    </div>
                  </div>
                  <div className="flex gap-5 ml-5 mt-4">
                    <div className="flex items-center gap-2">
                      <BsFillCircleFill className="text-xs text-blue-500" />
                      <span className="text-sm">Ticket B</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BsFillCircleFill className="text-xs text-yellow-500" />
                      <span className="text-sm">Ticket D</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* trending events */}
            <div className="flex gap-8 items-start">
              <div className="w-[75%] bg-white px-3 py-3 rounded-xl">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Trending Events</span>
                  <BsThreeDotsVertical />
                </div>
                {/* tending */}
                {trendingData.map((data, index) => (
                  <div
                    className="flex items-center justify-between border-b "
                    key={index}
                  >
                    <span className="text-[#A6A6A6] text-md">{data.sum}</span>
                    <IoTicket className="text-xl border rounded-full w-10 h-10 p-1 border-red-200" />
                    <span className="w-[50%] font-medium text-sm">
                      {data.title}
                    </span>
                    <div className="flex flex-col">
                      <span className="font-semibold text-lg">
                        {data.number}
                      </span>
                      <span className="text-sm text-[#8A8A8A]">Sales</span>
                    </div>
                    <SmallColChart />
                    <BsFillTriangleFill className="text-[#00CCFF] mt-3 ml-[-10px] mr-3" />
                  </div>
                ))}
              </div>
              <div className="w-[32%] bg-white rounded-xl px-3 py-3 mt-8">
                <p className="font-semibold">Customers</p>
                <div className="flex items-center">
                  <AdultChart className="ml-[-50px]" />
                  <div className="w-40">
                    <p className="font-bold text-sm">Adult</p>
                    <span className="text-sm">30 - 45 Years</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <YoungChart className="ml-[-50px]" />
                  <div className="w-40">
                    <p className="font-bold text-sm">Young</p>
                    <span className="text-sm">17 - 24 Years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[23%] mt-9  ">
            {/* Event Cards */}
            <div className="bg-white pt-5 px-3 rounded-xl py-3">
              <div className="flex justify-between items-center ">
                <p className="text-sm font-bold">Sales Summary</p>
                <select className="select select-xs select-bordered bg-[#EDF2FF] w-[6.9rem]  rounded-[20px] pl-1.5  focus:outline-none  ">
                  <option selected value="Newest">
                    This Week
                  </option>
                  <option value="Older">Last Month</option>
                </select>
              </div>
              <div className="flex justify-between items-center mt-3">
                <p className="text-sm font-medium">Tuesday</p>
                <p className="text-sm font-medium">215,523 pcs</p>
              </div>
              <SalesSummeryChart/>
            </div>
            <div className="bg-white pt-5 px-3 rounded-xl py-3 mt-7">
              <div className="flex justify-between items-center mt-3">
                <p className="text-sm font-medium">Revenue</p>
               <BsThreeDotsVertical/>
              </div>
              <RevenueChart/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Anayatics;
