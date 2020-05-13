import React, { Component } from "react"
import EventService from "../../../services/event.service"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

class EventForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      description: "",
      address: "",
      date: "",
      platforms: "SNES",
      game: "",
      photo: "",
    }
    this.service = new EventService()
  }

  handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    this.setState({
      [e.target.name]: value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.service
      .createEvent(this.state)
      .then(() => this.props.finishEventPost())
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
            <Form.Control name="title" type="text" value={this.state.title} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control name="description" type="textarea" value={this.state.description} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control name="address" type="text" value={this.state.address} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="date">
            <Form.Label>Date</Form.Label>
            <Form.Control name="date" type="date" value={this.state.date} onChange={this.handleChange} />
          </Form.Group>
          {/* <Form.Group controlId="formBasicCheckbox">
            <Form.Label>Platforms</Form.Label>
            <Form.Check name="platforms" checked="SNES" onChange={this.handleChange} type="checkbox" label="SNES" />
            <Form.Check name="platforms" checked="Sega Megadrive" onChange={this.handleChange} type="checkbox" label="Sega Megadrive" />
            <Form.Check name="platforms" checked="Sega Saturn" onChange={this.handleChange} type="checkbox" label="Sega Saturn" />
            <Form.Check name="platforms" checked="Arcade" onChange={this.handleChange} type="checkbox" label="Arcade" />
          </Form.Group> */}
          <Form.Group controlId="game">
            <Form.Label>Game</Form.Label>
            <Form.Control name="game" type="text" value={this.state.game} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="photo">
            <Form.Label>Photo</Form.Label>
            <Form.Control name="photo" type="text" value={this.state.photo} onChange={this.handleChange} />
          </Form.Group>

          <Button variant="dark" type="submit">
            Create Event
          </Button>
          <Button onClick={()=>this.props.closeModal()} variant="dark">
            Close
          </Button>
        </Form>
      </Container>
    )
  }
}

export default EventForm
