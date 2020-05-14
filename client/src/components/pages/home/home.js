import React, { Component } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Link } from "react-router-dom"

import "./home.css"

class Home extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <main className="homepage">
        <Container>
          <Row as="header" className="homeHeader">
            <Col as="article" md={6}>
              <h1>Play My Retro</h1>
              <h3>Where games and people met</h3>
              <Link to="/" className="myButton">
                Get Started
              </Link>
            </Col>
            <Col as="article" md={6}>
              <figure className="gameController">
                <img src="/img/game-controller.svg" alt="gameController" />
              </figure>
            </Col>
          </Row>
          <Row as="section" className="works">
            <h1>How it works!</h1>
            <article className="displayCard">
              <article className="homeCard">
                <figure className="icon">
                  <img src="/img/edit-tools.svg" alt="signupicon"/>
                </figure>
                <h4>Sign Up</h4>
                <p>Get into our awesome comunity</p>
              </article>
              <article className="homeCard">
                <figure className="icon">
                  <img className="calendar" src="/img/calendar-day-solid.svg" alt="createicon"/>
                </figure>
                <h4>Create Events</h4>
                <p>Create events to play videogames</p>
              </article>
              <article className="homeCard">
                <figure className="icon">
                  <img src="/img/gamepad-solid.svg" alt="playicon"/>
                </figure>
                <h4>Play</h4>
                <p>Assist to other events and play with people</p>
              </article>
              <article className="homeCard">
                <figure className="icon">
                  <img src="/img/comments-solid.svg" alt="commenticon"/>
                </figure>
                <h4>Comments</h4>
                <p>Write about events you liked most</p>
              </article>
            </article>
          </Row>
          <Row as="section" className="everyGame">
            <Col as="article" md={6}>
              <article>
                <figure className="composition">
                  <img src="/img/games-comp.png" alt="compositionimg"/>
                </figure>
              </article>
            </Col>
            <Col as="article" md={6}>
              <article className="gameText">
                <h3>Every game you want!</h3>
                <p>
                  Choose a game you want and invite people to play it with you! It's simple to do, and it's a great opportunity to meet people who
                  likes games you like!
                </p>
                <Link to="/events" className="myButton">
                  Create Events!
                </Link>
              </article>
            </Col>
          </Row>
        </Container>
      </main>
    )
  }
}
export default Home
