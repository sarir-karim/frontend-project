import React from "react";
import footerLogo from '../../assets/footerlogo.png'
import {BsTelephone} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'

const Footer = () => {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-900 mt-4">
        <div className="mx-auto w-full max-w-screen-xl ml-16">
          <div className="grid grid-cols-2 gap-0 px-4 py-2 lg:py-8 md:grid-cols-4">
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white mt-5">
               <img src={footerLogo} alt="" />
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-2 text-xs">
                Discovered latest top-notch
                </li>
                <li className="mb-4 text-xs">
                stories from world wide community
                </li>
                <li className="mb-4 flex items-center gap-2 text-sm">
               <BsTelephone/> 026886982629
                </li>
                <li className="mb-4 flex items-center gap-2 text-sm">
               <AiOutlineMail/> Plaventi@email.com
                </li>
               
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white mt-5 ">
              Community
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4 ">
                  <a href="#" className="hover:underline text-sm">
                  FAQ’s
                  </a>
                </li>
                <li className="mb-4 ">
                  <a href="#" className="hover:underline text-sm">
                  Blog
                  </a>
                </li>
                
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white mt-5">
              Help Center
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4 text-sm">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4 text-sm">
                  <a href="#" className="hover:underline">
                  Terms Condition
                  </a>
                </li>
                <li className="mb-4 text-sm">
                  <a href="#" className="hover:underline">
                  Legal Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white mt-5">
              Social Media
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4 text-sm">
                  <a href="#" className="hover:underline">
                  Instagram
                  </a>
                </li>
                <li className="mb-4 text-sm">
                  <a href="#" className="hover:underline">
                  Twitter
                  </a>
                </li>
                <li className="mb-4 text-sm">
                  <a href="#" className="hover:underline">
                  Youtube
                  </a>
                </li>
                <li className="mb-4 text-sm">
                  <a href="#" className="hover:underline">
                  Tiktok
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
          <div className="px-4 py-6 bg-[#0F172A] dark:bg-gray-700  flex justify-center">
            <span className="text-sm text-center text-gray-500  sm:text-center">
            Copyright Plaventi 2023 | All Right Reserved 
            </span>
          </div>
      </footer>
    </div>
  );
};

export default Footer;
