import React from "react";
import { IoIosAddCircle } from "react-icons/io";
import TicketPieChart from "./charts/Tickets/TicketPieChart";
import TicketBarChart from "./charts/Tickets/TicketBarChart";
import TicketMainChart from "./charts/Tickets/TicketMainChart";
import TicketSummeryChart from "./charts/Tickets/TicketSummeryChart";
import TicketChart from "./charts/Tickets/TicketChart";
import TicketCancel from "./charts/Tickets/TicketCancel";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { ticketData } from "./data/hdata";

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
                  <IoIosAddCircle className="text-3xl text-[#EDF2FF]" />
                </div>
              </div>
              <div className="flex bg-white px-2 py-5 w-64 justify-center h-20  gap-2 items-center rounded-lg">
                <div className="mt-2 flex flex-col items-center">
                  <span>Ticket Sold</span>
                  <p className="font-bold text-3xl">93</p>
                </div>
                <div className="w-20 cursor-pointer">
                  <TicketBarChart className="h-10 " />
                </div>
              </div>
              <div className="flex bg-white px-2 py-5 w-64 justify-center h-20  gap-2 items-center rounded-lg">
                <div className=" flex flex-col items-center">
                  <span>Event Held</span>
                  <p className="font-bold text-3xl">856</p>
                </div>
                <div className="w-20 cursor-pointer mt-3">
                  <TicketPieChart />
                </div>
              </div>
            </div>
            {/* main chart */}
            <div className="bg-white rounded-xl mt-5 py-3">
              <TicketMainChart />
            </div>
          </div>
          <div className="w-[23%]">
            <div className=" bg-white pt-5 px-3 py-0 rounded-xl mt-8 justify-between items-center rounded-xl">
              <div className="flex justify-between items-center ">
                <p className="text-sm font-bold">Sales Summary</p>
                <select className="select select-xs select-bordered bg-[#EDF2FF] w-[6.9rem]  rounded-[20px] pl-1.5  focus:outline-none  ">
                  <option selected value="Newest">
                    This Week
                  </option>
                  <option value="Older">Last Month</option>
                </select>
              </div>
              <div className="w-full mt-[-10px]">
                <TicketSummeryChart />
              </div>

              <div className="bg-white pt-5 px-3 rounded-xl">
                <span className="font-semibold">Sales Summary</span>
                <div className="flex justify-between pt-3 items-center">
                  <div className="text-gray-400 uppercase text-xs">
                    Ticket Sold
                  </div>
                  <div className="text-sm font-semibold">215,523 pcs</div>
                </div>
                <div id="chart ">
                  <TicketChart />
                </div>
                <div className="flex gap-3 justify-between items-center">
                  <div className="w-32">
                    <div className="font-bold text-3xl">Cancelled</div>
                    <span>Available Ticket</span>
                  </div>
                  <div className="w-24">
                    <TicketCancel />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-6">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-3 py-3">
                  Ticket. ID
                </th>
                <th scope="col" className="px-3 py-3">
                  Date
                </th>
                <th scope="col" className="px-3 py-3">
                  Customer Name
                </th>
                <th scope="col" className="px-3 py-3">
                  Ticket Ordered
                </th>
                <th scope="col" className="px-3 py-3">
                  Location
                </th>
                <th scope="col" className="px-3 py-3">
                  Last Order
                </th>
                <th scope="col" className="px-3 py-3">
                  Total Amount
                </th>
                <th scope="col" className="px-3 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {ticketData.map((data, index) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  key={index}
                >
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-xs"
                  >
                    {data.ticketId}
                  </th>
                  <td className="px-3 py-4 text-xs">{data.date}</td>
                  <td className="px-3 py-4 text-xs">{data.customerName}</td>
                  <td className="px-3 py-4 text-xs">{data.ticketOrdered}</td>
                  <td className="px-3 py-4 text-xs">{data.location}</td>
                  <td className="px-3 py-4 text-xs">{data.lastOrder}</td>
                  <td className="px-3 py-4 text-xs">{data.amount}</td>
                  <td className="flex items-center px-6 py-4 space-x-3">
                    <FiEdit2 className="text-black" />
                    <RiDeleteBin5Line className="text-black" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Tickets;
