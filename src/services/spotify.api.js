import axios from "axios";

export default axios.create({
  baseURL: "https://api.spotify.com/v1/",
})

export const searchSongs = async (searchValue) => {
  const token = window.localStorage.getItem('token');
  const Authorization = `Bearer ${token}`;
  const songs = await fetch(
    `https://api.spotify.com/v1/search?limit=50&q=track:${searchValue}&type=track`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization
      }
    }
  ).then((res) => res.json());
  console.log('lalala', songs);
  return songs.tracks.items;
};