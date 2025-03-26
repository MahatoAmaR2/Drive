
import React from "react";
import Cards from "./Cards";

const Main = () => {
  return (
    <div className="bg-white shadow-2xl w-[78%] mt-2 h-[87vh] rounded-3xl overflow-hidden">
      <div className="greet pl-6 pt-4">
        <p className="text-2xl">Welcome to SkyCube</p>
      </div>

      {/* Scrollable area for cards */}
      <div className="overflow-y-auto h-[76vh] p-4">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>

      {/* Optional: Upload section (commented out in the provided code) */}
      {/* <div className="upload w-full h-full flex justify-center items-center">
        <button className="text-lg font-medium hover:bg-orange-500 transition-all bg-orange-400 cursor-pointer text-white rounded border-none px-4 py-2">UPLOAD</button>
      </div> */}
    </div>
  );
};

export default Main;
