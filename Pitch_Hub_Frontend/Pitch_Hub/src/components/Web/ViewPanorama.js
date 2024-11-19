import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Container } from "react-bootstrap";
import { baseurl } from "../../App";
import Navbar1 from "./Navbar";

export default function ViewPanorama() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from the server
    axios
      .get(`${baseurl}/getevent`)
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar1 />
      <Container className="mt-5 mb-3">
        <Card className="p-4">
          <h2 className="text-center">Events</h2>
          <hr />
          {events.map((event) => (
            <div key={event.id}>
              <div className="d-flex justify-content-between">
                <h3>{event.name}</h3>
                <p className="text-danger fw-bold">Event Date: {event.date}</p>
              </div>

              <p>Description: {event.description}</p>
              <hr />
            </div>
          ))}
        </Card>
      </Container>
    </>
  );
}
