import React from "react";

const EventDetail = () => {
  return (
    <div className="bg-[#F4F6FA] px-7 w-[100%]">
      <div className="flex justify-between  ">
        <div className="bg-white mt-9 w-[100%] rounded-xl  px-5 ">
          {/* card compoennt */}
          <div className="flex justify-between items-center pt-5  pb-3 ">
            <span className="text-2xl font-semibold  ">Event Details</span>
            <span className="text-md font-medium ">
              Sunday, 9 April 2024, 10:24PM
            </span>
          </div>
          <div className="flex gap-5 mt-3">
            <button class="btn btn-active ">Create Event</button>
            <button class="btn btn-outline btn-success bg-white  text-black-900">
              Canceled Event
            </button>
          </div>
          <form action="" className="flex gap-9 mt-5 w-full">
            <>
              <select
                id="countries"
                className="bg-white border border-white-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[57rem] p-2.7  "
              >
                <option selected="">Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </>
            <div className="relative max-w-sm">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                datepicker=""
                datepicker-orientation="bottom right"
                type="text"
                className="bg-white border border-black-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
                placeholder="Select date"
              />
            </div>
          </form>

          <form2 className="info ">
            <div className="info mt-5 gap-6 flex">
              <div
                className="relative"
                id="timepicker-inline-12"
                data-te-input-wrapper-init=""
              >
                <input
                  type="text"
                  className="peer block min-h-[auto]  rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 bg-white-900"
                  id="form2"
                />
                <label
                  htmlFor="form2"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >
                  Time From
                </label>
              </div>

              <div
                className="relative"
                id="timepicker-inline-12"
                data-te-input-wrapper-init=""
              >
                <input
                  type="text"
                  className="peer block min-h-[auto]  rounded border bg-transparent px-3 py-[0.35rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 bg-white-600"
                  id="form2"
                />
                <label
                  htmlFor="form2"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[95%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >
                  Time To
                </label>
              </div>

              <div className="relative mb-3" data-te-input-wrapper-init="">
                <input
                  type="search"
                  className="peer block min-h-[auto] w-[258%] rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-black-900 dark:peer-focus:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 bg-white-600"
                  id="exampleSearch2"
                  placeholder="Type query"
                />
                <label
                  htmlFor="exampleSearch2"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary "
                >
                  Location
                </label>
              </div>
            </div>
          </form2>
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
              className="block p-2.5 w-[100%] text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[70vh]"
              placeholder="Write your thoughts here..."
              defaultValue={""}
            />
            <div className="lastbtn flex justify-end mt-5 w-[100%]">
              <button
                type="button"
                className="py-2 px-20 mr-6 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-white-800 dark:text-black-400 dark:border-gray-600 dark:hover:text-white "
              >
                Reset
              </button>
              <button
                type="button"
                className="py-2 px-20 mr-6 mb-2 text-sm font-medium text-gray-900 focus:outline-none  rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 bg-[#00CCFF]"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
