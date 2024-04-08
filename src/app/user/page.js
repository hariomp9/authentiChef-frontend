import dynamic from "next/dynamic";
import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import food1 from "../assets/cuisine-india.png";
import food2 from "../assets/cuisine-american.png";
import food3 from "../assets/cuisine-mexican.png";
import food4 from "../assets/cuisine-mediterranean.png";
import food5 from "../assets/cuisine-italian.png";
import food6 from "../assets/cuisine-middleEastern.png";
import maggie from "../assets/maggie.png";
import calen from "../assets/calender.png";
import microweb from "../assets/microweb.png";
import person1 from "../assets/chef-roger-hendrics.png";
import person2 from "../assets/chef-jason-bosh.png";
import person3 from "../assets/chef-mathew-kaymer.png";
import person4 from "../assets/chef-scarlet-carter.png";
import person5 from "../assets/chef-karan-malhotra.png";
import eightPoster from "../assets/food-safety.png";
import plate1 from "../assets/ourcommitment-1st.png";
import plate2 from "../assets/ourcommitment-2nd.png";
import plate3 from "../assets/ourcommitment-3rd.png";
import plate4 from "../assets/ourcommitment-4rt.png";
import review1 from "../assets/testimonials-chef-mayank.png";
import review2 from "../assets/testimonials-chef-rohit.png";
import review3 from "../assets/testimonials-chef-shubham.png";
import fb from "../../../public/images/fb.svg";
import linkedin from "../../../public/images/in.svg";
import insta from "../../../public/images/insta.svg";
import twiter from "../../../public/images/twiter.svg";
import google from "../../../public/images/google.svg";
import Rectangle1 from "../assets/populardishes-spaghetti.png";
import Rectangle2 from "../assets/populardishes-cheesesandwich.png";
import Rectangle3 from "../assets/populardishes-chickenkabab.png";
import Rectangle4 from "../assets/populardishes-paneerbuttermasala.png";
import Rectangle5 from "../assets/populardishes-indianthali.png";
import Rectangle6 from "../assets/populardishes-omelettesandwich.png";
import Rectangle7 from "../assets/populardishes-chickenkabab2nd.png";
import Rectangle8 from "../assets/populardishes-fish.png";
import p1 from "../assets/ellipse119.png";
import p2 from "../assets/ellipse220.png";
import p3 from "../assets/ellipse321.png";
import p4 from "../assets/ellipse422.png";
import day from "../../../public/images/day.svg";
import sidemanu from "../../../public/images/side-menu.svg";
import "@splidejs/react-splide/css/core";
import Link from "next/link";

