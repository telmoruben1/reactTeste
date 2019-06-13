import React from "react";
import { Button, Nav, Navbar, NavDropdown, Form, FormControl, Image } from 'react-bootstrap';

const Header = () => {
  return (
      <Navbar expand="lg" className="header-page" >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Navbar.Brand className="mr-auto logo-page" href="/">
            <Image src="../src/css/img/logomenu.png"/>
          </Navbar.Brand>
          <Nav inline className="navbar-header">
            <Nav.Link className="content-menu ml-4" href="/accede"><Image className="mr-1 mb-1" src="../src/css/img/aderir.png"/>Aderir</Nav.Link>
            <Nav.Link className="content-menu ml-4" href="/caracteristicas"><Image className="mr-1 mb-1" src="../src/css/img/carateristicas.png"/>Carateristicas</Nav.Link>
            <Nav.Link className="content-menu ml-4" href="/precos"><Image className="mr-1 mb-1" src="../src/css/img/euro.png"/>Preços</Nav.Link>
            <Nav.Link className="content-menu ml-4" href="/qualidade"><Image className="mr-1 mb-1" src="../src/css/img/qualidade.png"/>Qualidade</Nav.Link>
            <Nav.Link className="content-menu ml-4" href="www.acin.pt"><Image className="mr-1 mb-1" src="../src/css/img/empresa.png"/>ACIN</Nav.Link>
            <Nav.Link className="content-menu ml-4" href="/contactos"><Image className="mr-1 mb-1" src="../src/css/img/contactos.png"/>Contactos</Nav.Link>
            {/* <Nav.Link className="content-menu ml-3" href="/authors">Authors</Nav.Link>
            <Nav.Link className="content-menu ml-3" href="/courses">Courses</Nav.Link>
            <Nav.Link className="content-menu ml-3" href="/about">About</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
};

export default Header;
