import React, { Component } from "react"
import AuthService from "../../../services/auth.service"
import FileService from "../../../services/file.service"
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
        avatar: "",
        platforms: [],
      },
      errorMessage: "",
    }
    this.authService = new AuthService()
    this.fileService = new FileService()
  }

  handleChange = (e) => {
    let loginInfoCopy = { ...this.state.loginInfo }
    const { name, value } = e.target
    loginInfoCopy = { ...loginInfoCopy, [name]: value }
    this.setState({ loginInfo: loginInfoCopy })
  }

  handleChecks = (e) => {
    let newPlatforms = [...this.state.loginInfo.platforms]
    if (e.target.checked) {
      newPlatforms.push(e.target.value)
      this.setState({ loginInfo: { ...this.state.loginInfo, platforms: newPlatforms }})
    } else {
      let subPlatform = newPlatforms.filter((platform) => platform !== e.target.value)
      this.setState({ loginInfo: { ...this.state.loginInfo, platforms: subPlatform }})
    }
  }

  handleFileUpload  = (e) => {
    const uploadData = new FormData()
    uploadData.append("avatar", e.target.files[0])
    this.fileService
      .handleAvatarUser(uploadData)
      .then((response) => {
        console.log("Subida de archivo finalizada! La URL de Cloudinray es: ", response.data.secure_url)
        console.log(response.data)
        this.setState({
          loginInfo: { ...this.state.loginInfo, avatar: response.data.secure_url },
        })
      })
      .catch((err) => console.log(err))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.authService
      .signup(this.state.loginInfo)
      .then((response) => {
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
              <Form.Group controlId="formBasicCheckbox">
                <Form.Label>Platforms</Form.Label>
                <Form.Check name="platforms" value="SNES" onChange={this.handleChecks} type="checkbox" label="SNES" />
                <Form.Check name="platforms" value="Sega Megadrive" onChange={this.handleChecks} type="checkbox" label="Sega Megadrive" />
                <Form.Check name="platforms" value="Sega Saturn" onChange={this.handleChecks} type="checkbox" label="Sega Saturn" />
                <Form.Check name="platforms" value="Arcade" onChange={this.handleChecks} type="checkbox" label="Arcade" />
              </Form.Group>
              <Form.Group controlId="img">
                <Form.Label>Imagen (URL)</Form.Label>
                <Form.Control name="avatar" type="file" onChange={this.handleFileUpload} />
              </Form.Group>
              <p className="error-message" style={{ display: this.state.errorMessage ? "block" : "none" }}>
                {this.state.errorMessage}
              </p>
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
