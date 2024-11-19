import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { baseurl } from "../../App";
import Navbar1 from "./Navbar";

export default function ViewScholarship() {
  const [scholarships, setScholarships] = useState([]);

  useEffect(() => {
    // Fetch scholarship updates from the server
    axios
      .get(baseurl + "/getscholarship")
      .then((response) => {
        setScholarships(response.data);
      })
      .catch((error) => {
        console.error("Error fetching scholarship updates:", error);
      });
  }, []);

  return (
    <>
    <Navbar1 />
    <Container className="mt-5 mb-3">
      <h2 className="text-center">Scholarship Updates</h2>
      <hr />
      {scholarships.map((scholarship) => (
        <Card key={scholarship.id} className="mb-3">
          <Card.Body>
            <Card.Title className="text-danger">{scholarship.name}</Card.Title>
            <Card.Text>{scholarship.description}</Card.Text>
            <div className="d-flex justify-content-between">
  <p className="text-muted">Posted Date: {scholarship.startDate}</p>
  <p className="text-muted">Last Date: {scholarship.endDate}</p>
</div>


          </Card.Body>
        </Card>
      ))}
    </Container>
    </>
  );
}
