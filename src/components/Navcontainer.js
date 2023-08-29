import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export const Navcontainer = () => {
  return (
    <Navbar expand="lg" style={{backgroundColor: "#68bf0e"}}>
      <Container>
        <Navbar.Brand as={Link}to='/'>scribblepark</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="flex-1">
            <Nav.Link as={Link}to='/entries'>Entries</Nav.Link>
            <Nav.Link as={Link}to='/about'>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
