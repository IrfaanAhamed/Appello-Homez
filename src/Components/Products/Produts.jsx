import React from "react";
import productData from "./productDetails";
import { FaRegHeart } from "react-icons/fa";
import Button from "../Button/Button"
import "./style.css";
function Home() {
  return (
    <div
      className="dark:bg-darkPrimary duration-300 absolute dark:text-white
    w-full"
    >
      <h1 className="text-3xl ml-3  my-3">Products</h1>
      <div
        className=" grid grid-cols-2 gap-2 justify-items-center sm:grid-cols-3
      xl:grid-cols-5 lg:grid-cols-4"
      >
        {productData.map((dataItem) => (
          <div
            className="cursor-pointer sm:w-52 w-48 h-72 mt-5 dark:bg-white/10 duration-300 shadow-lg rounded-2xl  "
            key={dataItem.productId}
          >
            <div className="flex justify-center relative">
              <img
                src={dataItem.productImg}
                alt="image"
                className="w-full rounded-xl h-48 bg-cover bg-center"
              />
              <span
                className="absolute left-0 bottom-0 m-3 bg-red-600 
              rounded-full p-1 text-sm text-white"
              >
                Sale
              </span>
              <div className="bg-white rounded-full flex justify-center
               items-center shadow-xl border-neutral-300 border -right-3 -top-3 text-black h-9 w-9 absolute ">
                <span className="">
                  <FaRegHeart className="text-xl hover:text-2xl duration-100" />
                </span>
              </div>
            </div>
            <div className=" p-1 pl-2">
              <p className="font-bold">{dataItem.productName}</p>

              <del className="text-sm">{dataItem.oldPrice}</del>
              <p className="font-bold dark:text-white text-[#008c00]">
                {dataItem.discountPrice}
              </p>
            </div>
            <div className="justify-end flex">
              <Button/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
