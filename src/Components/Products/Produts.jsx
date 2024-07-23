// import Button from "../Button/Button";
import React from "react";
import productData from "./productDetails";
import { FaRegHeart } from "react-icons/fa";
import "./style.css";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

function Product() {
  return (
    <div
      className=" dark:bg-darkPrimary duration-300 absolute dark:text-white
    w-full"
    >
      <div className="flex mx-4 sm:mx-5 lg:mx-8 xl:mx-10 mt-3 items-center justify-between">
        <h1 className="text-3xl   ">Products</h1>
        <a className="flex items-center dark:text-blue-300 text-blue-600" href="">
          <u> see more</u>
          <IoIosArrowForward />
        </a>
      </div>
      <div
        className=" grid grid-cols-2 gap-2 justify-items-center sm:grid-cols-3
      xl:grid-cols-5 lg:grid-cols-4"
      >
        {productData.map((dataItem) => (
          <div
            className="cursor-pointer sm:w-52 w-40 h-72 my-5 dark:bg-white/20 
              duration-300 shadow-lg rounded-xl  "
            key={dataItem.productId}
          >
            <Link to={`/ProductDetails/${dataItem.productId}`}>
              <div className="flex justify-center relative">
                <img
                  src={dataItem.productImg}
                  alt="image"
                  className="w-full rounded-xl h-44 sm:h-48 bg-cover bg-center"
                />
                <span
                  className="absolute left-0 bottom-0 m-3 bg-red-600 
              rounded-lg p-1 text-xs sm:text-sm text-white"
                >
                  Sale
                </span>
              </div>
              <div className=" p-1 ">
                <p className="font-bold">
                  {dataItem.productName.substring(0, 16)}
                  <span className="text-sm text-gray-500">...</span>
                </p>

                <del className="text-sm">{dataItem.oldPrice}</del>
                <p className="font-bold dark:text-white text-[#008c00]">
                  {dataItem.discountPrice}
                </p>
              </div>
            </Link>
            <div className="justify-end flex">
              <div className="container relative">
                <button
                  className="button dark:bg-white text-black bg-secondary w-full rounded-b-md absolute
                        -bottom-8 left-0 py-1 hover:bg-primary"
                >
                  Add to cart
                </button>
                <div
                  className="bg-white rounded-full flex justify-center
               items-center  border-neutral-300 border -right-3 -top-[269px] sm:-top-[283px] text-black h-9 w-9 absolute "
                >
                  <span className="">
                    <FaRegHeart className="text-xl hover:text-2xl duration-100" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
