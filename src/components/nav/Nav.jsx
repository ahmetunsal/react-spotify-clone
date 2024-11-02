import React, { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa";
import { GoHome, GoHomeFill } from "react-icons/go";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { LiaRecordVinylSolid } from "react-icons/lia";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const [isFocused, setIsFocused] = useState(false);
  const location = useLocation();

  const { pathname } = location;

  const handleFocusChange = () => {
    setIsFocused(!isFocused);
  };

  return (
    <div className="w-full hidden md:flex items-center md:justify-between gap-4 text-white py-3 px-3">
      <div className="w-2/3 flex items-center md:justify-between gap-10">
        <div className="flex">
          <FaSpotify className="w-8 h-8 ms-4" />
        </div>
        <div className="flex gap-2">
          <div className="flex">
            <Link to={"/"} className="bg-zinc-800 p-2 rounded-full">
              {pathname == "/" ? (
                <GoHomeFill className="w-8 h-8" />
              ) : (
                <GoHome className="w-8 h-8" />
              )}
            </Link>
          </div>
          <Link
            to={"/search"}
            className={`searchBox bg-zinc-800 w-full flex items-center self-center p-2 gap-2 rounded-full relative ${
              isFocused && "active"
            }`}
          >
            <HiMiniMagnifyingGlass className="w-8 h-7 opacity-50" />
            <input
              onFocus={handleFocusChange}
              onBlur={handleFocusChange}
              type="text"
              className="group/search hidden md:flex w-96 h-full bg-transparent pb-1 outline-none border-r-2 border-opacity-20"
              placeholder="Ne aramak istemiştiniz?"
            />
            <button className="hidden md:flex opacity-70">
              <LiaRecordVinylSolid className="w-8 h-7" />
            </button>
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-4 md:gap-10 gabarito-600">
        <Link to={"/register"} className="bg-transparent font-bold">
          Kaydol
        </Link>
        <Link
          to={"/login"}
          className="bg-white text-sm md:text-base text-black font-bold rounded-full px-5 md:py-3"
        >
          Oturum Aç
        </Link>
      </div>
    </div>
  );
};

export default Nav;
