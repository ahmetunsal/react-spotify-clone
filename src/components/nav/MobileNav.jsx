import React from "react";
import { BiSearch } from "react-icons/bi";
import { FaSpotify } from "react-icons/fa";
import { GoHome, GoHomeFill } from "react-icons/go";
import { RiSearch2Line, RiSearchFill } from "react-icons/ri";
import { SiLibrariesdotio } from "react-icons/si";
import { Link, useLocation } from "react-router-dom";

const MobileNav = () => {
  const location = useLocation();

  const { pathname } = location;

  return (
    <div style={{
        backdropFilter: "blur(10px)"
    }} className="w-full flex md:hidden fixed bottom-0 left-0 gabarito-600 justify-center items-center bg-[#00000086] gap-16  py-2 px-6">
      <div className="flex flex-col items-center">
        <Link to={"/"} className="p-2 rounded-full">
          {pathname == "/" ? (
            <GoHomeFill className="w-6 h-6 text-white" />
          ) : (
            <GoHome className="w-6 h-6 text-white" />
          )}
        </Link>
        <span className="w-full text-center text-white text-sm">Home</span>
      </div>
      <div className="flex flex-col items-center">
        <Link to={"/search"} className="p-2 rounded-full">
          {pathname == "/search" ? (
            <RiSearchFill className="w-6 h-6 text-white" />
          ) : (
            <RiSearch2Line className="w-6 h-6 text-white" />
          )}
        </Link>
        <span className="w-full text-center text-white text-sm">Search</span>
      </div>
      <div className="flex flex-col items-center">
        <Link to={"/search"} className="p-2 rounded-full">
          {pathname == "/search" ? (
            <SiLibrariesdotio className="w-6 h-6 text-white" />
          ) : (
            <SiLibrariesdotio className="w-6 h-6 text-white" />
          )}
        </Link>
        <span className="w-full text-center text-white text-sm">Library</span>
      </div>
      <div className="flex flex-col items-center">
        <Link to={"/search"} className="p-2 rounded-full">
            <FaSpotify className="w-6 h-6 text-white" />
        </Link>
        <span className="w-full text-center text-white text-sm">Download</span>
      </div>
    </div>
  );
};

export default MobileNav;
