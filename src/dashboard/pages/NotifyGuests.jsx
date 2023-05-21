import React from "react";

function NotifyGuests() {
  return (
    <div className="bg-[#F4F6FA] px-7">
      <div className="flex justify-between items-center pt-5  ">
        <span className="text-xl font-medium  ">Good Morning</span>
        <span className="text-md font-medium ">
          Sunday, 9 April 2024, 10:24PM
        </span>
      </div>
      <div className="flex gap-10 items-center pt-2 ">
        <span className="text-2xl font-semibold text-black  ">
          Notify Guests
        </span>
        <button className="btn btn-outline  py-1 pl-5 pr-5 bg-white">Create New</button>
      </div>
      <div className="flex justify-between ">
        <div className=" mt-4 w-[100%] rounded-xl">
          {/* card compoennt */}
          <div className="flex justify-between"></div>

          <div>
           
            <div className="relative mb-1 py-3 ">
        
              <input
                type="text"
                id="input-group-1"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5"
                placeholder="write Email Address"
              />
            </div>

            {/* second input  */}

            <div className="relative mb-6">
              <input
                type="text"
                id="input-group-1"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  mt-3 w-full pl-4 p-2.5 "
                placeholder="Subject"
              />
            </div>
            <div>
              <div className="form3">
              
                <textarea
                  id="message"
                  rows={4}
                  className="block p-2.5 w-[100%] text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[60vh]"
                  placeholder="Write Event Description..."
                  defaultValue={""}
                />
                <div className="lastbtn flex justify-end mt-5 w-[%]">
                  <button
                    type="button"
                    className="py-2 px-20 mr-6 mb-2 text-sm font-medium text-gray-900 focus:outline-none  rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 bg-[#00CCFF]"
                  >
                    send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotifyGuests;
