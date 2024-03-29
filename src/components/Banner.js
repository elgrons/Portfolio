import { Container, Row, Col } from "react-bootstrap";
import { Envelope } from "react-bootstrap-icons";
import headerImg from "../assets/img/ELGronstal.png";
import React, { useState, useEffect } from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './App.css';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = [ "Full Stack Developer", "Software Engineer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker)};
    }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);

    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500); 
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome!</span>
                <h1>{`Hi! I'm Eliot:`}<br></br> <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Full Stack Developer", "Software Engineer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Collaborative and empathetic full stack web developer with a penchant for optimizing brand narratives and delivering innovative solutions.<br></br></p>
                  <a href="mailto: eliot.lauren@gmail.com">
                  <button onClick={() => console.log('contact')}>Let’s connect! <Envelope size={38} /></button></a>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}