import React, { useState } from "react";
import { CgShapeHexagon } from "react-icons/cg";
import { HiInbox } from "react-icons/hi2";
import { PiCodesandboxLogoFill } from "react-icons/pi";
import { TbUserSquare } from "react-icons/tb";
import { IoWalletSharp } from "react-icons/io5";
import { BiMenu, BiSolidOffer } from "react-icons/bi";
import { RiAccountPinBoxLine } from "react-icons/ri";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { Drawer } from "@mui/material";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="md:w-[18%] md:block hidden h-screen bg-[#140042] text-white relative px-4">
        <div className="py-4 mb-4 w-full flex justify-start items-center">
          <CgShapeHexagon color="white" size={30} className="mr-2" />
          <p className="font-[500] text-xl">Dashboard</p>
        </div>
        <div className="w-full flex-col">
          <div className=" flex justify-start items-center p-4 py-3 relative hover:bg-[#ffffff44]">
            <HiInbox size={20} className="mr-4" />
            <p className="font-[400]">Dashboard</p>
            <FaAngleRight size={15} className="absolute right-2" />

          </div>
          <div className=" flex justify-start items-center hover:bg-[#ffffff44] p-4 py-3 relative">
            <PiCodesandboxLogoFill size={20} className="mr-4" />
            <p className="font-[400]">Product</p>
            <FaAngleRight size={15} className="absolute right-2" />
          </div>
          <div className=" flex justify-start items-center hover:bg-[#ffffff44] p-4 py-3 relative">
            <TbUserSquare size={20} className="mr-4" />
            <p className="font-[400]">Customers</p>
            <FaAngleRight size={15} className="absolute right-2" />
          </div>
          <div className=" flex justify-start items-center hover:bg-[#ffffff44] p-4 py-3 relative">
            <IoWalletSharp size={20} className="mr-4" />
            <p className="font-[400]">Income</p>
            <FaAngleRight size={15} className="absolute right-2" />
          </div>
          <div className=" flex justify-start items-center hover:bg-[#ffffff44] p-4 py-3 relative">
            <BiSolidOffer size={20} className="mr-4" />
            <p className="font-[400]">Promote</p>
            <FaAngleRight size={15} className="absolute right-2" />
          </div>
          <div className=" flex justify-start items-center hover:bg-[#ffffff44] p-4 py-3 relative">
            <RiAccountPinBoxLine size={20} className="mr-4" />
            <p className="font-[400]">Help</p>
            <FaAngleRight size={15} className="absolute right-2" />
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <div className=" w-[90%] flex justify-start items-center p-3  bg-[#ffffff44] rounded-md absolute bottom-6">
            <img
              src="data:image/jpeg;base64,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"
              className="mr-2 rounded-full w-[2em] h-[2em]"
              alt="user"
            />
            <div className="flex-col justify-start items-start">
              <p className="font-[400] text-start text-[0.9em]">Ishwer Sharma</p>
              <p className="font-[400] text-start text-[0.7em] text-[#ffffff81]">
                Project Manager
              </p>
            </div>
            <FaAngleDown size={15} className="absolute right-4" />
          </div>
        </div>
      </div>
      {/* mobile sidebar code  */}
      <BiMenu
        size={25}
        color="black"
        className="absolute left-[1.5em] top-3 block md:hidden"
        onClick={() => setOpen(true)}
      />
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        anchor="left"
        className="block md:hidden"
      >
        <div
          className=" bg-[#140042] text-white relative h-screen"
          style={{ width: "15em" }}
        >
          <div className="py-4 mb-4 w-full flex justify-start items-center px-2">
            <CgShapeHexagon color="white" size={30} className="mr-2" />
            <p className="font-[500] text-xl">Dashboard</p>
          </div>
          <div className="w-full flex-col">
            <div className=" flex justify-start items-center p-4 py-3 bg-[#ffffff44] rounded-md">
              <HiInbox size={20} className="mr-4" />
              <p className="font-[400]">Dashboard</p>
            </div>
            <div className=" flex justify-start items-center p-4 py-3 relative">
              <PiCodesandboxLogoFill size={20} className="mr-4" />
              <p className="font-[400]">Product</p>
              <FaAngleRight size={15} className="absolute right-2" />
            </div>
            <div className=" flex justify-start items-center p-4 py-3 relative">
              <TbUserSquare size={20} className="mr-4" />
              <p className="font-[400]">Customers</p>
              <FaAngleRight size={15} className="absolute right-2" />
            </div>
            <div className=" flex justify-start items-center p-4 py-3 relative">
              <IoWalletSharp size={20} className="mr-4" />
              <p className="font-[400]">Income</p>
              <FaAngleRight size={15} className="absolute right-2" />
            </div>
            <div className=" flex justify-start items-center p-4 py-3 relative">
              <BiSolidOffer size={20} className="mr-4" />
              <p className="font-[400]">Promote</p>
              <FaAngleRight size={15} className="absolute right-2" />
            </div>
            <div className=" flex justify-start items-center p-4 py-3 relative">
              <RiAccountPinBoxLine size={20} className="mr-4" />
              <p className="font-[400]">Help</p>
              <FaAngleRight size={15} className="absolute right-2" />
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <div className=" w-[90%] flex justify-start items-center p-3  bg-[#ffffff44] rounded-md absolute bottom-6">
              <img
                src="https://i.pinimg.com/236x/f8/dd/e9/f8dde9cfddaab6ceba0304576fc95787.jpg"
                className="mr-2 rounded-full w-[2em] h-[2em]"
                alt="user"
              />
              <div className="flex-col justify-start items-start">
                <p className="font-[400] text-start text-[0.9em]">Ishwer</p>
                <p className="font-[400] text-start text-[0.7em] text-[#ffffff81]">
                  Project Manager
                </p>
              </div>
              <FaAngleDown size={15} className="absolute right-4" />
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Sidebar;
