import React from "react";
import Greeting from "../components/Greeting";
import { BsThreeDots } from "react-icons/bs";
import img1 from "../assets/settingImages/pro.png";
import { RiMessageFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";

const Settings = () => {
  return (
    <div className="bg-[#F4F6FA] px-7">
      <Greeting />
      <div className="flex gap-5 items-end">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
          Setting Budget
        </h5>
        <div className="flex gap-2 pt-2">
          <button className="btn gap-2 bg-[#ffFF] text-black rounded-xl capitalize  hover:text-white">
            Create New
          </button>
        </div>
      </div>
      <div className="flex justify-between pb-14 items-start">
        <div className=" mt-9 w-[73%] rounded-xl bg-white px-6 py-5">
          <div className="flex justify-between">
            <div>
              <p className="font-medium">Wedding Event</p>
              <span className="text-xs text-[#A0A0A0]">
                Event ID:{" "}
                <span className="font-medium text-black">ENT-098</span>
              </span>
            </div>
            <div className="flex flex-col items-end text-[#A0A0A0] gap-1">
              <span className="text-xs">123 Sisipi St</span>
              <span className="text-xs">Toronto</span>
              <span className="text-xs">California (CA), 1234</span>
            </div>
          </div>
          <div className="bg-[#EDF2FF] px-4 mt-5 rounded- py-3 pb-9 rounded-lg">
            <div className="flex justify-between text-sm pt-4 text-[#A0A0A0]">
              <span>Budget Detail</span>
              <span>BILLED TO</span>
            </div>
            <div className="flex justify-between mt-3">
              <div className="flex flex-col  gap-1">
                <span className="font-semibold">ET-098</span>
                <span className="text-sm text-[#a0a0a0]">
                  Issue Date: August 9, 2022
                </span>
                <span className="text-sm text-[#a0a0a0]">
                  Due Date: August 9, 2022
                </span>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="font-semibold">Advin Clark</span>
                <span className="text-sm text-[#a0a0a0]">123 Sisipi St</span>
                <span className="text-sm text-[#a0a0a0]">Toronto</span>
                <span className="text-sm text-[#a0a0a0]">
                  California (CA), 1234
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-between pt-7 text-[#a0a0a0] text-sm border-b pb-3">
            <span>Ticket</span>
            <span className="ml-20">Quantity</span>
            <span>Amount</span>
            <span>Amount</span>
          </div>
          <div className="flex justify-center gap-[23%] pt-7 text-[#a0a0a0] text-sm pb-3">
            <span className=" font-medium text-black">
              Wedding Event Ticket
            </span>
            <span className="">1</span>
            <span>$100</span>
            <span className="font-medium text-black">$100</span>
          </div>
          <div className="bg-[#FAFAFA] flex gap-6 justify-end px-3 py-2 mt-3">
            <span>Total Amount:</span>
            <span className="font-medium">$100</span>
          </div>
        </div>
        <div className="w-[25%]">
          <div className=" bg-white mt-9 rounded-xl pt-5 px-3 pb-6">
            <div className="flex items-center justify-between text-[#747474]">
              <span className="font-medium text-sm text-black">
                Event Manager Information
              </span>
              <BsThreeDots className="cursor-pointer" />
            </div>
            <div className="flex gap-5 items-center">
              <div className="rounded-full mt-3">
                <img src={img1} alt="" />
              </div>
              <span className="text-xl">Advin Clark</span>
            </div>
            <div className="flex justify-between px-2 pt-4 items-center">
              <RiMessageFill className="text-xl" />
              <span className="text-[#a0a0a0]">carliejohn@gmail.com</span>
              <FaRegEdit className="text-xl" />
            </div>
            <div className="flex justify-between px-2 pt-4 items-center">
              <BsFillTelephoneFill className="text-xl" />
              <span className="text-[#a0a0a0]">carliejohn@gmail.com</span>
              <FaRegEdit className="text-xl" />
            </div>
            <div className="flex justify-between px-2 pt-4 items-center">
              <HiLocationMarker className="text-xl" />
              <span className="text-[#a0a0a0]">carliejohn@gmail.com</span>
              <FaRegEdit className="text-xl" />
            </div>
            <button className="btn btn-active btn-ghost w-full block mt-5">
              Updat Detail
            </button>
          </div>
          <button className="btn btn-active bg-black w-full block mt-5">
            Create Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
