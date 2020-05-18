import React, { Component } from "react"
import UserService from "../../../services/user.service"
import Row from "react-bootstrap/Row"
import "./UserFriends.css"

class UserFriends extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
    }

    this.service = new UserService()
  }
  getUser() {
    this.service
      .getUser(this.props.loggedInUser._id)
      .then((response) => this.setState({ user: response.data }))
      .catch((err) => console.log(err))
  }
  componentDidMount() {
    this.getUser()
  }

  render() {
    console.log(this.state)
    return (
      <article className="friends-card">
        {this.state.user.friends &&
          this.state.user.friends.map((elm) => (
            <article className="friends-avatar">
              <figure className="card-img">
                <img src={elm.avatar} alt="meh" />
              </figure>
              <article className="friends-content">
                <h4>{elm.username}</h4>
              </article>
            </article>
          ))}
      </article>
    )
  }
}

export default UserFriends
