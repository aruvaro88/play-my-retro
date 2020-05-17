import React from "react"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import { Link } from "react-router-dom"

const EventCard = (props) => {
  return (
    <article className="event-card">
      <figure className="card-img">
        <img src={props.photo} alt="meh" />
      </figure>
      <article className="card-content">
        <h4>{props.title}</h4>
        <p>{props.platforms}</p>
        <p>{props.game}</p>
        <div className="card-buttons">
          <Link to={`/events/${props._id}`} className="myButton">
            Event details
          </Link>
          {props.loggedInUser._id === props.owner && (
            <Link onClick={() => props.removeEvent(props._id)} className="myButton">
              Remove Event
            </Link>
          )}
        </div>
      </article>
    </article>
  )
}

export default EventCard
