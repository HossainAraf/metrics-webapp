// Navbar.js
import { FaChevronLeft, FaCog, FaMicrophone } from 'react-icons/fa';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();
  const currentPathname = location.pathname;

  let displayText = 'Home';

  if (currentPathname === '/Bangladesh' || currentPathname === '/bangladesh') {
    displayText = 'Bangladesh';
  } else if (currentPathname === '/India' || currentPathname === '/india') {
    displayText = 'India';
  } else if (currentPathname === '/Bhutan' || currentPathname === '/bhutan') {
    displayText = 'Bhutan';
  } else if (currentPathname === '/Srilanka' || currentPathname === '/srilanka') {
    displayText = 'Srilanka';
  } else if (currentPathname === '/Nepal' || currentPathname === '/nepal') {
    displayText = 'Nepal';
  } else if (currentPathname === '/Pakistan' || currentPathname === '/pakistan') {
    displayText = 'Pakistan';
  }

  return (
    <>
      <nav className="">
        <div className="">
          <NavLink to="/">
            <FaChevronLeft />
          </NavLink>
          <p>{displayText}</p>
        </div>
        <div className="">most views</div>
        <div className="">
          <div> </div>
          <FaMicrophone />
          <FaCog />
        </div>
      </nav>
    </>
  );
};

export default Nav;
