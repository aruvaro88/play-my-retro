import React from "react"
import { Link } from "react-router-dom"

const ProfileNav = (props) => {
  console.log(props.loggedInUser._id)
  return (
    <>
      <article className="user-data">
        <figure className="avatar-img">
          <img src={props.loggedInUser.avatar} alt="avatar" />
        </figure>
        <h4>{props.loggedInUser.username}</h4>
        <p>Email</p>
        <p>{props.loggedInUser.platforms}</p>
      </article>
      <article className="profile-buttons">
        <Link to="/profile/edit" className="nav-button">
          Edit profile
        </Link>
        <Link to="/profile/friends" className="nav-button">
          My friends
        </Link>
        <Link to={`/profile/events/getuserevents`} className="nav-button">
          My Events
        </Link>
      </article>
    </>
  )
}

export default ProfileNav
