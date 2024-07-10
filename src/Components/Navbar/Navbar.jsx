import React from "react";
import Logo from "../../assets/appello.png";
import data from "./data";

function Navbar() {
  return (
    <div className="bg-primary/40 sm:h-40 h-80  shadow-xl ">
      {/* shoap details */}
      <div className="flex-wrap UpperDiv bg-primary/40 flex  justify-around text-sm">
        <div>
         
          <p className="">+91 9633498505</p>
        </div>
        <div>
          <p>appello@gmail.com</p>
        </div>
        <div className="pr-4">
          <p>Nooradi Bridge, Down Hill, Malappuram, Kerala</p>
        </div>
      </div>
      {/* navbar */}
      <div className="downDiv flex items-center justify-around flex-col sm:flex-row">
        <div className="flex-none">
          <img src={Logo} className="h-40 " alt="logo" />
        </div>
        <div
          className="flex items-center h-10 px-4  rounded-full text-md 
         "
        >
          <div className="">
            <ul className="relative">
              <li
                className="shadow-md group h-9 sm:h-10 relative cursor-pointer bg-white border-1 text-gray-500 
              rounded-l-full flex items-center px-4 flex-none"
              >
                All Categories
                <ul className="absolute hidden group-hover:block bg-white shadow-lg">
                  {data.map((dataItem) => (
                    <li
                      key={dataItem.dataId}
                      className="cursor-pointer hover:bg-gray-200"
                    >
                      <a href={dataItem.dataLink} className="block px-4 py-2">
                        {dataItem.dataName}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
          <input
            type="text"
            className="flex-1 sm:h-full h-9 shadow-md pl-3 focus:border-primary
            transition-all duration-300 border focus:outline-none"
            placeholder="Search here"
          />
          <div
            className="flex-none bg-secondary flex items-center text-white font-bold 
         shadow-md px-6 h-9 sm:h-full rounded-r-full hover:text-lg"
          >
            <button>Search</button>
          </div>
        </div>
        <div className="flex justify-around text-sm">
          <p>Your Wishlist</p>

          <p>Your Cart</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
