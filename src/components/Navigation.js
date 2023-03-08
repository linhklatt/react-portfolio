import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../style/Navigation.css";

export default function Navigation(props) {
  return (
    <Navbar collapseOnSelect expand="sm" className="row p-3 text-light">
      <Container>
        <h2>Linh KLatt</h2>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          id="custom-nav-button"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link
              href="#aboutme"
              className="custom-nav"
              onClick={() => props.handlePageChange("AboutMe")}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className="custom-nav"
              onClick={() => props.handlePageChange("Projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className="custom-nav"
              onClick={() => props.handlePageChange("Contact")}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              href="#resume"
              className="custom-nav"
              onClick={() => props.handlePageChange("Resume")}
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
