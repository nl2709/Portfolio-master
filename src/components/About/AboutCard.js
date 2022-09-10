import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hallo zusammen, Ich bin  <span className="purple">Nick</span>
            aus <span className="purple"> Troisdorf, Deutschland.</span>
            <br />Ich bin ein Junior Developer und bin im 1 von 4 Jahren eines Programmier Kurs.
            <br />
            <br />
           Abgesehen vom Programmieren sind hier noch andere Hobbys
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Videospiele Spielen
            </li>
            <li className="about-activity">
              <ImPointRight /> FUßball
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
