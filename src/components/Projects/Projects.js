import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
         Meine <strong className="purple">Projekte </strong>
        </h1>
        <p style={{ color: "white" }}>
          Hier sind ein Parr Projekte an den ich gearbeitet habe
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Brücker Manufaktur"
              description="Das ist eine Webseite für ein Eis-Cafe in Köln/Brück"
              demoLink="http://eis.nick-lorenz.de"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="SPV Troisdorf"
              description="Die Seite des SPV Troisdorf die schon vorher mit Wordpress gebaut wurde betreue ich jetzt in meiner Freizeit."
              demoLink="http://www.staedtepartnerschaftsverein-troisdorf.de/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
