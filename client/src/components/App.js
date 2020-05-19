import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { Switch, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import EventList from "./pages/eventList/EventList"
import EventDetails from "./pages/eventDetails/EventDetails"
import EventForm from "./pages/eventForm/EventForm"
import NavBar from "./ui/navbar/NavBar"
import SignupForm from "./pages/signup/SignUp"
import Footer from "./ui/footer/Footer"
import LoginForm from "./pages/login/LoginForm"
import AuthService from "../services/auth.service"
import Profile from "./pages/profile/Profile"

class App extends Component {
  constructor() {
    super()
    this.state = { loggedInUser: null }
    this.authService = new AuthService()
  }

  setTheUser= userObj => this.setState({loggedInUser: userObj}, ()=> console.log("El estado de App ha cambiado", this.state))
  
  fetchUser = () => {
    if (this.state.loggedInUser === null) {
      this.authService.isLoggedIn()
        .then(response => this.setTheUser(response.data))
      .catch(() => this.setTheUser(false))
    }
}

  render() {
    this.fetchUser()
    return (
      <>
        <NavBar setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/events" exact render={() => <EventList loggedInUser={this.state.loggedInUser} />} />
          <Route path="/events/createEvent" render={() => <EventForm />} />
          <Route path="/signup" render={(props) => <SignupForm {...props} setTheUser={this.setTheUser} />} />
          <Route path="/login" render={(props) => <LoginForm {...props} setTheUser={this.setTheUser} />} />
          <Route
            path="/profile"
            render={(props) => (this.state.loggedInUser ? <Profile {...props} setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} /> : <LoginForm {...props} setTheUser={this.setTheUser} />)}
          />
          <Route path="/events/:id" exact render={(props) => <EventDetails {...props} loggedInUser={this.state.loggedInUser} />} />
        </Switch>
        <Footer />
      </>
    )
  }
}

export default App
