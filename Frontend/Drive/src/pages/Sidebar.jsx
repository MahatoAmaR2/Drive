import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { SiProtondrive } from "react-icons/si";
import { IoIosStar } from "react-icons/io";
import { HiOutlineTrash } from "react-icons/hi";
import { BiSolidRightArrow } from "react-icons/bi";
import { IoMdCloudOutline } from "react-icons/io";

import "./css/progress.css";

const Sidebar = () => {
  return (
    <>
      <div className="pl-4 w-[20%]">
        <div className="upload cursor-pointer rounded-2xl mt-4 flex justify-center items-center  h-14 w-24 drop-shadow-lg shadow-white bg-white">
          <p className="text-4xl text-gray-800 left-4 top-[5px] absolute">+</p>
          <p className="text-sm right-4 absolute">New</p>
        </div>
        <div className="bars mt-6 mr-4">
          <div className="flex items-center hover:bg-orange-400  h-8 rounded-4xl pl-4 transition-all ">
            <MdHomeFilled className="w-5 h-5 text-white" />
            <p className="text-sm pl-4 text-white">Home</p>
          </div>
          <div className="flex items-center cursor-pointer hover:bg-orange-400  h-8 rounded-4xl pl-2 mt-1 transition-all">
            <BiSolidRightArrow className="w-1.5 text-white" />
            <SiProtondrive className="w-5 h-5 pl-0.5 text-white" />
            <p className="text-sm pl-4 text-white">My Drive</p>
          </div>
          <div className="flex items-center cursor-pointer hover:bg-orange-400  h-8 rounded-4xl pl-4 mt-1 transition-all">
            <IoIosStar className="w-5 h-5 text-white" />
            <p className="text-sm pl-4 text-white">Starred</p>
          </div>
          <div className="flex items-center cursor-pointer hover:bg-orange-400  h-8 rounded-4xl pl-4 mt-1 transition-all">
            <HiOutlineTrash className="w-5 h-5 text-white" />
            <p className="text-sm pl-4 text-white">Trash</p>
          </div>
          <div className="flex items-center cursor-pointer hover:bg-orange-400 h-8 rounded-4xl pl-4 mt-1 transition-all">
            <IoMdCloudOutline className="w-5 h-5  text-white" />
            <p className="text-sm pl-4  text-white">Storage</p>
          </div> 
       

          <div className="pl-4">
            <progress
              value="5"
              max="100"
              className="custom-progress h-1 w-[90%]"
            ></progress>
            <p className="text-sm text-white">625.6 MB of 28 GB used</p>
          </div>
          <div className="flex justify-center items-center mt-3 ">
            <div className="flex justify-center items-center py-1 px-2 hover:bg-orange-400 border  border-orange-400 w-full rounded-4xl mx-5 cursor-pointer transition-all">
              <p className="text-white">Get more storage</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
