import React, { Component } from "react"
import AuthService from "../../../services/auth.service"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import "./NavBar.css"
import { Link } from "react-router-dom"
import Container from "react-bootstrap/Container"

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.authService = new AuthService()
  }

  logout = () => {
    this.props.setTheUser(false)
    this.authService.logout()
  }

  render() {
    return (
      <Container>
        <Navbar expand="lg">
          <Navbar.Brand as="div">
            <Link to="/">PlayMyRetro</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link as="div">
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link as="div">
                <Link to="/events">Events</Link>
              </Nav.Link>
              {!this.props.loggedInUser ? (
                <>
                  <Nav.Link as="div">
                    <Link to="/login">Log In</Link>
                  </Nav.Link>
                  <Nav.Link as="div">
                    <Link to="/signup">Sign Up</Link>
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as="div">
                    <Link to="/profile">Profile</Link>
                  </Nav.Link>
                  <Nav.Link as="div" onClick={this.logout}>
                    Log Out
                  </Nav.Link>
                </>
              )}
            </Nav>
            <Navbar.Text className="ml-auto">Signed in as: {this.props.loggedInUser ? this.props.loggedInUser.username : "invited"}</Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    )
  }
}

export default NavBar
