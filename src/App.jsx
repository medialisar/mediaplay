import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from "./pages/login";
import LandingPage from "./pages/landing";


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
      </Switch>
      </Router>
    </div>
  );
}

export default App;
