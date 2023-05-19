import React from "react";

function NotifyGuests() {
  return (
    <div className="bg-[#F4F6FA] px-7">
      <div className="flex justify-between ">
        <div className="bg-white mt-9 w-[100%] rounded-xl px-4">
          {/* card compoennt */}
          <div className="flex justify-between">
            <div className="flex gap-10 items-center pt-5 ">
              <span className="text-2xl font-semibold text-black  ">
                Notify Guests
              </span>
              <button className="btn btn-outline py-2 pl-10 pr-10">Create New</button>
            </div>
            <span className="text-md font-medium ">
              Sunday, 9 April 2024, 10:24PM
            </span>
          </div>

          <div>
            <label
              htmlFor="input-group-1"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white bg-white"
            >
              Write email address
            </label>
            <div className="relative mb-1 bg-white ">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none bg-white border-black">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 border-black  "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <input
                type="text"
                id="input-group-1"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-11 p-2.5"
                placeholder="WRITE EMAIL ADDRESS"
              />
            </div>

            {/* second input  */}

            <label
              htmlFor="input-group-1"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white bg-white"
            >
              Subject
            </label>
            <div className="relative mb-6 bg-white">
              <input
                type="text"
                id="input-group-1"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
                placeholder="SUBJECT"
              />
            </div>
            <div>
              <div className="form3">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-black-900 dark:text-white"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="block p-2.5 w-[100%] text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[50vh]"
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
