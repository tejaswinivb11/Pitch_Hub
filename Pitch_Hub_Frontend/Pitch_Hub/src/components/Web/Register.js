import React, { useState } from 'react';
import axios from 'axios';
import { Button, Card, Row } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { baseurl } from '../../App';

export default function Register() {
  const navigate = useNavigate();

  const [role, setRole] = useState('student');
  const [formData, setFormData] = useState({
    StuName: '',
    StuEmail: '',
    StuPhone: '',
    userName: '',
    password: '',
    about: '',
    stu_id: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data with role-specific properties
    const data = { ...formData, role };

    try {
      let endpoint = `${baseurl}`;

      // Determine endpoint based on role
      if (role === 'student') {
        endpoint += 'stuRegister/';
      } else if (role === 'admin') {
        endpoint += 'adminRegister/';
      } else if (role === 'consultant' || role === 'investor') {
        endpoint += 'consultantInvestorRegister/';
      }

      // Send POST request to appropriate endpoint
      const response = await axios.post(endpoint, data);

      // Handle success response
      if (response.status === 200) {
        toast.success('Registration successful');
        navigate('/login'); // Redirect to login after successful registration
      }
    } catch (error) {
      console.error('Error during registration:', error);
      toast.error(error.response?.data || 'Registration failed');
    }
  };

  return (
    <Row className="m-0">
      <div className="col-lg-6 back bg-image" style={{ height: '100vh' }}></div>
      <div className="col-lg-6" style={{ height: '100vh' }}>
        <div className="mx-auto register" style={{ width: '25rem' }}>
          <Card.Body>
            <Card.Title className="text-center tracking-in-expand">
              <h1>Register</h1>
              <p style={{ color: 'gray' }}>Create Your Account</p>
              <br />
            </Card.Title>
            <Card.Text>
              <label>Select Role</label>
              <select
                className="form-control mb-3"
                value={role}
                onChange={handleRoleChange}
              >
                <option value="student">Student</option>
                <option value="investor">Investor</option>
                <option value="consultant">Consultant</option>
                <option value="admin">Admin</option>
              </select>

              {/* Fields for Student */}
              {role === 'student' && (
                <>
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    name="StuName"
                    value={formData.StuName}
                    onChange={handleInputChange}
                    required
                  />
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control mb-3"
                    name="StuEmail"
                    value={formData.StuEmail}
                    onChange={handleInputChange}
                    required
                  />
                  <label>Phone</label>
                  <input
                    type="number"
                    className="form-control mb-3"
                    name="StuPhone"
                    value={formData.StuPhone}
                    onChange={handleInputChange}
                    required
                  />
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    name="userName"
                    value={formData.userName}
                    onChange={handleInputChange}
                    required
                  />
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control mb-3"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                  <label>About</label>
                  <textarea
                    className="form-control mb-3"
                    name="about"
                    value={formData.about}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                  <label>Student ID</label>
                  <input
                    type="number"
                    className="form-control mb-3"
                    name="stu_id"
                    value={formData.stu_id}
                    onChange={handleInputChange}
                    required
                  />
                </>
              )}

              {/* Fields for Consultant or Investor */}
              {(role === 'consultant' || role === 'investor') && (
                <>
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    name="Name"
                    value={formData.Name}
                    onChange={handleInputChange}
                    required
                  />
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control mb-3"
                    name="Email"
                    value={formData.Email}
                    onChange={handleInputChange}
                    required
                  />
                  <label>Phone</label>
                  <input
                    type="number"
                    className="form-control mb-3"
                    name="Phone"
                    value={formData.Phone}
                    onChange={handleInputChange}
                    required
                  />
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    name="userName"
                    value={formData.userName}
                    onChange={handleInputChange}
                    required
                  />
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control mb-3"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                  <label>About</label>
                  <textarea
                    className="form-control mb-3"
                    name="about"
                    value={formData.about}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </>
              )}

              {/* Fields for Admin */}
              {role === 'admin' && (
                <>
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    name="userName"
                    value={formData.userName}
                    onChange={handleInputChange}
                    required
                  />
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control mb-3"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </>
              )}
            </Card.Text>

            <div className="d-flex gap-3 mt-3">
              <Button variant="warning" onClick={handleSubmit}>
                Register
              </Button>
              <Button variant="secondary" as={Link} to="/login">
                Back to Login
              </Button>
            </div>
          </Card.Body>
        </div>
      </div>
    </Row>
  );
}
