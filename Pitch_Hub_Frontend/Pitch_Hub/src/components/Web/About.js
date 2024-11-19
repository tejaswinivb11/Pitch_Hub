import React from "react";
import Navbar1 from "./Navbar";
import { Card, Container } from "react-bootstrap";

export default function About() {
  return (
    <div>
      <Navbar1 />
      <Container className="mt-5">
        <Card className="w-75 mx-auto">
          <Card.Header as="h5" className="text-center back text-light">
            About Us
          </Card.Header>
          <Card.Body>
            <Card.Text as="div">
              <p>
                Welcome to <strong>Pitch Hub</strong>, a dynamic platform
                designed to connect aspiring entrepreneurs, innovators, and
                students with potential investors and industry experts. At Pitch
                Hub, we believe in empowering ideas and providing a bridge for
                creators to bring their visions to life.
              </p>

              <p>
                Our platform serves as a launchpad for innovative projects,
                enabling students and professionals alike to showcase their
                ideas, receive valuable feedback, and potentially secure the
                support they need. We’re committed to fostering a collaborative
                ecosystem where students can pitch their ideas, investors can
                discover fresh opportunities, and consultants can offer insights
                to bring projects to their fullest potential.
              </p>

              <p>
                Whether you're here to pitch your groundbreaking concept,
                explore the latest in innovation, or invest in promising
                talents, Pitch Hub is your space to connect, collaborate, and
                create. Join us and be part of a community where ideas meet
                opportunity.
              </p>

              <h5 className="mt-4">Our Mission:</h5>
              <p>
                To create a platform that democratizes access to resources for
                innovators and visionaries, helping them turn their ideas into
                impactful realities.
              </p>

              <h5 className="mt-4">Our Vision:</h5>
              <p>
                To be the premier destination for budding entrepreneurs and
                innovators, sparking new ventures and lasting collaborations
                across industries.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
