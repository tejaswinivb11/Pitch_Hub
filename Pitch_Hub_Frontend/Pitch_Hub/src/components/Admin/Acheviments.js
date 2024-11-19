import axios from "axios";
import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Card, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { baseurl } from "../../App";

export default function Acheviments() {
  const [input, setInput] = useState({
    studentName: "",
    achievement: "",
    category: "",
    year: "",
    department: "",
  });

  const [image, setImage] = useState("");

  const [departments, setDepartments] = useState([]);

  const types = ["Study", "Extra Curricular"];

  useEffect(() => {
    GetDepartment();
  }, []);

  const handleImage = (e) => {
    let file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
  };

  function validation() {
    if (
      input.studentName.length === 0 ||
      input.achievement.length === 0 ||
      input.category.length === 0 ||
      input.year.length === 0 ||
      input.department.length === 0
    ) {
      toast.error("Fields cann't be empty");
      return false;
    }
    return true;
  }
  function clearAll() {
    setInput({
      studentName: "",
      achievement: "",
      category: "",
      year: "",
      department: "",
    });
    document.getElementById("file").value = null;
  }

  function handleChange(e) {
    setInput((previous) => {
      return { ...previous, [e.target.name]: e.target.value };
    });
  }

  function GetDepartment() {
    axios
      .get(baseurl + `/getdepartment`)
      .then((res) => {
        setDepartments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleAchievement(e) {
    e.preventDefault();
    if (!validation()) return;
    const obj = { ...input, photo: image };
    toast
      .promise(axios.post(baseurl + `/achievement`, obj), {
        pending: "Please wait",
        success: "Details added successfully",
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
      <Card className="mx-auto p-4 w-70">
        <h2 className="text-center">Add Acheviments</h2>
        <hr />
        <Form>
          <Form.Group className="my-3">
            <Form.Label> Name</Form.Label>
            <Form.Control
              type="text"
              name="studentName"
              value={input.studentName}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="my-3">
            <Form.Label> Achievement</Form.Label>
            <Form.Control
              type="text"
              name="achievement"
              value={input.achievement}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="my-3">
            <Form.Select
              className="text-center"
              name="category"
              value={input.category}
              onChange={handleChange}
            >
              <option value={0} hidden>
                Select Acheviment Type
              </option>
              {types.map((element, index) => {
                return (
                  <option key={index} value={element}>
                    {element}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="my-3">
            <Form.Select
              className="text-center"
              name="department"
              value={input.department}
              onChange={handleChange}
            >
              <option value={0} hidden>
                Select Department
              </option>
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
            <Form.Label>Year</Form.Label>
            <Form.Control
              type="number"
              name="year"
              value={input.year}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Upload Your Image</Form.Label>
            <Form.Control
              className="mb-3"
              type="file"
              id="file"
              onChange={handleImage}
            />
          </Form.Group>
          <div className="d-flex gap-2">
            <Button variant="warning" type="submit" onClick={handleAchievement}>
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
