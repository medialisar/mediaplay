import React from 'react';
import {useEffect, useState} from 'react';

function Login() {
  const CLIENT_ID = 'ee416f8946944eac93de1274207f1dad';
  const REDIRECT_URI = 'http://localhost:3000';
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
  const RESPONSE_TYPE = 'token';
  const SCOPE = 'playlist-modify-private';

  const [token, setToken] = useState('');

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');

    if (!token && hash) {
      token = hash
        .substring(1)
        .split('&')
        .find((elem) => elem.startsWith('access_token'))
        .split('=')[1];

      window.location.hash = '';
      window.localStorage.setItem('token', token);
    }

    setToken(token);
    console.log("ini ",token);
  }, []);

  
  return (
    <>
      <div className="cont-login">
        <div className="left-side">
          
        </div>
        <div className="right-side">
          <h1>Welcome to</h1>
          <h2>mediaPlay!</h2>
          <br/>
          <a  className="button is-link is-light"
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`}>
            Login to Spotify
          </a>
        </div>
      </div>
    </>
  )
}

export default Login
