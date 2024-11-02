
import axios from 'axios'


const apiKey = "3211c2cfb098bcb1898305d3629dc6aa";
const spoApiKey = "SPOTIFY_API_KEY";
const myurl = `https://api.spotify.com/v1/artists?ids=7rEIUw67hRTgievwuKQGSj,7gobcoscOfsY0nOeqqFzvU`;



export const getGenres = async () => {
    let data;
    const url = `https://api.spotify.com/v1/recommendations/available-genre-seeds`;
    await axios.get(url, {
        headers: {
            Authorization: `Bearer  ${spoApiKey}`
        }
    })
        .then(res => {
            data = res.data
        })
        .catch(e => console.error(e));
    return data;
}

export const getTracks = async (albumId) => {
    let data;
    const url = `https://api.spotify.com/v1/tracks/${albumId}`;
    await axios.get(url, {
        headers: {
            Authorization: `Bearer  ${spoApiKey}`
        }
    })
        .then(res => {
            data = res.data
        })
        .catch(e => console.error(e));
    return data;
}

export const getAlbum = async (albumId) => {
    let data;
    const url = `https://api.spotify.com/v1/albums/${albumId}`;
    await axios.get(url, {
        headers: {
            Authorization: `Bearer  ${spoApiKey}`
        }
    })
        .then(res => {
            data = res.data
        })
        .catch(e => console.error(e));
    return data;
}

export const getAlbumTracks = async (albumId) => {
    let data;
    const url = `https://api.spotify.com/v1/albums/${albumId}/tracks`;
    await axios.get(url, {
        headers: {
            Authorization: `Bearer  ${spoApiKey}`
        }
    })
        .then(res => {
            data = res.data
        })
        .catch(e => console.error(e));
    return data;
}

export const getArtist = async (artistId) => {
    let data;
    const url = `https://api.spotify.com/v1/artists/${artistId}`;
    await axios.get(url, {
        headers: {
            Authorization: `Bearer  ${spoApiKey}`
        }
    })
        .then(res => {
            data = res.data
        })
        .catch(e => console.error(e));
    return data;
}

export const getArtistAlbums = async (artistId) => {
    let data;
    const url = `https://api.spotify.com/v1/artists/${artistId}/albums`;
    await axios.get(url, {
        headers: {
            Authorization: `Bearer  ${spoApiKey}`
        }
    })
        .then(res => {
            data = res.data
        })
        .catch(e => console.error(e));
    return data;
}

export const getArtistTopTracks = async (artistId) => {
    let data;
    const url = `https://api.spotify.com/v1/artists/${artistId}/top-tracks`;
    await axios.get(url, {
        headers: {
            Authorization: `Bearer  ${spoApiKey}`
        }
    })
        .then(res => {
            data = res.data
        })
        .catch(e => console.error(e));
    return data;
}

export const getRelatedArtistList = async (artistId) => {
    let data;
    const url = `https://api.spotify.com/v1/artists/${artistId}/related-artists`;
    await axios.get(url, {
        headers: {
            Authorization: `Bearer  ${spoApiKey}`
        }
    })
        .then(res => {
            data = res.data
        })
        .catch(e => console.error(e));
    return data;
}

export const getArtistList = async () => {
    let data;
    const url = `https://api.spotify.com/v1/artists/7rEIUw67hRTgievwuKQGSj/related-artists`;
    await axios.get(url, {
        headers: {
            Authorization: `Bearer  ${spoApiKey}`
        }
    })
        .then(res => {
            data = res.data
        })
        .catch(e => console.error(e));
    return data;
}


export const getRelatedTracks = async (artistId, artistFirstTrack, genres) => {
    let data;
    console.log(genres.join(',').replace(" ", ","));
    console.log(artistFirstTrack);
    const url = `https://api.spotify.com/v1/recommendations?seed_artists=${artistId}&seed_genres=${"turkish"}&seed_tracks=${artistFirstTrack.id}`;
    await axios.get(url, {
        headers: {
            Authorization: `Bearer  ${spoApiKey}`
        }
    })
        .then(res => {
            data = res.data
        })
        .catch(e => console.error(e));
    return data;
}

export const getRecommendSpo = async () => {
    let data;
    const url = `https://api.spotify.com/v1/recommendations?seed_artists=7rEIUw67hRTgievwuKQGSj&seed_genres=pop,rock,rap&seed_tracks=37i9dQZF1DXdnOj1VEuhgb&market=TR`;
    await axios.get(url, {
        headers: {
            Authorization: `Bearer  ${spoApiKey}`
        }
    })
        .then(res => {
            data = res.data
        })
        .catch(e => console.error(e));
    return data;
}


export const getArtists = async () => {
    let data;
    // http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=3211c2cfb098bcb1898305d3629dc6aa&format=json
    // http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=YOUR_API_KEY&format=json
    // http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${apiKey}&format=json
    await axios.get(`https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=maNga&api_key=${apiKey}&format=json`)
        .then(res => {
            console.log(res);
            data = res.data
        })
        .catch(e => {
            console.error(e);
            alert("Bir sorun oluştu..");
            throw Error(`GET -> getArtists methodunda hata. \n${e}`);
        })

    return data;
}



/** BU ARTIST PAGE'DE İŞE YARAR */

// useEffect(() => {
//     const mbid = artistInfo.mbid;
//     if (mbid) {
//       const url =
//         "https://musicbrainz.org/ws/2/artist/" +
//         mbid +
//         "?inc=url-rels&fmt=json";
//       fetch(url)
//         .then((res) => res.json())
//         .then((out) => {
//           const relations = out.relations;
//           for (let i = 0; i < relations.length; i++) {
//             if (relations[i].type === "image") {
//               let image_url = relations[i].url.resource;
//               if (
//                 image_url.startsWith("https://commons.wikimedia.org/wiki/File:")
//               ) {
//                 const filename = image_url.substring(
//                   image_url.lastIndexOf("/") + 1
//                 );
//                 image_url =
//                   "https://commons.wikimedia.org/wiki/Special:Redirect/file/" +
//                   filename;
//               }
//               setArtistImg(image_url)
//             }
//           }
//         })
//         .catch((err) => {
//           throw console.log(err);
//         });
//     }
//   }, []);



/*** 
TABLE
<table className="table-auto">
    <thead>
        <tr>
            <th className="text-start w-5">#</th>
            <th className="text-start">Başlık</th>
            <th className="text-start">Albüm</th>
            <th className="text-start">Eklenme Tarihi</th>
            <th className="text-start">
                <GoClockFill />
            </th>
        </tr>
    </thead>
    <tbody>
        {
            albumsList.map((album, i) => {
                return (
                    <tr className="hover:bg-zinc-700 flex py-2 gaa">
                        <td>{i}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                )
            })
        }
    </tbody>
</table>

*/





