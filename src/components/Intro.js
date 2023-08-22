import { Container, Row, Col } from "react-bootstrap";
import { Flower1 } from "react-bootstrap-icons";
// import introImg from "../assets/img/ELGronstal.png";
import 'animate.css';
import './App.css';

export const Intro = () => {

  return (
    <section className="intro" id="intro">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} s={8} md={5}>
          <div className="hobbies">
            <p>In my free time I enjoy:</p>
            <h3><Flower1 size={32} /> Practicing vinyasa yoga</h3><br></br>
            <h3><Flower1 size={32} /> Listening to music and attending concerts</h3><br></br>
            <h3><Flower1 size={32} /> Collecting and cooking plant-based recipes</h3><br></br>
            <h3><Flower1 size={32} /> Devouring good stories (<a href=
            "https://www.goodreads.com/user/show/7976181-eliot">science fiction & fantasy novels </a> especially, but TV shows and movies, too!) </h3><br></br>
            <h3><Flower1 size={32} /> My cats: Handsome & Holiday</h3><br></br>
          </div>
            </Col>
            <Col xs={12} s={8} md={7}>
            <div>
                <span className="tagline">About Me</span>
                  <p>I'm an passionate communicator and I love to explore the fascinating ways people connect, both online and offline.<br></br><br></br> After 8.5 years of working for a <a href="https://breakside.com/">world-class microbrewery</a>, I decided to pivot and pursue a career in software development. I completed a certificate in Mobile and Web Development at Epicodus in 2023.</p>
                  <br></br>
                  <p>I bring my top-notch communication skills, organizational prowess, and growth mindset to every team and project I'm part of.</p>
                  <br></br>
                  <p>I value community and connection and love to collaborate with others.</p>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}