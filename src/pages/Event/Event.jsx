import React from 'react'
import { Link } from 'react-router-dom'
import { data } from "./data";
import Subscribe from '../../components/Subscribe/Subscribe';

const Event = () => {
  return (
    <>
    {/* hero section */}
      <div class="text-center text-gray-800  px-6 flex flex-col justify-center items-center gap-6 bg-[#0F172A] py-14">
        <h1 class="text-3xl xl:text-4xl font-semibold text-white w-[50%]">
        <span className="text-yellow-500 font-semibold leading-14">
              {" "}
            Discover
            </span>{" "}  Everyting you need to make your 
            <span className="text-yellow-500 font-semibold"> Event A Success</span> 
     
        </h1>
      
        <div className="text-md text-center text-white opacity-[0.6] w-[45%]">
        Our event marketplace offers everything you need to make your event a success. Whether you're planning a wedding, corporate event, or private party, we've got you covered.
        </div>
        <Link
          className="inline-block px-14 py-3 mr-2 bg-[#00CCFF] text-black font-medium text-sm leading-snug  rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          href="#!"
          role="button"
        >
          Read More
        </Link>
      </div>

      {/* events */}

      <div className=" ">
        <section className="mb-0 text-gray-800 text-center py-10 w-[80%] mx-auto">
         
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-6  ">
            {data.map((data, index) => (
              <div
                className="mb-12 lg:mb-0 bg-white w-[95%] shadow-lg rounded-lg mt-10"
                key={index}
              >
                <img
                  className="rounded-lg shadow-lg mb-6 mx-auto mt-3"
                  src={data.img}
                  alt="avatar"
                  style={{ width: 460 }}
                />
                <h5 className="text-2xl font-bold mb-2">{data.name}</h5>
                <p className="text-sm text-red-500">{data.subhead}</p>
                <p className="mb-3 text-sm px-9 pb-7 ">{data.para}</p>
              </div>
            ))}
          </div>
          <Link
            className="inline-block px-20 py-3 mr-2 bg-[#00CCFF] text-black font-medium text-sm leading-snug  rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mt-20"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            href="#!"
            role="button"
          >
   Load More
          </Link>
        </section>
      </div>

      {/* subscribe */}

      <Subscribe/>
      
    </>
  )
}

export default Event
