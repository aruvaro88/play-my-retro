import React, { Component } from "react"
import AuthService from "../../../services/auth.service"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"

class SignupForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginInfo: {
        username: "",
        password: "",
      },
      errorMessage: "",
    }
    this.authService = new AuthService()
  }

  handleChange = (e) => {
    let loginInfoCopy = { ...this.state.loginInfo }
    const { name, value } = e.target
    loginInfoCopy = { ...loginInfoCopy, [name]: value }
    this.setState({ loginInfo: loginInfoCopy })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.authService
      .signup(this.state.loginInfo)
      .then(response => {
        this.props.setTheUser(response.data)
        this.props.history.push("/")
      })
      .catch((err) => this.setState({ errorMessage: err.response.data.message }))
  }

  render() {
    return (
      <Container as="section">
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <h1>Sign Up</h1>
            <hr />
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control name="username" type="text" value={this.state.username} onChange={this.handleChange} />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" value={this.state.password} onChange={this.handleChange} />
              </Form.Group>
              <p className="error-message" style={{display: this.state.errorMessage ? "block" : "none"}}>{this.state.errorMessage}</p>
              <Button variant="dark" type="submit">
                Sign up
              </Button>
            </Form>
            <p>
              <small>
                Have an account already? <Link to="/login">Log In</Link>
              </small>
            </p>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default SignupForm
