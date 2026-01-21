import { Col } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  link,
  demo,
  stack = [],
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />

        <div className="proj-overlay">
          <h4>{title}</h4>

          <p>{description}</p>

          {/* Tech Stack */}
          <div className="tech-stack">
            {stack.map((tech, i) => (
              <span key={i}>{tech}</span>
            ))}
          </div>

          {/* Buttons */}
          <div className="project-links">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="project-btn github"
              >
                <FaGithub /> GitHub
              </a>
            )}

            <a
              href={demo || "#"}
              target="_blank"
              rel="noreferrer"
              className={`project-btn demo ${!demo ? "disabled" : ""}`}
              onClick={(e) => !demo && e.preventDefault()}
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
