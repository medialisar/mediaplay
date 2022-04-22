import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar';
import SongCard from '../../components/SongCard';
import spotifyApi from '../../services/spotify.api';
import { useDispatch, useSelector } from 'react-redux';
import { addSongs } from '../../features/song/songsSlice';

const Home = () => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const songs = useSelector((state) => state.songs);

  const fetchNewRealease = async (searchValue = '') => {
    const token = window.localStorage.getItem('token');
    const Authorization = `Bearer ${token}`;
    const url = `https://api.spotify.com/v1/search?limit=50&q=track:${searchValue}&type=track`;
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
    console.log('response from API : ', response.data.tracks.items);
    dispatch(addSongs(response.data.tracks.items));
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);

    fetchNewRealease();
  }, []);

  const renderSongCard = () => {
    if (!isLoading) {
      if (songs.songs.length < 1) {
        return <p>Song not found.</p>;
      }

      return songs.songs.map((song) => {
        return (
          <SongCard
            key={ song.id }
            images={ song.album.images[0].url }
            title={ song.name }
            artist={ song.artists
              .reduce((prev, current) => prev + current.name + ', ', '')
              .slice(0, -2) }
            duration={ song.duration_ms }
          />
        );
      });
    }

    return null;
  };

  return (
    <>
      <div>
        <SearchBar
          onChange={ (e) => setSearchValue(e.target.value) }
          onSubmit={ (e) => {
            e.preventDefault();
            fetchNewRealease(searchValue);
          }}
        />
        <div className="songs-container">{ renderSongCard() }</div>
      </div>
    </>
  );
};

export default Home;
