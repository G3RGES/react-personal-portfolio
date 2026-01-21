/* eslint-disable no-unused-vars */
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
import projImg11 from "../assets/img/project-img11.png";
import projImg12 from "../assets/img/project-img12.png";
import projImg13 from "../assets/img/project-img13.png";
import projImg14 from "../assets/img/project-img14.jpg";
import projImg15 from "../assets/img/project-img15.jpg";
import projImg16 from "../assets/img/project-img16.jpg";
import projImg17 from "../assets/img/project-img17.jpg";
import projImg18 from "../assets/img/Fany-3andak.png";
import projImg19 from "../assets/img/eat-a-split.png";
import projImg20 from "../assets/img/usepopcorn.png";
import projImg21 from "../assets/img/travel-list.png";
import projImg22 from "../assets/img/G3RGES_The-Movie-App.png";

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
      link: "https://github.com/G3RGES/youtube_clone",
      demo: "https://youtube-clone-g3rges.netlify.app/",
    },
    {
      title: "Shopsy",
      description:
        "simple ecommerce store using React.js, Tailwind, react icons,and aos ",
      imgUrl: projImg11,
      link: "https://github.com/G3RGES/eccomerce-website",
      demo: "https://shopsy-delta.vercel.app/",
    },
    {
      title: "Space Website",
      description:
        "Space Website using React.js, Tailwind, react icons,and aos ",
      imgUrl: projImg12,
      link: "https://github.com/G3RGES/space_website",
      demo: "https://space-website-g3rges.vercel.app/",
    },
  ];
  const projects2 = [
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
  const projects3 = [
    {
      title: "META website",
      description:
        "simple META/VR website using React.js, Tailwind, react icons,and aos ",
      imgUrl: projImg13,
      link: "https://github.com/G3RGES/metaverse-web",
      demo: "https://metaverse-web-pi.vercel.app/",
    },
    {
      title: "BERRIES",
      description: "simple strawberry banner using React.js,and Tailwind",
      imgUrl: projImg14,
      link: "https://github.com/G3RGES/strawberry-hero",
      demo: "https://strawberries.vercel.app/",
    },
    {
      title: "Doraemon",
      description:
        "simple Doraemon website using React.js, Tailwind, react icons,and aos",
      imgUrl: projImg15,
      link: "https://github.com/G3RGES/doraemon",
      demo: "https://doraemon-gilt.vercel.app/",
    },
    {
      title: "Games Website",
      description:
        "simple Games website using React.js, Tailwind, react icons,and aos",
      imgUrl: projImg16,
      link: "https://github.com/G3RGES/gaming-website",
      demo: "https://gaming-website-omega.vercel.app/",
    },
    {
      title: "FOODIE Website",
      description:
        "simple Restaurant Website using React.js, Tailwind, react icons,and aos",
      imgUrl: projImg17,
      link: "https://github.com/G3RGES/tasty-react",
      demo: "https://tasty-react-beta.vercel.app/",
    },
    {
      title: "Fany M3ak",
      description:
        "Graduation project built with React, emphasizing modular architecture and modern UI/UX practices.",
      imgUrl: projImg18,
      link: "https://github.com/nihalsabri/GP-ITI-App",
      demo: "https://gp-iti-website.vercel.app/",
    },
    {
      title: "FOODIE Website",
      description:
        "simple Restaurant Website using React.js, Tailwind, react icons,and aos",
      imgUrl: projImg19,
      link: "https://github.com/G3RGES/eat-n-split",
      demo: "https://eat-n-split-orcin-tau.vercel.app/",
    },
    {
      title: "FOODIE Website",
      description:
        "simple Restaurant Website using React.js, Tailwind, react icons,and aos",
      imgUrl: projImg20,
      link: "https://github.com/G3RGES/usepopcorn",
      demo: "https://usepopcorn-phi-dusky.vercel.app/",
    },
    {
      title: "FOODIE Website",
      description:
        "simple Restaurant Website using React.js, Tailwind, react icons,and aos",
      imgUrl: projImg21,
      link: "https://github.com/G3RGES/travel-list",
      demo: "https://travel-list-tau-eight.vercel.app/",
    },
    {
      title: "The Movie App",
      description:
        "simple Restaurant Website using React.js, Tailwind, react icons,and aos",
      imgUrl: projImg22,
      link: "https://github.com/G3RGES/The-Movie-App",
      demo: "https://the-movie-app-phi.vercel.app/",
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
                  {/* <p>Projects I've done recently</p> */}
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      {/* <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item> */}
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 2</Nav.Link>
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
                      {/* <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane> */}
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects3.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <h2>
                        More Projects are available on my{" "}
                        <a
                          href="https://github.com/G3RGES"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          GitHub
                        </a>{" "}
                        Profile.
                      </h2>
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
