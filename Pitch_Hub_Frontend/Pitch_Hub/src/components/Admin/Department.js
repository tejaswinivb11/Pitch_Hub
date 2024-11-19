import axios from "axios";
import {  Button } from "react-bootstrap";
import React, { useState } from "react";
import { Card, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { baseurl } from "../../App";


export default function Department() {
  const [input, setInput] = useState({
    name: "",
    description: "",
  });


  function validation() {
    if (
      input.name.length === 0 ||
      input.description.length === 0
    ) {
      toast.error("Fields cann't be empty");
      return false;
    }
    return true;
  }
  function clearAll() {
    setInput({
      name: "",
      description: "",
    });
  }

  function handleChange(e) {
    setInput((previous) => {
      return { ...previous, [e.target.name]: e.target.value };
    });
  }

  function handleDepartment(e) {
    e.preventDefault();
    if (!validation()) return;

    toast
      .promise(axios.post(baseurl + "/department", input), {
        pending: "Please wait",
        success: "Department added successfully",
      })
      .then((data) => {
        clearAll();
      })
      .catch((error) => {
        toast.error("Failed...Please try again");
      });
  }
  return (
    <Container className="mt-5 mb-3">
      <Card className="p-4">
          <h2 className="text-center">
            Add Department
          </h2>
       <hr />
        <Form onSubmit={handleDepartment}>
          <Form.Group className="my-3">
            <Form.Label>Department Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={input.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="description"
              value={input.description}
              onChange={handleChange}
            />
          </Form.Group>

          <div className="d-flex gap-2">
            <Button variant="warning"  type="submit">
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
