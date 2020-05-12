import axios from "axios"

export default class services {
  constructor() {
    this.service = axios.create({
      baseURL: "http://localhost:5000/api/events",
    })
  }

  getAllEvents = () => this.service.get("/getAllEvents")
  getEvent = (id) => this.service.get(`/getEvent/${id}`)
  createEvent = (theEvent) => this.service.post("/createEvent", theEvent)
}
