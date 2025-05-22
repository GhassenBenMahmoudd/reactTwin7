// src/components/NavigationBar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navbar, Container, Nav, Badge } from 'react-bootstrap';

const NavigationBar = () => {
  const wishlistCount = useSelector((state) => state.wishlist.items.length);

  return (
    <Navbar bg="light" expand="lg" className="mb-3">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold">MovieDB</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/movies" className="text-dark">
              Movies
            </Nav.Link>
            <Nav.Link as={NavLink} to="/wishlist" className="text-dark">
              Wishlist {wishlistCount > 0 && (
                <Badge bg="secondary" pill>{wishlistCount}</Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;