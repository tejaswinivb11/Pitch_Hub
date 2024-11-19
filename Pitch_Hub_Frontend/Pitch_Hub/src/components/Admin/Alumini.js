import axios from "axios";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Card, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { baseurl } from "../../App";

export default function Alumni() {
  const [input, setInput] = useState({
    contribution: "",
    description: "",
  });

  const [image, setImage] = useState("");

  const handleImage = (e) => {
    let file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
  };

  function clearAll() {
    setInput({
      contribution: "",
      description: "",
    });
    setImage("");
    document.getElementById("file").value = null;
  }

  function handleChange(e) {
    setInput((previous) => {
      return { ...previous, [e.target.name]: e.target.value };
    });
  }

  function handleAlumniContribution(e) {
    e.preventDefault();
    const obj = { ...input, photo: image };
    toast
      .promise(axios.post(baseurl + `/alumini`, obj), {
        pending: "Please wait",
        success: "Posted successfully",
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
        <h2 className="text-center">Alumni Contribution</h2>
        <hr />
        <Form onSubmit={handleAlumniContribution}>
          <Form.Group className="my-3">
            <Form.Label>Contribution</Form.Label>
            <Form.Control
              type="text"
              name="contribution"
              value={input.contribution}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={input.description}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Upload Your Image</Form.Label>
            <Form.Control
              className="mb-3"
              type="file"
              id="file"
              onChange={handleImage}
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
