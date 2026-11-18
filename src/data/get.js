import axios from "axios";
import { fallbackArtists, fallbackGenres, fallbackTracks } from "./fallback.js";

const baseUrl = "/api/deezer";
const turkeyPlaylistId = "10418162482";
const defaultImage = "https://cdn-images.dzcdn.net/images/artist/b0154dcf6895bb174cc2ba061f20481c/500x500-000000-80-0-0.jpg";

const mapArtist = (artist) => ({
  id: String(artist?.id || ""),
  name: artist?.name || "Bilinmeyen Sanatçı",
  type: "artist",
  followers: { total: artist?.nb_fan || 100000 },
  genres: ["turkish", "pop"],
  images: [
    {
      url:
        artist?.picture_big ||
        artist?.picture_xl ||
        artist?.picture_medium ||
        artist?.picture ||
        defaultImage,
    },
  ],
});

const mapAlbum = (album, artist) => ({
  id: String(album?.id || ""),
  name: album?.title || album?.name || "Bilinmeyen Albüm",
  album_type: album?.record_type || album?.album_type || "album",
  total_tracks: album?.nb_tracks || 1,
  release_date: album?.release_date || "2024-01-01",
  images: [
    {
      url:
        album?.cover_big ||
        album?.cover_xl ||
        album?.cover_medium ||
        album?.cover ||
        defaultImage,
    },
  ],
  artists: artist
    ? [{ id: String(artist.id), name: artist.name }]
    : album?.artist
    ? [{ id: String(album.artist.id), name: album.artist.name }]
    : [{ id: "5331963", name: "Sanatçı" }],
});

const mapTrack = (track, fallbackArtist, fallbackAlbum) => {
  const artistObj = track?.artist || fallbackArtist;
  const albumObj = track?.album || fallbackAlbum;
  const contributors =
    track?.contributors && track.contributors.length > 0
      ? track.contributors
      : artistObj
      ? [artistObj]
      : [];

  return {
    id: String(track?.id || ""),
    name: track?.title || track?.name || "Bilinmeyen Parça",
    type: "track",
    duration_ms: (track?.duration || 180) * 1000,
    preview_url: track?.preview || "",
    artists: contributors.map((a) => ({ id: String(a.id), name: a.name })),
    album: mapAlbum(albumObj, artistObj),
    images: [
      {
        url:
          albumObj?.cover_big ||
          albumObj?.cover_medium ||
          artistObj?.picture_big ||
          defaultImage,
      },
    ],
  };
};

export const getGenres = async () => {
  try {
    const res = await axios.get(`${baseUrl}/genre`);
    if (res.data?.data && !res.data.error) {
      const genres = res.data.data
        .filter((g) => g.id !== 0 && g.name)
        .map((g) => g.name);
      if (genres.length > 0) return { genres };
    }
  } catch (e) {
    console.error(e);
  }
  return { genres: fallbackGenres };
};

export const getTracks = async (trackId) => {
  try {
    const res = await axios.get(`${baseUrl}/track/${trackId}`);
    if (res.data && !res.data.error) {
      return mapTrack(res.data);
    }
  } catch (e) {
    console.error(e);
  }
  return fallbackTracks.find((t) => t.id === String(trackId)) || fallbackTracks[0];
};

export const getAlbum = async (albumId) => {
  try {
    const res = await axios.get(`${baseUrl}/album/${albumId}`);
    if (res.data && !res.data.error) {
      const album = mapAlbum(res.data, res.data.artist);
      if (res.data.contributors?.length > 0) {
        album.artists = res.data.contributors.map((a) => ({
          id: String(a.id),
          name: a.name,
        }));
      }
      return album;
    }
  } catch (e) {
    console.error(e);
  }
  const found = fallbackTracks.find((t) => t.album.id === String(albumId));
  return found ? found.album : fallbackTracks[0].album;
};

