import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import flower1 from "../assets/img/flower1.png";
import flower2 from "../assets/img/flower2.png";
import flower3 from "../assets/img/flower3.png";
// import gradient1 from "../assets/img/gradient1.png";
// import gradient2 from "../assets/img/gradient2.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>Skills</h2>
              <p>
                I'm enthusiastic about what I know, and I'm eager to continue to learn.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={flower1} alt="Icon to show skill" />
                  <h5>Full-Stack Web Development</h5>
                </div>
                <div className="item">
                  <img src={flower2} alt="Icon to show skill" />
                  <h5>C# | .NET Core 6</h5>
                </div>
                <div className="item">
                  <img src={flower3} alt="Icon to show skill" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={flower1} alt="Icon to show skill" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={flower1} alt="Icon to show skill" />
                  <h5>REST APIs</h5>
                </div>
                <div className="item">
                  <img src={flower2} alt="Icon to show skill" />
                  <h5>HTML & CSS</h5>
                </div>
                <div className="item">
                  <img src={flower3} alt="Icon to show skill" />
                  <h5>SQL | NoSQL</h5>
                </div>
                <div className="item">
                <img src={flower1} alt="Icon to show skill" />
                  <h5>Test Driven Development</h5>
                </div>
                <div className="item">
                  <img src={flower2} alt="Icon to show skill" />
                  <h5>Git Workflow</h5>
                </div>
                <div className="item">
                  <img src={flower3} alt="Icon to show skill" />
                  <h5>Postman | Swagger</h5>
                </div>
                <div className="item">
                <img src={flower1} alt="Icon to show skill" />
                  <h5>Agile & Scrum Methodologies</h5>
                </div>
                <div className="item">
                  <img src={flower2} alt="Icon to show skill" />
                  <h5>Project Management</h5>
                </div>
                <div className="item">
                  <img src={flower3} alt="Icon to show skill" />
                  <h5>Node.js</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
