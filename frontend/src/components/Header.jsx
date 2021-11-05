import React from "react";
import { Link, BrowseRouter as Router } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">ProShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Router>
                <Link to="/cart">
                  <div>
                    <i className="fas fa-shopping-cart"></i> Cart
                  </div>
                </Link>
                <Link to="/login">
                  <div>
                    <i className="fas fa-user pe-2"></i>Sign In
                  </div>
                </Link>
              </Router>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
