import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container } from "react-bootstrap";
import { baseurl } from "../../App";
import Navbar1 from "./Navbar";

export default function ViewAlumini() {
  const [alumniData, setAlumniData] = useState([]);

  useEffect(() => {
    // Fetch alumni data from the server
    axios
      .get(baseurl + "/getalumini")
      .then((response) => {
        setAlumniData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
    <Navbar1/>
    <Container className="mt-5 mb-3">
      <Card className="p-4 w-100">
        <h2 className="text-center">Alumni Contributions</h2>
        <hr />

        {alumniData.length === 0 ? (
          <p>No contributions available.</p>
        ) : (
          alumniData.map((alumni) => (
            <Card key={alumni.id} className="mb-3">
              <Card.Body>
                <Card.Title>Contribution : {alumni.contribution}</Card.Title>
                <Card.Text>Description : {alumni.description}</Card.Text>
                <Card.Img src={alumni.photo} alt="Alumni Contribution" />
              </Card.Body>
            </Card>
          ))
        )}
      </Card>
    </Container></>
  );
}
