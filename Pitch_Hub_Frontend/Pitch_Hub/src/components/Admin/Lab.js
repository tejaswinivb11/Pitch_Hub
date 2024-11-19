import axios from "axios";
import {  Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Card, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { baseurl } from "../../App";


export default function Lab() {
  const [input, setInput] = useState({
    department: "",
    description: "",
  });

  const [ image, setImage] = useState("")


  const [departments, setDepartments] = useState([])



  useEffect(()=>{
    GetDepartment()
  },[])

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
        department: "",
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

  function GetDepartment(){
    axios.get(baseurl + `/getdepartment`)
    .then(res=>{
        setDepartments(res.data)
    })
    .catch(err=>{
        console.log(err);
    })
  }

  function handleLab(e) {
    e.preventDefault();
    const obj = {...input, photo:image}
    toast
      .promise(axios.post(baseurl + `/lab`, obj), {
        pending: "Please wait",
        success: "Lab details added successfully",
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
            Add Lab Facility
          </h2>
       <hr />
        <Form onSubmit={handleLab}>
            <Form.Group className="my-3">
            <Form.Select
              className="text-center"
              name="department"
              value={input.department}
              onChange={handleChange}
              required
            >
              <option value={0} hidden>Select Department</option>
              {departments.map((element, index) => {
                return (
                  <option key={index} value={element.name}>
                    {element.name}
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
