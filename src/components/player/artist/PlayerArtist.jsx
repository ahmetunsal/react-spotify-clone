import React from "react";
import { Link } from "react-router-dom";
import { IoAddCircle, IoAddCircleOutline } from "react-icons/io5";
import { CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";

const PlayerArtist = () => {
  return (
    <div className="flex items-center p-4 gap-5 ms-5">
      <div className="flex relative group">
        <img
          width={55}
          src="https://i.scdn.co/image/ab67616d0000b273cd5b7aeb775673f40fb865b5"
          alt=""
        />
        <button className="bg-transparent absolute opacity-0 group-hover:opacity-65  duration-200 ease-in top-0 right-0">
          <CiCircleChevUp className="w-7 h-7" />
        </button>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex flex-col">
          <Link to={"/"} className={`gabarito-600 text-sm hover:underline`}>
            Aklımı Kaçırdım
          </Link>
          <Link className="gabarito text-xs opacity-60 hover:underline">
            Mavi Gri
          </Link>
        </div>
        <div className="flex">
          <button className="bg-transparent">
            <IoAddCircleOutline className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerArtist;
