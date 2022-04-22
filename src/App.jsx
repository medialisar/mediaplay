import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from "./pages/login";
import LandingPage from "./pages/landing";
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
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
