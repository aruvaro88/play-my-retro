import React, { Component } from "react"
import EventService from "../../../services/event.service"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { Link } from "react-router-dom"
import "./EventDetails.css"



class EventDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.service = new EventService()
  }

  getEventInfo() {
    const id = this.props.match.params.id
    this.service
      .getEvent(id)
      .then((response) => this.setState(response.data))
      .catch((err) => console.log(err))
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
              <h4>Created by</h4>
              {this.state.owner && <p>{this.state.owner.username}</p>}
              <h4>Assistants</h4>
              <p>{this.state.assistants}</p>
            </Col>
            <Col md={6} className="details-img">
              <img src={this.state.photo} alt={this.state.title} />
            </Col>
          </Row>
          <Link to="/events" className=" btn btn-dark">
            Volver
          </Link>
        </Container>
      )
  }
}

export default EventDetails
