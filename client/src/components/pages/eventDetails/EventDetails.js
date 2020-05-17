import React, { Component } from "react"
import EventService from "../../../services/event.service"
import CommentService from "../../../services/comment.service"
import EditEventForm from "../editEventForm/EditEventForm"
import CommentForm from "../commentForm/CommentForm"
import CommentCard from "../../ui/commentCard/CommentCard"
import Container from "react-bootstrap/Container"
import Modal from "react-bootstrap/Modal"
import Toast from "react-bootstrap/Modal"
import { Link } from "react-router-dom"
import "./EventDetails.css"

class EventDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalShow: false,
      modalName: "",
      toast: {
        show: false,
        text: "",
      },
      comments: [],
      lat: "",
      lng: "",
    }
    this.service = new EventService()
    this.commentService = new CommentService()
  }
  handleModal = (visible, modalName) => this.setState({ modalShow: visible, modalName: modalName })

  getEventInfo() {
    const id = this.props.match.params.id
    this.service
      .getEvent(id)
      .then((response) => {
        this.getCommentsByEvent(id)
        this.setState(response.data)
      })
      .catch((err) => console.log(err))
  }

  handleToast = (visible, text = "") => {
    const toastCopy = { ...this.state.toast }
    toastCopy.show = visible
    toastCopy.text = text
    this.setState({ toast: toastCopy })
  }
  finishEventPost = () => {
    this.getEventInfo()
    this.handleModal(false)
    this.handleToast(true, "Done!")
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
          <Link to="" className="myButton">
            I'm in!
          </Link>
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
                <p>{this.state.assistants}</p>
              </div>
              <div className="elements">
                <h5>Owner</h5>
                {this.state.owner && <p>{this.state.owner.username}</p>}
              </div>
            </article>
            <div className="details-buttons">
              {this.props.loggedInUser && this.state.owner && this.props.loggedInUser._id === this.state.owner._id && (
                <button onClick={() => this.handleModal(true, "editEvent")} className="myButton">
                  Edit Event
                </button>
              )}
              {this.props.loggedInUser ? (
                <button onClick={() => this.handleModal(true, "createComment")} className="myButton">
                  Create Comment
                </button>
              ) : null}
              <Link to="/events" className="myButton">
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
          <Modal className="myModal" show={this.state.modalShow} onHide={() => this.handleModal(false)}>
            <Modal.Body>{this.displayModal(this.state.modalName)}</Modal.Body>
          </Modal>

          <Toast onClose={() => this.handleToast(false)} show={this.state.toast.show} delay={3000} autohide>
            <Toast.Header>
              <strong className="mr-auto">Message</strong>
            </Toast.Header>
            <Toast.Body>{this.state.toast.text}</Toast.Body>
          </Toast>
        </Container>
      </main>
    )
  }
}
export default EventDetails
