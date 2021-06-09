import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/navbar.scss';
import logo from '../assets/images/logo.png';

const Appbar = () => {
  return (
    <Navbar style={{ marginLeft: '7rem' }} className="appbar" expand="lg">
      <Link className="brand__logo" to="/">
        <Navbar.Brand href="#home">
          <img src={logo} alt="brand logo" />
        </Navbar.Brand>
      </Link>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" className="appbar__item">
            <Nav.Link className="appbar__link">Home</Nav.Link>
          </Link>
          <Link to="/" className="appbar__item">
            <Nav.Link className="appbar__link">About Us</Nav.Link>
          </Link>
          <Link to="/" className="appbar__item">
            <Nav.Link className="appbar__link">Services</Nav.Link>
          </Link>
          <Link to="/" className="appbar__item">
            <Nav.Link className="appbar__link">Research</Nav.Link>
          </Link>
          <Link to="/" className="appbar__item">
            <Nav.Link className="appbar__link">Download</Nav.Link>
          </Link>
          <Link to="/" className="appbar__item">
            <Nav.Link className="appbar__link">Contact</Nav.Link>
          </Link>
          <NavDropdown
            className="appbar__item appbar__link"
            title="My Account"
            id="basic-nav-dropdown"
          >
            <Link to="/">
              <NavDropdown.Item>Login</NavDropdown.Item>
            </Link>
            <Link to="/">
              <NavDropdown.Item>Create Account</NavDropdown.Item>
            </Link>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Appbar;
