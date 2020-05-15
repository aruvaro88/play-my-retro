import axios from "axios"

export default class services {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}`,
    })
  }

  signup = ({username, password}) => this.service.post("/signup", { username, password })
  login = ({username, password}) => this.service.post("/login", { username, password })
  logout = () => this.service.post("/logout")
  isLoggedIn = () => this.service.get("/loggedIn")
}
