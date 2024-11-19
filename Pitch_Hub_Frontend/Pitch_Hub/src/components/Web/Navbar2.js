import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { BiLogIn } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';

export default function Navbar2({ isStudentLoggedIn }) {
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

            {/* Domain Dropdown */}
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

            {/* Startup Stories Dropdown */}
            <NavDropdown title="Startup Stories" id="collasible-nav-dropdown" renderMenuOnMount={true}>
              <NavDropdown.Item as={Link} to="/ViewStartupStories">Established</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ViewEmergingStartups">Emerging</NavDropdown.Item>
            </NavDropdown>

            {/* Scheme Dropdown */}
            <NavDropdown title="Scheme" id="collasible-nav-dropdown" renderMenuOnMount={true}>
              <NavDropdown.Item as={Link} to="/viewteaching">Government</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/viewnonteaching">Non-Government</NavDropdown.Item>
            </NavDropdown>

            {/* About Us Dropdown */}
            <NavDropdown title="About Us" id="collasible-nav-dropdown" renderMenuOnMount={true}>
              <NavDropdown.Item as={Link} to="/about">About Us</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/contact">Contact Us</NavDropdown.Item>
            </NavDropdown>

            {/* Login or Dashboard Link based on whether the student is logged in */}
            {isStudentLoggedIn ? (
              <>
                <Nav.Link as={Link} to="/student-dashboard" className="text-light">
                  Dashboard
                </Nav.Link>
                <Nav.Link as={Link} to="/pitch-your-idea" className="text-light btn btn-warning">
                  Pitch Your Idea
                </Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/login" className="text-light">
                Login <BiLogIn size="20px" />
              </Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
