import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Modal,
  Button,
  Card,
  CardImg,
} from "react-bootstrap";
import { baseurl } from "../../App";
import Navbar1 from "./Navbar";

const ViewGallery = () => {
  const [images, setImages] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedDes, setSelectedDes] = useState("");

  useEffect(() => {
    // Fetch the images using Axios
    axios
      .get(baseurl + "/getgallery")
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleImageClick = (imageUrl, Des) => {
    setSelectedImage(imageUrl);
    setSelectedDes(Des);
    setShow(true);
  };

  return (
    <>
      <Navbar1 />
      <Container>
        <h2 className="text-center mt-5">Gallery</h2>
        <Row xs={1} sm={2} md={3} lg={3} className="g-4 mt-4">
          {images.map((image, index) => (
            <Col key={index}>
              <Card
                onClick={() => handleImageClick(image.image, image.description)}
              >
                <div className="p-2">
                  <CardImg
                    top
                    src={image.image}
                    alt=""
                    className="img-fluid"
                    style={{ height: "250px" }}
                  />
                  <p>{image.description}</p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
       
        <Modal size="md" show={show} onHide={() => setShow(false)}>
          <Modal.Body>
            <img
              src={selectedImage}
              alt="Selected Image"
              className="img-fluid"
              width="450px"
            />
            <p>{selectedDes}</p>
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

export default ViewGallery;
//Pitch_Hub aims to empower students by providing a dynamic platform that bridges the gap between innovative ideas and entrepreneurial success. By offering real-world startup showcases, funding navigation, and investor engagement, it nurtures the skills and confidence needed to bring ideas to life. The platform fosters mentorship, collaboration, and a strong community of peers to guide students on their entrepreneurial journeys. With personalized learning paths and seamless access to resources, Pitch_Hub equips students to transform their ideas into market-ready startups. It integrates education, funding, and networking for a holistic entrepreneurial experience.
//Pitch_Hub’s mission is to empower students with the skills, resources, and connections needed to launch successful startups. By providing access to real-world insights, funding opportunities, and mentorship, we enable students to turn innovative ideas into impactful businesses. Our platform fosters a collaborative environment for continuous learning and growth in the entrepreneurial ecosystem.