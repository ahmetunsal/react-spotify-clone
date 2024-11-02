import React, { useEffect, useState } from "react";
import Section from "../../components/homeSections/Section";
import { getGenres } from "../../data/get";
import GenreCard from "../../components/genre/card/GenreCard";
import { randomColor } from "../../data/functions";

const Search = () => {
  const [prevSearches, setPrevSearches] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getGenreList();

    async function getGenreList() {
      const genreList = await getGenres();
      console.log(genreList.genres);
      setGenres(genreList.genres.slice(0, 40));
    }
  }, []);

  return (
    <div className="w-full h-full py-12 px-5">
      {prevSearches.length > 0 && (
        <Section title={"Yakındaki aramalar"} showAll={false}></Section>
      )}
      <Section title={"Hepsine göz at"} showAll={false}>
        <div className="w-full flex flex-wrap gap-y-8 gap-x-14 pb-36 justify-center md:justify-normal">
          {genres.map((genre) => {
            const randColor = randomColor();
            return <GenreCard key={genre} color={randColor} genre={genre} />;
          })}
        </div>
      </Section>
    </div>
  );
};

export default Search;
