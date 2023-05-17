import React from "react";

const Profile = () => {
  return (
    <section className="p-6">
      <div className="flex justify-between items-center w-full">
        <h3 className="text-[32px] font-normal semibold">Hi Good Morning</h3>
        <h3 className="text-2xl font-normal">Sunday, 9 April 2023, 10:43PM</h3>
      </div>
      <h1 className=" pt-4 pb-6 text-4xl font-semibold ">My Profile</h1>
      <form className="flex flex-col gap-8">
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="date"
            placeholder="DOB"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="number"
            placeholder="Mobile Number"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="flex justify-between">
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Address"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="Bank No"
            className="input input-bordered w-[48%]"
          />
          <select className="select select-bordered w-[48%]">
            <option disabled selected>
              Bank Name
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="Tax ID for Payment"
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex justify-end gap-6">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-sm bg-transparent text-[#0F172A] hover:bg-[#00CCFF] hover:border-[#00CCFF] w-[430px] pt-4 pb-7 rounded-[38px]">
            Download Information
          </button>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-sm bg-[#00CCFF] text-[#0F172A] border-[#00CCFF] hover:bg-transparent w-[430px] pt-4 pb-7 rounded-[38px]">
            Update
          </button>
        </div>
      </form>
    </section>
  );
};

export default Profile;
