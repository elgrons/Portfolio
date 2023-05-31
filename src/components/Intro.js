import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/ELGronstal.png";
import React, { useState, useEffect } from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './App.css';

export const Intro = () => {
  // const [loopNum, setLoopNum] = useState(0);
  // const [isDeleting, setIsDeleting] = useState(false);
  // const [text, setText] = useState("");
  // const [delta, setDelta] = useState(300 - Math.random() * 100);
  // const toRotate = [ "Jr Software Engineer", "Full Stack Developer"];
  // const period = 2000;

  return (
    <section className="intro" id="intro">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={12} xl={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">About Me</span>
                <h3>Hi! I'm Eliot</h3>
                  <p>I'm an enthusiastic former service-industry pro segueing into a junior full-stack software engineer.<br></br> I'm pivoting into tech and bringing my top-notch communication skills, organizational prowess, and growth mindset along. I'm a team player who is excited to apply my attention to detail and customer-focused expertise to the world of software engineering. <br></br>I use she/her pronouns.</p>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}