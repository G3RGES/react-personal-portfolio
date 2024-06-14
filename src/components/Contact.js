// import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
// import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
  // const formInitialDetails = {
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phone: "",
  //   message: "",
  // };
  // const [formDetails, setFormDetails] = useState(formInitialDetails);
  // const [buttonText, setButtonText] = useState("Send");
  // const [status, setStatus] = useState({});

  // const onFormUpdate = (category, value) => {
  //   setFormDetails({
  //     ...formDetails,
  //     [category]: value,
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setButtonText("Sending...");
  //   let response = await fetch("http://localhost:5000/contact", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "Application/json;charset=utf-8",
  //     },
  //     body: JSON.stringify(formDetails),
  //   });
  //   setButtonText("Send");
  //   let result = response.json();
  //   setFormDetails(formInitialDetails);
  //   if (result.code === 200) {
  //     setStatus({ success: true, message: "message sent successfully" });
  //   } else {
  //     setStatus({
  //       success: false,
  //       message: "message was not sent,please try again...",
  //     });
  //   }
  // };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          {/* <Col md={4}>
            <img src={contactImg} alt="contactImg" />
          </Col> */}
          <Col md={12}>
            {/* <h2>Let's Connect</h2> */}
            {/* <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    cols="30"
                    rows="6"
                    value={formDetails.message}
                    placeholder="Leave your message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  ></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form> */}

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
