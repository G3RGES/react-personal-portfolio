import { Col, Container, Row } from "react-bootstrap";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col sm={6}>
            {/* <img src={logoImg} alt="logoImg" /> */}
            <h2
              style={{
                color: "white",
                alignSelf: "center",
                justifySelf: "center",
              }}
            >
              GERGES
            </h2>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/gergesnashaat/" target="_blank">
                <img src={navIcon1} alt="linkedin" />
              </a>
              <a href="https://www.facebook.com/gergesnashaat95" target="_blank">
                <img src={navIcon2} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/gergesnashaat/" target="_blank">
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            <p>
              &copy; 2023 - All rights reserved. <mark>G3RGES</mark>{" "}
            </p>
          </Col>
          {/* <ul style={{ display: "flex", justifyContent: "center" }} >
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                    
                </ul> */}
        </Row>
      </Container>
    </footer>
  );
};
