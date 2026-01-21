import { Col, Container, Row } from "react-bootstrap";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={12}>
            <div className="contact" id="connect">
              <div className="overlay"></div>
              <div className="container">
                <h2>Contact me</h2>
                <section className="cards" id="contact">
                  <div className="content">
                    <div className="card">
                      <div className="icon">
                        <i className="fa-solid fa-phone"></i>
                      </div>
                      <div className="info">
                        <h3>Phone</h3>
                        <p>+201203346582</p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="icon">
                        <i className="fa-solid fa-envelope"></i>
                      </div>
                      <div className="info">
                        <h3>E-Mail</h3>
                        <p>Georgios.Nashaat@gmail.com</p>
                      </div>
                    </div>

                    <div className="card">
                      <div className="icon">
                        <i className="fa-brands fa-square-github"></i>
                      </div>
                      <div className="info">
                        <h1
                          style={{
                            textAlign: "center",
                            marginTop: "10px",
                          }}
                        >
                          <a
                            style={{
                              color: "black",
                              textDecoration: "none",
                              backgroundColor: "white",
                              padding: "5px",
                              borderRadius: "7px",
                            }}
                            href="https://github.com/G3RGES"
                            target="_blank"
                            rel="noreferrer"
                          >
                            GitHub
                          </a>
                        </h1>
                      </div>
                    </div>

                    <div className="card">
                      <div className="icon">
                        <i class="fa-brands fa-behance"></i>
                      </div>
                      <div className="info">
                        <h1
                          style={{
                            textAlign: "center",
                            marginTop: "10px",
                          }}
                        >
                          <a
                            style={{
                              color: "black",
                              textDecoration: "none",
                              backgroundColor: "white",
                              padding: "5px",
                              borderRadius: "7px",
                            }}
                            href="https://www.behance.net/gergesnashaat1"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Behance
                          </a>
                        </h1>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
