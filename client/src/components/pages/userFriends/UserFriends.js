import React, { Component } from "react"
import UserService from "../../../services/user.service"
import "./UserFriends.css"

class UserFriends extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
    }

    this.userService = new UserService()
  }
  getUser() {
    this.userService
      .getUser(this.props.loggedInUser._id)
      .then((response) => this.setState({ user: response.data }))
      .catch((err) => console.log(err))
  }

  removeOwnerFromFriends = (ownerId) => {
    const idx = this.props.loggedInUser.friends.indexOf(ownerId)
    this.props.loggedInUser.friends.splice(idx, 1)
    this.userService
      .editUser(this.props.loggedInUser._id, this.props.loggedInUser)
      .then((response) =>
        this.setState({ ...this.state, user: { ...this.state.user, friends: response.data.friends } }, () => this.props.setTheUser(this.state.user))
      )
      .then(() => this.getUser())
      .catch((err) => console.log(err))
  }
  componentDidMount() {
    this.getUser()
  }

  render() {
    return (
      <main className="display-friends">
        {this.state.user.friends &&
          this.state.user.friends.map((elm, idx) => (
            <article key={idx} className="friends-card">
              <article className="friends-avatar">
                <figure className="card-img">
                  <img src={elm.avatar} alt="meh" />
                </figure>
                <article className="friends-content">
                  <h4>{elm.username}</h4>
                </article>
                <button onClick={() => this.removeOwnerFromFriends(elm._id)} className="my-button-blue">
                  Unfollow
                </button>
              </article>
            </article>
          ))}
      </main>
    )
  }
}

export default UserFriends
