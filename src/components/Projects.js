import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { ProjectFolio } from "./ProjectFolio";
import javascriptImg1 from "../assets/img/mrroboger.png";
import javascriptImg2 from "../assets/img/niceslicepizza.png";
import javascriptImg3 from "../assets/img/currencyexchanger.png";

export const Projects = () => {
  const javascriptproj = [
    {
      title: "Mr. Roboger's Neighborhood",
      description:
        "A web app that takes a given number from a user and returns a list of values from 0 to the user's inputted number with funky robot substitutions returned.",
      details: (
        <a href="https://github.com/elgrons/mr-robogers-neighborhood">
          Visit the GitHub Repo
        </a>
      ),
      imgUrl: javascriptImg1,
    },
    {
      title: "Nice Slice Pizza Parlor",
      description:
        "A website for a vegan pizza company where a user can choose one or more individual toppings, a size to order a pizza, and see the final cost.",
      details: (
        <a href="https://github.com/elgrons/Nice-Slice-Pizza-Parlor">
          Visit the GitHub Repo
        </a>
      ),
      imgUrl: javascriptImg2,
    },
    {
      title: "Currency Exchanger",
      description:
        "A website where a user can input a number and convert it to it's equivalent amount in a different currency utilizing a money exchange API.",
      details: (
        <a href="https://github.com/elgrons/Currency-Exchange">
          Visit the GitHub Repo
        </a>
      ),
      imgUrl: javascriptImg3,
    },
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
    },
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
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Recent Projects</h2>
                  <p>
                    Explore my portfolio of work using both back-end and
                    front-end technologies.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
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
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {javascriptproj.map((javascriptproj, index) => {
                            return (
                              <ProjectFolio key={index} {...javascriptproj} />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                        {csproj.map((csproj, index) => {
                          return <ProjectFolio key={index} {...csproj} />;
                        })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                        {reactproj.map((reactproj, index) => {
                          return <ProjectFolio key={index} {...reactproj} />;
                        })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                        <Row>
                        {teamproj.map((teamproj, index) => {
                          return <ProjectFolio key={index} {...teamproj} />;
                        })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