export const getAlbumTracks = async (albumId) => {
  try {
    const res = await axios.get(`${baseUrl}/album/${albumId}/tracks`);
    if (res.data?.data && !res.data.error) {
      return {
        items: res.data.data.map((track) => mapTrack(track)),
      };
    }
  } catch (e) {
    console.error(e);
  }
  return { items: fallbackTracks.slice(0, 5) };
};

export const getArtist = async (artistId) => {
  try {
    const res = await axios.get(`${baseUrl}/artist/${artistId}`);
    if (res.data && !res.data.error) {
      return mapArtist(res.data);
    }
  } catch (e) {
    console.error(e);
  }
  return fallbackArtists.find((a) => a.id === String(artistId)) || fallbackArtists[0];
};

export const getArtistAlbums = async (artistId) => {
  try {
    const [albumsRes, artistRes] = await Promise.all([
      axios.get(`${baseUrl}/artist/${artistId}/albums?limit=12`),
      axios.get(`${baseUrl}/artist/${artistId}`),
    ]);

    if (albumsRes.data?.data && !albumsRes.data.error) {
      const artist = artistRes.data && !artistRes.data.error ? artistRes.data : { id: artistId, name: "Sanatçı" };
      return {
        items: albumsRes.data.data.map((album) => mapAlbum(album, artist)),
      };
    }
  } catch (e) {
    console.error(e);
  }
  return { items: fallbackTracks.map((t) => t.album) };
};

export const getArtistTopTracks = async (artistId) => {
  try {
    const res = await axios.get(`${baseUrl}/artist/${artistId}/top?limit=10`);
    if (res.data?.data && !res.data.error) {
      return {
        tracks: res.data.data.map((track) => mapTrack(track)),
      };
    }
  } catch (e) {
    console.error(e);
  }
  return { tracks: fallbackTracks.slice(0, 5) };
};

export const getRelatedArtistList = async (artistId) => {
  try {
    const res = await axios.get(`${baseUrl}/artist/${artistId}/related?limit=12`);
    if (res.data?.data && !res.data.error && res.data.data.length > 0) {
      return {
        artists: res.data.data.map(mapArtist),
      };
    }
  } catch (e) {
    console.error(e);
  }

  const trList = await getArtistList();
  return {
    artists: trList.artists.filter((a) => a.id !== String(artistId)).slice(0, 12),
  };
};

export const getArtistList = async () => {
  try {
    const res = await axios.get(`${baseUrl}/playlist/${turkeyPlaylistId}/tracks?limit=50`);
    if (res.data?.data && !res.data.error) {
      const uniqueMap = new Map();
      for (const track of res.data.data) {
        if (track.artist && !uniqueMap.has(String(track.artist.id))) {
          uniqueMap.set(String(track.artist.id), mapArtist(track.artist));
        }
      }
      const artists = Array.from(uniqueMap.values());
      if (artists.length > 0) return { artists };
    }
  } catch (e) {
    console.error(e);
  }
  return { artists: fallbackArtists };
};

export const getRelatedTracks = async (artistId, artistFirstTrack) => {
  try {
    const res = await axios.get(`${baseUrl}/playlist/${turkeyPlaylistId}/tracks?limit=25`);
    if (res.data?.data && !res.data.error) {
      const tracks = res.data.data
        .filter((t) => String(t.id) !== String(artistFirstTrack?.id))
        .slice(0, 12)
        .map((track) => mapTrack(track));
      if (tracks.length > 0) return { tracks };
    }
  } catch (e) {
    console.error(e);
  }
  return { tracks: fallbackTracks };
};

export const getRecommendSpo = async () => {
  try {
    const res = await axios.get(`${baseUrl}/playlist/${turkeyPlaylistId}/tracks?limit=25`);
    if (res.data?.data && !res.data.error) {
      return {
        tracks: res.data.data.map((track) => mapTrack(track)),
      };
    }
  } catch (e) {
    console.error(e);
  }
  return { tracks: fallbackTracks };
};
