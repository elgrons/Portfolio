import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/ELGronstal.png";
import React, { useState, useEffect } from "react";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';
// import './App.css';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Eliot Gronstal", "Jr Software Engineer", "Full Stack Developer"];
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
            <span className="tagline">Welcome to EG Portfolio</span>
            <h1>
              {`Hi I'm Eliot`}
              <span className="wrap">{text}a full-stack software engineer</span>
            </h1>
            <p>I'm an enthusiastic former service-industry pro segueing into a junior full-stack software engineer. I'm pivoting into tech and bringing my top-notch communication skills, organizational prowess, and growth mindset along. I'm a team player who is excited to apply my attention to detail and customer-focused expertise to the world of software engineering. I use she/her pronouns.</p>
            <button onClick={() => console.log("connect")}>
              Code, connect, communicate! <ArrowRightCircle size={25}> </ArrowRightCircle>
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};