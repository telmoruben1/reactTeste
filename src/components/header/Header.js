import React from "react";
import { Nav, Navbar, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Header = () => {
  return (
      <Navbar expand="lg" className="header-page" >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Link className="mr-auto logo-page" to="/">
            <Image src="../src/css/img/logomenu.png"/>
          </Link>
          <Nav inline className="navbar-header">
            <Link className="content-menu ml-4" to="/accede"><Image className="mr-1 mb-1" src="../src/css/img/aderir.png"/>Aderir</Link>
            <Link className="content-menu ml-4" href="/caracteristicas"><Image className="mr-1 mb-1" src="../src/css/img/carateristicas.png"/>Carateristicas</Link>
            <Link className="content-menu ml-4" href="/precos"><Image className="mr-1 mb-1" src="../src/css/img/euro.png"/>Preços</Link>
            <Link className="content-menu ml-4" href="/qualidade"><Image className="mr-1 mb-1" src="../src/css/img/qualidade.png"/>Qualidade</Link>
            <Link className="content-menu ml-4" href="www.acin.pt"><Image className="mr-1 mb-1" src="../src/css/img/empresa.png"/>ACIN</Link>
            <Link className="content-menu ml-4" href="/contactos"><Image className="mr-1 mb-1" src="../src/css/img/contactos.png"/>Contactos</Link>
            {/* <Nav.Link className="content-menu ml-3" href="/authors">Authors</Nav.Link>
            <Nav.Link className="content-menu ml-3" href="/courses">Courses</Nav.Link>
            <Nav.Link className="content-menu ml-3" href="/about">About</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
};

export default Header;
