import React from "react"
import { Link } from "react-router-dom"
import "./CommentCard.css"

const CommentCard = (props) => {
  return (
    <article className="comment-card">
      <h4>{props.title}</h4>
      <small>by: {props.createdBy.username}</small>
      <p>{props.description}</p>
      {props.loggedInUser._id === props.createdBy._id && (
        <button onClick={() => props.removeComment(props._id)} className="myButtonBlue">
          Remove Comment
        </button>
      )}
    </article>
  )
}

export default CommentCard
