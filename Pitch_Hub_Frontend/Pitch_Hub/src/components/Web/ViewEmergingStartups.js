import React, { useState, useEffect } from "react";
import { Container, Row, Col, Modal, Button, Card, CardImg } from "react-bootstrap";
import Navbar1 from "./Navbar";


// Sample emerging startups data
const emergingStartups = [
    {
      name: "NextGen Solutions",
      description: "AI-powered solutions for healthcare, transforming patient care and diagnostics.",
      imageUrl: "https://via.placeholder.com/150",
      founded: "2020",
      founders: ["Alice Green", "Bob Brown"],
      funding: "Seed funding of $3M in 2021.",
      majorEvents: [
        "2021 - Launched the first AI-powered diagnostic tool.",
        "2022 - Expanded to three countries."
      ],
      achievements: [
        "Recognized as one of the top 10 healthtech startups in 2023.",
        "Partnership with a leading hospital network."
      ]
    },
    {
      name: "EcoTech Innovations",
      description: "A sustainability-focused startup offering green solutions for urban environments.",
      imageUrl: "https://via.placeholder.com/150",
      founded: "2021",
      founders: ["Sara Lee", "David Smith"],
      funding: "Raised $5M in Series A funding in 2023.",
      majorEvents: [
        "2021 - Developed a solar-powered energy storage system.",
        "2023 - Signed a contract with a major city to deploy solutions."
      ],
      achievements: [
        "Awarded 'Green Innovator of the Year' in 2024.",
        "Helped reduce energy consumption by 30% in pilot areas."
      ]
    },
    {
      name: "QuantumLeap Tech",
      description: "Pioneering quantum computing solutions for the financial industry.",
      imageUrl: "https://via.placeholder.com/150",
      founded: "2022",
      founders: ["Emily Clark", "James White"],
      funding: "Series A round closed with $10M in 2023.",
      majorEvents: [
        "2022 - Launched a quantum computing platform for financial analysis.",
        "2023 - Partnered with a top 5 bank to improve data processing capabilities."
      ],
      achievements: [
        "Developed the world’s fastest quantum algorithm for financial modeling.",
        "Won the 'Innovation of the Year' award at the Global Tech Conference."
      ]
    },
    {
      name: "FinTech Revolution",
      description: "Revolutionizing small business financial management with AI-driven tools.",
      imageUrl: "https://via.placeholder.com/150",
      founded: "2021",
      founders: ["John Doe", "Karen Harris"],
      funding: "Pre-Series A funding of $2M.",
      majorEvents: [
        "2021 - Launched a mobile app for real-time financial tracking.",
        "2023 - Signed up 500+ small businesses in the first 6 months."
      ],
      achievements: [
        "Raised $2M in seed funding in 2022.",
        "Won the 'Best FinTech App' award in 2023."
      ]
    },
    {
      name: "SmartCity Solutions",
      description: "Developing smart city technologies to enhance urban living.",
      imageUrl: "https://via.placeholder.com/150",
      founded: "2021",
      founders: ["Michael Tan", "Rachel Chen"],
      funding: "Series B funding of $8M in 2023.",
      majorEvents: [
        "2021 - Developed smart traffic management systems.",
        "2023 - Partnered with two major cities for pilot smart city projects."
      ],
      achievements: [
        "Helped reduce traffic congestion by 25% in trial cities.",
        "Received recognition from the United Nations for sustainable urban solutions."
      ]
    },
    {
      name: "GreenFarm Solutions",
      description: "Innovating sustainable farming with vertical agriculture and hydroponics.",
      imageUrl: "https://via.placeholder.com/150",
      founded: "2022",
      founders: ["Tommy Lee", "Jessica Park"],
      funding: "Raised $7M in Series A funding.",
      majorEvents: [
        "2022 - Launched first vertical farming system.",
        "2023 - Expanded to commercial markets in two countries."
      ],
      achievements: [
        "Won the 'Best AgriTech Innovation' award in 2023.",
        "Reduced water consumption by 60% with hydroponic systems."
      ]
    },
    {
      name: "ByteWave Solutions",
      description: "Cybersecurity startup focusing on protecting digital infrastructures for SMEs.",
      imageUrl: "https://via.placeholder.com/150",
      founded: "2021",
      founders: ["Nina Patel", "Zachary Moore"],
      funding: "Pre-Series A funding of $3M.",
      majorEvents: [
        "2021 - Launched AI-based security systems.",
        "2023 - Secured partnerships with 200+ small businesses."
      ],
      achievements: [
        "Reduced security breaches for clients by 90%.",
        "Named top 10 cybersecurity startups to watch."
      ]
    },
    {
      name: "MedicaTech",
      description: "Developing wearables for remote health monitoring and personalized care.",
      imageUrl: "https://via.placeholder.com/150",
      founded: "2021",
      founders: ["Oscar Liu", "Evelyn Zhang"],
      funding: "Raised $10M in Series B.",
      majorEvents: [
        "2022 - Launched first health monitoring wearable.",
        "2023 - Received approval for clinical trials."
      ],
      achievements: [
        "Recognized as a leader in wearables for elderly care.",
        "Partnership with top hospitals for trials."
      ]
    },
    {
      name: "VentureX Labs",
      description: "Innovation hub for emerging technologies and product development.",
      imageUrl: "https://via.placeholder.com/150",
      founded: "2020",
      founders: ["Ben Cooper", "Lily Ross"],
      funding: "Raised $4M in Series A funding.",
      majorEvents: [
        "2021 - Created an AI-driven IoT platform.",
        "2023 - Expanded globally with four new locations."
      ],
      achievements: [
        "Developed a leading-edge AI-based platform for automation.",
        "Partnership with top tech firms worldwide."
      ]
    },
    {
      name: "InnoHealth",
      description: "Providing technology solutions for healthcare efficiency and patient management.",
      imageUrl: "https://via.placeholder.com/150",
      founded: "2021",
      founders: ["Michael Davis", "Fiona Green"],
      funding: "Seed funding of $1.5M.",
      majorEvents: [
        "2021 - Launched digital patient management system.",
        "2022 - Secured contracts with 50+ hospitals."
      ],
      achievements: [
        "Ranked in the top 100 healthtech startups.",
        "Reduced hospital administrative time by 40%."
      ]
    },
    {
      name: "SolarWave Tech",
      description: "Revolutionizing solar energy with affordable, efficient solar panels.",
      imageUrl: "https://via.placeholder.com/150",
      founded: "2021",
      founders: ["Andrew Black", "Sophia White"],
      funding: "Series A funding of $6M.",
      majorEvents: [
        "2021 - Created a new solar panel design that improves efficiency by 20%.",
        "2022 - Launched in 5 countries."
      ],
      achievements: [
        "Awarded 'Best Solar Innovation' in 2022.",
        "Saved 100,000 tons of CO2 emissions."
      ]
    },
    {
      name: "CloudSphere",
      description: "Delivering affordable cloud-based services for startups and SMEs.",
      imageUrl: "https://via.placeholder.com/150",
      founded: "2022",
      founders: ["Henry Blue", "Jasmine White"],
      funding: "Raised $5M in Series A.",
      majorEvents: [
        "2022 - Launched the first subscription-based cloud service.",
        "2023 - Secured partnerships with leading SMBs."
      ],
      achievements: [
        "Helped over 1,000 small businesses scale with cloud infrastructure.",
        "Ranked in top 5 cloud startups to watch."
      ]
    },
    {
      name: "AgriFuture",
      description: "Creating smart farming solutions for sustainable agriculture.",
      imageUrl: "https://via.placeholder.com/150",
      founded: "2022",
      founders: ["Roberta Green", "Tom Hunter"],
      funding: "Seed funding of $2M.",
      majorEvents: [
        "2022 - Developed a smart irrigation system for drought-prone areas.",
        "2023 - Expanded operations to 10 countries."
      ],
      achievements: [
        "Decreased water usage by 50% in pilot projects.",
        "Winner of the 2023 Sustainable Agriculture Award."
      ]
    },
    {
      name: "CleanEnergyX",
      description: "Building innovative clean energy solutions to reduce carbon footprint.",
      imageUrl: "https://via.placeholder.com/150",
      founded: "2021",
      founders: ["David Lee", "Catherine Zhao"],
      funding: "Series B funding of $12M.",
      majorEvents: [
        "2021 - Developed eco-friendly energy storage technology.",
        "2023 - Secured a large-scale partnership with energy providers."
      ],
      achievements: [
        "Launched a new renewable energy product.",
        "Contributed to a 25% reduction in global carbon emissions."
      ]
    },
    {
      name: "AeroSpace Innovators",
      description: "Aerospace tech company creating drones for delivery and transportation.",
      imageUrl: "https://via.placeholder.com/150",
      founded: "2020",
      founders: ["Isaac Mars", "Lara Young"],
      funding: "Seed funding of $4M.",
      majorEvents: [
        "2021 - Launched autonomous delivery drones.",
        "2022 - Expanded to 15 cities for testing."
      ],
      achievements: [
        "Delivered over 1 million packages with drones.",
        "Winner of the 'Best Aerospace Startup' award."
      ]
    },
    {
      name: "NanoTech Innovations",
      description: "Pioneering the use of nanotechnology in consumer electronics.",
      imageUrl: "https://via.placeholder.com/150",
      founded: "2022",
      founders: ["Anita Patel", "Mark Fisher"],
      funding: "Series A funding of $3M.",
      majorEvents: [
        "2022 - Launched nanotech-enabled battery for smartphones.",
        "2023 - Partnered with major electronics manufacturers."
      ],
      achievements: [
        "Developed batteries with 50% longer lifespan.",
        "Ranked top 5 innovative tech companies."
      ]
    },
    {
      name: "HealthX Labs",
      description: "Tech-driven platform for improving mental health with AI.",
      imageUrl: "https://via.placeholder.com/150",
      founded: "2021",
      founders: ["Sandra Green", "Nina Rivers"],
      funding: "Seed funding of $1M.",
      majorEvents: [
        "2021 - Launched the first AI-powered mental health assistant.",
        "2023 - Partnered with global healthcare providers."
      ],
      achievements: [
        "Helped over 500,000 users improve their mental health.",
        "Winner of the 'Tech for Good' award."
      ]
    },
    {
      name: "RoboTech Solutions",
      description: "Automating industries with robotic solutions to enhance productivity.",
      imageUrl: "https://via.placeholder.com/150",
      founded: "2020",
      founders: ["Ronald Blake", "Paula McLean"],
      funding: "Raised $6M in Series A.",
      majorEvents: [
        "2020 - Created first industrial automation robot.",
        "2022 - Secured contracts with global manufacturers."
      ],
      achievements: [
        "Reduced manufacturing costs by 30%.",
        "Ranked in top 10 robotics companies globally."
      ]
    },
  ];
  
  
