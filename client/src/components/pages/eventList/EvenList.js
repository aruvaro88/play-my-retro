import React, { Component } from "react"
import EventService from "../../../services/event.service"
import EventCard from "../../ui/eventCard/EventCard"
import EventForm from "../eventForm/EventForm"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Toast from "react-bootstrap/Toast"

import "./EventList.css"

class EventList extends Component {
  constructor() {
    super()
    this.state = {
      modalShow: false,
      toast: {
        show: false,
        text: "",
      },
      events: [],
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
  componentDidMount = () => {
    this.getAllEvents()
  }
  render() {
    return (
      <Container as="section">
        <h1>Lista de eventos</h1>
        <Button onClick={() => this.handleModal(true)} variant="dark">
          Create new event
        </Button>
        <Row className="event-list">
          {this.state.events.map((elm) => (
            <EventCard key={elm._id} {...elm} />
          ))}
        </Row>

        <Modal show={this.state.modalShow} onHide={() => this.handleModal(false)}>
          <Modal.Body>
            <EventForm finishEventPost={this.finishEventPost} closeModal={()=> this.handleModal(false)} />
          </Modal.Body>
        </Modal>

        <Toast onClose={() => this.handleToast(false)} show={this.state.toast.show} delay={3000} autohide>
          <Toast.Header>
            <strong className="mr-auto">Message</strong>
          </Toast.Header>
          <Toast.Body>{this.state.toast.text}</Toast.Body>
        </Toast>
      </Container>
    )
  }
}

export default EventList
