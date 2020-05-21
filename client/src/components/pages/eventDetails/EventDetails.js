import React, { Component } from "react"
import EventService from "../../../services/event.service"
import CommentService from "../../../services/comment.service"
import UserService from "../../../services/user.service"
import EditEventForm from "../editEventForm/EditEventForm"
import CommentForm from "../commentForm/CommentForm"
import CommentCard from "../../ui/commentCard/CommentCard"
import Container from "react-bootstrap/Container"
import Modal from "react-bootstrap/Modal"
import { Link } from "react-router-dom"
import OwnerInfo from "../ownerInfo/OwnerInfo"
import "./EventDetails.css"

class EventDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalShow: false,
      modalName: "",
      weAreFriends: "",
      userOnEvent: "",
      comments: [],
    }
    this.eventService = new EventService()
    this.commentService = new CommentService()
    this.userService = new UserService()
  }
  handleModal = (visible, modalName) => this.setState({ modalShow: visible, modalName: modalName })

  getEventInfo() {
    const id = this.props.match.params.id
    this.eventService
      .getEvent(id)
      .then((response) => {
        this.getCommentsByEvent(id)
        this.getOwnerInfo(response.data.owner)
        this.setState(response.data, () => this.props.loggedInUser && this.checkStatus())
      })
      .catch((err) => console.log(err))
  }

  checkStatus() {
    this.checkUserAssistance()
    this.checkUserFriends()
  }

  checkUserAssistance() {
    if (this.state.assistants.some((elm) => elm === this.props.loggedInUser._id)) {
      this.setState({ userOnEvent: true })
    } else {
      this.setState({ userOnEvent: false })
    }
  }

  checkUserFriends() {
    if (this.props.loggedInUser.friends.some((elm) => elm === this.state.owner._id)) {
      this.setState({ weAreFriends: true })
    } else {
      this.setState({ weAreFriends: false })
    }
  }

  addOwnerAsFriend(ownerId) {
    this.userService
      .addUserAsFriend(this.props.loggedInUser._id, ownerId)
      .then(() => this.props.setTheUser({ ...this.props.loggedInUser, friends: [...this.props.loggedInUser.friends, ownerId] }))
      .then(() => this.checkUserFriends())
      .catch((err) => console.log(err))
  }

  removeOwnerFromFriends = (ownerId) => {
    const idx = this.props.loggedInUser.friends.indexOf(ownerId)
    this.props.loggedInUser.friends.splice(idx, 1)
    this.userService
      .editUser(this.props.loggedInUser._id, this.props.loggedInUser)
      .then((response) => this.props.setTheUser(response.data))
      .then(() => this.checkUserFriends())
      .catch((err) => console.log(err))
  }

  pushUserToEvent() {
    this.eventService
      .pushUserToEvent(this.props.match.params.id, this.props.loggedInUser._id)
      .then(() => this.setState({ assistants: [...this.state.assistants, this.props.loggedInUser._id] }, () => this.checkUserAssistance()))
      .catch((err) => console.log(err))
  }

  removeUserFromEvent = () => {
    const assistantsCopy = [...this.state.assistants]
    const idx = assistantsCopy.indexOf(this.props.loggedInUser._id)
    assistantsCopy.splice(idx, 1)
    this.setState({ assistants: assistantsCopy }, () => {
      this.eventService
        .editEvent(this.props.match.params.id, this.state)
        .then(() => this.checkUserAssistance())
        .catch((err) => console.log(err))
    })
  }

  getOwnerInfo(ownerData) {
    this.setState({ owner: ownerData })
  }

  finishEventPost = () => {
    this.getEventInfo()
    this.handleModal(false)
  }

  getCommentsByEvent = (eventId) => {
    this.commentService
      .getCommentsbyEvent(eventId)
      .then((response) => this.setState({ comments: response.data }))
      .catch((err) => console.log(err))
  }

  displayModal = (modalName) => {
    if (this.state.modalShow) {
      switch (modalName) {
        case "createComment":
          return (
            <CommentForm
              {...this.props}
              finishEventPost={this.finishEventPost}
              loggedInUser={this.props.loggedInUser}
              closeModal={() => this.handleModal(false)}
            />
          )
        case "editEvent":
          return (
            <EditEventForm
              {...this.state}
              loggedInUser={this.props.loggedInUser}
              finishEventPost={this.finishEventPost}
              closeModal={() => this.handleModal(false)}
            />
          )
        case "ownerInfo":
          return (
            <OwnerInfo
              {...this.state}
              closeModal={() => this.handleModal(false)}
              removeOwnerFromFriends={() => this.removeOwnerFromFriends(this.state.owner._id)}
              addOwnerAsFriend={() => this.addOwnerAsFriend(this.state.owner._id)}
            />
          )
        default:
          return null
      }
    }
  }
  removeComment = (commentId) => {
    this.commentService
      .removeComment(commentId)
      .then(() => {
        this.getEventInfo()
      })
      .catch((err) => console.log(err))
  }

  componentDidMount = () => {
    this.getEventInfo()
  }

  render() {
    return (
      <main className="page-details">
        <header className="details-header">
          <h1>{this.state.title}</h1>
          <h2>{this.state.date}</h2>
          <h2>{this.state.game}</h2>
          {this.state.userOnEvent ? (
            <>
              <button onClick={() => this.removeUserFromEvent()} className="my-button-blue">
                Leave Event
              </button>
            </>
          ) : (
            <button onClick={() => this.pushUserToEvent()} className="my-button">
              I'm in!
            </button>
          )}
          <figure className="details-img">
            <img src={this.state.photo} alt={this.state.title} />
          </figure>
        </header>
        <Container>
          <section className="details-content">
            <p>{this.state.description}</p>
            <article className="details-info">
              <div className="elements">
                <h5>Address</h5>
                <p>{this.state.address}</p>
              </div>
              <div className="elements">
                <h5>Platforms</h5>
                <p>{this.state.platforms}</p>
              </div>
              <div className="elements">
                <h5>Assistants</h5>
                {this.state.assistants && <p>{this.state.assistants.length}</p>}
              </div>
              <div className="elements">
                <h5>Owner</h5>
                {this.state.owner && <p>{this.state.owner.username}</p>}
              </div>
            </article>
            <div className="details-buttons">
              {this.props.loggedInUser && this.state.owner && this.props.loggedInUser._id === this.state.owner._id && (
                <button onClick={() => this.handleModal(true, "editEvent")} className="my-button">
                  Edit Event
                </button>
              )}
              {this.props.loggedInUser ? (
                <button onClick={() => this.handleModal(true, "createComment")} className="my-button">
                  Create Comment
                </button>
              ) : null}
              <button onClick={() => this.handleModal(true, "ownerInfo")} className="my-button">
                Owner Info
              </button>
              <Link to="/events" className="my-button">
                Volver
              </Link>
            </div>
          </section>
          <section className="comments">
            {this.state.comments &&
              this.state.comments.map((elm) => (
                <CommentCard key={elm._id} {...elm} loggedInUser={this.props.loggedInUser} removeComment={() => this.removeComment(elm._id)} />
              ))}
          </section>
          <Modal className="my-modal" show={this.state.modalShow} onHide={() => this.handleModal(false)}>
            {this.displayModal(this.state.modalName)}
            <button onClick={() => this.handleModal(false)} className="my-mini-button">
              Close
            </button>
          </Modal>
        </Container>
      </main>
    )
  }
}
export default EventDetails
