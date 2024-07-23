import { useState } from "react";
import Logo from "../../assets/appello.png";
import darkLogo from "../../assets/darkAppello.png";

import "./style.css";
import DarkMode from "./DarkMode";
import { MdCall } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { FaHeart, FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SearchButton, Catogories ,showCategories } from "./ResponsiveBTN";

function Navbar() {
  function MyButton({ sm }) {
    return (
      <button className={sm ? "search" : "other-class"}>
        {sm ? "Search" : <FaSearch />}
      </button>
    );
  }

  return (
    <div className="bg-primary/40  transition-all duration-300 dark:bg-darkSecondary sm:h-40 h-80 shadow-xl ">
      {/* shoap details */}
      <div className="flex-wrap text-black/80  transition-all duration-300 dark:bg-darkPrimary/40 dark:text-white dark:font-bold bg-primary/40 flex justify-around text-sm">
        <div className="flex items-center">
          <MdCall />
          <p className="">+91 9633498505</p>
        </div>
        <div className="flex items-center">
          <MdOutlineEmail />
          <p> appello@gmail.com</p>
        </div>
        <div className="pr-4 flex items-center">
          <MdLocationPin />
          <p>Nooradi Bridge, Down Hill, Malappuram, Kerala</p>
        </div>
      </div>
      {/* navbar */}
      <div
        className="downDiv flex relative items-center justify-between  flex-col 
      sm:flex-row"
      >
        <div className="flex-none ">
          <Link to="/Appello-Homez/">
            <div className="flex items-center">
              <div className="hidden dark:block">
              <img src={darkLogo} className={`h-40 `} alt="Darklogo" />
              </div>
              <div className="block dark:hidden">
              <img src={Logo} className={`h-40 `} alt="logo" />
              </div>
            </div>
           
          </Link>
        </div>
        <div
          className="inpDiv flex absolute top-36 sm:top-14 z-10 items-center h-10 px-4  rounded-full 
          text-md justify-items-center 
         "
        >
          <div className="flex-none z-10 w-26">
            <ul className="relative">
              <li
                className="shadow-md group h-9 sm:h-10 relative 
                cursor-pointer bg-white dark:border-y text-gray-500 
              rounded-l-full flex items-center sm:px-4 px-1 flex-none
              dark:border-gray-500 dark:bg-gray-800
               transition-all duration-300"
              >
                <p
                  className="flex text-sm font-bold sm:text-base sm:font-normal 
                text-gray-400 dark:text-white px-1"
                >
                  <Catogories />
                </p>
                <ul
                  className="absolute hidden group-hover:block bg-white 
                shadow-lg"
                >
                 <showCategories />
                </ul>
              </li>
            </ul>
          </div>
          <input
            type="text"
            className="flex-1 w-28 sm:w-full h-9 sm:h-full shadow-md pl-3 focus:border-primary
            transition-all dark:border-y dark:placeholder:text-white duration-300 border 
            focus:outline-none dark:border-gray-500 dark:bg-gray-800
            dark:text-white"
            placeholder="Search here"
          />
          <div
            className="flex-none  smw-28  transition-all duration-300 dark:bg-gray-800 bg-secondary 
            flex items-center text-white font-bold dark:border-gray-500
         shadow-md dark:border-y px-3 h-9 sm:h-full rounded-r-full hover:text-lg focus:text-lg"
          >
            <SearchButton />
          </div>
          <DarkMode />
        </div>
        <div
          className="navLast z-40 flex justify-around gap-4 
        sm:mt-0 mr-7 text-xs text-gray-700"
        >
          <button
            className="flex flex-col cursor-pointer dark:bg-darkPrimary/40 dark:text-white bg-primary/40 rounded-3xl p-2 items-center
          focus:border-primary transition-all duration-300
          dark:focus:border-white border focus:outline-none relative"
          >
            <FaHeart className="icon-heart size-5 dark:text-white text-[#FF9A00] drop-shadow-xl text-sm" />
            <div
              className="bg-red-500 w-5 h-5 absolute top-0 right-0 rounded-full
            text-white flex items-center justify-center"
            >
              1
            </div>
            <p>Your Wishlist</p>
          </button>
          <button
            className=" flex flex-col items-center cursor-pointer bg-primary/40 rounded-3xl p-2
          focus:border-primary dark:focus:border-white transition-all duration-300 border focus:outline-none
           dark:bg-darkPrimary/40 dark:text-white relative"
          >
            <FaShoppingCart className="icon-cart dark:text-white size-5 text-[#FF9A00]  drop-shadow-xl" />
            <div
              className="bg-red-500 w-5 h-5 absolute top-0 right-0 rounded-full
            text-white flex items-center justify-center"
            >
              1
            </div>
            <p>Your Cart</p>
          </button>
        </div>
      </div>
      <div class="loop-wrapper">
        <div className="mountain"></div>
        <div className="hill"></div>
        <div className="tree"></div>
        <div className="tree"></div>
        <div className="tree"></div>
        <div className="rock"></div>
        <div className="truck"></div>
        <div className="wheels"></div>
      </div>
    </div>
  );
}

export default Navbar;
