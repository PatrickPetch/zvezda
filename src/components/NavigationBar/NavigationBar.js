import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import "./NavigationBar.scss";
import SEDSNTULogo from "../../img/seds_ntu_logo.png";

function NavigationBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      //variant="custom"
      variant="dark"
      className="navigation-bar"
    >
      <Navbar.Brand href="#home" className="nav-brand">
        <div className="logo-container">
          <Image src={SEDSNTULogo} roundedCircle fluid />
        </div>
        SEDS-NTU
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav style={{ color: "white" }}>
          <Nav.Link href="#news">News</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#project">Project</Nav.Link>
          <Nav.Link href="#event">Event</Nav.Link>
          <Nav.Link href="#team">Team</Nav.Link>
          <Nav.Link href="#join-us">Join Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
