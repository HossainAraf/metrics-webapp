import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaChevronLeft, FaCog, FaMicrophone } from 'react-icons/fa';

const Nav = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <nav className="">
        <div className="">
          <NavLink to="/" exact>
            <span className="left-arrow" style={{ color: '#000' }}>
              <FaChevronLeft />
              2023
            </span>
          </NavLink>
        </div>
        {!isHome && (
          <div className="country-detail-page">
            <NavLink to="/country">Country</NavLink>
          </div>
        )}
        {isHome && (
          <div className="most-views">
            Most views
          </div>
        )}
        <div className="settings">
          <FaCog />
        </div>
        <div className="voice-search">
          <FaMicrophone />
        </div>
      </nav>
    </>
  );
};

export default Nav;
