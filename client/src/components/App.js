import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { Switch, Route } from "react-router-dom"

import EventList from "./pages/eventList/EvenList"
import EventDetails from "./pages/eventDetails/EventDetails"
import EventForm from "./pages/eventForm/EventForm"
import NavBar from "./ui/navbar/NavBar"

function App() {
  return (
    <>
    <NavBar/>
    <Switch>
      <Route path="/events" exact render={() => <EventList />} />
        <Route path="/events/createEvent" render={() => <EventForm />} />
        <Route path="/events/:id" render={(props) => <EventDetails {...props} />} />
      </Switch>
      </>
  )
}

export default App
