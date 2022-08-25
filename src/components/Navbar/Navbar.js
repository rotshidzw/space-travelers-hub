import React from 'react';
import { NavLink } from 'react-router-dom';
import planetLogo from '../../assets/images/planet.png';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav>
      <div className="navbar-top">
        <img className="img-icon" src={planetLogo} alt="LOGO" />
        <h1 className="nav-head">Space Traveler&apos;s Hub</h1>
      </div>
      <div className="navbar-right-top">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'styled-link' : 'no-styled-link')}
        >
          Rockets
        </NavLink>
        <NavLink
          to="/missions"
          className={({ isActive }) => (isActive ? 'styled-link' : 'no-styled-link')}
        >
          Missions
        </NavLink>
        <hr className="border " />
        <NavLink
          to="/my-profile"
          className={({ isActive }) => (isActive ? 'styled-link' : 'no-styled-link')}
        >
          My Profile
        </NavLink>
      </div>
    </nav>
  );
}
