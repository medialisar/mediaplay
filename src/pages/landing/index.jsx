import React from 'react';
import HeaderComponent from "../../components/Header";
import SongComponent from "../../components/Song";
import PlaylistComponent from "../../components/Playlist";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Login() {
  return (
    <>
      <div className="container">
        <Router>
          <HeaderComponent />
          <Switch>
            <Route exact path="/home">
              <SongComponent />
            </Route>
            <Route path="/playlist">
              <PlaylistComponent />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  )
}

export default Login
