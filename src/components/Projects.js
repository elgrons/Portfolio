import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import gradient2 from "../assets/img/gradient2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ProjectFolio } from "./ProjectFolio";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {

  const javascriptproj = [
    {
      title: "Business Startup",
      description: "Design & Development",
      // imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      // imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      // imgUrl: projImg3,
    }
  ];

    const csproj = [
    {
      title: "Business Startup",
      description: "Design & Development",
      // imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      // imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      // imgUrl: projImg3,
    },
  ];

  const reactproj = [
    {
      title: "Business Startup",
      description: "Design & Development",
      // imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      // imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      // imgUrl: projImg3,
    }
  ];

  const teamproj = [
    {
      title: "Business Startup",
      description: "Design & Development",
      // imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      // imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      // imgUrl: projImg3,
    }
  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
          <h2>Recent Projects</h2>
          <p>Explore my portfolio of work using both back-end and front-end technologies.</p>
          <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">JavaScript/CSS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">C#/.NET</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">React</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Team Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          javascriptproj.map((project, index) => {
                            return (
                              <ProjectFolio
                                key={index}
                                {...javascriptproj}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    {
                          csproj.map((project, index) => {
                            return (
                              <ProjectFolio
                                key={index}
                                {...csproj}
                                />
                            )
                          })
                        }
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    {
                          reactproj.map((project, index) => {
                            return (
                              <ProjectFolio
                                key={index}
                                {...reactproj}
                                />
                            )
                          })
                        }
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                    {
                          teamproj.map((project, index) => {
                            return (
                              <ProjectFolio
                                key={index}
                                {...teamproj}
                                />
                            )
                          })
                        }
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={gradient2} alt="A gradient color for the background"></img>
    </section>
  )
}