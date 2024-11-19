import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { baseurl } from "../../App";
import Navbar1 from "./Navbar";

export default function ViewPlacement() {
  const [placements, setPlacements] = useState([]);

  useEffect(() => {
    fetchPlacements();
  }, []);

  function fetchPlacements() {
    axios
      .get(baseurl + "/getplacement")
      .then((res) => {
        setPlacements(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
    <Navbar1/>
    <Container className="mt-5 mb-3">
      <h2 className="text-center">Placement Details</h2>
      <hr />
      <div className="row">
        {placements.length > 0 ? (
          placements.map((placement) => (
            <div className="col-md-4 mb-4" key={placement.id}>
              <Card>
                {placement.photo && (
                  <Card.Img variant="top" src={placement.photo} alt={placement.studentName} />
                )}
      
                <Card.Body className="text-center">
                <hr/>
                  <Card.Title>{placement.studentName}</Card.Title>
                  <hr/>
                  <Card.Text>Year: {placement.year}</Card.Text>
                  <Card.Text>Company: {placement.company}</Card.Text>
                  <Card.Text>Branch: {placement.branch}</Card.Text>
                  <Card.Text>Description: {placement.description}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <p>No placements available</p>
        )}
      </div>
    </Container>
    </>
  );
}
