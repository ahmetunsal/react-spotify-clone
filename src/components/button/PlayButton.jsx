import React from "react";
import { IoPlayCircle } from "react-icons/io5";

const PlayButton = () => {
  return (
    <button className="absolute bottom-10 opacity-0 group-hover:bottom-1/4 group-hover:opacity-100 hover:scale-105 duration-200 right-2 z-50">
      <IoPlayCircle className="w-16 h-16 text-green-500" />
    </button>
  );
};

export default PlayButton;
