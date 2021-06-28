import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Dropdown from './Dropdown';
import logo from '../../assets/images/logo.png';
import './Navbar.scss';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <nav className="appBar">
      <Link to="/" className="appbarLogo">
        <img src={logo} alt="brand logo" />
      </Link>

      <ul className={isOpen ? 'navMenu active' : 'navMenu'}>
        <li className="navItem">
          <Link to="/" className="navLink" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>

        <li className="navItem">
          <Link to="/aboutus" className="navLink" onClick={closeMobileMenu}>
            About Us
          </Link>
        </li>
        <li
          className="navItem"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link to="/" className="navLink" onClick={closeMobileMenu}>
            Services <i className="fas fa-caret-down" />
          </Link>
          {dropdown && <Dropdown />}
        </li>
        <li className="navItem">
          <Link to="/" className="navLink" onClick={closeMobileMenu}>
            Reseach
          </Link>
        </li>
        <li className="navItem">
          <Link to="/" className="navLink" onClick={closeMobileMenu}>
            Download
          </Link>
        </li>
        <li className="navItem">
          <Link to="/contact" className="navLink" onClick={closeMobileMenu}>
            Contact Us
          </Link>
        </li>
        <li className="navItem">
          <Link to="/signup" className="navLink" onClick={closeMobileMenu}>
            Create Account
          </Link>
        </li>
      </ul>

      <div className="menuIcon" onClick={handleIsOpen}>
        <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
    </nav>
  );
}
