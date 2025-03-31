import React from "react";
import { FaGoogleDrive } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineOfflinePin } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

import advanceSearch from "../../assets/advanceSearch.jpg";
import logo from "../../assets/logo.jpg"
const Header = () => {
  return (
    <>
      <header className="h-[60px] w-full pt-2">
        <nav className="flex items-center">
          <div className="logo w-[20%] flex items-center pl-7">
            <div className="">
              <img src={logo} alt="logo" className="h-10 w-10 rounded-full"/>
              {/* <FaGoogleDrive className="h-9 w-9" /> */}
            </div>
            <p className="text-gray-200 text-[22px] pl-2">Docuvault</p>
          </div>
          <div className="w-[80%] flex justify-between items-center">
            <div className="search drop-shadow-lg shadow-white w-[68%] h-[48px] rounded-3xl flex items-center bg-white justify-between">
              <div className="flex items-center ">
                <div className="ml-3 cursor-pointer mr-3 hover:rounded-full hover:bg-gray-300 p-2">
                  <AiOutlineSearch className="h-6 w-6 text-gray-700" />
                </div>
                <input
                  type="text"
                  placeholder="Search in drive"
                  className="w-[550px] border-none outline-none text-base font-normal"
                />
              </div>
              <div className="h-10 w-10 p-1 hover:rounded-full hover:bg-gray-300 mix-blend-multiply hover:mix-blend-darken cursor-pointer flex items-center mr-2">
                <img src={advanceSearch} alt="advance search img" />
              </div>
            </div>
            <div className="functions flex items-center gap-4 pr-6">
              <div className="offline  flex items-center rounded-full justify-center cursor-pointer h-10 w-10 hover:bg-orange-400">
                <MdOutlineOfflinePin className="w-6 h-6 text-gray-200"/>
              </div>
              <div className="support flex items-center rounded-full justify-center cursor-pointer h-10 w-10 hover:bg-orange-400">
                <GoQuestion className="w-5 h-5 text-gray-200"/>
              </div>
              <div className="setting flex items-center rounded-full justify-center cursor-pointer h-10 w-10 hover:bg-orange-400">
                <IoSettingsOutline className="w-5 h-5 text-gray-200"/>
              </div>
             
            </div>
            <div className="account pr-7 flex items-center">
            <div className="profile ">
                <CgProfile className="w-10 h-10 text-gray-700"/>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
