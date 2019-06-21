import React from "react";
import { Nav, Navbar, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faSignInAlt} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  function activeLink(event){
    var thisElement = event.target;
    var links = document.getElementsByClassName("content-menu");
    for (var i = 0, len = links.length; i < len; i++) {
      if (links[i].classList.contains("active")) {
        links[i].classList.remove("active");
      }
    }
    if (thisElement.nodeName != 'IMG') {
      if (thisElement.classList.contains("active")) {
        thisElement.classList.remove("active");
      } else {
        thisElement.classList.add("active");
      }
    }
  }
  return (
    <Navbar expand="lg" className="header-page" >
      
        <span className="icon-side-bar" style={{fontSize:'30px'}} onClick={openNav}> <FontAwesomeIcon className="icon-bars" icon={faBars} /></span>
        <div  className="container-logo">
          <Image  src="../src/css/img/logomenu.png"/>
        </div>
        <div id="mySidenav" className="sidenav">
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}><FontAwesomeIcon className="icon-bars" size="xs" icon={faTimes} /></a>
            <Link className="content-menu side-bar ml-4" to="/"><FontAwesomeIcon className="icon-bars mr-1" size="xs" icon={faSignInAlt} />Entrar</Link>
            <Link className="content-menu ml-4 side-bar" to="/accede"><Image className="mr-1 mb-1" src="../src/css/img/aderir.png"/>Aderir</Link>
            <Link className="content-menu ml-4 side-bar" to="/feature"><Image className="mr-1 mb-1" src="../src/css/img/carateristicas.png"/>Carateristicas</Link>
            <Link className="content-menu ml-4 side-bar" to="/price"><Image className="mr-1 mb-1" src="../src/css/img/euro.png"/>Preços</Link>
            <Link className="content-menu ml-4 side-bar" to="/qualidade"><Image className="mr-1 mb-1" src="../src/css/img/qualidade.png"/>Qualidade</Link>
            <a className="content-menu ml-4 side-bar" href="www.acin.pt" target="_blank"><Image className="mr-1 mb-1" src="../src/css/img/empresa.png"/>ACIN</a>
            <Link className="content-menu ml-4 side-bar" to="/contactos"><Image className="mr-1 mb-1" src="../src/css/img/contactos.png"/>Contactos</Link>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Link className="mr-auto logo-page" to="/">
            <Image onClick={activeLink}  src="../src/css/img/logomenu.png"/>
          </Link>
          <Nav inline className="navbar-header">
            <Link className="content-menu ml-4" onClick={activeLink} to="/accede"><Image className="mr-1 mb-1" src="../src/css/img/aderir.png"/>Aderir</Link>
            <Link className="content-menu ml-4" onClick={activeLink} to="/feature"><Image className="mr-1 mb-1" src="../src/css/img/carateristicas.png"/>Carateristicas</Link>
            <Link className="content-menu ml-4" onClick={activeLink} to="/price"><Image className="mr-1 mb-1" src="../src/css/img/euro.png"/>Preços</Link>
            <Link className="content-menu ml-4" onClick={activeLink} to="/quality"><Image className="mr-1 mb-1" src="../src/css/img/qualidade.png"/>Qualidade</Link>
            <a className="content-menu ml-4" onClick={activeLink} href="www.acin.pt" target="_blank"><Image className="mr-1 mb-1" src="../src/css/img/empresa.png"/>ACIN</a>
            <Link className="content-menu ml-4" onClick={activeLink} to="/contactos"><Image className="mr-1 mb-1" src="../src/css/img/contactos.png"/>Contactos</Link>
            {/* <Nav.Link className="content-menu ml-3" href="/authors">Authors</Nav.Link>
            <Nav.Link className="content-menu ml-3" href="/courses">Courses</Nav.Link>
            <Nav.Link className="content-menu ml-3" href="/about">About</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
};

export default Header;
