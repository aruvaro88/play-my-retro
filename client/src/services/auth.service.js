import axios from "axios"

export default class services {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}`,
      withCredentials: true
    })
  }

  signup = ({username, password, avatar, platforms}) => this.service.post("/signup", { username, password, avatar, platforms })
  login = ({username, password}) => this.service.post("/login", { username, password })
  logout = () => this.service.post("/logout")
  isLoggedIn = () => this.service.get("/loggedIn")
}
