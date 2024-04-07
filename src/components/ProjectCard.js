import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              github link
            </a>
          )}
        </div>
      </div>
    </Col>
  );
};
