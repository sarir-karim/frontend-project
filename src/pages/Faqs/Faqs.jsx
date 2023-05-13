import React from "react";
import {data} from './data'
import Subscribe from "../../components/Subscribe/Subscribe";

const Faqs = () => {
  return (
    <>
      <div className="bg-[#0F172A] py-16 bg-[#0F172A] py-14 text-center text-gray-800  px-6 flex flex-col justify-center items-center gap-6 ">
        <h1 className="text-3xl  xl:text-4xl font-medium text-white">
          Frequently
          <span className="text-yellow-500"> Asked </span> Questions
        </h1>
      </div>

      {/* frequently asked questions */}

      <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
        <div className="flex flex-col divide-y  mt-8 mx-auto w-[80%]">
          <div className="py-5">
           {data.map((data, index)=>(
             <details className="group shadow-md p-5   w-[100%] rounded-lg mt-4" key={index}>
             <summary className="flex justify-between items-center font-medium cursor-pointer list-none ">
               <span>
                 {" "}
                 {data.question}
               </span>
               <span className="transition group-open:rotate-180">
                 <svg
                   fill="none"
                   height={24}
                   shapeRendering="geometricPrecision"
                   stroke="currentColor"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth="1.5"
                   viewBox="0 0 24 24"
                   width={24}
                 >
                   <path d="M6 9l6 6 6-6" />
                 </svg>
               </span>
             </summary>
             <p className="text-black mt-3 group-open:animate-fadeIn text-sm w-[85%] tracking-10">
             {data.answer}
             </p>
           </details>
           ))}
          </div>
        </div>
      </div>

      {/* subscribe */}

      <Subscribe/>
    </>
  );
};

export default Faqs;
