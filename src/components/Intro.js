import { Container, Row, Col } from "react-bootstrap";
import { Flower1 } from "react-bootstrap-icons";
import CoverGirl from "../assets/img/EliotCoverGirl.png";
import 'animate.css';
import './App.css';

export const Intro = () => {

  return (
    <section className="intro" id="intro">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={5}>
          <div className="hobbies">
            <p>In my free time I enjoy:</p>
            <h3><Flower1 size={32} /> Practicing vinyasa yoga</h3><br></br>
            <h3><Flower1 size={32} /> Listening to music and attending concerts</h3><br></br>
            <h3><Flower1 size={32} /> Collecting and cooking plant-based recipes</h3><br></br>
            <h3><Flower1 size={32} /> Reading science fiction and fantasy novels</h3><br></br>
            <h3><Flower1 size={32} /> Volunteering at a historic, local theater</h3><br></br>
            <h3><Flower1 size={32} /> My cats: Handsome & Holiday</h3><br></br>
          </div>
            </Col>
            <Col xs={12} md={6} xl={7}>
            <div>
                <span className="tagline">About Me</span>
                  <p>I'm a naturally positive and skilled communicator commited to delivering technical solutions with a "people-first" mindset.<br></br><br></br> I have a BA in Journalism, leveraged with experience in full-stack software development, customer service, and event coordination. The combination of my innate curiosity and professional history enables me to ask the right questions, collect data, and deliver high-quality products. I'm interested in working within a team as a collaborator to utilize my strong communication skills to build relationships and provide a world-class product experience.</p>
                  <br></br>
                  <p>I bring my growth mindset and optimistic energy to every team and project I'm part of.</p>
                  <br></br>
                  <p>I value community, connection, and collaboration.</p>
                  <br></br>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}