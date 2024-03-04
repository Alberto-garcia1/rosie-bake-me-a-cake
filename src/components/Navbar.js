import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
} from "reactstrap";
import BakeMeACake from "../assets/BakeMeACakeLogo.png";
import "../styles/Navbar.css";

function CustomNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <Container fluid className="p-0">
        <Navbar expand="md" className="custom-navbar">
          <NavbarBrand href="/">
            <img src={BakeMeACake} alt="Bake me a cake" className="logo" />
          </NavbarBrand>
          <NavbarToggler onClick={toggleMenu} className="menu" />
          <Collapse isOpen={menuOpen} navbar>
            <Nav className="ms-auto navbar-nav" navbar>
              <NavItem className="link">
                <Link className="nav-link" to="/">
                  |Home|
                </Link>
              </NavItem>
              <NavItem className="link">
                <Link className="nav-link" to="/cakes">
                  |Cakes|
                </Link>
              </NavItem>
              <NavItem className="link">
                <Link className="nav-link" to="/sugarcookies">
                  |Sugar Cookies|
                </Link>
              </NavItem>
              <NavItem className="link">
                <Link className="nav-link" to="/weddingCakes">
                  |Wedding Cakes|
                </Link>
              </NavItem>
              <NavItem className="link">
                <Link className="nav-link" to="/cupcakes">
                  |Cupcakes|
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

export default CustomNavbar;
