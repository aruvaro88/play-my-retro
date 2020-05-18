import React, { Component } from "react"
import UserService from "../../../services/user.service"
import Row from "react-bootstrap/Row"


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
        <Row className="event-cards">
          {this.state.user.friends &&
            this.state.user.friends.map((elm) => (
              <article className="event-card">
                <figure className="card-img">
                  <img src={elm.avatar} alt="meh" />
                </figure>
                <article className="card-content">
                  <h4>{elm.username}</h4>
                </article>
              </article>
            ))}
        </Row>
      )
  }
}

export default UserFriends
