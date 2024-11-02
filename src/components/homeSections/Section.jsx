import React, { useEffect, useState } from "react";
import CardList from '../../lists/artistList/CardList'
import ArtistCard from '../../components/player/artist/ArtistCard'
import { Link } from 'react-router-dom'
import { getArtists, getRecommendSpo } from "../../data/get";
import AlbumCard from "../player/artist/AlbumCard";

const Section = ({ children, title, showAll = true }) => {
  return (
    <div className="w-full flex flex-col gap-5 flex-shrink-0">
      <div className="flex justify-between pe-4">
        <h5 className="text-2xl md:text-3xl gabarito-600 hover:underline hover:cursor-pointer">
          {title}
        </h5>
        {
          showAll &&
          <Link className="text-base hidden md:flex hover:underline hover:cursor-pointer">
            Tümünü göster
          </Link>
        }
      </div>
      {children}
    </div>
  );
};

export default Section;
