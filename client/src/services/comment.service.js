import axios from "axios"

export default class services {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/comments`,
      withCredentials: true,
    })
  }

  getCommentsbyEvent = (eventId) => this.service.get(`/getcommentsbyevent/${eventId}`)
  getCommentsbyUser = (userId) => this.service.get(`/getcommentsbyuser/${userId}`)
  createComment = (theComment) => this.service.post("/createcomment", theComment)
  removeComment = (id) => this.service.post(`/removecomment/${id}`)
}
