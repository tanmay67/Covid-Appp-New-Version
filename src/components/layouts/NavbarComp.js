import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from '../../img/covid.png';

const NavbarComp = () => {
  return (
    <Navbar bg="light" expand="lg" className="m-0 p-0">
      <div className="container">
        <Navbar.Brand>
          <Link className="navbar-brand" to="/">
            <img
              src={image}
              alt=""
              className="img-fluid m-0 p-0"
              style={{ height: '40px' }}
            />{' '}
            COVID
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="nav-link" to="/">
              World
            </Link>
            <Link className="nav-link" to="/india">
              India
            </Link>
            <Link to="/countries" className="nav-link">
              Country
            </Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavbarComp;
