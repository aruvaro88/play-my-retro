import React, { Component } from "react"
import EventService from "../../../services/event.service"
import Row from "react-bootstrap/Row"
import UserEventCard from "../../ui/userEventCard/UserEventCard"

class UserEvents extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [],
    }
    this.eventService = new EventService()
  }
  getMyEvents() {
    this.eventService
      .getUserEvents(this.props.loggedInUser._id)
      .then((response) => this.setState({ events: response.data }))
      .catch((err) => console.log(err))
  }
  removeEvent = (eventId) => {
    this.eventService
      .removeEvent(eventId)
      .then(() => {
        this.getMyEvents()
      })
      .catch((err) => console.log(err))
  }
  componentDidMount() {
    this.getMyEvents()
  }

  render() {
    return (
      <Row className="event-cards">
        {this.state.events.map((elm) => (
          <UserEventCard key={elm._id} {...elm} loggedInUser={this.props.loggedInUser} removeEvent={() => this.removeEvent(elm._id)} />
        ))}
      </Row>
    )
  }
}

export default UserEvents
