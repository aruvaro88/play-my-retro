import React, { Component } from "react"
import EventService from "../../../services/event.service"
import FileService from "../../../services/file.service"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"

class EditEventForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.title,
      description: this.props.description,
      address: this.props.address,
      date: this.props.date,
      platforms: this.props.platforms,
      game: this.props.game,
      photo: this.props.photo,
      owner: this.props.loggedInUser._id,
    }
    this.eventService = new EventService()
    this.fileService = new FileService()
  }

  handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    this.setState({
      [e.target.name]: value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.eventService
      .editEvent(this.props._id, this.state)
      .then(() => this.props.finishEventPost())
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
        this.setState({ ...this.state, photo: response.data.secure_url })
      })
      .catch((err) => console.log(err))
  }

  render() {

    return (
      <Container as="section">
        <h1>New Event</h1>
        <hr />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control className="input" name="title" type="text" value={this.state.title} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control className="input" name="description" type="textarea" value={this.state.description} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control className="input" name="address" type="text" value={this.state.address} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="date">
            <Form.Label>Date</Form.Label>
            <Form.Control className="input" name="date" type="date" value={this.state.date} onChange={this.handleChange} />
          </Form.Group>
          <Form.Control as="select">
            {this.props.loggedInUser.platforms.map((elm) => (
              <option>{elm}</option>
            ))}
          </Form.Control>
          <Form.Group controlId="game">
            <Form.Label>Game</Form.Label>
            <Form.Control className="input" name="game" type="text" value={this.state.game} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="photo">
            <Form.Label>Photo</Form.Label>
            <Form.Control className="input" name="photo" type="file" onChange={this.handleFileUpload} />
          </Form.Group>
          <div className="form-buttons">
            <button className="myButton" type="submit">
              Edit Event
            </button>
          </div>
        </Form>
      </Container>
    )
  }
}

export default EditEventForm
