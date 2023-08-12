import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { ProjectFolio } from "./ProjectFolio";
import javascriptImg1 from "../assets/img/project/mrroboger.png";
import javascriptImg2 from "../assets/img/project/niceslicepizza.png";
import javascriptImg3 from "../assets/img/project/currencyexchanger.png";
import csImg1 from "../assets/img/project/sillystringz.png";
import csImg2 from "../assets/img/project/pierresbakery.png";
import csImg3 from "../assets/img/project/GratShiftSwaggerEndpoints.png";
import reactImg1 from "../assets/img/project/coffeeroaster.png";
import reactImg2 from "../assets/img/project/portfoliobanner.png";
// import reactImg3 from "../assets/img/project/comingsoon.svg";
import reactImg3 from "../assets/img/project/ClientConnect.png";
import teamImg1 from "../assets/img/project/walkencloset.png";
import teamImg2 from "../assets/img/project/DilPr.png";
import teamImg3 from "../assets/img/project/SurrealistDreams.png";

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
      title: "Dr. Shamrock Sillystringz Factory",
      description: "An ASP.NET Core MVC web application for a factory to manage their engineers and the whimsical machines they are licensed to fix.",
      details: (
        <a href="https://github.com/elgrons/ShamrockSillystringz.Solution">
          Visit the GitHub Repo
        </a>
      ),
      imgUrl: csImg1,
    },
    {
      title: "Sweet & Savory Baked Goods",
      description: "A Mvc application to market sweet and savory treats for a proxy bakery. It features authentication and many-to-many relationships.",
      details: (
        <a href="https://github.com/elgrons/SweetAndSavory.Solution">
          Visit the GitHub Repo
        </a>
      ),
      imgUrl: csImg2,
    },
    {
      title: "Grat-Shift-Save API",
      description: "A .NET API created to host and track an authenticated users gratuity based income using a MySQL database.",
      details: (
        <a href="https://github.com/elgrons/GratShiftSaveApi.Solution">
          Visit the GitHub Repo
        </a>
      ),
      imgUrl: csImg3,
    },
  ];

  const reactproj = [
    {
      title: "Coffee Inventory",
      description: "A React.js application that tracks inventory for a provisional local coffee roaster that includes CRUD functionality.",
      details: (
        <a href="https://github.com/elgrons/CoffeeRoasterInventory">
          Visit the GitHub Repo
        </a>
      ),
      imgUrl: reactImg1,
    },
    {
      title: "This Portfolio!",
      description: "A little bit about me...",
      details: (
        <a href="https://github.com/elgrons/portfolio">
          Visit the GitHub Repo
        </a>
      ),
      imgUrl: reactImg2,
    },
    {
      title: "Client Connect",
      description: "A project management platform for a provisional software development company featuring multiple third-party integrations.",
      details: (
        <a href="https://github.com/elgrons/summer-internship-2023">
          Visit the GitHub Repo
        </a>
      ),
      imgUrl: reactImg3,
    },
  ];

  const teamproj = [
    {
      title: "Christopher Walk-In Closet",
      description: "A closet builder made using JavaScript based on a user's input `mood` color that returns a suggested palette with an API and has links for shopping. ",
      details: (
        <a href="https://github.com/elgrons/team-thread">
          Visit the GitHub Repo
        </a>
      ),
      imgUrl: teamImg1,
    },
    {
      title: "DiLPr",
      description: "A .NET Mvc app for Dogs to find `matching` compatability with other dogs. Puppr Profiles include a profile photo, matching with other dogs based on likes and dislikes, and the ability to swipe left or right on other user's profiles.",
      details: (
        <a href="https://github.com/elgrons/DiLPr.Solution">
          Visit the GitHub Repo
        </a>
      ),
      imgUrl: teamImg2,
    },
    {
      title: "Surrealist Reverie",
      description: "An ethereal React website that store a user's dreams so they can recall our surrealist reveries at a later time for inspiration.",
      details: (
        <a href="https://github.com/elgrons/SurrealistReverie">
          Visit the GitHub Repo
        </a>
      ),
      imgUrl: teamImg3,
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
