import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css"


function Nabar(props) {
  const { classes } = props;
  return (
    <div className={classes}>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/" style={{marginLeft: "25px"}}>
          <img src="https://i.ibb.co/7nm1t6j/d8ca65c3-d6f7-453c-ae19-eda013271331.png" width="30" height="50"
            className="d-inline-block align-top" alt="Sure Shelter Hand" />
        </Navbar.Brand>
        <Navbar.Brand href="/">Sure Shelter</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/volunteer">Volunteer</Nav.Link>
            <Nav.Link href="/donate">Donations</Nav.Link>
          </Nav>
          <Nav style={{marginRight: "30px"}}>
          <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Nabar;
