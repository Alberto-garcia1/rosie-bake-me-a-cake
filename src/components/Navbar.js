import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import Logo from "../assets/Logo.jpg";
import "../styles/Navbar.css";

function CustomNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar-container">
      <Navbar expand="md" className="custom-navbar">
        <NavbarBrand className="ms-4" href="/just-cake">
          <img src={Logo} alt="logo" className="logo" />
        </NavbarBrand>
        <NavbarToggler
          onClick={() => setMenuOpen(!menuOpen)}
          className="menu"
        />
        <Collapse isOpen={menuOpen} navbar>
          <Nav className="ms-auto" navbar >
            <NavItem>
              <Link className="nav-link" to="/">
                |Home|
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/cakes">
                |Cakes|
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/cookies">
                |Sugar| |Cookies|
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/weddingCakes">
                |Wedding| |Cakes|
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/cupcakes">
                |Cupcakes|
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
