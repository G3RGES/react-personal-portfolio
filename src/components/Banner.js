/* eslint-disable react-hooks/exhaustive-deps */
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

import { useState, useEffect } from "react";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const toRotate = [
    "Web Developer",
    "Front-End Developer",
    "React.js Developer",
  ];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  // const downloadCV = () => {
  //  const fileId = "1QNKcE3IFtMbjqRCV75UNqt_eO3OHC0xM";
  //   const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
  //   const viewUrl =
  //     "https://drive.google.com/file/d/1QNKcE3IFtMbjqRCV75UNqt_eO3OHC0xM/view?usp=sharing";
  //   window.open(downloadUrl, "_blank");
  // };

  //   const downloadCV = () => {
  //   const fileId = "1za2yEdr_qmeWjhfg3tZgiDR2LhvMk6-O";
  //   const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
  //   const viewUrl = `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;
  //   window.open(downloadUrl, "_blank");
  // };

  //   const downloadCV = () => {
  //   const fileId = "1rsModad2hWB_L1EglSVigr3js5STyfSc";
  //   const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
  //   const viewUrl = `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;
  //   window.open(downloadUrl, "_blank");
  // };

  // const downloadCV = () => {
  //   const fileId = "1Fjonq3pZTbCZkDMsH0v7WTZpcdpDpjdO";
  //   const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
  //   window.open(downloadUrl, "_blank");
  // };

  const downloadCV = () => {
  const fileId = "1e2kxXEm3McKrrWy39J13R5FevYklg6Vb";
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
  window.open(downloadUrl, "_blank");
};


  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    HI <br /> I'm Gerges Nashaat <br />{" "}
                    <span className="wrap">{text}</span>
                  </h1>
                  <p>Aiming to be the next big thing</p>
                  <button
                    onClick={() => {
                      // console.log("Connect");
                      downloadCV();
                    }}
                  >
                    Download Résumé
                    <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header_Image" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
