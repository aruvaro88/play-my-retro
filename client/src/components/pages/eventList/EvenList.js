import React, { Component } from "react"
import EventService from "../../../services/event.service"
import EventCard from "../../ui/eventCard/EventCard"
import EventForm from "../eventForm/EventForm"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

import "./EventList.css"

class EventList extends Component {
  constructor() {
    super()
    this.state = {
      modalShow: false,
      events: [],
    }
    this.service = new EventService()
  }

  showModal = () => this.setState({ modalShow: true })
  modalClose = () => this.setState({ modalShow: false })

  getAllEvents = () => {
    this.service
      .getAllEvents()
      .then((response) => this.setState({ events: response.data }))
      .catch((err) => console.log(err))
  }
  componentDidMount = () => {
    this.getAllEvents()
  }
  render() {
    return (
      <Container as="section">
        <h1>Lista de eventos</h1>
        <Button onClick={this.showModal} variant="dark">
          Create new event
        </Button>
        <Row className="event-list">
          {this.state.events.map((elm) => (
            <EventCard key={elm._id} {...elm} />
          ))}
        </Row>

        <Modal show={this.state.modalShow} onHide={this.modalClose}>
          <Modal.Body>
            <EventForm hideModalWindow={this.modalClose} refreshEventList={this.getAllEvents}/>
          </Modal.Body>
        </Modal>
      </Container>
    )
  }
}

export default EventList
