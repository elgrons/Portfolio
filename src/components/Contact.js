import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/floral.png";
import emailjs from '@emailjs/browser';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const contactForm = useRef();

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs.sendForm('service_69kndfc', 'template_7d4o7hb', contactForm.current, 'stlnMh3EBhbxeDTsl')
      .then((result) => {
          console.log(result.text);
          console.log("Sent successfully!");
      }, (error) => {
          console.log(error.text);
          console.log("Failure to send.");
      });
  };


  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Me"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Connect with Me</h2>
                <form ref={contactForm} onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} name="firstName" placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lastName} name="lastName" placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} name="email" placeholder="Contact Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} name="message" placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}