import React from 'react'
import './NavigationBar.scss'
import { Navbar, Nav, NavDropdown} from 'react-bootstrap'
import SEDSNTULogo from "../../img/seds_ntu_logo.png"

function NavigationBar() {
    return (
        <div className="navigation-bar">

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">
      <img src={ SEDSNTULogo } width="30" height="30" className="d-inline-block align-top" alt="React Bootstrap logo"   />

      SEDS-NTU
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto"></Nav>
    <Nav>
      <Nav.Link href="#news">News</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <NavDropdown title="Project" id="project">
        <NavDropdown.Item href="#project-new-dawn">New Dawn</NavDropdown.Item>
        <NavDropdown.Item href="#project-astro-biology">Astrobiology</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#project-space-software">Space Software</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#event">Event</Nav.Link>
      <Nav.Link href="#team">Team</Nav.Link>
      <Nav.Link href="#join-us">Join Us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
            
        </div>
    )
}

export default NavigationBar
