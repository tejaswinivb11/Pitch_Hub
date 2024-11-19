import axios from "axios";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Card, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { baseurl } from "../../App";

export default function Scholarship() {
  const [input, setInput] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  function clearAll() {
    setInput({
        name: "",
      description: "",
      startDate: "",
      endDate: "",
    });
  }

  function handleChange(e) {
    setInput((previous) => {
      return { ...previous, [e.target.name]: e.target.value };
    });
  }

  function handleScholarshipUpdate(e) {
    e.preventDefault();
    const obj = { ...input };
    toast
      .promise(axios.post(baseurl + `/scholarship`, obj), {
        pending: "Please wait",
        success: "Scholarship details added successfully",
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
        <h2 className="text-center">Add Scholarship Update</h2>
        <hr />
        <Form onSubmit={handleScholarshipUpdate}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={input.name}
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

          <Form.Group className="mb-3">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="date"
              name="startDate"
              value={input.startDate}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last Date</Form.Label>
            <Form.Control
              type="date"
              name="endDate"
              value={input.endDate}
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
