import React, { Component } from "react"
import "./OwnerInfo.css"

class OwnerInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      avatar: this.props.avatar,
      username: this.props.username,
      friends: this.props.friends,
      platforms: this.props.platforms,
    }
  }

  render() {
    return (
      <div className="owner-info-card">
        <figure className="owner-avatar">
          <img src={this.state.avatar} alt="avatar" />
        </figure>
        <article className="owner-content">
          <h5>{this.state.username}</h5>
          <p>{this.state.platforms}</p>
        </article>
        <article className="form-buttons">
          <button className="myButton">Add to Friends</button>
          <button className="myMiniButton">Close</button>
        </article>
      </div>
    )
  }
}

export default OwnerInfo
