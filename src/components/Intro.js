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
          <Col xs={12} s={8} md={5}>
          <div className="hobbies">
            <p>In my free time I enjoy:</p>
            <h3><Flower1 size={32} /> Practicing vinyasa yoga</h3><br></br>
            <h3><Flower1 size={32} /> Listening to music and attending concerts</h3><br></br>
            <h3><Flower1 size={32} /> Collecting and cooking plant-based recipes</h3><br></br>
            <h3><Flower1 size={32} /> Reading science fiction and fantasy novels</h3><br></br>
            <h3><Flower1 size={32} /> Volunteering with PDX WIT and at the 
            <a href="https://www.instagram.com/p/CySHjUpL2kG/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="> Hollywood Theater</a></h3><br></br>
            <h3><Flower1 size={32} /> My cats: Handsome & Holiday</h3><br></br>
          </div>
            </Col>
            <Col xs={12} s={8} md={7}>
            <div>
                <span className="tagline">About Me</span>
                  <p>I'm an enthusiastic communicator and I love to explore the fascinating ways people connect, both online and offline.<br></br><br></br> After years of experience in the service industry, I decided to pivot and embrace my love of continuous learning. I chose to redirect my passion for people and innovative solutions and pursue a career in software development. I'm excited to have a new opportunity to deploy my soft skills and my tehcnical abilities.</p>
                  <br></br>
                  <p>I bring top-notch communication skills, organizational acumen, management experience, and an optimistic growth mindset to every team and project I'm part of.</p>
                  <br></br>
                  <p>I value community and connection and love to collaborate.</p>
                  <br></br>
                  <p>Fun Fact: I've been featured on the cover of an industry-wide trade magazine!</p>
                  <img src={CoverGirl} alt="Eliot Cover Girl Img"/>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}