import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="flex relative gap-110 items-center top-0 left-0 w-full z-50 bg-sky-950 pt-5 pl-20 pb-5 pr-5 text-white">
      <div className="flex gap-10">
        <div className="flex gap-2">
          <p>
            <FaLocationDot className="text-yellow-400" />
          </p>
          <p className="text-xs font-bold">
            126 Rumuagholu SARS Link Road, PH NG.
          </p>
        </div>
        <div className="flex gap-2">
          <FaPhoneAlt className="text-yellow-400" />
          <p
            className="text-xs font-bold cursor-pointer border-b-2 border-transparent
  hover:border-white
  transition-colors duration-300"
          >
            234 706 391 2132
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <MdAccessTimeFilled className="text-yellow-400" />
        <p className="text-xs font-bold">Mon-Sat, 8:00-18:00. Sunday CLOSED</p>
      </div>
    </nav>
  );
};

export default Navbar;
