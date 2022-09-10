import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LASS MICH MAL <span className="purple"> VORSTELLEN </span>
            </h1>
            <p className="home-about-body">
              Ich habe mit 12 das Programmieren entdeckt und habe dabei was gelernt, hoffe ich... 🤷‍♂️
              <br />
              <br />Ich habe angefangen mit
              <i>
                <b className="purple"> HTML, CSS  </b>
              </i>
              <br />
              <br />
              Meine Interessen sind &nbsp;
              <i>
                <b className="purple">Web- und App-Entwicklung </b> and
                und außerdem bin ich Interessiert an {" "}
                <b className="purple">
                  maschinelles lernen.
                </b>
              </i>
              <br />
              <br />
              Ich lerne und versuche auch immer mit <b className="purple">Node.js</b> und
              <i>
                <b className="purple">
                  {" "}
              Moderne JS Librarys
                </b>
              </i>
              &nbsp; wie
              <i>
                <b className="purple"> React.js und Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}
export default Home2;
