import React from 'react';
import HeaderComponent from "../../components/Header";
import HomePage from "../home";
import PlaylistComponent from "../../components/Playlist";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Landing() {
  return (
    <>
      <div className="container block">
        <Router>
          <HeaderComponent />
          <Switch>
            <Route exact path="/home">
              <HomePage />
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

export default Landing;
