import React, { Component } from "react"
import ProfileNav from "../profileNav/ProfileNav"
import { Switch, Route } from "react-router-dom"
import "./Profile.css"
import ProfileHome from "../../pages/profileHome/ProfileHome"
import UserEvents from "../userEvents/UserEvents"
import EditProfileForm from "../editProfileForm/EditProfileForm"
import UserFriends from "../userFriends/UserFriends"

const Profile = (props) => {
  return (
    <>
      <main className="display-profile">
        <section className="profileNav">
          <ProfileNav {...props} loggedInUser={props.loggedInUser} />
        </section>
        <section className="profile-content">
          <Switch>
            <Route path="/profile" exact render={() => <ProfileHome loggedInUser={props.loggedInUser} />} />
            <Route
              path="/profile/edit"
              render={() => <EditProfileForm {...props} setTheUser={props.setTheUser} loggedInUser={props.loggedInUser} />}
            />
            <Route path="/profile/events/getuserevents" exact render={() => <UserEvents loggedInUser={props.loggedInUser} />} />
            <Route path="/profile/friends" render={() => <UserFriends loggedInUser={props.loggedInUser} />} />
          </Switch>
        </section>
      </main>
    </>
  )
}

export default Profile
