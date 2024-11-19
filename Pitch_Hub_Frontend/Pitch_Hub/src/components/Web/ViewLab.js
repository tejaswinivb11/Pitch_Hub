import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
} from "react-bootstrap";
import { baseurl } from "../../App";
import Navbar1 from "./Navbar";
import CardHeader from "react-bootstrap/esm/CardHeader";

const ViewLab = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch the images using Axios
    axios
      .get(baseurl + "/getlab")
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

 
  return (
    <>
      <Navbar1 />
      <Container>
        <h2 className="text-center mt-5">Lab Details</h2>
        <Row xs={1} sm={2} md={2} lg={2} className="g-4 mt-4">
          {images.map((image, index) => (
            <Col key={index}>
              <Card >
                <CardHeader className="back text-light text-center">Department : {image.department}</CardHeader>
                <div className="p-2">
                  <CardImg
                    top
                    src={image.photo}
                    alt=""
                    className="img-fluid"
                    style={{ height: "350px" }}
                  />
                  <p>{image.description}</p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
       
        
      </Container>
    </>
  );
};

export default ViewLab;
