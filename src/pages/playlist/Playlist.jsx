import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getAlbum,
  getAlbumTracks,
  getArtist,
  getArtistAlbums,
  getArtistTopTracks,
  getRelatedArtistList,
  getRelatedTracks,
  getTracks,
} from "../../data/get";
import { PiPlusCircle, PiSealCheckFill } from "react-icons/pi";
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
import Loading from "../../components/loading/Loading";
import { Helmet } from "react-helmet";

const Playlist = () => {
  const { playlistId } = useParams();
  const [playlist, setPlaylist] = useState();
  const [tracks, setTracks] = useState();
  const [artistAlbums, setArtistAlbums] = useState();
  const [color, setColor] = useState("");

  useEffect(() => {
    const playlistList = async () => {
      const recievedPlaylist = await getTracks(playlistId);
      console.log(recievedPlaylist);
      setPlaylist(recievedPlaylist);
      setTracks([recievedPlaylist]);
    };

    playlistList();
  }, [playlistId]);

  useEffect(() => {
    if (!playlist) return;
    const artistAlbums = async () => {
      const recievedAlbums = await getArtistAlbums(playlist.artists[0].id);
      console.log("ARTIST",recievedAlbums);
      setArtistAlbums(recievedAlbums);
    };

    artistAlbums();
  }, [playlist]);

  if (!playlist || !tracks || !artistAlbums) return <Loading />;

  return (
    <div
      style={{
        background: `linear-gradient(${
          color ? `rgb(${color})` : "#4f4f4f"
        }, rgb(9 9 11) 25%)`,
      }}
      className="flex flex-col min-h-full ps-3 md:ps-10 pb-20 pt-5 gap-5 rounded-lg bg-zinc-950 overflow-y-auto md:overflow-auto"
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>{playlist.name} - {playlist.type[0].toUpperCase() + playlist.type.slice(1)} - {playlist.artists[0].name} | Spotify playlist</title>
        <link rel="canonical" href={`http://open.spotify.com/playlist/${playlist.id}`} />
      </Helmet>
      <div className="w-full flex flex-col gap-10 md:gap-0 md:flex-row items-center mt-5">
        <div className="flex">
          <img
            className="w-32 h-32 md:w-52 md:h-52 rounded-md"
            src={playlist.album?.images[0].url || playlist.images[0].url}
            alt=""
          />
        </div>
        <div className="w-full md:w-auto flex flex-col ps-2 md:ps-5">
          <div className="hidden md:flex items-center gap-2">{playlist.type[0].toUpperCase() + playlist.type.slice(1)}</div>
          <h1 className="text-xl md:text-7xl gabarito-600">{playlist.name}</h1>
          <div className="flex gap-2">
            <span className="text-base">
              {playlist.artists[0].name}
            </span>{" "}    
            <span className="text-base">{ playlist.total_tracks && "•" + playlist.total_tracks}</span>{" "}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="hover:scale-105 duration-200 right-2 z-50">
          <IoPlayCircle className="w-16 h-16 md:w-20 md:h-20 text-green-500" />
        </button>
        <div className="flex gap-4 items-center">
          <button className="flex hover:scale-105 duration-200">
            <PiPlusCircle className="h-10 w-10 opacity-80" />
          </button>
          <button className="h-6 py-4 flex items-center rounded-full hover:scale-105 duration-200">
            <HiDotsHorizontal className=" w-7 h-7" />
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-4 mb-10">
          <div className="flex flex-col pe-3">
            <table className="table-auto">
              <thead>
                <tr className="w-full group/alblist flex items-center py-3 px-3 gap-4 rounded-md">
                  <td className="w-2">#</td>
                  <td className="w-2/3">Başlık</td>
                  <td className="w-1/3 flex items-end px-2 justify-end self-end text-end">
                    <GoClockFill className="self-end" />
                  </td>
                </tr>
              </thead>
              <tbody className="">
                {tracks.map((track, i) => {
                  return (
                    <tr
                      key={i}
                      className="w-full group/alblist hover:bg-zinc-700 flex items-center py-2 px-3 gap-4 rounded-md"
                    >
                      <td className="flex">
                        <span className="w-4 h-4 group-hover/alblist:hidden text-base">
                          {i + 1}
                        </span>
                        <span className="group-hover/alblist:flex hidden">
                          <IoPlay className="w-4 h-4" />
                        </span>
                      </td>

                      <td className="w-full flex flex-col items-center">
                        <span className="w-full">{track.name}</span>
                        <span className="w-full text-sm p-0">{track.artists.map((artist,i) => track.artists.length -1 == i ? 
                        <Link key={artist.id} to={`/artist/${artist.id}`}>
                          {`${artist.name}`}
                        </Link> :
                        <Link key={artist.id} to={`/artist/${artist.id}`}>
                          {`${artist.name}, `}
                        </Link>
                        )}</span>
                      </td>

                      <td className="w-1/12 text-end">
                        {formatTime(track.duration_ms)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-full mt-10 mb-10">
          <Section title={`Daha fazla ${artistAlbums.items?.[0]?.artists?.[0]?.name || playlist.artists[0].name}`}>
            <CardList>
              {artistAlbums.items && artistAlbums.items.slice(0,Math.round(Math.random() * 10)).map((cardInfo, i) => {
                return <AlbumCard key={i} cardInfo={cardInfo} />;
              })}
            </CardList>
          </Section>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Playlist;
