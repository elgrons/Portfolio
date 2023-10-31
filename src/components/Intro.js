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
            <h3><Flower1 size={32} /> Volunteering with PDX WIT and at the 
            <a href="https://www.instagram.com/p/CySHjUpL2kG/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="> Hollywood Theater</a></h3><br></br>
            <h3><Flower1 size={32} /> My cats: Handsome & Holiday</h3><br></br>
          </div>
            </Col>
            <Col xs={12} md={6} xl={7}>
            <div>
                <span className="tagline">About Me</span>
                  <p>I'm a positive person and skilled communicator who loves to bring brand narratives to life by developing technical solutions for modern problems.<br></br><br></br> My background in full-stack software development, private events, customer service, sales, and BA in Journalism boost my natural empathy and curiosity to ask the right questions, collect data, and deliver innovative solutions. I'm excited to deploy my singular blend of skills to build relationships with stakeholders and clients and provide a world-class product experience.</p>
                  <br></br>
                  <p>I bring my growth mindset and optimistic energy to every team and project I'm part of.</p>
                  <br></br>
                  <p>I value community, connection, and collaboration.</p>
                  <br></br>
                  <p>Fun Fact: I've been featured on the cover of an industry-wide trade magazine!</p>
                  <img src={CoverGirl} class="col-md-4 float-md-auto mb-4 ms-md-4" alt="Eliot Cover Girl Img"/>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}