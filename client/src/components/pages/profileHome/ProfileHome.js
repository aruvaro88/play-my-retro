import React from "react"
import "./ProfileHome.css"

const ProfileHome = (props) => {
    
    return (
      <main className="profile-home">
        <h1>Welcome, {props.loggedInUser.username}</h1>
        <p>This is your personal profile</p>
      </main>
    )
}

export default ProfileHome