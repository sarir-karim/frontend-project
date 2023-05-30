import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const countryData = [
  { name: "USA", code: "+1" },
  { name: "IND", code: "+91" },
  { name: "UK", code: "+44" },
  { name: "PK", code: "+92" },
  // add more country data here...
];

const TwoFactorAuth = () => {
  const [selectedCountry, setSelectedCountry] = useState(countryData[0]);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCountryChange = (event) => {
    const selectedValue = event.target.value;
    const selectedCountry = countryData.find(
      (country) => country.name === selectedValue
    );
    setSelectedCountry(selectedCountry);
  };

  const handlePhoneNumberChange = (event) => {
    const inputPhoneNumber = event.target.value;
    const countryCode = selectedCountry.code;
    if (inputPhoneNumber.startsWith(countryCode)) {
      setPhoneNumber(inputPhoneNumber.substring(countryCode.length));
    } else {
      setPhoneNumber(inputPhoneNumber);
    }
  };
  return (
    <>
    <Header/>
      <section className="h-screen">
        <div className="h-screen">
          {/* Left column container with background*/}
          <div className=" flex h-full flex-wrap bg-[#0F172A]">
            <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-2/4 bg-[#0F172A] flex items-center justify-center flex-col">
              <img src={logo} className="w-[30%] " alt="Sample image" />

              <div className="flex items-center  gap-1 absolute  bottom-7 left-20">
                <HiOutlineArrowNarrowLeft className="text-[#FFCC00] text-xl" />
                <Link className="text-white underline">Back to Home</Link>
              </div>
            </div>
            {/* Right column container */}
            <div className=" w-3/6 bg-[#F4F7F7] rounded-tl-[7%] ">
              <form className="w-[65%] shadow-lg rounded-3xl p-6 ml-[18%] bg-[#FBFCFC] mt-[25%]">
                {/*Sign in section*/}
                <div className="flex flex-col items-start justify-center lg:justify-start">
                  <p className="mb-0 mr-4 text-2xl font-medium">
                    Two Step Authentication
                  </p>
                  <div className="mt-3 text-sm">
                    <span>
                      Keeping your account safe just got easier with two-step
                      verification.
                      <span className="font-semibold">
                        Enter Mobile Number and Verify Your Account.
                      </span>
                    </span>
                  </div>
                </div>

                {/* number */}
                <div className="flex justify-start  mt-5">
                  <div className="relative inline-flex">
                    <select
                      className="rounded-l-md border bg-white text-neutral-500 h-10 text-sm  focus:outline-none w-16"
                      value={selectedCountry.name}
                      onChange={handleCountryChange}
                    >
                      {countryData.map((country) => (
                        <option key={country.name} value={country.name}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                    <input
                      type="text"
                      className="rounded-r-md w-[100%]  border bg-white text-neutral-500 h-10 pl-5 pr-16 focus:outline-none"
                      value={selectedCountry.code + phoneNumber}
                      onChange={handlePhoneNumberChange}
                    />
                  </div>
                </div>

                <div className="mb-6 flex items-center mt-5 gap-4 ml-20">
                 <Link to="/">
                 <button className="mb-[0.125rem] block pr-[2rem] pl-[2rem] pt-[0.5rem] pb-[0.5rem] font-semibold bg-white border border-black rounded-lg">
                    Cancel
                  </button>
                 </Link>
                  <Link to="/verificationcode">
                  <button className="mb-[0.125rem] block pr-[2rem] pl-[2rem] pt-[0.5rem] pb-[0.5rem] font-semibold bg-[#00CCFF] rounded-lg">
                    Confirm
                  </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default TwoFactorAuth;
