import React, { Component } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Link } from "react-router-dom"
import { Parallax } from "react-scroll-parallax"

import "./Home.css"

class Home extends Component {
  constructor() {
    super()
    this.state = {
      videoURL: "/img/header-video2-compress.mp4",
    }
  }

  render() {
    return (
      <main className="homepage">
        <header className="homeHeader">
          <div className="video-container">
            <video autoPlay loop muted className="background-video">
              <source src={this.state.videoURL} type="video/mp4" />
            </video>
          </div>
          <Container>
            <Parallax y={[20, -20]}>
              <Row>
                <Col as="article" md={6}>
                  <div>
                    <h1>Play My Retro</h1>
                    <h3>Where games and people meet</h3>
                    <Link to="/signup" className="my-button">
                      Get Started
                    </Link>
                  </div>
                </Col>
                <Col as="article" md={6}>
                  <Parallax x={[-5, 5]} y={[-10, 10]}>
                    <figure className="game-controller">
                      <img src="/img/game-controller.svg" alt="game Controller" />
                    </figure>
                  </Parallax>
                </Col>
              </Row>
            </Parallax>
          </Container>
        </header>
        <Container>
          <Parallax y={[-15, 15]}>
            <Row as="section" className="works">
              <h1>How it works!</h1>
              <article className="display-card">
                <article className="home-card">
                  <figure className="icon">
                    <img src="/img/edit-tools.svg" alt="signupicon" />
                  </figure>
                  <h4>Sign Up</h4>
                  <p>Get into our awesome comunity</p>
                </article>
                <article className="home-card">
                  <figure className="icon">
                    <img className="calendar" src="/img/calendar-day-solid.svg" alt="createicon" />
                  </figure>
                  <h4>Create Events</h4>
                  <p>Create events to play videogames</p>
                </article>
                <article className="home-card">
                  <figure className="icon">
                    <img src="/img/gamepad-solid.svg" alt="playicon" />
                  </figure>
                  <h4>Play</h4>
                  <p>Assist to other events and play with people</p>
                </article>
                <article className="home-card">
                  <figure className="icon">
                    <img src="/img/comments-solid.svg" alt="commenticon" />
                  </figure>
                  <h4>Comments</h4>
                  <p>Write about events you liked most</p>
                </article>
              </article>
            </Row>
          </Parallax>
          <Parallax y={[-15, 15]}>
            <Row as="section" className="every-game">
              <Col as="article" md={6}>
                <article>
                  <figure className="composition">
                    <img src="/img/games-comp.png" alt="compositionimg" />
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
                  <Link to="/events" className="my-button">
                    Create Events!
                  </Link>
                </article>
              </Col>
            </Row>
          </Parallax>
        </Container>
      </main>
    )
  }
}
export default Home
