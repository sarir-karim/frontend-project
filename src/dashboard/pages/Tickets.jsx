import React from "react";
import { IoIosAddCircle } from "react-icons/io";
import TicketPieChart from "./charts/Tickets/TicketPieChart";
import TicketBarChart from "./charts/Tickets/TicketBarChart";
import TicketMainChart from "./charts/Tickets/TicketMainChart";

const Tickets = () => {
  return (
    <>
      <div className=" bg-[#F4F6FA] px-4">
        <div className="flex justify-between items-center pt-5 ">
          <span className="text-md  ">Hi! Good Morning</span>
          <span className="text-md font-medium ">
            Sunday, 9 April 2024, 10:24PM
          </span>
        </div>

        <div className="flex justify-between pt-3 items-center">
          <p className="text-3xl font-bold">Ticket Management</p>
          <div className="flex items-center gap-3">
            <button className="btn bg-white btn-outline text-[11px] text-black rounded-[15px] btn-sm pt-4 pb-4 pl-4 pr-4 pb-6">
              Generate Share Link
            </button>
            <button className="btn bg-black btn-outline text-[11px] text-white rounded-[15px] btn-sm pt-4 pb-4 pl-4 pr-4 pb-6">
              Check Guest List
            </button>
          </div>
        </div>
        <div className="flex justify-between">
          <div className=" mt-9 w-[75%] rounded-xl ">
            {/* top charts */}
            <div className="flex justify-between">
              <div className="flex bg-white px-2 py-3 w-64 justify-center gap-3 h-20 items-end rounded-lg px-3 ">
                <div className="mt-3">
                  <p className="font-bold text-xl w-[60%]">Create Guest List</p>
                </div>
                <div className=" cursor-pointer">
                  <IoIosAddCircle  className="text-3xl text-[#EDF2FF]"/>
                </div>
              </div>
              <div className="flex bg-white px-2 py-5 w-64 justify-center h-20  gap-2 items-center rounded-lg">
                <div className="mt-3 flex flex-col items-center">
                  <span>Ticket Sold</span>
                  <p className="font-bold text-4xl">93</p>
                </div>
                <div className="w-20 cursor-pointer">
                  <TicketBarChart className="h-10" />
                </div>
              </div>
              <div className="flex bg-white px-2 py-5 w-64 justify-center h-20  gap-2 items-center rounded-lg">
                <div className=" flex flex-col items-center">
                  <span>Event Held</span>
                  <p className="font-bold text-4xl">856</p>
                </div>
                <div className="w-20 cursor-pointer mt-3">
                <TicketPieChart />
                </div>
              </div>
            </div>
            {/* main chart */}
            <div className="bg-white rounded-xl mt-5 py-3">
                <TicketMainChart/>
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

export default Tickets;
