import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseurl } from "../../App";
import { Card } from "react-bootstrap";
import Navbar1 from "./Navbar";

const ViewDepartment = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    axios.get(baseurl +"/getdepartment")
      .then(res => {
        setDepartments(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
    <Navbar1/>
    <h2 className="text-center my-4">Departments</h2>
    <div className="container">
      <div className="row">
        {departments.map(department => (
          <div className="col-md-4" key={department.id}>
            <Card className="text-justify my-4" >
              <Card.Header className="back text-center text-warning fs-4">{department.name}</Card.Header>
              <Card.Text className=" p-3 text-j">{department.description}</Card.Text>
            </Card>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ViewDepartment;
