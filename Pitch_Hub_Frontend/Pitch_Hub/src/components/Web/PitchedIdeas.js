import React, { useState } from "react";
import { Container, Row, Col, Modal, Button, Card, CardImg } from "react-bootstrap";
import Navbar1 from "./Navbar";

// Sample pitched ideas data
const pitchedIdeas = [
    {
      title: "Smart Waste Management System",
      description: "An IoT-based solution for efficient waste collection and management in urban areas.",
      imageUrl: "https://via.placeholder.com/150",
      pitchDate: "2024-10-15",
      teamMembers: ["Alice Johnson", "Michael Lee"],
      fundingStatus: "Seeking seed funding",
      milestones: [
        "2024 - Developed a working prototype",
        "2025 - Planned deployment in pilot city areas"
      ],
      impact: [
        "Reduced waste collection costs by 20%",
        "Improved waste segregation efficiency"
      ]
    },
    {
      title: "EdTech Learning Platform",
      description: "A gamified learning platform for underprivileged students to improve engagement and outcomes.",
      imageUrl: "https://via.placeholder.com/150",
      pitchDate: "2024-09-10",
      teamMembers: ["Sarah Brown", "Daniel White"],
      fundingStatus: "Looking for partnerships",
      milestones: [
        "2024 - Launched initial version in two schools",
        "2025 - Expanded to rural schools"
      ],
      impact: [
        "Increased engagement by 40%",
        "Improved test scores in pilot areas by 15%"
      ]
    },
    // Additional pitched ideas...
];

const ViewPitchedIdeas = () => {
  const [show, setShow] = useState(false);
  const [selectedIdea, setSelectedIdea] = useState({});

  const handleCardClick = (idea) => {
    setSelectedIdea(idea);
    setShow(true);
  };

  return (
    <>
      <Navbar1 />
      <Container>
        <h2 className="text-center mt-5">Pitched Ideas</h2>
        <Row xs={1} sm={2} md={3} lg={3} className="g-4 mt-4">
          {pitchedIdeas.map((idea, index) => (
            <Col key={index}>
              <Card onClick={() => handleCardClick(idea)}>
                <div className="p-2">
                  <CardImg
                    top
                    src={idea.imageUrl}
                    alt={idea.title}
                    className="img-fluid"
                    style={{ height: "250px" }}
                  />
                  <h5 className="mt-2">{idea.title}</h5>
                  <p>{idea.description}</p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Modal to show selected idea details */}
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
          <Modal.Body>
            <h4>{selectedIdea.title}</h4>
            <img
              src={selectedIdea.imageUrl}
              alt={selectedIdea.title}
              className="img-fluid mb-3"
              style={{ maxWidth: "100%", maxHeight: "400px", objectFit: "contain" }}
            />
            <p>{selectedIdea.description}</p>
            <h6>Pitch Date: {selectedIdea.pitchDate}</h6>
            <h6>Team Members: {selectedIdea.teamMembers?.join(", ")}</h6>
            <h6>Funding Status: {selectedIdea.fundingStatus}</h6>
            <h6>Milestones:</h6>
            <ul>
              {selectedIdea.milestones?.map((milestone, idx) => (
                <li key={idx}>{milestone}</li>
              ))}
            </ul>
            <h6>Impact:</h6>
            <ul>
              {selectedIdea.impact?.map((impact, idx) => (
                <li key={idx}>{impact}</li>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default ViewPitchedIdeas;