import React from "react";
import {
  PiSpeakerHighBold,
  PiSpeakerLowBold,
  PiSpeakerNone,
} from "react-icons/pi";
import { BsFilePlay, BsFilePlayFill } from "react-icons/bs";
import { TbMicrophone2 } from "react-icons/tb";
import { HiOutlineQueueList, HiQueueList } from "react-icons/hi2";
import { TbDevices2 } from "react-icons/tb";
import RangeSlider from "../rangeSlider/RangeSlider";
import { CgMiniPlayer } from "react-icons/cg";
import { RxSpeakerLoud } from "react-icons/rx";
import { FaExpandAlt } from "react-icons/fa";


const OtherControls = () => {
  const speakerIcon = [
    {
      min: 0,
      max: 33,
      icon: <RxSpeakerLoud className="w-4 h-4"/>,
    },
    {
      min: 34,
      max: 66,
      icon: <PiSpeakerLowBold className="w-6 h-6"/>,
    },
    {
      min: 67,
      max: 100,
      icon: <PiSpeakerHighBold className="w-6 h-6"/>,
    },
  ];

  return (
    <div className="flex gap-2 px-3">
      <button className="btnActive opacity-65 hover:opacity-100 duration-100 ease-in">
        {true ? (
          <BsFilePlay className="w-5 h-5" />
        ) : (
          <BsFilePlayFill className="w-5 h-5" />
        )}
      </button>
      <button className="btnActive opacity-65 hover:opacity-100 duration-100 ease-in">
        <TbMicrophone2 className="w-5 h-5" />
      </button>
      <button className="btnActive opacity-65 hover:opacity-100 duration-100 ease-in">
        {true ? (
          <HiOutlineQueueList className="w-6 h-6" />
        ) : (
          <HiQueueList className="w-6 h-6" />
        )}
      </button>
      <button className="btnActive opacity-65 hover:opacity-100 duration-100 ease-in">
        <TbDevices2 className="w-6 h-6" />
      </button>
      <div className="w-32 flex gap-2 items-center mx-2 group">
        <button>
            {speakerIcon[0].icon}
        </button>
        <RangeSlider className={`group-hover:bg-green-500`} />
      </div>
      <button className="btnActive opacity-65 hover:opacity-100 duration-100 ease-in">
          <CgMiniPlayer className="w-6 h-6" />
      </button>
      <button className="btnActive opacity-65 hover:opacity-100 duration-100 ease-in">
        <FaExpandAlt className="w-5 h-5"/>
      </button>
    </div>
  );
};

export default OtherControls;
