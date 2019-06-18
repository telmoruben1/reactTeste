import React from "react";
import { Nav, Navbar, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  return (
    <Navbar expand="lg" className="header-page" >
      
        <span className="icon-side-bar" style={{fontSize:'30px'}} onClick={openNav}> <FontAwesomeIcon className="icon-bars" icon={faBars} /></span>
        <div id="mySidenav" className="sidenav">
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}><FontAwesomeIcon className="icon-bars" icon={faTimes} /></a>
            <Link className="content-menu ml-4" to="/accede"><Image className="mr-1 mb-1" src="../src/css/img/aderir.png"/>Aderir</Link>
            <Link className="content-menu ml-4" to="/caracteristicas"><Image className="mr-1 mb-1" src="../src/css/img/carateristicas.png"/>Carateristicas</Link>
            <Link className="content-menu ml-4" to="/precos"><Image className="mr-1 mb-1" src="../src/css/img/euro.png"/>Preços</Link>
            <Link className="content-menu ml-4" to="/qualidade"><Image className="mr-1 mb-1" src="../src/css/img/qualidade.png"/>Qualidade</Link>
            <a className="content-menu ml-4" href="www.acin.pt" target="_blank"><Image className="mr-1 mb-1" src="../src/css/img/empresa.png"/>ACIN</a>
            <Link className="content-menu ml-4" to="/contactos"><Image className="mr-1 mb-1" src="../src/css/img/contactos.png"/>Contactos</Link>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Link className="mr-auto logo-page" to="/">
            <Image src="../src/css/img/logomenu.png"/>
          </Link>
          <Nav inline className="navbar-header">
            <Link className="content-menu ml-4" to="/accede"><Image className="mr-1 mb-1" src="../src/css/img/aderir.png"/>Aderir</Link>
            <Link className="content-menu ml-4" to="/caracteristicas"><Image className="mr-1 mb-1" src="../src/css/img/carateristicas.png"/>Carateristicas</Link>
            <Link className="content-menu ml-4" to="/precos"><Image className="mr-1 mb-1" src="../src/css/img/euro.png"/>Preços</Link>
            <Link className="content-menu ml-4" to="/qualidade"><Image className="mr-1 mb-1" src="../src/css/img/qualidade.png"/>Qualidade</Link>
            <a className="content-menu ml-4" href="www.acin.pt" target="_blank"><Image className="mr-1 mb-1" src="../src/css/img/empresa.png"/>ACIN</a>
            <Link className="content-menu ml-4" to="/contactos"><Image className="mr-1 mb-1" src="../src/css/img/contactos.png"/>Contactos</Link>
            {/* <Nav.Link className="content-menu ml-3" href="/authors">Authors</Nav.Link>
            <Nav.Link className="content-menu ml-3" href="/courses">Courses</Nav.Link>
            <Nav.Link className="content-menu ml-3" href="/about">About</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
};

export default Header;
