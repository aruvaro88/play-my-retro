import React from "react"
import { Link } from "react-router-dom"

const ProfileNav = (props) => {
  console.log(props.loggedInUser._id)
  return (
    <>
      <figure>
        <img src={props.loggedInUser.avatar} alt="avatar" />
      </figure>
      <h5>{props.loggedInUser.username}</h5>
      <Link to="/profile/edit" className="myButton">
        Edit profile
      </Link>
      <Link to="/profile/friends" className="myButton">
        My friends
      </Link>
      <Link to={`/profile/events/getuserevents`} className="myButton">
        My Events
      </Link>
      <button className="myButton">LogOut</button>
    </>
  )
}

export default ProfileNav
