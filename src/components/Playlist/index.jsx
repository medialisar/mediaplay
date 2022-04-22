import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import spotifyApi from '../../services/spotify.api';
import { addPlaylists } from "../../features/playlist/playlistSlice";

const Playlist = () => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);
  const playlists = useSelector((state) => state.playlists);

  const getPlaylists = async () => {
    const token = window.localStorage.getItem('token');
    const Authorization = `Bearer ${token}`;
    const url = `https://api.spotify.com/v1/me/playlists?limit=50`;
    const response = await spotifyApi
    .get(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization
      }
    })
    .catch((err) => {
      console.log('Err : ', err);
    });
    console.log("playlist", response)
    console.log('response playlist from API : ', response.data.items);
    dispatch(addPlaylists(response.data.items));
    setLoading(false);
};

  useEffect(() => {
    getPlaylists();
  }, []);

  const renderPlaylistCard = () => {
    console.log("play ", playlists)
    if (!isLoading) {
      if (playlists.songs.length < 1) {
        return <p>playlist not found.</p>;
      }
      
      return playlists.songs.map((data) => {
        return (
          <>
            <div key={ data.id }>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img 
                    src={ data.images[0]?.url }
                    alt= "song image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <p className="title is-4">{ data.name }</p>
                <p className="subtitle is-6">{ data.tracks.total } Songs</p>
              </div>
              <footer className="card-footer">
                <a href="#" className="card-footer-item">Select</a>
                <a href="#" className="card-footer-item">Detail</a>
              </footer>
            </div>
            </div>
          </>
          
        );
      });
    }
    return null;
  }
  return (
    <>
      <h2 className="title is-2">My Playlist</h2>
      <div className="songs-container">
      { renderPlaylistCard() }
      </div>
    </>
  )
};

export default Playlist