import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaChevronLeft, FaCog, FaMicrophone } from 'react-icons/fa';
import '../styles/nav.css';

const Nav = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <nav className="navbar">
        <div className="left-arrow-wrapper">
          <NavLink to="/" exact>
            <span className="left-arrow">
              <FaChevronLeft />
              2023
            </span>
          </NavLink>
        </div>
        <div>
          {!isHome && (
            <div className="country-views">
              Country views
            </div>
          )}
          {isHome && (
            <div className="most-views">
              Most views
            </div>
          )}
        </div>
        <div className="tech">
          <FaCog />
          <FaMicrophone className="microphone" />
        </div>
      </nav>
    </>
  );
};

export default Nav;
