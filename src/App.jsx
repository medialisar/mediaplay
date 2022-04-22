import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from "./pages/login";
import LandingPage from "./pages/landing";
// import PlaylistPage from "./pages/playlist";
import PageNotFound from "./pages/pageNotFound";


function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route path="/home">
          <LandingPage />
        </Route>
        {/* <Route path="/playlist">
          <PlaylistPage />
        </Route> */}
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
