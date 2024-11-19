import axios from "axios";
import { Button } from "react-bootstrap";
import React, {  useState } from "react";
import { Card, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { baseurl } from "../../App";

export default function Panorama() {
  const [input, setInput] = useState({
    name: "",
    date: "",
    description: "",
  });

  function clearAll() {
    setInput({
      name: "",
      date: "",
      description: "",
    });
  }

  function handleChange(e) {
    setInput((previous) => {
      return { ...previous, [e.target.name]: e.target.value };
    });
  }

  function handlePanorama(e) {
    e.preventDefault();
    const obj = { ...input };
    toast
      .promise(axios.post(baseurl + `/event`, obj), {
        pending: "Please wait",
        success: "Event details added successfully",
      })
      .then((res) => {
        clearAll();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed...Please try again");
      });
  }
  return (
    <Container className="mt-5 mb-3">
      <Card className="p-4 w-50">
        <h2 className="text-center">Add Event </h2>
        <hr />
        <Form onSubmit={handlePanorama}>
          <Form.Group className="mb-3">
            <Form.Label>Event Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={input.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={input.date}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={input.description}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <div className="d-flex gap-2">
            <Button variant="warning" type="submit">
              Submit
            </Button>
            <Button variant="secondary" as={Link} to="/admin">
              Back
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
}
