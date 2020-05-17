import React, { Component } from "react"
import CommentService from "../../../services/comment.service"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

class CommentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      description: "",
      createdBy: this.props.loggedInUser._id,
      event: this.props.match.params.id,
    }
    this.commentService = new CommentService()
  }

  handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    this.setState({
      [e.target.name]: value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.commentService
      .createComment(this.state)
      .then(() => this.props.finishEventPost())
      .catch((err) => console.log(err))
  }

    render() {
        console.log(this.props)
    return (
      <Container as="section">
        <h1>New Event</h1>
        <hr />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control className="input" name="title" type="text" value={this.state.title} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control className="input" name="description" type="textarea" value={this.state.description} onChange={this.handleChange} />
          </Form.Group>
          <div className="form-buttons">
            <button className="myButton" type="submit">
              Create Comment
            </button>
            <button onClick={() => this.props.closeModal()} className="myMiniButton">
              Close
            </button>
          </div>
        </Form>
      </Container>
    )
  }
}

export default CommentForm
