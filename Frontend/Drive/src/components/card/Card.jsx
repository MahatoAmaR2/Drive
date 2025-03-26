import React, { useState } from "react";
import { IoMdCloudOutline } from "react-icons/io";
import { IoIosMore } from "react-icons/io";

const FileCard = ({ title, description, fileType }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-64 hover:shadow-lg transition-all relative">
      <div
        onClick={toggleMenu}
        className="absolute top-2 right-2 cursor-pointer"
      >
        <IoIosMore className="text-gray-500" size={20} />
      </div>

      {menuOpen && (
        <div className="absolute top-10 right-2 bg-white shadow-lg rounded-lg p-2 w-32">
          <button className="text-sm text-gray-700 w-full text-left py-1 px-2 hover:bg-gray-100">
            Rename
          </button>
          <button className="text-sm text-gray-700 w-full text-left py-1 px-2 hover:bg-gray-100">
            Delete
          </button>
        </div>
      )}

      <div className="flex justify-center mb-4">
        <IoMdCloudOutline className="text-4xl text-gray-700" />
      </div>

      <h3 className="text-xl font-semibold text-gray-900 truncate">{title}</h3>

      <p className="text-sm text-gray-500 mt-2">{description}</p>

      <div className="mt-4 flex justify-between items-center">
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600 transition-all">
          Preview
        </button>
        <button className="bg-gray-200 text-gray-700 py-1 px-3 rounded-lg hover:bg-gray-300 transition-all">
          Download
        </button>
      </div>
    </div>
  );
};

export default FileCard;
