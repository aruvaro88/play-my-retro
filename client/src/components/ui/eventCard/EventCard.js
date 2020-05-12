import React from "react"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import { Link } from "react-router-dom"

const EventCard = (props) => {
  return (
    <Col lg={3} md={6}>
      <Card as="article" className="event-card">
        <Card.Img variant="top" src={props.photo} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
                  <Link to={`/events/${props._id}`} className="btn btn-dark btn-block">
            Event details
          </Link>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default EventCard
