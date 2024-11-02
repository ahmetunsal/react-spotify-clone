import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoPlayCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

const ArtistCard = ({ artistInfo }) => {
  return (
    <div className="flex relative flex-shrink-0 z-0 group flex-col from-transparent hover:from-zinc-800 to-transparent bg-gradient-to-t duration-200 ease-in-out rounded-md p-4 gap-4">
      <a href={`/artist/${artistInfo.id}`} className="hoverCard">
        <img  
          src={artistInfo.images[0].url}
          alt={artistInfo.name}
          className="w-48 h-48 rounded-full select-none pointer-events-none"
        />
        <div className="w-full flex flex-col justify-center mt-2">
          <h6 className="text-xl gabarito-600">{artistInfo.name}</h6>
          <p className="text-base gabarito opacity-65">Sanatçı</p>
        </div>
      </a>
      <button className="absolute bottom-10 opacity-0 group-hover:bottom-1/4 group-hover:opacity-100 hover:scale-105 duration-200 right-2 z-50">
        <IoPlayCircle className="w-16 h-16 text-green-500" />
      </button>
    </div>
  );
};

export default ArtistCard;
