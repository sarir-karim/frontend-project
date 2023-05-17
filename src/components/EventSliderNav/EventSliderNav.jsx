import React, { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const EventSlider = () => {
  const [active, setActive] = useState("all");

  const toggleActive = (Link) => {
    setActive(Link);
  };

  var EventSliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mb-12">
      <Slider {...EventSliderSettings}>
        <div className="text-center">
          <Link to="/" className={`${active === "all" ? "bg-[#00CCFF]" : ""}`}>
            {" "}
            <h3
              onClick={() => toggleActive("all")}
              className={`w-fit border-2 rounded-[28px] px-8 py-2 mx-auto text-[#0F172A] font-semibold hover:bg-[#00CCFF] duration-150 ${
                active === "all" ? "bg-[#00CCFF]" : "bg-transparent"
              }`}
            >
              All
            </h3>
          </Link>{" "}
        </div>

        <div>
          <Link to="/birthday">
            {" "}
            <h3
              onClick={() => toggleActive("birthday")}
              className={`w-fit border-2 rounded-[28px] px-8 py-2 mx-auto text-[#0F172A] font-semibold hover:bg-[#00CCFF] duration-150 ${
                active === "birthday" ? "bg-[#00CCFF]" : "bg-transparent"
              }`}
            >
              Birthday
            </h3>
          </Link>{" "}
        </div>

        <div>
          <Link to="/graduation">
            {" "}
            <h3
              onClick={() => toggleActive("graduation")}
              className={`w-fit border-2 rounded-[28px] px-8 py-2 mx-auto text-[#0F172A] font-semibold hover:bg-[#00CCFF] duration-150 ${
                active === "graduation" ? "bg-[#00CCFF]" : "bg-transparent"
              }`}
            >
              Graduation
            </h3>
          </Link>{" "}
        </div>

        <div>
          <Link
            to="/reuniouns"
            
          >
            {" "}
            <h3 onClick={() => toggleActive("reuniouns")}
              className={`w-fit border-2 rounded-[28px] px-8 py-2 mx-auto text-[#0F172A] font-semibold hover:bg-[#00CCFF] duration-150 ${
                active === "reuniouns" ? "bg-[#00CCFF]" : "bg-transparent"
              }`}>
              Reuniouns
            </h3>
          </Link>{" "}
        </div>

        <div>
          <Link
            to="/cookouts"
            
          >
            {" "}
            <h3 onClick={() => toggleActive("cookouts")}
              className={`w-fit border-2 rounded-[28px] px-8 py-2 mx-auto text-[#0F172A] font-semibold hover:bg-[#00CCFF] duration-150 ${
                active === "cookouts" ? "bg-[#00CCFF]" : "bg-transparent"
              }`}>
              Cookouts
            </h3>
          </Link>{" "}
        </div>

        <div>
          <Link
            to="/housewarming"
            
          >
            {" "}
            <h3 onClick={() => toggleActive("housewarming")}
              className={`w-fit border-2 rounded-[28px] px-8 py-2 mx-auto text-[#0F172A] font-semibold hover:bg-[#00CCFF] duration-150 ${
                active === "housewarming" ? "bg-[#00CCFF]" : "bg-transparent"
              }`}>
              Housewarming
            </h3>
          </Link>{" "}
        </div>

        <div>
          <Link
            to="/brunches"
            
          >
            {" "}
            <h3 onClick={() => toggleActive("brunches")}
              className={`w-fit border-2 rounded-[28px] px-8 py-2 mx-auto text-[#0F172A] font-semibold hover:bg-[#00CCFF] duration-150 ${
                active === "brunches" ? "bg-[#00CCFF]" : "bg-transparent"
              }`}>
              Brunches
            </h3>
          </Link>{" "}
        </div>

        <div>
          <Link
            to="/birthday"
            
          >
            {" "}
            <h3 onClick={() => toggleActive("graduation")}
              className={`w-fit border-2 rounded-[28px] px-8 py-2 mx-auto text-[#0F172A] font-semibold hover:bg-[#00CCFF] duration-150 ${
                active === "graduation" ? "bg-[#00CCFF]" : "bg-transparent"
              }`}>
              8
            </h3>
          </Link>{" "}
        </div>

        <div>
          <Link
            to="/birthday"
            
          >
            {" "}
            <h3 onClick={() => toggleActive("graduation")}
              className={`w-fit border-2 rounded-[28px] px-8 py-2 mx-auto text-[#0F172A] font-semibold hover:bg-[#00CCFF] duration-150 ${
                active === "graduation" ? "bg-[#00CCFF]" : "bg-transparent"
              }`}>
              9
            </h3>
          </Link>{" "}
        </div>

        <div>
          <Link
            to="/birthday"
            
          >
            {" "}
            <h3 onClick={() => toggleActive("graduation")}
              className={`w-fit border-2 rounded-[28px] px-8 py-2 mx-auto text-[#0F172A] font-semibold hover:bg-[#00CCFF] duration-150 ${
                active === "graduation" ? "bg-[#00CCFF]" : "bg-transparent"
              }`}>
              10
            </h3>
          </Link>{" "}
        </div>

        <div>
          <Link
            to="/birthday"
            
          >
            {" "}
            <h3 onClick={() => toggleActive("graduation")}
              className={`w-fit border-2 rounded-[28px] px-8 py-2 mx-auto text-[#0F172A] font-semibold hover:bg-[#00CCFF] duration-150 ${
                active === "graduation" ? "bg-[#00CCFF]" : "bg-transparent"
              }`}>
              11
            </h3>
          </Link>{" "}
        </div>

        <div>
          <Link
            to="/birthday"
            
          >
            {" "}
            <h3 onClick={() => toggleActive("graduation")}
              className={`w-fit border-2 rounded-[28px] px-8 py-2 mx-auto text-[#0F172A] font-semibold hover:bg-[#00CCFF] duration-150 ${
                active === "graduation" ? "bg-[#00CCFF]" : "bg-transparent"
              }`}>
              12
            </h3>
          </Link>{" "}
        </div>

        <div>
          <Link
            to="/birthday"
           
          >
            {" "}
            <h3 onClick={() => toggleActive("graduation")}
              className={`w-fit border-2 rounded-[28px] px-8 py-2 mx-auto text-[#0F172A] font-semibold hover:bg-[#00CCFF] duration-150 ${
                active === "graduation" ? "bg-[#00CCFF]" : "bg-transparent"
              }`}>
              13
            </h3>
          </Link>{" "}
        </div>

        <div>
          <Link
            to="/birthday"
            
          >
            {" "}
            <h3 onClick={() => toggleActive("graduation")}
              className={`w-fit border-2 rounded-[28px] px-8 py-2 mx-auto text-[#0F172A] font-semibold hover:bg-[#00CCFF] duration-150 ${
                active === "graduation" ? "bg-[#00CCFF]" : "bg-transparent"
              }`}>
              14
            </h3>
          </Link>{" "}
        </div>

        <div>
          <Link
            to="/birthday"
            
          >
            {" "}
            <h3 onClick={() => toggleActive("graduation")}
              className={`w-fit border-2 rounded-[28px] px-8 py-2 mx-auto text-[#0F172A] font-semibold hover:bg-[#00CCFF] duration-150 ${
                active === "graduation" ? "bg-[#00CCFF]" : "bg-transparent"
              }`}>
              15
            </h3>
          </Link>{" "}
        </div>

        <div>
          <Link
            to="/birthday"
            
          >
            {" "}
            <h3 onClick={() => toggleActive("graduation")}
              className={`w-fit border-2 rounded-[28px] px-8 py-2 mx-auto text-[#0F172A] font-semibold hover:bg-[#00CCFF] duration-150 ${
                active === "graduation" ? "bg-[#00CCFF]" : "bg-transparent"
              }`}>
              16
            </h3>
          </Link>{" "}
        </div>
      </Slider>
    </div>
  );
};

export default EventSlider;
