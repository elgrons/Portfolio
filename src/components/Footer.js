import { Container, Row, Col } from "react-bootstrap";
// import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/navlinkedIn.png';
import navIcon2 from '../assets/img/navgithub.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/elgrons/"><img src={navIcon1} alt="LinkedIn nav icon" /></a>
              <a href="https://github.com/elgrons"><img src={navIcon2} alt="GitHub nav icon" /></a>
            </div>
            <p>Copyright Eliot Gronstal 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}