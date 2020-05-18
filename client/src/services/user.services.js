import axios from "axios"

export default class services {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/users`,
      withCredentials: true,
    })
  }

  editUser = (id, theUser) => this.service.post(`/editUser/${id}`, theUser)
}
