import React from 'react';
import SongComponent from "../../components/Song";

function Login() {
  return (
    <>
      <div className="container cont-landing">
        <div className="content">
          <header className="header">
            <div className="header-logo logo">
              mediaPlay!
            </div>
            <div className="header-menu">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">My Playlist</a></li>
              </ul>
            </div>
          </header>
          <SongComponent />
        </div>
      </div>
    </>
  )
}

export default Login
