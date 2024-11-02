
import axios from 'axios'

const spoApiKey = "SPOTIFY_API_KEY_HERE";
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



