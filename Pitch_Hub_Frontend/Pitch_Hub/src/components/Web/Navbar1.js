import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { BiLogIn } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';

export default function Navbar1({ isAdmin }) {
  return (
    <div>
      <Navbar fixed="top" className="shadow back text-light" style={{ height: '15vh' }}>
        <Container>
          <Navbar.Brand className="text-warning tracking-in-expand fs-4">
            PITCH HUB
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="d-flex gap-4 justify-content-end fs-6">
            <Nav.Link as={Link} to="/">
              <AiFillHome size="20px" />
            </Nav.Link>
            <NavDropdown title="DOMAIN" id="collasible-nav-dropdown" renderMenuOnMount={true}>
              <NavDropdown.Item as={Link} to="/viewdepartment">AgriTech</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/pre">FinTech</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/pre">HealthTech</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/pre">EduTech</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/pre">PropTech</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/pre">RetailTech</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/pre">MedTech</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/pre">FoodTech</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/viewgallery">Internships</Nav.Link>
            <NavDropdown title="Startup Stories" id="collasible-nav-dropdown" renderMenuOnMount={true}>
              <NavDropdown.Item as={Link} to="/ViewStartupStories">Established</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ViewEmergingStartups">Emerging</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Scheme" id="collasible-nav-dropdown" renderMenuOnMount={true}>
              <NavDropdown.Item as={Link} to="/viewteaching">Government</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/viewnonteaching">Non-Government</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="About Us" id="collasible-nav-dropdown" renderMenuOnMount={true}>
              <NavDropdown.Item as={Link} to="/about">About Us</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/contact">Contact Us</NavDropdown.Item>
            </NavDropdown>
            {isAdmin && (
              <Nav.Link as={Link} to="/add-scheme" className="text-light">
                Add Schemes
              </Nav.Link>
            )}
            <Nav.Link as={Link} to="/login" className="text-light">
              Login <BiLogIn size="20px" />
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
