import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { Switch, Route } from "react-router-dom"
import Home from "./pages/home/home"
import EventList from "./pages/eventList/EvenList"
import EventDetails from "./pages/eventDetails/EventDetails"
import EventForm from "./pages/eventForm/EventForm"
import NavBar from "./ui/navbar/NavBar"
import SignupForm from "./pages/signup/SignUp"
import Footer from "./ui/footer/Footer"

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/events" exact render={() => <EventList />} />
        <Route path="/events/createEvent" render={() => <EventForm />} />
        <Route path="/signup" render={(props) => <SignupForm {...props} />}/>
        <Route path="/events/:id" render={(props) => <EventDetails {...props} />} />
      </Switch>
      <Footer />
    </>
  )
}

export default App
