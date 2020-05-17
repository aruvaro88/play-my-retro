import React, { Component } from "react"
import EventService from "../../../services/event.service"
import EventCard from "../../ui/eventCard/EventCard"
import EventForm from "../eventForm/EventForm"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Modal from "react-bootstrap/Modal"
import Toast from "react-bootstrap/Toast"
import {Link} from "react-router-dom"

import "./EventList.css"

class EventList extends Component {
  constructor() {
    super()
    this.state = {
      modalShow: false,
      events: [],
      toast: {
        show: false,
        text: "",
      },
    }
    this.eventService = new EventService()
  }

  handleModal = (visible) => this.setState({ modalShow: visible })

  handleToast = (visible, text = "") => {
    const toastCopy = { ...this.state.toast }
    toastCopy.show = visible
    toastCopy.text = text
    this.setState({ toast: toastCopy })
  }

  getAllEvents = () => {
    this.eventService
      .getAllEvents()
      .then((response) => this.setState({ events: response.data }))
      .catch((err) => console.log(err))
  }

  finishEventPost = () => {
    this.getAllEvents()
    this.handleModal(false)
    this.handleToast(true, "Evento creado correctamente")
  }

  removeEvent = (eventId) => {
    this.eventService
      .removeEvent(eventId)
      .then(() => {
        this.getAllEvents()
      })
      .catch((err) => console.log(err))
  }

  componentDidMount = () => {
    this.getAllEvents()
  }
  render() {
    return (
      <main className="event-list">
        <Container as="section">
          <h1>Check community Events!</h1>
          {this.props.loggedInUser && (
            <Link to="" onClick={() => this.handleModal(true)} className="myButtonBlue">
              Create new event
            </Link>
          )}

          <Row className="event-cards">
            {this.state.events.map((elm) => (
              <EventCard key={elm._id} {...elm} loggedInUser={this.props.loggedInUser} removeEvent={() => this.removeEvent(elm._id)} />
            ))}
          </Row>

          <Modal show={this.state.modalShow} onHide={() => this.handleModal(false)}>
            <Modal.Body>
              <EventForm loggedInUser={this.props.loggedInUser} finishEventPost={this.finishEventPost} closeModal={() => this.handleModal(false)} />
            </Modal.Body>
          </Modal>

          <Toast onClose={() => this.handleToast(false)} show={this.state.toast.show} delay={3000} autohide>
            <Toast.Header>
              <strong className="mr-auto">Message</strong>
            </Toast.Header>
            <Toast.Body>{this.state.toast.text}</Toast.Body>
          </Toast>
        </Container>
      </main>
    )
  }
}

export default EventList
