import axios from "axios";
import {  Button } from "react-bootstrap";
import React, {  useState } from "react";
import { Card, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { baseurl } from "../../App";


export default function ExtraCurricular() {
  const [input, setInput] = useState({
    event: "",
    description: "",
  });

  const [ image, setImage] = useState("")

  const types = ["NSS" ,"NCC", "Sports", "College Fest" ,"Seminars", "Inter-College-Events"]



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
        event: "",
        description: "",
    })
    setImage(null);
    document.getElementById("file").value = null;
  }

  function handleChange(e) {
    setInput((previous) => {
      return { ...previous, [e.target.name]: e.target.value };
    });
  }


  function handleExtraCurricular(e) {
    e.preventDefault();
    const obj = {...input, photo:image}
    toast
      .promise(axios.post(baseurl + `/curricular`, obj), {
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
          <h2 className="text-center">
            Add Extra Curricular
          </h2>
       <hr />
        <Form onSubmit={handleExtraCurricular}>
            <Form.Group className="my-3">
            <Form.Select
              className="text-center"
              name="event"
              value={input.event}
              onChange={handleChange}
              required
            >
              <option value={0} hidden>Select Event Types</option>
              {types.map((element, index) => {
                return (
                  <option key={index} value={element}>
                    {element}
                  </option>
                );
              })}
            </Form.Select>
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
