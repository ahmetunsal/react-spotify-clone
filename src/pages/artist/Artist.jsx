import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getArtist,
  getArtistAlbums,
  getArtistTopTracks,
  getRelatedArtistList,
  getRelatedTracks,
} from "../../data/get";
import { PiSealCheckFill } from "react-icons/pi";
import { IoPlay, IoPlayCircle } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";
import { GoClockFill } from "react-icons/go";
import Section from "../../components/homeSections/Section";
import ArtistCard from "../../components/player/artist/ArtistCard";
import CardList from "../../lists/artistList/CardList";
import prettyMilliseconds from "pretty-ms";
import Footer from "../../components/footer/Footer";
import { formatTime } from "../../data/functions";
import AlbumCard from "../../components/player/artist/AlbumCard";
import PlaylistCard from "../../components/player/artist/PlaylistCard";
import Loading from "../../components/loading/Loading";
import { Helmet } from "react-helmet";

const Artist = () => {
  const { artistId } = useParams();
  const [artist, setArtist] = useState();
  const [relatedArtistList, setRelatedArtistList] = useState();
  const [albumsList, setAlbumsList] = useState();
  const [topTracks, setTopTracks] = useState();
  const [relatedTracks, setRelatedTracks] = useState();
  const [color, setColor] = useState("");

  useEffect(() => {
    const artistList = async () => {
      const recievedArtist = await getArtist(artistId);
      console.log(recievedArtist);
      setArtist(recievedArtist);
    };

    const relatedArtistList = async () => {
      const recievedRelatedArtistList = await getRelatedArtistList(artistId);
      setRelatedArtistList(recievedRelatedArtistList);
    };

    const artistAlbums = async () => {
      const artistAlbumList = await getArtistAlbums(artistId);
      //   console.log(artistAlbumList.items);
      setAlbumsList(artistAlbumList.items);
    };

    const artistTopTracks = async () => {
      const artistTopTracksList = await getArtistTopTracks(artistId);
      console.log(artistTopTracksList);
      setTopTracks(artistTopTracksList.tracks);
    };

    const generateRandomColor = () => {
      let myColor = "";
      for (let i = 0; i < 2; i++) {
        myColor += " ";
        myColor += Math.round(Math.random() * 255);
      }
      setColor(myColor);
    };
    generateRandomColor();
    artistList();
    relatedArtistList();
    artistAlbums();
    artistTopTracks();
  }, [artistId]);

  useEffect(() => {
    if (!topTracks || !artist) return;
    console.log(topTracks);
    const relatedTracksList = async () => {
      const relatedTracks = await getRelatedTracks(
        artistId,
        topTracks && topTracks[0],
        artist && artist.genres
      );
      console.log("BURASI GELİYOR MU", relatedTracks.tracks);
      setRelatedTracks(relatedTracks.tracks);
    };

    relatedTracksList();
  }, [topTracks, artist]);

  if (!artist || !relatedArtistList || !topTracks || !relatedTracks)
    return (
      <div
        style={{
          background: `linear-gradient(${
            color ? `rgb(${color})` : "#4f4f4f"
          }, rgb(9 9 11) 25%)`,
        }}
        className="flex flex-col h-full ps-10 pb-20 pt-5 gap-5 rounded-lg bg-zinc-950 overflow-auto "
      >
        <Loading />
      </div>
    );

  return (
    <div
      style={{
        background: `linear-gradient(${
          color ? `rgb(${color})` : "#4f4f4f"
        }, rgb(9 9 11) 25%)`,
      }}
      className="flex flex-col max-h-full ps-2 md:ps-10 pb-20 pt-5 gap-5 rounded-lg bg-zinc-950 overflow-auto "
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>{artist.name} | Spotify</title>
        <link rel="canonical" href={`http://open.spotify.com/artist/${artist.id}`} />
      </Helmet>
      <div className="w-full flex flex-col gap-10 md:gap-0 md:flex-row items-center mt-5">
        <div className="flex">
          <img
            className="w-32 h-32 md:w-52 md:h-52 rounded-full"
            src={artist.images[0].url}
            alt=""
          />
        </div>
        <div className="w-full md:w-auto flex flex-col ps-2 md:ps-5">
          <div className="hidden md:flex items-center gap-2">
            {artist.type == "artist" && (
              <>
                <PiSealCheckFill className="w-7 h-7 text-blue-500" />
                <span className="opacity-85">Doğrulanmış Sanatçı</span>
              </>
            )}
          </div>
          <h1 className="text-4xl md:text-7xl gabarito-600">{artist.name}</h1>
          <div className="flex mt-3">
            <span className="text-base">{artist.followers.total.toLocaleString("tr-TR")} Takipçi</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="hover:scale-105 duration-200 right-2 z-50">
          <IoPlayCircle className="w-16 h-16 md:w-20 md:h-20 text-green-500" />
        </button>
        <div className="flex gap-4">
          <button className="h-6 py-4 px-5 flex items-center border border-zinc-600 rounded-full hover:scale-105 duration-200">
            Takip Et
          </button>
          <button className="h-6 py-4 flex items-center rounded-full hover:scale-105 duration-200">
            <HiDotsHorizontal className=" w-7 h-7" />
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-4 mb-10">
          <h2 className="text-3xl gabarito-600">Popüler</h2>
          <div className="flex flex-col pe-3">
            <table className="table-auto">
              <tbody className="">
                {topTracks.map((tracks, i) => {
                  return (
                    <tr
                      key={i}
                      className="w-full group/alblist hover:bg-zinc-700 flex items-center py-3 px-3 gap-4 rounded-md"
                    >
                      <td className="flex">
                        <span className="w-4 h-4 group-hover/alblist:hidden text-base">
                          {i + 1}
                        </span>
                        <span className="group-hover/alblist:flex hidden">
                          <IoPlay className="w-4 h-4" />
                        </span>
                      </td>
                      <td className="w-full flex items-center gap-3">
                        <img
                          className="w-12 rounded-sm"
                          src={tracks.album.images[0].url}
                          alt=""
                        />
                        <div className="flex flex-col">{tracks.name}</div>
                      </td>
                      <td className="w-full text-end">
                        {formatTime(tracks.duration_ms)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col gap-10 mb-10">
          <Section title={"Hayranlarının hoşlandığı"}>
            <CardList>
              {relatedArtistList.artists.map((artist, i) => {
                return <ArtistCard artistInfo={artist} key={i} />;
              })}
            </CardList>
          </Section>
          <Section title={`Önerilen çalma listeleri`}>
            <CardList>
              {relatedTracks.map((cardInfo, i) => {
                return <PlaylistCard key={i} cardInfo={cardInfo} />;
              })}
            </CardList>
          </Section>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Artist;
