import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from "reactstrap";
import Logo from "../assets/Logo.jpg";
import "../styles/Navbar.css"; // Import custom CSS file for Navbar styles

function CustomNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar-container"> {/* Wrapping Navbar in a container */}
      <Navbar expand="md" className="custom-navbar"> {/* Adding custom class to Navbar */}
        <NavbarBrand className="ms-5" href="/just-cake">
          <img src={Logo} alt="logo" className="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
        <Collapse isOpen={menuOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="Just-Cake/">
                <i className="fa fa-home fa-lg" /> Home
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="Just-Cake/cakes">
                <i className="fa fa-list fa-lg" /> Cakes
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="Just-Cake/cookies">
                <i className="fa fa-info fa-lg" /> Cookies
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="Just-Cake/weddingCakes">
                <i className="fa fa-address-card fa-lg" /> Wedding Cakes
              </Link>
            </NavItem>
              <Link className="nav-link" to="Just-Cake/cupcakes">
                <i className="fa fa-address-card fa-lg" /> Cupcakes
              </Link>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