const LandingPage = () => {
  return (
    <>
      <section className="">
        <nav className="flex justify-center bg-[#F38181] 2xl:h-[116px] xl:h-[80px] lg:h-[50px] sm:h-[45px] h-12 ">
          <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px] w-full px-10 md:px-0  flex justify-between items-center">
            <div className="w-1/3">
              <Image
                alt="image"
                src={sidemanu}
                className="2xl:w-[48px] 2xl:h-[40px] xl:w-[40px] xl:h-[25px] w-[30px] h-[20px]"
              />
            </div>
            <div className="w-1/3 ">
              <a href="#">
                <Image alt="logo" src={logo} className="nav_logo" />
              </a>
            </div>
            <div className="flex md:gap-7  gap-2">
              <button className="nav_login">Log In</button>
              <button className="nav_signup">Sign Up</button>
            </div>
          </div>
        </nav>

        {/* ===================Second================== */}
        <div className="hidden md:block 2xl:h-screen">
          <div className="poster-bg 2xl:h-[834px] h-screen flex justify-center ">
            <div className="">
              <h1 className="alata font-[400] text-white 2xl:text-[65px] 2xl:leading-[70px] xl:text-[35px] xl:leading-[55px] 2xl:mt-[475px] xl:mt-[365px] lg:text-[25px] lg:leading-[30px lg:mt-[70%] mt-[130%] mx-auto">
                Where’s your next food destination?
              </h1>
              <div className="flex 2xl:mt-12 xl:mt-6 lg:mt-5 mt-4">
                <button className=" alata font-[400] bg-[#DB5353] text-white mx-auto rounded-[5px] 2xl:w-[218px] 2xl:h-[60px] 2xl:text-[20px] 2xl:leading-[27.6px] xl:text-[12px] xl:px-6 xl:py-[10px] lg:px-3 lg:py-1 px-3 py-1 hover:bg-[#7e2727]  ">
                  Explore Dishes
                </button>
              </div>
              <div className="flex 2xl:mt-14 xl:mt-8 lg:mt-5 mt-4">
                <h1
                  className="alata font-[400] mx-auto text-white 2xl:text-[40px] 2xl:leading-[20px] xl:text-[25px] xl:leading-[20px]
              lg:text-[20px] lg:leading-[20px]  "
                >
                  Save 30% on your first order
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden block">
          <div className=" poster-bg-m  h-screen flex justify-center ">
            <div className="">
              <h1 className="alata font-[400] text-white  mt-[130%] mx-auto">
                Where’s your next food destination?
              </h1>
              <div className="flex mt-4">
                <button className=" alata font-[400] bg-[#DB5353] text-white mx-auto rounded-[5px] px-3 py-1 ">
                  Explore Dishes
                </button>
              </div>
              <div className="flex mt-4">
                <h1 className="alata font-[400] mx-auto text-white">
                  Save 30% on your first order
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* ===================Third================== */}

        <div className="flex justify-center 2xl:my-20 xl:my-14 lg:my-8 hidden lg:block">
          <div className="">
            <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px] flex justify-between mx-auto">
              <div className="">
                <h1 className="third_head">Select your cuisine</h1>
              </div>
              <div className="flex justify-between 2xl:gap-10 xl:gap-5 lg:gap-4 items-center">
                <div className="flex 2xl:gap-5 xl:gap-3 lg:gap-2">
                  <div className="">
                    <label for="cuisines">All Cuisines:</label>
                    <select
                      id="cuisines"
                      className="2xl:w-[153px] third_select"
                    >
                      <option disabled selected>
                        All Cuisines
                      </option>
                      <option>a</option>
                      <option>b</option>
                      <option>c</option>
                    </select>
                  </div>

                  <div className="">
                    <label for="dietary">Dietary:</label>
                    <select id="dietary" className="2xl:w-[126px] third_select">
                      <option disabled selected>
                        Dietary
                      </option>
                      <option>d</option>
                      <option>e</option>
                      <option>f</option>
                    </select>
                  </div>

                  <div className="">
                    <label for="moreFilters">More Filters:</label>
                    <select
                      id="moreFilters"
                      className="2xl:w-[143px] third_select"
                    >
                      <option disabled selected>
                        More filters
                      </option>
                      <option>x</option>
                      <option>y</option>
                      <option>z</option>
                    </select>
                  </div>

                  <div className="relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-[13px] h-[13px] absolute 2xl:right-3 2xl:top-[16px] xl:right-3 xl:top-[10px] lg:right-3 lg:top-[5px] lg:text-[8px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>

                    <input
                      type=" search"
                      placeholder="Search"
                      className=" third_input"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center 2xl:my-10 xl:my-8 lg:my-5">
              <div className="carousel  2xl:gap-14 xl:gap-7 lg:gap-5">
                <div className="">
                  <Image
                    className="rounded-[5px] 2xl:w-[216px] 2xl:h-[216px] xl:w-[160px] xl:h-[160px] lg:w-[125px] lg:h-[125px]"
                    src={food1}
                    alt="cuisine-india"
                  />
                  <h1
                    className="alata font-[400] 2xl:text-[20px] 2xl:leading-[20px] 2xl:my-4 xl:text-[14px] xl:leading-[20px] xl:my-4
                  lg:text-[12px] lg:leading-[18px] lg:my-3  mx-auto text-center"
                  >
                    Indian
                  </h1>
                </div>
                <div className="">
                  <Image
                    alt="cuisine-american"
                    className="rounded-[5px] 2xl:w-[216px] 2xl:h-[216px] xl:w-[160px] xl:h-[160px] lg:w-[125px] lg:h-[125px]"
                    src={food2}
                  />
                  <h1
                    className="alata font-[400] 2xl:text-[20px] 2xl:leading-[20px] 2xl:my-4 xl:text-[14px] xl:leading-[20px] xl:my-4
                  lg:text-[12px] lg:leading-[18px] lg:my-3  mx-auto text-center"
                  >
                    American
                  </h1>
                </div>
                <div className="">
                  <Image
                    alt="cuisine-mexican"
                    className="rounded-[5px] 2xl:w-[216px] 2xl:h-[216px] xl:w-[160px] xl:h-[160px] lg:w-[125px] lg:h-[125px]"
                    src={food3}
                  />
                  <h1
                    className="alata font-[400] 2xl:text-[20px] 2xl:leading-[20px] 2xl:my-4 xl:text-[14px] xl:leading-[20px] xl:my-4
                  lg:text-[12px] lg:leading-[18px] lg:my-3  mx-auto text-center"
                  >
                    Mexican
                  </h1>
                </div>
                <div className="">
                  <Image
                    alt="cuisine-mediterranean"
                    className="rounded-[5px] 2xl:w-[216px] 2xl:h-[216px] xl:w-[160px] xl:h-[160px] lg:w-[125px] lg:h-[125px]"
                    src={food4}
                  />
                  <h1
                    className="alata font-[400] 2xl:text-[20px] 2xl:leading-[20px] 2xl:my-4 xl:text-[14px] xl:leading-[20px] xl:my-4
                  lg:text-[12px] lg:leading-[18px] lg:my-3  mx-auto text-center"
                  >
                    Mediterranean
                  </h1>
                </div>
                <div className="">
                  <Image
                    alt="cuisine-italian"
                    className="rounded-[5px] 2xl:w-[216px] 2xl:h-[216px] xl:w-[160px] xl:h-[160px] lg:w-[125px] lg:h-[125px]"
                    src={food5}
                  />
                  <h1
                    className="alata font-[400] 2xl:text-[20px] 2xl:leading-[20px] 2xl:my-4 xl:text-[14px] xl:leading-[20px] xl:my-4
                  lg:text-[12px] lg:leading-[18px] lg:my-3  mx-auto text-center"
                  >
                    Italian
                  </h1>
                </div>
                <div className="">
                  <Image
                    alt="cuisine-middleEastern"
                    className="rounded-[5px] 2xl:w-[216px] 2xl:h-[216px] xl:w-[160px] xl:h-[160px] lg:w-[125px] lg:h-[125px]"
                    src={food6}
                  />
                  <h1
                    className="alata font-[400] 2xl:text-[20px] 2xl:leading-[20px] 2xl:my-4 xl:text-[14px] xl:leading-[20px] xl:my-4
                  lg:text-[12px] lg:leading-[18px] lg:my-3  mx-auto text-center"
                  >
                    Middle Eastern
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================Four================== */}

        <div className="flex justify-center 2xl:my-20 xl:my-10 lg:my-10 my-10">
          <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px] ">
            <div className="flex">
              <h1 className="four_head">Popular Dishes</h1>
            </div>
            <div className="flex flex-col md:flex-row justify-center flex-wrap lg:justify-between md:my-5 lg:my-0">
              <div className="2xl:w-[373px] xl:w-[260px] lg:w-[190px] md:w-1/2 mx-10 sm:mx-0 my-5  2xl:my-5 lg:my-4 ">
                <div>
                  <Image
                    alt="spaghetti"
                    src={Rectangle1}
                    className="four_img "
                  />
                </div>
                <div className="2xl:my-5 xl:my-5  my-5">
                  <div>
                    <h1 className="fourth_title">Spaghetti</h1>
                    <div className="flex items-center 2xl:gap-3 xl:gap-2 lg:gap-2  gap-2 xl:my-3 lg:my-2 my-2">
                      <Image alt="image" src={p1} className="four_img2 " />
                      <h1 className="fourth_name ">Chef Radha</h1>
                    </div>
                  </div>
                  <p className="fourth_p">Chef Cuisine - Indian & Italian</p>
                  <p className="fourth_p">Dietary Specialty - Veg only</p>
                  <button className="four_btn">
                    <Image
                      alt="image"
                      src={day}
                      className="2xl:w-[13px] 2xl:h-[13px] lg:w-[10px] h-auto w-[10px]"
                    />
                    <p className="fourth_day">Wednesday</p>
                  </button>
                </div>
              </div>

              <div className="2xl:w-[373px] xl:w-[260px] lg:w-[190px] md:w-1/2 mx-10 sm:mx-0 my-5  2xl:my-5 lg:my-4">
                <div>
                  <Image
                    alt="cheesesandwich"
                    src={Rectangle2}
                    className="four_img"
                  />
                </div>
                <div className="2xl:my-5 xl:my-5  my-5 mx-auto">
                  <div>
                    <h1 className="fourth_title">
                      Cheese, honey, omelette sandwich
                    </h1>
                    <div className="flex items-center 2xl:gap-3 xl:gap-2 lg:gap-2  gap-2 xl:my-3 lg:my-2 my-2">
                      <Image alt="image" src={p2} className="four_img2 " />
                      <h1 className="fourth_name ">Chef Kumari</h1>
                    </div>
                  </div>
                  <p className="fourth_p">Chef Cuisine - Indian</p>
                  <p className="fourth_p">Dietary Specialty - Veg & Nonveg</p>
                  <button className="four_btn">
                    <Image
                      alt="image"
                      src={day}
                      className="2xl:w-[13px] 2xl:h-[13px] lg:w-[10px] lg:h-[10px]"
                    />
                    <p className="fourth_day">Friday</p>
                  </button>
                </div>
              </div>

              <div className="2xl:w-[373px] xl:w-[260px] lg:w-[190px] md:w-1/2 mx-10 sm:mx-0 my-5  2xl:my-5 lg:my-4">
                <div>
                  <Image
                    alt="chickenkabab"
                    src={Rectangle3}
                    className="four_img"
                  />
                </div>
                <div className="2xl:my-5 xl:my-5  my-5 mx-auto">
                  <div>
                    <h1 className="fourth_title">Chicken kabab</h1>
                    <div className="flex items-center 2xl:gap-3 xl:gap-2 lg:gap-2  gap-2 xl:my-3 lg:my-2 my-2">
                      <Image alt="image" src={p3} className="four_img2 " />
                      <h1 className="fourth_name ">Chef Dinesh</h1>
                    </div>
                  </div>
                  <p className="fourth_p">Chef Cuisine - Indian & Italian</p>
                  <p className="fourth_p">Dietary Specialty - Veg only</p>
                  <button className="four_btn">
                    <Image
                      alt="image"
                      src={day}
                      className="2xl:w-[13px] 2xl:h-[13px] lg:w-[10px] lg:h-[10px]"
                    />
                    <p className="fourth_day">Monday</p>
                  </button>
                </div>
              </div>

              <div className="2xl:w-[373px] xl:w-[260px] lg:w-[190px] md:w-1/2 mx-10 sm:mx-0 my-5  2xl:my-5 lg:my-4">
                <div>
                  <Image
                    alt="paneerbuttermasala"
                    src={Rectangle4}
                    className="four_img"
                  />
                </div>
                <div className="2xl:my-5 xl:my-5  my-5 mx-auto">
                  <div>
                    <h1 className="fourth_title">Paneer butter masala</h1>
                    <div className="flex items-center 2xl:gap-3 xl:gap-2 lg:gap-2  gap-2 xl:my-3 lg:my-2 my-2">
                      <Image alt="image" src={p4} className="four_img2 " />
                      <h1 className="fourth_name ">Chef Rajesh</h1>
                    </div>
                  </div>
                  <p className="fourth_p">Chef Cuisine - Indian</p>
                  <p className="fourth_p">Dietary Specialty - Veg & Nonveg</p>
                  <button className="four_btn">
                    <Image
                      alt="image"
                      src={day}
                      className="2xl:w-[13px] 2xl:h-[13px] lg:w-[10px] lg:h-[10px]"
                    />
                    <p className="fourth_day">Sunday</p>
                  </button>
                </div>
              </div>

              <div className="2xl:w-[373px] xl:w-[260px] lg:w-[190px] md:w-1/2 mx-10 sm:mx-0 my-5  2xl:my-5 lg:my-4">
                <div>
                  <Image
                    alt="indianthali"
                    src={Rectangle5}
                    className="four_img"
                  />
                </div>
                <div className="2xl:my-5 xl:my-5  my-5 mx-auto">
                  <div>
                    <h1 className="fourth_title">Indian Thali</h1>
                    <div className="flex items-center 2xl:gap-3 xl:gap-2 lg:gap-2  gap-2 xl:my-3 lg:my-2 my-2">
                      <Image alt="image" src={p1} className="four_img2 " />
                      <h1 className="fourth_name ">Chef Radha</h1>
                    </div>
                  </div>
                  <p className="fourth_p">Chef Cuisine - Indian & Italian</p>
                  <p className="fourth_p">Dietary Specialty - Veg only</p>
                  <button className="four_btn">
                    <Image
                      alt="image"
                      src={day}
                      className="2xl:w-[13px] 2xl:h-[13px] lg:w-[10px] lg:h-[10px]"
                    />
                    <p className="fourth_day">Wednesday</p>
                  </button>
                </div>
              </div>

              <div className="2xl:w-[373px] xl:w-[260px] lg:w-[190px] md:w-1/2 mx-10 sm:mx-0 my-5  2xl:my-5 lg:my-4">
                <div>
                  <Image
                    alt="omelettesandwich"
                    src={Rectangle6}
                    className="four_img"
                  />
                </div>
                <div className="2xl:my-5 xl:my-5  my-5 mx-auto">
                  <div>
                    <h1 className="fourth_title">
                      Cheese, honey, omelette sandwich
                    </h1>
                    <div className="flex items-center 2xl:gap-3 xl:gap-2 lg:gap-2  gap-2 xl:my-3 lg:my-2 my-2">
                      <Image alt="image" src={p2} className="four_img2 " />
                      <h1 className="fourth_name ">Chef Kumari</h1>
                    </div>
                  </div>
                  <p className="fourth_p">Chef Cuisine - Indian</p>
                  <p className="fourth_p">Dietary Specialty - Veg & Nonveg</p>
                  <button className="four_btn">
                    <Image
                      alt="image"
                      src={day}
                      className="2xl:w-[13px] 2xl:h-[13px] lg:w-[10px] lg:h-[10px]"
                    />
                    <p className="fourth_day">Friday</p>
                  </button>
                </div>
              </div>

              <div className="2xl:w-[373px] xl:w-[260px] lg:w-[190px] md:w-1/2 mx-10 sm:mx-0 my-5  2xl:my-5 lg:my-4">
                <div>
                  <Image
                    alt="chickenkabab2nd"
                    src={Rectangle7}
                    className="four_img"
                  />
                </div>
                <div className="2xl:my-5 xl:my-5  my-5 mx-auto"></div>
                <div>
                  <h1 className="fourth_title">Chicken kabab</h1>
                  <div className="flex items-center 2xl:gap-3 xl:gap-2 lg:gap-2  gap-2 xl:my-3 lg:my-2 my-2">
                    <Image alt="image" src={p3} className="four_img2 " />
                    <h1 className="fourth_name ">Chef Dinesh</h1>
                  </div>
                </div>
                <p className="fourth_p">Chef Cuisine - Indian & Italian</p>
                <p className="fourth_p">Dietary Specialty - Veg only</p>
                <button className="four_btn">
                  <Image
                    alt="image"
                    src={day}
                    className="2xl:w-[13px] 2xl:h-[13px] lg:w-[10px] lg:h-[10px]"
                  />
                  <p className="fourth_day">Monday</p>
                </button>
              </div>

              <div className="2xl:w-[373px] xl:w-[260px] lg:w-[190px] md:w-1/2 mx-10 sm:mx-0 my-5  2xl:my-5 lg:my-4">
                <div>
                  <Image alt="fish" src={Rectangle8} className="four_img" />
                </div>
                <div className="2xl:my-5 xl:my-5  my-5 mx-auto">
                  <div>
                    <h1 className="fourth_title">Paneer butter masala</h1>
                    <div className="flex items-center 2xl:gap-3 xl:gap-2 lg:gap-2  gap-2 xl:my-3 lg:my-2 my-2">
                      <Image alt="image" src={p4} className="four_img2 " />
                      <h1 className="fourth_name ">Chef Rajesh</h1>
                    </div>
                  </div>
                  <p className="fourth_p">Chef Cuisine - Indian</p>
                  <p className="fourth_p">Dietary Specialty - Veg & Nonveg</p>
                  <button className="four_btn">
                    <Image
                      alt="image"
                      src={day}
                      className="2xl:w-[13px] 2xl:h-[13px] lg:w-[10px] lg:h-[10px]"
                    />
                    <p className="fourth_day">Sunday</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================Five================== */}

        <div className=" flex justify-center ">
          <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px] w-2/3  mx-auto">
            <div className=" flex justify-center ">
              <div className="mx-5 sm:mx-0">
                <h1 className=" alata font-[400] 2xl:text-[55px] 2xl:leading-[75px] text-center mx-auto xl:text-[35px] xl:leading-[45px] text-[25px] leading-[35px]">
                  How does Authentichef work?
                </h1>
                <p className="five_p">
                  We hand pick our chefs from communities in the UK, to give to
                  you a unique authentic experience of homemade global cuisine,
                  delivered right to your doorstep. All our chef dishes are
                  cooked and hand-made in small batches to ensure the highest
                  quality of each dish.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center lg:justify-around 2xl:my-16 xl:my-10 my-5">
              <div className="2xl:w-[425px] lg:w-[350px] sm:w-1/2 w-2/3 mx-auto lg:mx-0 my-5 ">
                <div>
                  <div>
                    <Image
                      alt="image"
                      src={maggie}
                      className="mx-auto 2xl:w-[77.89px] 2xl:h-[94px] xl:w-[50px] xl:h-auto lg:w-auto lg:h-[50px] sm:w-[40px] sm:h-[50px] w-[35px] h-[35px]"
                    />
                  </div>
                  <h1 className="five_head2 2xl:w-auto xl:w-[302px] lg:w-[250px]">
                    Select dishes based on your dietary preferences
                  </h1>
                  <p className="five_p2   ">
                    Choose from a range of global dishes
                  </p>
                </div>
              </div>
              <div className="2xl:w-[425px] lg:w-[350px] sm:w-1/2 mx-auto lg:mx-0 my-5 ">
                <div>
                  <div>
                    <Image
                      alt="image"
                      src={calen}
                      className="mx-auto 2xl:w-[89.2px] 2xl:h-[94px] xl:w-[50px] xl:h-auto lg:w-[40px] lg:h-auto sm:w-[40px] sm:h-[50px] w-[35px] h-[35px]"
                    />
                  </div>
                  <h1 className="five_head2">
                    Choose your preferred delivery date
                  </h1>
                  <p className="five_p2 ">
                    We deliver all your dishes in sustainable recyclable
                    packaging, without compromising on dish quality
                  </p>
                </div>
              </div>
              <div className="2xl:w-[425px]  lg:w-[350px] sm:w-1/2 mx-auto lg:mx-0 my-5 ">
                <div>
                  <div>
                    <Image
                      alt="image"
                      src={microweb}
                      className="mx-auto 2xl:w-[94px] 2xl:h-[calculated_height_2xl] xl:w-[50px] xl:h-[calculated_height_xl] lg:w-[40px] lg:h-[calculated_height_lg] sm:w-[40px] sm:h-[calculated_height_sm] w-[35px] h-[calculated_height_default];
