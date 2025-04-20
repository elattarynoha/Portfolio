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
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="cosmetique products"
              description=" Gestion commercial cote client et admin pour mon propre site web des produits cosmetiques"
              ghLink="https://github.com/elattarynoha/cosmetics Products"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="jeux amazighs"
              description="des jeux web avec html5 css et Javascript , pour l apprentissage des langues amazigh et tarifit et tachelhit pour les eleves de primaire"
              ghLink="https://github.com/elattarynoha/jeux-web-d-apprentissage-d-amazigh"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Gestion de projet"
              description="Application web avec JEE pour la gestion des projets dans une entreprise"
              ghLink="https://github.com/elattarynoha/gestion de projet.git"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

         
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
