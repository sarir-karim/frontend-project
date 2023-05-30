import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const VerificationCode = () => {
  const navigate = useNavigate()
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const code = verificationCode.join("");
    setIsSubmitting(true);
    // simulate API request
    setTimeout(() => {
      if (code === "123456") {
        // alert("Verification successful!");
        navigate('/twofactorsucess')
      } else {
        setErrorMessage("Invalid verification code");
        setIsSubmitting(false);
      }
    }, 2000);
  };

  const handleVerificationCodeChange = (event, index) => {
    const value = event.target.value.replace(/\D/g, "");
    if (value.length === 1 || !value) {
      const updatedCode = [...verificationCode];
      updatedCode[index] = value;
      setVerificationCode(updatedCode);
      if (index < 5 && value.length === 1) {
        const nextInput = document.getElementById(
          `verification-code-${index + 1}`
        );
        nextInput.focus();
      }
    }
  };

  const handleResendCode = () => {
    // simulate API request
    setTimeout(() => {
      alert("Code has been resent!");
    }, 1000);
  };

  return (
    <>
      {/* Hello world */}
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
              <form
                className="w-[65%] shadow-lg rounded-3xl p-6 ml-[18%] bg-[#FBFCFC] mt-[25%]"
                onSubmit={handleSubmit}
              >
                {/*Sign in section*/}
                <div className="flex flex-col items-start justify-center lg:justify-start">
                  <p className="mb-0 mr-4 text-2xl font-medium">
                    Two Step Authentication
                  </p>
                  <div className="mt-3 text-sm">
                    <span>
                    Enter 6-Digits Authentication Code we have sent on 
                    </span>
                    <div className="font-semibold">+912365478965</div>
                  </div>
                </div>

                {/* number */}

                <div className="flex justify-center mb-2 border rounded-lg mt-4 w-[93%]">
                  {verificationCode.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      id={`verification-code-${index}`}
                      name={`verification-code-${index}`}
                      value={digit}
                      onChange={(event) =>
                        handleVerificationCodeChange(event, index)
                      }
                      maxLength={1}
                      className={`border p-1 w-[100%] text-center font-bold ${
                        index == 0 ? "rounded-l-lg" : ""
                      } ${
                        index == verificationCode.length - 1
                          ? "rounded-r-lg"
                          : ""
                      }`}
                      style={{ fontSize: "1.2rem" }}
                    />
                  ))}
                </div>

                {errorMessage && (
                  <div className="text-red-500 mb-4 ml-1 text-sm">{errorMessage}</div>
                )}
                {/* resend button */}
                <div type="button" onClick={handleResendCode} className="underline text-center cursor-pointer mt-5 text-sm font-semibold">Resend Code</div>

                {/* buttons */}

                <div className="mb-4 flex items-center mt-6 gap-4 ml-36">
                  <Link to="/twofactorauth">
                  <button className="mb-[0.125rem] block pr-[2rem] pl-[2rem] pt-[0.5rem] pb-[0.5rem] font-semibold bg-white border border-black rounded-lg">
                    Cancel
                  </button>
                  </Link>
                  
                  <button
                    type="submit"
                    disabled={!verificationCode.every((digit) => digit)}
                    className="mb-[0.125rem] block pr-[2rem] pl-[2rem] pt-[0.5rem] pb-[0.5rem] font-semibold bg-[#00CCFF] rounded-lg cursor-pointer"
                  >
                    {isSubmitting ? "Verifying..." : "Verify"}
                  </button>
                  
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

export default VerificationCode;
