import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { IoMdLogOut } from "react-icons/io";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import ErrorPage from "../Web/ErrorPage";



export default function Adashboard() {
  const { pathname } = useLocation();

  const admin = sessionStorage.getItem("admin")

  const navigate = useNavigate()
  function logOut(){
    sessionStorage.clear()
    navigate("/")
  }

  if(!admin){
    return <ErrorPage/>
  }

  return (
    <>
      <Container>
      <Navbar.Brand as={Link} to="/admin">
              <h2 className="text text-center fs-2" style={{ color: "#42046c" }}>
              CPC Polytechnic College
              </h2>
            </Navbar.Brand>
        <Navbar
          bg="light"
          expand="lg"
          className="shadow"
          style={{ height: "15vh" }}
        >
       
          <Container>
           
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="d-flex fs-6  gap-4 justify-content-between">
                <Nav.Link as={Link} to="/admin/department">
                  Add Department
                </Nav.Link>
                <Nav.Link as={Link} to="/admin/lab">
                  Add Lab Facility 
                </Nav.Link>
                <Nav.Link as={Link} to="/admin/faculty">
                  Add Faculty 
                </Nav.Link>
                <Nav.Link as={Link} to="/admin/acheviments">
                  Add Acheviments 
                </Nav.Link>
                <Nav.Link as={Link} to="/admin/gallery">
                  Add Gallery 
                </Nav.Link>
                <Nav.Link as={Link} to="/admin/replyquery">
                 View User Queries
                </Nav.Link>
                <NavDropdown title="Notice Board" id="collasible-nav-dropdown" renderMenuOnMount={true}>
              <NavDropdown.Item as={Link} to="/admin/panorama">Panorama of Events</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/admin/scholarship">Scholarship Updates</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/admin/extracurricular">Extra Curricular Activities</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/admin/placement">Placements </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/admin/alumni">Alumini  </NavDropdown.Item>
            </NavDropdown>
                <Nav.Link onClick={logOut}>
                  Logout <IoMdLogOut/>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
      {pathname === "/admin" ? <h3 className="text-center mt-4"><marquee> Welcome Admin</marquee></h3> : <Outlet />}
    </>
  );
}
