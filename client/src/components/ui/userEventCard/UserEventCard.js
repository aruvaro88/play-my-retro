import React from "react"
import { Link } from "react-router-dom"
import "./UserEventCard.css"

const EventCard = (props) => {
  return (
    <article className="user-event-card">
      <figure className="event-img">
        <img src={props.photo} alt="meh" />
      </figure>
      <article className="event-content">
        <h4>{props.title}</h4>
        <div className="event-buttons">
          <Link to={`/events/${props._id}`} className="myButton">
            Event details
          </Link>
          {props.loggedInUser._id === props.owner && (
            <button onClick={() => props.removeEvent(props._id)} className="myButton">
              Remove Event
            </button>
          )}
        </div>
      </article>
    </article>
  )
}

export default EventCard
