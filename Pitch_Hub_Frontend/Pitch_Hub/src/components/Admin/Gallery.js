import { Button, Card } from "react-bootstrap";
import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";
import { baseurl } from "../../App";

export default function Gallery() {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");

  const handleImage = (e) => {
    let file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setImage(reader.result)
    }
  }

  function validation() {
    if (image === null || description.length === 0) {
      toast.error("Fields cann't be empty")
      return false
    }
    return true
  }

  function clearInput() {
    setDescription("");
    setImage(null);
    document.getElementById("file").value = null;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validation()) return;
    const obj = { description: description, image: image };
    axios
      .post(baseurl + "/gallery", obj)
      .then((res) => {
        clearInput();
        toast.success("Image posted successfully");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed upload image");
      });
  }

  return (
    <Container className="mt-5">
      <Card className="p-3">
        <h2 className="text-center">Upload Gallery Image</h2>
        <hr />
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Upload Image</Form.Label>
            <Form.Control
              className="mb-3"
              type="file"
              id="file"
              onChange={handleImage}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              className="mb-3"
              as="textarea"
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </Container>
  );
}
