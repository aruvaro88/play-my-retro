import React, { Component } from "react"
import "./ProfileNav.css"

class ProfileNav extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    console.log(this.props)
    return (
      <main className="display-profile">
        <section className="profileNav">
                <figure>
                   <img src={this.props.loggedInUser.avatar} alt="avatar"/>
                </figure>
                <h5>{this.props.loggedInUser.username}</h5>
                <small>{this.props.loggedInUser.email}</small>
        </section>
        <section className="profile-content">
          <h1>content</h1>
        </section>
      </main>
    )
  }
}

export default ProfileNav
