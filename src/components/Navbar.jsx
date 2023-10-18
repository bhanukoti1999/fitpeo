import React from "react";
import { PiHandWavingFill } from "react-icons/pi";
import Search from "./Search.jsx";
const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center py-3 md:p-3">
      <div className="flex justify-evenly items-center">
        <p className="font-[400] pl-[2.5em] md:pl-0">Hello Fitpeo</p>
        <PiHandWavingFill size={20} color="#e0ac69" />,
      </div>
      <div className="md:block hidden ">
        <Search />
      </div>
    </div>
  );
};

export default Navbar;
