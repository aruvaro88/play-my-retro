import React, { Component } from "react"

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
      <>
        <figure>
          <img src={this.state.avatar} alt="avatar" />
        </figure>
        <p>Username: {this.state.username}</p>
        <p>{this.state.friends}</p>
        <p>Platforms: {this.state.platforms}</p>
      </>
    )
  }
}

export default OwnerInfo
