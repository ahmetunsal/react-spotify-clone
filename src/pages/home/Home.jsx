import React, { useEffect, useState } from "react";
import FilterTabs from "../../components/filter/FilterTabs";
import Section from "../../components/homeSections/Section";
import CardList from "../../lists/artistList/CardList";
import { getArtistList, getRecommendSpo } from "../../data/get";
import ArtistCard from "../../components/player/artist/ArtistCard";
import AlbumCard from "../../components/player/artist/AlbumCard";
import Footer from "../../components/footer/Footer";
import Loading from "../../components/loading/Loading";
import PlaylistCard from "../../components/player/artist/PlaylistCard";
import { Helmet } from "react-helmet";

const Home = () => {

  const [artistsList, setArtistsList] = useState();
  const [recommendList, setRecommendList] = useState();

  useEffect(() => {
    const artistsRes = async () => {
      const data = await getArtistList();
      const limitedData = data && data.artists.slice(0,12);
      setArtistsList(limitedData);
      return true;
    }
    
    const recommendRes = async () => {
      const data = await getRecommendSpo();
      console.log(data);
      const limitedData = data && data.tracks.slice(0,12);
      setRecommendList(limitedData);
      return true;
    }

    artistsRes();
    recommendRes();
  }, []);

  if(!artistsList || !recommendList) return <Loading />;

  return (
    <div style={{
      background: "linear-gradient(#4d4d4d, rgb(9 9 11) 25%)"
    }} className="flex flex-col max-h-full ps-10 pb-20 pt-5 gap-5 rounded-lg bg-zinc-950 overflow-auto ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Spotify - Web Player: Herkes için müzik</title>
        <link rel="canonical" href={`http://open.spotify.com/`} />
      </Helmet>
      <div className="flex">
        <FilterTabs />
      </div>
      <div className="flex flex-col w-full max-h-full gap-10 pt-5 overflow-y-auto">
        <Section title={"Senin için öneriler"}>
          <CardList>
            {artistsList.map((artist, i) => {
              return <ArtistCard key={i} artistInfo={artist} />;
            })}
          </CardList>
        </Section>
        <Section title={"Tavsiye edilen oynatma listeleri"}>
          <CardList>
            {recommendList.map((cardInfo, i) => {
              return <PlaylistCard key={i} cardInfo={cardInfo} />;
            })}
          </CardList>
        </Section>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
