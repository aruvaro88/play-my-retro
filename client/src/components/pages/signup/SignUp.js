import React, { Component } from "react"
import AuthService from "../../../services/auth.service"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

class SignupForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
    }
    this.authService = new AuthService()
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.authService
      .signup(this.state)
      .then(() => this.props.history.push("/"))
      .catch((err) => console.log(err))
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
              <Button variant="dark" type="submit">
                Sign up
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default SignupForm
