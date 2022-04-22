import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePlaylist } from "../../features/playlist/playlistSlice";

const Playlist = () => {
    const playlists = useSelector((state) => state.playlist.updatePlaylist);
    const dispatch = useDispatch();

    useEffect(() => {
      getPlaylists();
    }, []);

    const getPlaylists = async () => {
      const token = window.localStorage.getItem('token');
      const Authorization = `Bearer ${token}`;
      const playlists = await fetch(`https://api.spotify.com/v1/me/playlists?limit=50`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization
      }
    })
        .then((res) => res.json())
        .then((res) => res.data);
        dispatch(updatePlaylist(playlists));
        console.log("playlist", playlists)
    };


  return (
    <>
      <h1>Trending</h1>
      <div className="songs-container">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img 
                // src={ images }
                alt= "song image"
              />
            </figure>
          </div>
          <div className="card-content">
            {/* <p className="title is-4">{ title }</p> */}
            {/* <p className="subtitle is-6">{ artist } | Durasi</p> */}
          </div>
          <footer className="card-footer">
            <a href="#" className="card-footer-item">Select</a>
            <a href="#" className="card-footer-item">Detail</a>
          </footer>
        </div>
      </div>
    </>
  )
};

export default Playlist