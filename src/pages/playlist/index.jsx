import React from "react";
import spotifyApi from "../../services/spotify.api";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addSongs } from "../../features/song/songsSlice";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = window.localStorage.getItem('token');
    const Authorization = `Bearer ${token}`;

    const fetchNewRealease = async () => {
      const response = await spotifyApi
        .get(`https://api.spotify.com/v1/browse/new-releases?country=SE&limit=10&offset=5`, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            Authorization
          }
        })
        .catch((err) => {
          console.log("Err : ", err)
        });
        console.log("response from API : ", response.data.albums.items);
        dispatch(addSongs(response.data));
    };
  
    fetchNewRealease();
  });
  return (
    <>
    </>
  )
}

export default Home;
