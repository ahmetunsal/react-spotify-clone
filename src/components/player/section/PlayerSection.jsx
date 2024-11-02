import React from "react";
import { FaShuffle } from "react-icons/fa6";
import { BiSkipPrevious, BiSkipNext, BiRepeat } from "react-icons/bi";
import { FaPlayCircle } from "react-icons/fa";
import { IoPlayCircle } from "react-icons/io5";
import RangeSlider from "../rangeSlider/RangeSlider";

const PlayerSection = () => {
  return (
    <div className="w-1/3 flex flex-col p-2 gap-2 ms-32">
      <div className="flex items-center justify-center gap-3">
        <button className="opacity-65 hover:opacity-100 duration-100 ease-in">
          <FaShuffle className="w-4 h-4" />
        </button>
        <button className="opacity-65 hover:opacity-100 duration-100 ease-in">
          <BiSkipPrevious className="w-9 h-9" />
        </button>
        <button className="hover:scale-105 duration-100 ease-in">
          <IoPlayCircle className="w-10 h-10" />
        </button>
        <button className="opacity-65 hover:opacity-100 duration-100 ease-in">
          <BiSkipNext className="w-9 h-9" />
        </button>
        <button className="opacity-65 hover:opacity-100 duration-100 ease-in">
          <BiRepeat className="w-5 h-5 rotate-180" />
        </button>
      </div>
      <div className="flex items-center gap-2">
        <span className="opacity-65 text-sm select-none">1:06</span>
        <RangeSlider className="group-hover:bg-green-500" />
        <span className="opacity-65 text-sm select-none">3:04</span>
      </div>
    </div>
  );
};

export default PlayerSection;
