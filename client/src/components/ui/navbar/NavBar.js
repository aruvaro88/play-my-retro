import React, { Component } from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import "./NavBar.css"
import { Link } from "react-router-dom"

class NavBar extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as="div">
          <Link to="/">PlayMyRetro</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as="div">
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link as="div">
              <Link to="/events">Events</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavBar
