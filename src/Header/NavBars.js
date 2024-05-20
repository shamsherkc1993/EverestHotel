import React from "react";
import "./NavBars.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Errorpage from "../ErrorPage/Errorpage";
import About from "../About/About";
import Logo from "../ImagesFolder/Logo/logo.png";

const NavBars = () => {
  return (
    <Navbar expand="lg" className="main-nav">
      <Container>
        <NavLink to="/">
          <img src={Logo} alt="logo-image" className="logo"></img>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/explore">Explore</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
            <NavLink to="/contact">Contact</NavLink>
            <NavLink path="*" element={<Errorpage />} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBars;
