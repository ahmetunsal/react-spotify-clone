import React from "react";
import { IoPlayCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

const PlaylistCard = ({ cardInfo }) => {
  console.log("CARDINFO", cardInfo);
  return (
    <div className="flex relative flex-shrink-0 z-0 group flex-col from-transparent hover:from-zinc-800 to-transparent bg-gradient-to-t duration-200 ease-in-out rounded-md p-4 gap-4">
      <Link to={`/playlist/${cardInfo.id}`} className="hoverCard">
        <img
          src={cardInfo?.album?.images[0].url || cardInfo.images[0].url}
          alt={cardInfo?.album?.name || cardInfo.name}
          className="w-48 h-48 rounded-md select-none pointer-events-none"
        />
        <div className="w-full flex-shrink-0 flex flex-col justify-center items-center mt-2">
          <h6 className="w-48 text-xl gabarito-600 hover:underline">
            {(cardInfo?.album?.name.length || cardInfo.name.length) > 17
              ? `${
                  cardInfo.album
                    ? cardInfo?.album?.name.slice(0, 17)
                    : cardInfo?.name.slice(0, 17)
                }...`
              : cardInfo.name}
          </h6>
          <p className="text-base gabarito opacity-65 self-start hover:underline">
            <span className="w-full text-sm p-0">
              {cardInfo.artists[0].name}
            </span>
          </p>
        </div>
      </Link>
      <button className="absolute bottom-10 opacity-0 group-hover:bottom-1/4 group-hover:opacity-100 hover:scale-105 duration-200 right-2 z-50">
        <IoPlayCircle className="w-16 h-16 text-green-500" />
      </button>
    </div>
  );
};

export default PlaylistCard;
