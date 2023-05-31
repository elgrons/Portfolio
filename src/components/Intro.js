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
            <h3><Flower1 size={32} /> Collecting recipes and cooking plant-based goodies</h3><br></br>
            <h3><Flower1 size={32} /> Devouring good stories: <a href=
            "https://www.goodreads.com/user/show/7976181-eliot">science fiction & fantasy novels </a> especially, but I love TV shows and movies, too! </h3><br></br>
            <h3><Flower1 size={32} /> My two cats: Handsome & Holiday</h3><br></br>
          </div>
            </Col>
            <Col xs={12} s={8} md={7}>
            <div>
                <span className="tagline">About Me</span>
                  <p>I'm an enthusiastic former service-industry pro segueing into a new career in tech.<br></br><br></br> After 8.5 years of working for a <a href="https://breakside.com/">world-class microbrewery</a>, I decided to make a big pivot in January 2023 and pursue a career in software development. I completed my Mobile and Web Development Certificate at <a href="https://www.epicodus.com/">Epicodus</a> in May 2023.</p>
                  <br></br><br></br> 
                  <p>I am eager to bring my top-notch communication skills, organizational prowess, and growth mindset to a new team.</p>
                  <br></br><br></br>
                  <p>I value people greatly and love when I get to connect, collaborate, and communicate with others.</p>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}