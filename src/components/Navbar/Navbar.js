import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Navbar.scss';
import logo from '../../assets/images/logo.png';

const Appbar = () => {
  return (
    <Navbar style={{ marginLeft: '7rem' }} className="appbar" expand="lg">
      <LinkContainer className="brand__logo" to="/">
        <Navbar.Brand href="#home">
          <img src={logo} alt="brand logo" />
        </Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/" className="appbar__item">
            <Nav.Link className="appbar__link">Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/" className="appbar__item">
            <Nav.Link className="appbar__link">About Us</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/" className="appbar__item">
            <Nav.Link className="appbar__link">Services</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/" className="appbar__item">
            <Nav.Link className="appbar__link">Research</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/" className="appbar__item">
            <Nav.Link className="appbar__link">Download</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/" className="appbar__item">
            <Nav.Link className="appbar__link">Contact</Nav.Link>
          </LinkContainer>
          <NavDropdown
            className="appbar__item appbar__link"
            title="My Account"
            id="basic-nav-dropdown"
          >
            <LinkContainer to="/">
              <NavDropdown.Item>Login</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/">
              <NavDropdown.Item>Create Account</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Appbar;