

export default CustomNavbar;


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
import BakeMeACake from "../assets/BakeMeACakeLogo.png"
import "../styles/Navbar.css";

function CustomNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <Navbar expand="md" className="custom-navbar">
        <NavbarBrand my-2="true" href="/">
          <img src={BakeMeACake} alt="Bake me a cake" className="logo" />
        </NavbarBrand>
        <NavbarToggler
          onClick={() => setMenuOpen(!menuOpen)}
          className="menu"
        />
        <Collapse isOpen={menuOpen} navbar>
          <Nav navbar>
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
              <Link className="nav-link" to="/sugarcookies">
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
