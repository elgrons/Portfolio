import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from '../assets/img/navlinkedIn.png';
import navIcon2 from '../assets/img/navgithubicon.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={7} className="text-center text-sm-end">
            <div className="social-icon-footer">
            <p>Copyright Eliot Gronstal 2023. All Rights Reserved</p>
            </div>
          </Col>
          <Col size={12} sm={5} className="text-center text-sm-end">
            <div className="social-icon-footer">
              <a href="https://www.linkedin.com/in/elgrons/"><img src={navIcon1} alt="LinkedIn nav icon" /></a>
              <a href="https://github.com/elgrons"><img src={navIcon2} alt="GitHub nav icon" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}