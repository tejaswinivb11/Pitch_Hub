import axios from "axios";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Card, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { baseurl } from "../../App";

export default function Login() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // State for role selection

  function handleLogin() {
    const obj = { userName, password, role };
    console.log(obj);

    let endpoint;
    if (role === "Student") {
      endpoint = "/stuLogin/";
    } else if (role === "Admin") {
      endpoint = "/adminLogin/";
    } else if (role === "Consultant" || role === "Investor") {
      endpoint = "/conInvRegister/";
    } else {
      toast.error("Please select a valid role", { position: "top-center" });
      return;
    }

    toast
      .promise(axios.post(baseurl + endpoint, obj), {
        pending: "Please wait...",
        success: "Login Successfully",
      })
      .then((res) => {
        if (res.data === "Admin") {
          sessionStorage.setItem("admin", userName);
          navigate("/admin");
        } else if (res.data === "Student") {
          sessionStorage.setItem("student", userName);
          navigate("/student");
        } else if (res.data === "Investor") {
          sessionStorage.setItem("investor", userName);
          navigate("/investor");
        } else if (res.data === "Consultant") {
          sessionStorage.setItem("consultant", userName);
          navigate("/consultant");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response?.data || "Failed to login", {
          position: "top-center",
        });
      });
  }

  return (
    <Row className="m-0">
      <div className="col-lg-6 back bg-image" style={{ height: "100vh" }}></div>
      <div className="col-lg-6" style={{ height: "100vh" }}>
        <div className="mx-auto login" style={{ width: "25rem" }}>
          <Card.Body>
            <Card.Title className="text-center tracking-in-expand">
              <h1>Login</h1>
              <p style={{ color: "gray" }}>"Securely Access Your Account"</p>
              <br />
            </Card.Title>
            <Card.Text>
              <label>Enter User ID</label>
              <input
                type="text"
                className="form-control mb-3"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <label>Enter Password</label>
              <input
                type="password"
                className="form-control mb-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Select Role</label>
              <select
                className="form-control mb-3"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">Select Role</option>
                <option value="Student">Student</option>
                <option value="Investor">Investor</option>
                <option value="Consultant">Consultant</option>
                <option value="Admin">Admin</option>
              </select>
            </Card.Text>

            <div className="d-flex gap-3 mt-3">
              <Button variant="warning" onClick={handleLogin}>
                Login
              </Button>
              <Button variant="secondary" as={Link} to="/">
                Back
              </Button>
              <Button variant="success" as={Link} to="/register">
                Register
              </Button>
            </div>
          </Card.Body>
        </div>
      </div>
    </Row>
  );
}