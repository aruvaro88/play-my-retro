import React, { Component } from "react"
import ProfileNav from "../profileNav/ProfileNav"

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        <ProfileNav {...this.props} loggedInUser={this.props.loggedInUser} />
      </>
    )
  }
}

export default Profile