"
                    />
                  </div>
                  <h1 className="five_head2">Heat and enjoy the experience</h1>
                  <p className="five_p2 2xl:w-[392px] xl:w-[302px] lg:w-[260px]">
                    Dishes delivered frozen ready to heat and eat, or store in
                    your freezer, whenever you need
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===================Six================== */}

        <div className="flex justify-center 2xl:my-28 xl:my-10 lg:my-10 my-10">
          <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px]  flex flex-wrap ">
            <div className="mx-20 sm:mx-auto">
              <div className="flex justify-center lg:justify-start">
                <h1 className="six_head ">Our Commitment</h1>
              </div>
              <div className=" flex flex-col lg:flex-row justify-center lg:justify-between flex-wrap">
                {" "}
                <div className="lg:w-1/2 flex 2xl:my-10 ">
                  <div className="my-3 lg:my-0 lg:flex items-center">
                    <Image
                      alt="ourcommitmentimg"
                      src={plate1}
                      className="six_img "
                    />

                    <p className="six_p">
                      Authentic homemade food made by independent chefs from
                      their cultural background
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2 flex 2xl:my-10 ">
                  <div className="my-3 lg:my-0 lg:flex items-center">
                    <Image
                      alt="ourcommitmentimg"
                      src={plate2}
                      className="six_img"
                    />

                    <p className="six_p">
                      No dish will be made in a factory or in a large-scale
                      production kitchen
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2 flex 2xl:my-10 ">
                  <div className="my-3 lg:my-0 lg:flex items-center">
                    <Image
                      alt="ourcommitmentimg"
                      src={plate3}
                      className="six_img"
                    />

                    <p className="six_p">
                      Small batch cooking to ensure the highest quality dish,
                      every time
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2 flex 2xl:my-10 ">
                  <div className="my-3 lg:my-0 lg:flex items-center">
                    <Image
                      alt="ourcommitmentimg"
                      src={plate4}
                      className="six_img"
                    />

                    <p className="six_p">
                      Use vegan packaging materials ensuring food safety
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================Seven================== */}

        <div className="yellow-bg 2xl:h-[884px] xl:h-[600px] lg:h-[500px]  md:w-full lg:flex justify-center items-center hidden lg:block">
          <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px] ">
            <h1 className="seven_head">Our Chef Community</h1>
            <p className="seven_p">
              Our independent chefs create dishes from their country of origin.
              Made with love and care to give you a culinary experience without
              the need of a passport
            </p>
            <div className="flex justify-between md:my-5 lg:my-10">
              <div className="w-[160px] lg:w-[286px]">
                <Image alt="person1" src={person1} className="seven_img" />
                <h2 className="seven_name">Uncle Roger Hendrics</h2>
              </div>
              <div className="w-[160px] lg:w-[286px]">
                <Image alt="person2" src={person2} className="seven_img" />
                <h2 className="seven_name">Jason Bosh</h2>
              </div>
              <div className="w-[160px] lg:w-[286px]">
                <Image alt="person3" src={person3} className="seven_img" />
                <h2 className="seven_name">Mathew Kaymer</h2>
              </div>
              <div className="w-[160px] lg:w-[286px]">
                <Image alt="person4" src={person4} className="seven_img" />
                <h2 className="seven_name">Scarlet Carter</h2>
              </div>
              <div className="w-[160px] lg:w-[286px]">
                <Image alt="person5" src={person5} className="seven_img" />
                <h2 className="seven_name">Karan Malhotra</h2>
              </div>
            </div>
            <div className="flex 2xl:mt-12">
              <button className=" seven_btn">Meet the Chefs</button>
            </div>
          </div>
        </div>

        {/* ===================Eight================== */}

        <div className="flex justify-center xl:py-28 lg:py-14 md:py-8 py-5 border-b-[1px] border-[#B1B1B1]">
          <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px] flex flex-col-reverse lg:flex-row">
            <div className="mx-10 sm:w-1/2 sm:mx-auto lg:mx-0">
              <h1 className=" eight_head ">Food Safety</h1>
              <p className="eight_p">
                At authentichef, all our chefs prepare and handle food with care
                and love, ensuring the highest levels of food safety and
                hygiene. Each chef has a scorecard rating provided by their
                local councils and the food standards agency to provide that
                added peace of mind. Join our chef community and share your
                memories and love by serving others.
              </p>
              <div className="flex justify-center lg:justify-start">
                <button className=" eight_btn ">Join the Chef Community</button>
              </div>
            </div>
            <div className="mx-10 sm:w-1/2 flex sm:mx-auto my-5 lg:my-0 lg:flex-none">
              <Image
                alt="image"
                src={eightPoster}
                className="2xl:w-[814px] 2xl:h-[507px] w-auto h-auto mx-auto rounded-[15px]"
              />{" "}
            </div>
          </div>
        </div>

        {/* ===================Nine================== */}

        <div className="flex justify-center lg:my-14 xl:my-28 my-10">
          <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px]">
            <h1 className="nine_head">Testimonials</h1>
            <p className="nine_p">
              All our chefs have fans raving about their food
            </p>

            <div className="lg:flex justify-around 2xl:my-10 xl:my-8 lg:my-6 my-3">
              <div className="w-2/4 sm:w-1/3 mx-auto my-5 lg:my-0 lg:mx-0 lg:w-auto">
                <div>
                  <div>
                    <Image
                      alt="chef-mayank"
                      src={review1}
                      className="nine_img"
                    />
                  </div>
                  <div className="rating flex justify-center nine_start">
                    <label for="star1">
                      <input
                        type="radio"
                        id="star1"
                        name="rating-2"
                        className="mask mask-star-2 bg-[#DB5353]"
                      />
                    </label>
                    <label for="star2">
                      <input
                        type="radio"
                        id="star2"
                        name="rating-2"
                        className="mask mask-star-2 bg-[#DB5353]"
                      />
                    </label>
                    <label for="star3">
                      <input
                        type="radio"
                        id="star3"
                        name="rating-2"
                        className="mask mask-star-2 bg-[#DB5353]"
                      />
                    </label>
                    <label for="star4">
                      <input
                        type="radio"
                        id="star4"
                        name="rating-2"
                        className="mask mask-star-2 bg-[#DB5353]"
                      />
                    </label>
                    <label for="star5">
                      <input
                        type="radio"
                        id="star5"
                        name="rating-2"
                        className="mask mask-star-2 bg-[#DB5353]"
                        checked
                      />
                    </label>
                  </div>

                  <p className="nine_p2">
                    Lorem ipsum dolor sit amet. Ut maxime necessitatibus rem
                    odio Quis 33 galisum molestias ut voluptas fuga et quia
                    voluptate ut pariatur aperiam.
                  </p>
                  <p className="nine_name">Mayank Jaiswal</p>
                </div>
              </div>
              <div>
                <div className="w-2/4 sm:w-1/3 mx-auto my-5 lg:my-0 lg:mx-0 lg:w-auto">
                  <div>
                    <Image
                      alt="chef-rohit"
                      src={review2}
                      className="nine_img"
                    />
                  </div>
                  <div className="rating flex justify-center nine_start">
                    <label for="star1">
                      <input
                        type="radio"
                        id="star1"
                        name="rating-3"
                        className="mask mask-star-2 bg-[#DB5353]"
                      />
                    </label>
                    <label for="star2">
                      <input
                        type="radio"
                        id="star2"
                        name="rating-3"
                        className="mask mask-star-2 bg-[#DB5353]"
                      />
                    </label>
                    <label for="star3">
                      <input
                        type="radio"
                        id="star3"
                        name="rating-3"
                        className="mask mask-star-2 bg-[#DB5353]"
                      />
                    </label>
                    <label for="star4">
                      <input
                        type="radio"
                        id="star4"
                        name="rating-3"
                        className="mask mask-star-2 bg-[#DB5353]"
                      />
                    </label>
                    <label for="star5">
                      <input
                        type="radio"
                        id="star5"
                        name="rating-3"
                        className="mask mask-star-2 bg-[#DB5353]"
                        checked
                      />
                    </label>
                  </div>

                  <p className="nine_p2">
                    Lorem ipsum dolor sit amet. Ut maxime necessitatibus rem
                    odio Quis 33 galisum molestias ut voluptas fuga et quia
                    voluptate ut pariatur aperiam.
                  </p>
                  <p className="nine_name">Rohit Thakur</p>
                </div>
              </div>
              <div>
                <div className="w-2/4 sm:w-1/3 mx-auto my-5 lg:my-0 lg:mx-0 lg:w-auto">
                  <div>
                    <Image
                      alt="chef-shubham"
                      src={review3}
                      className="nine_img"
                    />
                  </div>
                  <div className="rating flex justify-center nine_start">
                    <label for="star1">
                      <input
                        type="radio"
                        id="star1"
                        name="rating-4"
                        className="mask mask-star-2 bg-[#DB5353]"
                      />
                    </label>
                    <label for="star2">
                      <input
                        type="radio"
                        id="star2"
                        name="rating-4"
                        className="mask mask-star-2 bg-[#DB5353]"
                      />
                    </label>
                    <label for="star3">
                      <input
                        type="radio"
                        id="star3"
                        name="rating-4"
                        className="mask mask-star-2 bg-[#DB5353]"
                      />
                    </label>
                    <label for="star4">
                      <input
                        type="radio"
                        id="star4"
                        name="rating-4"
                        className="mask mask-star-2 bg-[#DB5353]"
                      />
                    </label>
                    <label for="star5">
                      <input
                        type="radio"
                        id="star5"
                        name="rating-4"
                        className="mask mask-star-2 bg-[#DB5353]"
                        checked
                      />
                    </label>
                  </div>

                  <p className="nine_p2">
                    Lorem ipsum dolor sit amet. Ut maxime necessitatibus rem
                    odio Quis 33 galisum molestias ut voluptas fuga et quia
                    voluptate ut pariatur aperiam.
                  </p>
                  <p className="nine_name">Shubham Sharma</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================Footer================== */}
        
        <footer className="bg-[#F6F6F6] flex justify-center">
          <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]  md:w-[700px]  2xl:mt-[100px] xl:mt-[50px] lg:mt-[35px] sm:mt-[30px] mt-[20px]">
            <div className="flex  md:justify-between flex-wrap">
              <div className="lg:w-auto md:w-[230px] sm:w-1/2 w-full my-3 md:my-0">
                <div className="lg:text-start text-center">
                  <h1 className="footer_heading">Quick Links</h1>
                  <a href="#">
                    <p className="footer_text">Our Story</p>
                  </a>
                  <a href="#">
                    <p className="footer_text">Food Safety</p>
                  </a>
                  <a href="#">
                    <p className="footer_text">Help Center</p>
                  </a>
                  <a href="#">
                    <p className="footer_text">Global Cuisines</p>
                  </a>
                </div>
              </div>
              <div className="lg:w-auto md:w-[230px] sm:w-1/2 w-full my-3 md:my-0">
                <div className="lg:text-start text-center">
                  <h1 className="footer_heading">Resources</h1>
                  <a href="#">
                    <p className="footer_text">Become a chef</p>
                  </a>
                  <a href="#">
                    <p className="footer_text">Browse more chef</p>
                  </a>
                  <a href="#">
                    <p className="footer_text">Homemade food delivery</p>
                  </a>
                </div>
              </div>
              <div className="lg:w-auto md:w-[230px] sm:w-1/2 w-full my-3 md:my-0">
                <div className="lg:text-start text-center">
                  <h1 className="footer_heading">Other Links</h1>
                  <a href="#">
                    <p className="footer_text">Log In</p>
                  </a>
                  <a href="#">
                    <p className="footer_text">Sign Up</p>
                  </a>
                  <a href="#">
                    <p className="footer_text">Privacy Policy</p>
                  </a>
                  <a href="#">
                    <p className="footer_text">Terms of Service</p>
                  </a>
                </div>
              </div>
              <div className="lg:w-auto md:w-[230px] sm:w-1/2 w-full my-3 md:my-4 lg:my-0">
                <div className="lg:text-start text-center">
                  <h1 className="footer_heading">Connect with us</h1>
                  <div className="flex gap-2 justify-center lg:justify-start">
                    <div>
                      <Link href="https://www.facebook.com/" target="_blank">
                        <Image
                          alt="image"
                          src={fb}
                          className="2xl:w-[30px] 2xl:h-[30px] h-auto w-auto"
                        />
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="https://www.linkedin.com/home"
                        target="_blank"
                      >
                        <Image
                          alt="image"
                          src={linkedin}
                          className="2xl:w-[30px] 2xl:h-[30px] h-auto w-auto"
                        />
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="https://www.instagram.com/accounts/login/"
                        target="_blank"
                      >
                        <Image
                          alt="image"
                          src={insta}
                          className="2xl:w-[30px] 2xl:h-[30px] h-auto w-auto"
                        />
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fwww.google.co.in%2F%3Fpli%3D1&ec=GAlAmgQ&hl=en&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S1375757007%3A1709800522255495&theme=glif"
                        target="_blank"
                      >
                        <Image
                          alt="image"
                          src={google}
                          className="2xl:w-[30px] 2xl:h-[30px] h-auto w-auto"
                        />
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="https://twitter.com/i/flow/login"
                        target="_blank"
                      >
                        <Image
                          alt="image"
                          src={twiter}
                          className="2xl:w-[30px] 2xl:h-[30px] h-auto w-auto"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="2xl:mt-[56px] xl:mt-[25px] lg:mt-[15px] first-letter sm:mt-[15px] mt-[10px]" />
            <div>
              <div className="flex flex-col sm:flex-row justify-center sm:justify-between 2xl:my-5 xl:my-3 lg:my-2 sm:my-2">
                <h1 className="footer_text_b ">
                  © 2024 Authentichef | All Rights Reserved.
                </h1>
                <a href="https://www.controlf5.in/" target="_blank">
                  <h1 className="footer_text_b ">Developed by ControlF5.</h1>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default dynamic(() => Promise.resolve(LandingPage), { ssr: false });
