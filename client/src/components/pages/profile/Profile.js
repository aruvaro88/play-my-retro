import React, { Component } from "react"
import ProfileNav from "../profileNav/ProfileNav"
import { Switch, Route } from "react-router-dom"
import "./Profile.css"
import ProfileHome from "../../pages/profileHome/ProfileHome"
import UserEvents from "../userEvents/UserEvents"
import EditProfileForm from "../editProfileForm/EditProfileForm"

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        <main className="display-profile">
          <section className="profileNav">
            <ProfileNav {...this.props} loggedInUser={this.props.loggedInUser} />
          </section>
          <section className="profile-content">
            <Switch>
              <Route path="/profile" exact render={() => <ProfileHome />} />
              <Route path="/profile/edit" render={() => <EditProfileForm {...this.state} setTheUser={this.props.setTheUser} loggedInUser={this.props.loggedInUser}/>} />
              <Route path="/profile/events/getuserevents" exact render={() => <UserEvents loggedInUser={this.props.loggedInUser} />} />
            </Switch>
          </section>
        </main>
      </>
    )
  }
}

export default Profile
