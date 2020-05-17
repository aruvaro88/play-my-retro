import React, { Component } from "react"
import EventService from "../../../services/event.service"
import EditEventForm from "../editEventForm/EditEventForm"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Toast from "react-bootstrap/Modal"



import { Link } from "react-router-dom"
import "./EventDetails.css"



class EventDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalShow: false,
      toast: {
        show: false,
        text: "",
      },
    }
    this.service = new EventService()
  }
  handleModal = (visible) => this.setState({ modalShow: visible })

  getEventInfo() {
    const id = this.props.match.params.id
    this.service
      .getEvent(id)
      .then((response) => this.setState(response.data))
      .catch((err) => console.log(err))
  }
  handleToast = (visible, text = "") => {
    const toastCopy = { ...this.state.toast }
    toastCopy.show = visible
    toastCopy.text = text
    this.setState({ toast: toastCopy })
  }
  finishEventPost = () => {
    this.getEventInfo()
    this.handleModal(false)
    this.handleToast(true, "Evento modificado correctamente")
  }
  componentDidMount = () => {
    this.getEventInfo()
  }

  render() {
    return (
      <Container as="section">
        <h1>{this.state.title}</h1>
        <hr />
        <Row>
          <Col md={{ span: 4, offset: 1 }}>
            <h4>Info</h4>
            <p>{this.state.description}</p>
            <h4>Date</h4>
            <p>{this.state.date}</p>
            <h4>Address</h4>
            <p>{this.state.address}</p>
            <h4>Created by</h4>
            {this.state.owner && <p>{this.state.owner.username}</p>}
            <h4>Assistants</h4>
            <p>{this.state.assistants}</p>
            <h4>Platforms</h4>
            <p>{this.state.platforms}</p>
          </Col>
          <Col md={6} className="details-img">
            <img src={this.state.photo} alt={this.state.title} />
          </Col>
        </Row>

        {this.props.loggedInUser &&
          this.state.owner &&
          (this.props.loggedInUser._id === this.state.owner._id ? (
            <Button onClick={() => this.handleModal(true)} className="btn btn-dark">
              Edit Event
            </Button>
          ) : null)}
        <Link to="/events" className=" btn btn-dark">
          Volver
        </Link>

        <Modal show={this.state.modalShow} onHide={() => this.handleModal(false)}>
          <Modal.Body>
            <EditEventForm
              {...this.state}
              loggedInUser={this.props.loggedInUser}
              finishEventPost={this.finishEventPost}
              closeModal={() => this.handleModal(false)}
            />
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

export default EventDetails
