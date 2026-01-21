import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link, demo }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p>{description}</p>

          <div className="project-links">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="project-btn github"
              >
                GitHub
              </a>
            )}

            {demo !== undefined && (
              <a
                href={demo || "#"}
                target="_blank"
                rel="noreferrer"
                className="project-btn demo"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};
