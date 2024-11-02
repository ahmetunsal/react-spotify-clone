import React, { useEffect, useState } from "react";

const GenreCard = ({ genre, color }) => {
  return (
    <div
    style={{
        backgroundColor: color
    }}
    className="w-80 min-h-44 py-2 px-4 rounded-md">
      <div className="text-3xl mix-blend-difference">
        {genre[0].toUpperCase() + genre.slice(1)}
      </div>
    </div>
  );
};

export default GenreCard;
