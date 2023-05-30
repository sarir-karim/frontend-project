import React from "react";
import { Link } from "react-router-dom";
import whyImg1 from "../../assets/homeImages/whychoose1.png";
import whyImg2 from "../../assets/homeImages/whychoose2.png";
import Subscribe from "../../components/Subscribe/Subscribe";
import Slider from "react-slick";
import { RiStarSFill } from "react-icons/ri";
import client1 from "../../assets/homeImages/client1.png";
import SliderImg1 from "../../assets/homeImages/slider1.png";
import SliderImg2 from "../../assets/homeImages/slider2.png";
import SliderImg3 from "../../assets/homeImages/slider3.png";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const homeslider = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    arrows: false,
    speed: 500,
  };
  return (
    <>
      {/* hero section */}
      <Header/>
   <div className=" bg-[#0F172A] py-14">
   <div className="text-center text-gray-800  px-6 flex flex-col justify-center items-center gap-6 ">
        <h1 className="text-3xl  xl:text-4xl font-medium text-white">
          The All-in-one Platform design to Help <br />
          <span className="text-white text-3xl">
            You create{" "}
            <span className="text-yellow-500">Unforgettable Experiences</span>{" "}
          </span>
        </h1>
        <div className="text-sm text-center text-white opacity-[0.6] w-[35%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, amet ea
          tempore quod dolorum deserunt Lorem ipsum dolor sit amet.
        </div>
        <Link
          className="inline-block px-14 py-3 mr-2 bg-[#00CCFF] text-white font-medium text-sm leading-snug  rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          href="#!"
          role="button"
        >
          Read More
        </Link>

        {/* sldier  */}
      </div>
        <div className="pt-14">
          <Slider {...homeslider} className="w-[1349px] flex justify-center gap-5  ">
            <div className="w-[50px] h-[300px] border-x-8 border-[#0F172A] relative bg-[BsFilterRight]">
             <div className="absolute bottom-5  left-20 z-50 text-white">Lorem ipsum dolor sit amet.</div>
             <img src={SliderImg1} alt="" className="w-[100%] h-[100%]" />
             
            </div>
            <div className="w-[50px] h-[300px] border-x-8 border-[#0F172A] relative bg-[BsFilterRight]">
             <div className="absolute bottom-5  left-20 z-50 text-white">Lorem ipsum dolor sit amet.</div>
             <img src={SliderImg2} alt="" className="w-[100%] h-[100%]" />
             
            </div>
            <div className="w-[50px] h-[300px] border-x-8 border-[#0F172A] relative bg-[BsFilterRight]">
             <div className="absolute bottom-5  left-20 z-50 text-white">Lorem ipsum dolor sit amet.</div>
             <img src={SliderImg3} alt="" className="w-[100%] h-[100%]" />
             
            </div>
            <div className="w-[50px] h-[300px] border-x-8 border-[#0F172A] relative bg-[BsFilterRight]">
             <div className="absolute bottom-5  left-20 z-50 text-white">Lorem ipsum dolor sit amet.</div>
             <img src={SliderImg1} alt="" className="w-[100%] h-[100%]" />
             
            </div>
              <div className="w-[50px] h-[300px] border-x-8 border-[#0F172A] relative bg-[BsFilterRight]">
              <div className="absolute bottom-5  left-20 z-50 text-white">Lorem ipsum dolor sit amet.</div>
              <img src={SliderImg1} alt=""  className="w-[100%] h-[100%]"/>
              
              </div>
          </Slider>
        </div>
   </div>

      {/* why choose us section */}

      <div className="flex justify-center pt-20 gap-[5%]">
        <div className="w-[50%] flex gap-3 h-[400px] ml-[7%]">
          <div className="h-[400px] w-[50%] mt-[9%]">
            <img src={whyImg1} alt="" className="w-[100%] h-full object-fill" />
          </div>
          <div className="h-[500px] w-[70%]">
            <img src={whyImg2} alt="" className="w-[100%] h-full" />
          </div>
        </div>
        <div className="w-[45%]">
          <div className="text-3xl font-bold mt-9 ">Why Choose Us.</div>
          <p className="text-black opacity-[0.5] w-[80%] mt-6 tracking-wider leading-7">
            Our community has been buzzing with activity as we've hosted over
            3,000 events and counting! From weddings Functions to Reception,
            music concerts to Parties, there's something for everyone to enjoy.
          </p>
          <p className="text-black opacity-[0.5] w-[80%] mt-8 tracking-wider leading-7">
            Our events bring people together from all walks of life, creating a
            vibrant and diverse atmosphere. You'll have the chance to meet new
            friends, learn new skills, and experience different cultures. Plus,
            our events are a great way to support local businesses and
            organizations.
          </p>
          <div className="flex gap-10 mt-5">
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-bold text-[#5C58A5]">1M+</p>
              <span>viewers</span>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-bold text-[#5C58A5]">3K+</p>
              <span>Managed Events</span>
            </div>
          </div>
        </div>
      </div>

      {/* Event Planing Tips and tricks */}
      <div className="flex flex-col gap-5 items-start pt-32 ">
        <div className="text-4xl font-bold w-[35%] text-center mx-auto leading-[3rem]">
          Most Helpful Event Planning Tips and Tricks
        </div>
        <p className="text-black opacity-[0.6] text-center w-[37%] mx-auto mb-10">
          Here are some event planning tips and tricks that can help make your
          next event a success.
        </p>
        <div className="flex w-full justify-center gap-10">
          <div className="bg-[#0F172A] w-[40%] flex items-center justify-center flex-col gap-5 pt-8 pb-9 text-white rounded-lg">
            <span className="font-bold text-2xl">01</span>
            <span className="font-bold text-3xl tracking-wide">Templating</span>
          </div>
          <div className="bg-[#0F172A] w-[40%] flex items-center justify-center flex-col gap-5 pt-8 pb-9 text-white rounded-lg">
            <span className="font-bold text-2xl">02</span>
            <span className="font-bold text-3xl tracking-wide">Budgeting</span>
          </div>
        </div>
        <div className="flex w-full justify-center gap-10 pt-3">
          <div className="bg-[#0F172A] w-[40%] flex items-center justify-center flex-col gap-3 pt-8 pb-9 text-white rounded-lg">
            <span className="font-bold text-2xl mb-2">03</span>
            <span className="font-bold text-3xl">
              Tasks & <span className="text-yellow-500">Guest</span>
            </span>
            <span className="font-bold text-3xl tracking-wide">Templating</span>
          </div>
          <div className="bg-[#0F172A] w-[40%] flex items-center justify-center flex-col gap-5 pt-8 pb-9 text-white rounded-lg">
            <span className="font-bold text-2xl mb-2">04</span>
            <span className="font-bold text-2xl">
              <span className="text-yellow-500">Automotion</span>
            </span>
            <span className="font-bold text-3xl tracking-wide">Analytics</span>
          </div>
        </div>
        <div className="flex w-full justify-center gap-10 pt-3">
          <div className="bg-[#0F172A] w-[40%] flex items-center justify-center flex-col gap-3 pt-8 pb-9 text-white rounded-lg">
            <span className="font-bold text-2xl mb-2">05</span>
            <span className="font-bold text-3xl">Communication & </span>
            <span className="font-bold text-3xl tracking-wide">
              <span className="text-yellow-500">Collabration</span>
            </span>
          </div>
        </div>
      </div>

      {/* subscribe component */}
      <Subscribe />

      {/* Our clients review */}
      <section className="subscribe mt-20 pt-[1px] pb-9">
        <div className="py-10 px-4 mx-auto  lg:px-6  mt-[2%]">
          <div className="mx-auto max-w-screen-lg sm:text-center">
            <h2 className="mb-4 text-3xl tracking-tight font-semibold text-white sm:text-4xl w-[38%] mx-auto flex flex-col gap-4">
              <span>
                Reviews <span className="text-yellow-500">By Our</span> Clients
              </span>
            </h2>

            <p className="text-white opacity-[0.6] text-center w-[37%] mx-auto mb-10">
              Here are some event planning tips and tricks that can help make
              your next event a success.
            </p>

            <div>
              <Slider {...settings} className="w-[800px] mx-auto">
                <div className="bg-white  rounded-lg py-7">
                  <div className="flex px-4 justify-between">
                    <div className="flex   items-center gap-3">
                      <div className="rounded-full border-2 border-black  w-[70px] height-[70px]">
                        <img
                          src={client1}
                          alt=""
                          className="w-[100%] h-[100%]"
                        />
                      </div>
                      <div className="">
                        <p className="text-2xl font-semibold">Anagela Ray</p>
                        <span className="text-yellow-500 flex gap-1 ">
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                        </span>
                      </div>
                    </div>
                    <div className="text-[#7b7b7b] text-sm">Rating 4.9/5.0</div>
                  </div>
                  <div className="text-black text-justify pl-4 pt-4 text-sm w-[95%] tracking-widest mb-5 mb-4">
                    <q>
                      As an event planner, I have used a lot of different tools
                      to manage events, but the event management application is
                      by far the best. It's easy to use, intuitive, and has all
                      the features I need to plan and execute successful events.
                      I highly recommend it to anyone looking to take their
                      event planning to the next level.
                    </q>
                  </div>
                </div>
                <div className="bg-white  rounded-lg py-7">
                  <div className="flex px-4 justify-between">
                    <div className="flex   items-center gap-3">
                      <div className="rounded-full border-2 border-black  w-[70px] height-[70px]">
                        <img
                          src={client1}
                          alt=""
                          className="w-[100%] h-[100%]"
                        />
                      </div>
                      <div className="">
                        <p className="text-2xl font-semibold">Anagela Ray</p>
                        <span className="text-yellow-500 flex gap-1 ">
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                        </span>
                      </div>
                    </div>
                    <div className="text-[#7b7b7b] text-sm">Rating 4.9/5.0</div>
                  </div>
                  <div className="text-black text-justify pl-4 pt-4 text-sm w-[95%] tracking-widest mb-5 mb-4">
                    <q>
                      As an event planner, I have used a lot of different tools
                      to manage events, but the event management application is
                      by far the best. It's easy to use, intuitive, and has all
                      the features I need to plan and execute successful events.
                      I highly recommend it to anyone looking to take their
                      event planning to the next level.
                    </q>
                  </div>
                </div>
                <div className="bg-white  rounded-lg py-7">
                  <div className="flex px-4 justify-between">
                    <div className="flex   items-center gap-3">
                      <div className="rounded-full border-2 border-black  w-[70px] height-[70px]">
                        <img
                          src={client1}
                          alt=""
                          className="w-[100%] h-[100%]"
                        />
                      </div>
                      <div className="">
                        <p className="text-2xl font-semibold">Anagela Ray</p>
                        <span className="text-yellow-500 flex gap-1 ">
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                        </span>
                      </div>
                    </div>
                    <div className="text-[#7b7b7b] text-sm">Rating 4.9/5.0</div>
                  </div>
                  <div className="text-black text-justify pl-4 pt-4 text-sm w-[95%] tracking-widest mb-5 mb-4">
                    <q>
                      As an event planner, I have used a lot of different tools
                      to manage events, but the event management application is
                      by far the best. It's easy to use, intuitive, and has all
                      the features I need to plan and execute successful events.
                      I highly recommend it to anyone looking to take their
                      event planning to the next level.
                    </q>
                  </div>
                </div>
                <div className="bg-white  rounded-lg py-7">
                  <div className="flex px-4 justify-between">
                    <div className="flex   items-center gap-3">
                      <div className="rounded-full border-2 border-black  w-[70px] height-[70px]">
                        <img
                          src={client1}
                          alt=""
                          className="w-[100%] h-[100%]"
                        />
                      </div>
                      <div className="">
                        <p className="text-2xl font-semibold">Anagela Ray</p>
                        <span className="text-yellow-500 flex gap-1 ">
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                        </span>
                      </div>
                    </div>
                    <div className="text-[#7b7b7b] text-sm">Rating 4.9/5.0</div>
                  </div>
                  <div className="text-black text-justify pl-4 pt-4 text-sm w-[95%] tracking-widest mb-5 mb-4">
                    <q>
                      As an event planner, I have used a lot of different tools
                      to manage events, but the event management application is
                      by far the best. It's easy to use, intuitive, and has all
                      the features I need to plan and execute successful events.
                      I highly recommend it to anyone looking to take their
                      event planning to the next level.
                    </q>
                  </div>
                </div>
                <div className="bg-white  rounded-lg py-7">
                  <div className="flex px-4 justify-between">
                    <div className="flex   items-center gap-3">
                      <div className="rounded-full border-2 border-black  w-[70px] height-[70px]">
                        <img
                          src={client1}
                          alt=""
                          className="w-[100%] h-[100%]"
                        />
                      </div>
                      <div className="">
                        <p className="text-2xl font-semibold">Anagela Ray</p>
                        <span className="text-yellow-500 flex gap-1 ">
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                        </span>
                      </div>
                    </div>
                    <div className="text-[#7b7b7b] text-sm">Rating 4.9/5.0</div>
                  </div>
                  <div className="text-black text-justify pl-4 pt-4 text-sm w-[95%] tracking-widest mb-5 mb-4">
                    <q>
                      As an event planner, I have used a lot of different tools
                      to manage events, but the event management application is
                      by far the best. It's easy to use, intuitive, and has all
                      the features I need to plan and execute successful events.
                      I highly recommend it to anyone looking to take their
                      event planning to the next level.
                    </q>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Home;