const ViewEmergingStartups = () => {
  const [show, setShow] = useState(false);
  const [selectedStory, setSelectedStory] = useState({});

  const handleCardClick = (story) => {
    setSelectedStory(story);
    setShow(true);
  };

  return (
    <>
      <Navbar1 />
      <Container>
        <h2 className="text-center mt-5">Emerging Startup Stories</h2>
        <Row xs={1} sm={2} md={3} lg={3} className="g-4 mt-4">
          {emergingStartups.map((story, index) => (
            <Col key={index}>
              <Card onClick={() => handleCardClick(story)}>
                <div className="p-2">
                  <CardImg
                    top
                    src={story.imageUrl}
                    alt={story.name}
                    className="img-fluid"
                    style={{ height: "250px" }}
                  />
                  <h5 className="mt-2">{story.name}</h5>
                  <p>{story.description}</p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Modal to show selected startup story details */}
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
          <Modal.Body>
            <h4>{selectedStory.name}</h4>
            <img
              src={selectedStory.imageUrl}
              alt={selectedStory.name}
              className="img-fluid mb-3"
              style={{ maxWidth: "100%", maxHeight: "400px", objectFit: "contain" }}
            />
            <p>{selectedStory.description}</p>
            <h6>Founded: {selectedStory.founded}</h6>
            <h6>Founders: {selectedStory.founders?.join(", ")}</h6>
            <h6>Funding: {selectedStory.funding}</h6>
            <h6>Major Events:</h6>
            <ul>
              {selectedStory.majorEvents?.map((event, idx) => (
                <li key={idx}>{event}</li>
              ))}
            </ul>
            <h6>Achievements:</h6>
            <ul>
              {selectedStory.achievements?.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
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

export default ViewEmergingStartups;
