import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" /> */}
          mediaPlay!
        </a>
    
        <a
            role="button"
            className={`navbar-burger burger ${isOpen && "is-active"}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setOpen(!isOpen)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
      </div>
    
      <div className={`navbar-menu ${isOpen && "is-active"}`}>
        <div className="navbar-start">
          <NavLink
            className="navbar-item"
            activeClassName="is-active"
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            className="navbar-item"
            activeClassName="is-active"
            to="/playlist"
          >
            Playlist
          </NavLink>
        </div>
    
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-light">
                Log out
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Header;