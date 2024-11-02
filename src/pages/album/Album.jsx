import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getAlbum,
  getAlbumTracks,
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
import Loading from "../../components/loading/Loading";
import { Helmet } from "react-helmet";

const Album = () => {
  const { albumId } = useParams();
  const [album, setAlbum] = useState();
  const [tracks, setTracks] = useState();
  const [artistAlbums, setArtistAlbums] = useState();
  const [color, setColor] = useState("");

  useState(() => {
    const albumList = async () => {
      const recievedAlbum = await getAlbum(albumId);
      console.log(recievedAlbum);
      setAlbum(recievedAlbum);
    };

    const tracksList = async () => {
      const recievedTracks = await getAlbumTracks(albumId);
      console.log(recievedTracks);
      setTracks(recievedTracks);
    };

    albumList();
    tracksList();
  }, []);

  useEffect(() => {
    const artistAlbums = async () => {
      const recievedAlbums = await getArtistAlbums(album.artists[0].id);
      console.log("ARTIST", recievedAlbums);
      setArtistAlbums(recievedAlbums);
    };

    artistAlbums();
  }, [album]);

  if (!album || !tracks || !artistAlbums) return <Loading />;

  return (
    <div
      style={{
        background: `linear-gradient(${
          color ? `rgb(${color})` : "#4f4f4f"
        }, rgb(9 9 11) 25%)`,
      }}
      className="flex flex-col max-h-full ps-10 pb-20 pt-5 gap-5 rounded-lg bg-zinc-950 overflow-auto "
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>{album.name} - {album.album_type[0].toUpperCase() + album.album_type.slice(1)} - {album.artists[0].name} | Spotify</title>
        <link rel="canonical" href={`http://open.spotify.com/album/${album.id}`} />
      </Helmet>
      <div className="flex items-center mt-5">
        <div className="flex">
          <img
            className="w-52 h-52 rounded-full"
            src={album.images[0].url}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-2 ps-5">
          <div className="flex items-center gap-2">
            {album.album_type[0].toUpperCase() + album.album_type.slice(1)}
          </div>
          <h1 className="text-7xl gabarito-600">{album.name}</h1>
          <div className="flex gap-2">
            <span className="text-base">
              {album.artists.map((artist) => `${artist.name}`)}
            </span>{" "}
            • <span className="text-base">{album.total_tracks} şarkı</span>{" "}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="hover:scale-105 duration-200 right-2 z-50">
          <IoPlayCircle className="w-20 h-20 text-green-500" />
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
                {tracks.items.map((track, i) => {
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
                        <div className="flex flex-col">{track.name}</div>
                      </td>

                      <td className="w-full text-end">
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
          <Section title={`Daha fazla ${album.artists[0].name}`}>
            <CardList>
              {artistAlbums.items &&
                artistAlbums.items.slice(0, 4).map((cardInfo, i) => {
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

export default Album;
