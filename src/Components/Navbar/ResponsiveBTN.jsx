
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faList } from "@fortawesome/free-solid-svg-icons";
import data from "./data";

export const SearchButton = () => {
  return (
    <div className="flex items-center">
      <div className="hidden sm:block">
        <button className="">Search</button>
      </div>
      <div className="block sm:hidden">
        <FontAwesomeIcon icon={faSearch} size="md" />
      </div>
    </div>
  );
};

export const Catogories = () => {
  return (
    <div className="flex items-center">
      <div className="hidden sm:block">
        <button className="">All Categories</button>
      </div>
      <div className="block sm:hidden">
        <FontAwesomeIcon icon={faList} size="md" />
      </div>
    </div>
  );
};

export const showCategories = () => {
  return (
    <>
     
    </>
  );
};
