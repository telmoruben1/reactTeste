import React from "react";
import { Button, Nav, Navbar, NavDropdown, Form, FormControl, Image } from 'react-bootstrap';

const Header = () => {
  return (
      <Navbar bg="light" expand="lg" className="header-page" >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Navbar.Brand className="mr-auto logo-page" href="/">
            <Image src="../../../css/img/logomenu.png"/>
          </Navbar.Brand>
          <Nav inline className="navbar-header">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/authors">Authors</Nav.Link>
            <Nav.Link href="/courses">Courses</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
};

export default Header;
