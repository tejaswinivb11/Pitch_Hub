import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function PitchYourIdeaForm() {
  const [formData, setFormData] = useState({
    prjId: '',
    domain: '',
    ideTitle: '',
    abstract: '',
    IdeSynopsis: null,
    stu_id: '',
    description: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      IdeSynopsis: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate('/success'); // Replace '/success' with your actual success page route
  };

  return (
    <Container
      className="mt-5 p-4 rounded"
      style={{
        backgroundColor: '#f0f4f8', // Light background color
        maxWidth: '600px',
        boxShadow: '0px 0px 15px rgba(0,0,0,0.2)',
      }}
    >
      <h3 className="mb-4 text-primary text-center">Pitch Your Idea</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Project ID</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Project ID"
            name="prjId"
            value={formData.prjId}
            onChange={handleChange}
            style={{ borderColor: '#0d6efd' }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Domain</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Domain"
            name="domain"
            value={formData.domain}
            onChange={handleChange}
            style={{ borderColor: '#0d6efd' }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Idea Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Idea Title"
            name="ideTitle"
            value={formData.ideTitle}
            onChange={handleChange}
            style={{ borderColor: '#0d6efd' }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Abstract</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter Abstract"
            name="abstract"
            value={formData.abstract}
            onChange={handleChange}
            style={{ borderColor: '#0d6efd' }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Idea Synopsis (File)</Form.Label>
          <Form.Control
            type="file"
            name="IdeSynopsis"
            onChange={handleFileChange}
            style={{ borderColor: '#0d6efd' }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Student ID</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Student ID"
            name="stu_id"
            value={formData.stu_id}
            onChange={handleChange}
            style={{ borderColor: '#0d6efd' }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            style={{ borderColor: '#0d6efd' }}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          style={{
            backgroundColor: '#0d6efd',
            borderColor: '#0d6efd',
            width: '100%',
            fontWeight: 'bold',
          }}
        >
          Submit Idea
        </Button>
      </Form>
    </Container>
  );
}
