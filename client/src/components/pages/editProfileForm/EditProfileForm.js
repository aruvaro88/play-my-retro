import React, { Component } from "react"
import FileService from "../../../services/file.service"
import UserService from "../../../services/user.service"
import Form from "react-bootstrap/Form"
import "./EditProfileForm.css"
class EditProfileForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      avatar: this.props.loggedInUser.avatar,
      username: this.props.loggedInUser.username,
      email: this.props.loggedInUser.email,
      platforms: this.props.loggedInUser.platforms,
    }
    this.fileService = new FileService()
    this.userService = new UserService()
  }
  handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    this.setState({
      [e.target.name]: value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.userService
      .editUser(this.props.loggedInUser._id, this.state)
      .then((response) => this.props.setTheUser(response.data))
      .catch((err) => console.log(err))
  }

  handleChecks = (e) => {
    let newPlatforms = [...this.state.platforms]
    if (e.target.checked) {
      newPlatforms.push(e.target.value)
      this.setState({ ...this.state, platforms: newPlatforms })
    } else {
      let subPlatform = newPlatforms.filter((platform) => platform !== e.target.value)
      this.setState({ ...this.state, platforms: subPlatform })
    }
  }

  handleFileUpload = (e) => {
    const uploadData = new FormData()
    uploadData.append("photo", e.target.files[0])
    this.fileService
      .handlePhotoEvent(uploadData)
      .then((response) => {
        console.log("Subida de archivo finalizada! La URL de Cloudinray es: ", response.data.secure_url)
        this.setState({ ...this.state, avatar: response.data.secure_url })
      })
      .catch((err) => console.log(err))
  }

  checkPlatform = (platform) => {
    return this.state.platforms.includes(platform)
  }

  render() {
    console.log(this.props)
    return (
      <main className="edit-form">
        <h1>Edit Profile</h1>
        <hr />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control className="input" name="username" type="text" value={this.state.username} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Username</Form.Label>
            <Form.Control className="input" name="email" type="text" value={this.state.email} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Label>Platforms</Form.Label>
            <Form.Check
              id="1"
              name="platforms"
              checked={this.checkPlatform("SNES")}
              value="SNES"
              onChange={this.handleChecks}
              type="checkbox"
              label="SNES"
            />
            <Form.Check
              id="2"
              name="platforms"
              checked={this.checkPlatform("Sega Megadrive")}
              value="Sega Megadrive"
              onChange={this.handleChecks}
              type="checkbox"
              label="Sega Megadrive"
            />
            <Form.Check
              id="3"
              name="platforms"
              checked={this.checkPlatform("Sega Saturn")}
              value="Sega Saturn"
              onChange={this.handleChecks}
              type="checkbox"
              label="Sega Saturn"
            />
            <Form.Check
              id="4"
              name="platforms"
              checked={this.checkPlatform("Arcade")}
              value="Arcade"
              onChange={this.handleChecks}
              type="checkbox"
              label="Arcade"
            />
          </Form.Group>
          <Form.Group controlId="img">
            <Form.Label>Avatar (URL)</Form.Label>
            <Form.Control name="avatar" type="file" onChange={this.handleFileUpload} />
          </Form.Group>
          <p className="error-message" style={{ display: this.state.errorMessage ? "block" : "none" }}>
            {this.state.errorMessage}
          </p>
          <button className="my-button" type="submit">
            Edit
          </button>
        </Form>
      </main>
    )
  }
}

export default EditProfileForm
