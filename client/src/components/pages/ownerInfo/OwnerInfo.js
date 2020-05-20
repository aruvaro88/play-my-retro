import React, { Component } from "react"
import "./OwnerInfo.css"

class OwnerInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.owner._id,
      avatar: this.props.owner.avatar,
      username: this.props.owner.username,
      friends: this.props.owner.friends,
      platforms: this.props.platforms,
    }
  }

  render() {
console.log(this.props)
    return (
      <div className="owner-info-card">
        <figure className="owner-avatar">
          <img src={this.state.avatar} alt="avatar" />
        </figure>
        <article className="owner-content">
          <h5>{this.state.username}</h5>
          <p>{this.state.platforms}</p>
        </article>
        <div className="form-buttons">
          {this.props.weAreFriends ? (
            <>
              <button onClick={() => this.props.removeOwnerFromFriends(this.state.id)} className="myButtonBlue">
                Leave friend
              </button>
            </>
          ) : (
            <button onClick={() => this.props.addOwnerAsFriend(this.state.id)} className="myButton">
              Add as friend
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default OwnerInfo
