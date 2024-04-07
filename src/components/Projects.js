import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { ProjectCard } from "./ProjectCard";
import "animate.css";

export const Projects = () => {
  const projects = [
    {
      title: "Simple YouTube clone",
      description: "simple YouTube clone using HTML and CSS 'Tutorial'",
      imgUrl: projImg4,
    },
    {
      title: "Simple Portfolio",
      description: "simple Portfolio using HTML and CSS 'Tutorial'",
      imgUrl: projImg5,
    },
    {
      title: "Red-Store",
      description: "simple ecommerce store using HTML , CSS, and JS 'Tutorial'",
      imgUrl: projImg6,
    },
    {
      title: "JS Portfolio",
      description: "Portfolio using HTML, CSS, and JS 'Tutorial'",
      imgUrl: projImg7,
    },
    {
      title: "Chat Application",
      description:
        "Chat Application using React.js , React Icons, Chat Engine, and Axios 'Tutorial'",
      imgUrl: projImg8,
    },
    {
      title: "Admin Dashboard",
      description:
        "Simple Dummy data admin Dashboard using React.js, Syncfusion, React Routers, and React Icons 'Tutorial'",
      imgUrl: projImg9,
    },
    {
      title: "API YouTube Clone",
      description:
        "Advanced YouTube clone using React.js, React Router, React Player, Axios, and MUI 'Tutorial'",
      imgUrl: projImg10,
    },
  ];
  const itiProjects = [
    {
      title: "Shezlong",
      description: "final ITI project usng WordPress 'Team Leader'",
      imgUrl: projImg1,
    },
    {
      title: "Jumia",
      description: "responsive Bootstrap project for ITI",
      imgUrl: projImg2,
    },
    {
      title: "Social Media Website",
      description: "responsive Bootstrap task for ITI",
      imgUrl: projImg3,
    },
  ];
  return (
    <section className="project" id="project">
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
                  <h2>Projects</h2>
                  <p>Projects I've done recently</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {itiProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Later Projects Solo or Team will be added here</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
};
