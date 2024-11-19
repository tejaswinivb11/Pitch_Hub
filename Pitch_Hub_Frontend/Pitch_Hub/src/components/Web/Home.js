import React, { useEffect, useState } from "react";
import Navbar1 from "../Web/Navbar1";
import Navbar from "../Web/Navbar";
import logo from "../../images/slide1.jpg";
import c1 from "../../images/c1.png";
import admi from "../../images/admission.jpg";
import { TypeAnimation } from "react-type-animation";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { FaUserGraduate, FaUsers } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import { MdEventRepeat } from "react-icons/md";
import { ImLab } from "react-icons/im";
import { SiRedux } from "react-icons/si";
import CardHeader from "react-bootstrap/esm/CardHeader";

export default function Home() {

  const fetchInvestors = async () => {
    const response = await fetch("/api/investors");
    const data = await response.json();
    return data;
  };

  
  const userRole = 'admin';
  const [investors, setInvestors] = useState([]);

  useEffect(() => {
    // Fetch the investor data on component mount
    const getInvestors = async () => {
      const investorsData = await fetchInvestors();
      setInvestors(investorsData);
    };

    getInvestors();
  }, []);
  return (
      <div>
        {/* Conditionally render Navbar based on userRole */}
        {userRole === 'admin' ? <Navbar1 /> : <Navbar />}
  
      <div className=" main">
        <img src={logo} width="100%" alt="" />
      </div>
      <div className="text-h ">
        <TypeAnimation
          sequence={[
            "WELCOME TO PITCH HUB",
            1000,
            "PITCH YOUR IDEAS",
            2000,
            "HELLO FUTURE ENTREPRENEUR",
            3000,
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "1.8em", display: "inline-block" }}
          className="text-dark"
        />
      </div>
      <Container className="my-4">
        <Row>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>
                  <h3>
                    VISION <span className="text-warning">PITCH HUB</span>
                  </h3>
                </Card.Title>
                <Card.Text className="text-j">
                Pitch_Hub aims to empower students by providing a dynamic platform that bridges the gap between innovative ideas and entrepreneurial success. By offering real-world startup showcases, funding navigation, and investor engagement, it nurtures the skills and confidence needed to bring ideas to life. The platform fosters mentorship, collaboration, and a strong community of peers to guide students on their entrepreneurial journeys. With personalized learning paths and seamless access to resources, Pitch_Hub equips students to transform their ideas into market-ready startups. It integrates education, funding, and networking for a holistic entrepreneurial experience.
                </Card.Text>
                {/* <Card.Link className="btn btn-warning" as={Link} to="/about">Read more..</Card.Link> */}
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>
                  <h3>
                    MISSION <span className="text-warning">PITCH HUB</span>
                  </h3>
                </Card.Title>
                <Card.Text>
                Pitch_Hub’s mission is to empower students with the skills, resources, and connections needed to launch successful startups. By providing access to real-world insights, funding opportunities, and mentorship, we enable students to turn innovative ideas into impactful businesses. Our platform fosters a collaborative environment for continuous learning and growth in the entrepreneurial ecosystem.
                </Card.Text>
                {/* <Card.Link className="btn btn-warning">Read more..</Card.Link> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={3}>
            <Card>
              <Card.Body className="text-center">
                <Card.Text>
                  <HiOutlineBuildingLibrary size="80px" />
                  <h4>START</h4>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Body className="text-center">
                <Card.Text>
                  <FaUsers size="80px" />
                  <h4>TEAM UP</h4>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Body className="text-center">
                <Card.Text>
                  <FaMedal size="80px" />
                  <h4>ACHIEVE IT</h4>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Body className="text-center">
                <Card.Text>
                  <MdEventRepeat size="80px" />
                  <h4>IDEAS</h4>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <div className=" main my-4">
        <img src={admi} width="100%" alt="" />
      </div>
      <div className="text-i text-warning tracking-in-expand">
        <h2>PITCH YOUR IDEAS</h2>
        <h5>
        "Pitching an idea is the first step in transforming a dream into a reality. For students, it's not just about presenting—it’s about believing in their potential to create change."
        </h5>
        <Link className="text-light" as={Link} to="/pre">
        </Link>
      </div>
      <div className="d-flex gap-5 icon">
        <ImLab size="80px" color="white" />
        <SiRedux size="90px" color="white" />
        <FaUserGraduate size="80px" color="white" />
      </div>
      <Container>
      <div className="row">
        <div className="col-lg-9 mt-5 ">
          <div className="card p-3">
            <div className="card-content">
              <h2 className="card-title text-center">WHY PITCH HUB</h2>
              <p className="card-description">
              "Pitch Hub for Students" provides an invaluable platform where students can practice, refine, and showcase their ideas in a supportive and growth-focused environment. Through pitching, students develop crucial skills in communication and persuasion, enabling them to present ideas clearly and compellingly—a skill that translates into various professional contexts, including job interviews and team collaborations. Additionally, the hub serves as a confidence-building ground, allowing students to overcome stage fright and gain poise in public speaking. Real-world experience is another core benefit, as students receive constructive feedback from peers, mentors, and industry professionals, enabling them to improve and iterate on their ideas. Practicing in a Pitch Hub also prepares students for future pitching dynamics, where they learn to respond to questions, handle feedback effectively, and adapt their presentations. In essence, "Pitch Hub for Students" equips students with the skills, confidence, and experience to succeed in academic, entrepreneurial, and professional pursuits.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 col-lg-3">
          <Card style={{ width: "18rem" }} className="text-center">
            <CardHeader className="back text-light fs-4">
              Quick Links
            </CardHeader>
            <Card.Body>
              <Card.Text as={Link} to="/viewdepartment">
                Department
              </Card.Text>
              <hr />
              <Card.Text as={Link} to="/viewteaching">
                Faculty Deatils
              </Card.Text>
              <hr />
              <Card.Text as={Link} to="/achievementstudy">
                Acheviments
              </Card.Text>
              <hr />
              <Card.Text as={Link} to="/viewgallery">
                Gallery
              </Card.Text>
              <hr />
              <Card.Text as={Link} to="/contact">
                Contact Us
              </Card.Text>
              <hr />
              <Card.Text as={Link} to="/pre">
                Admission
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      </Container>

      (
    <div className="container-fluid ">
      <br />

      {/* TOP INVESTORS Section */}
      <div className="container-fluid">
        <br />
        <h2 style={{ textAlign: 'center' }}>TOP INVESTORS</h2>
        <div className="row justify-content-start m-4">
          {investors.length === 0 ? (
            <p>Loading investors...</p>
          ) : (
            investors.map((investor) => (
              <div className="col-lg-2" key={investor.id}>
                <div className="card back pt-4" style={{ width: '10rem', height: '10rem' }}>
                  <img src={investor.imageUrl || c1} className="card-img-top" alt={investor.name} />
                  <div className="card-body">
                    <h5 className="card-title">{investor.name}</h5>
                    <p className="card-text">{investor.email}</p>
                    <p className="card-text">{investor.about}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  

      <footer className="back text-light py-4 mt-5">
        <Container>
          <Row>
            <Col md={4} className="mb-3">
              <h5>Disclaimer </h5>
              <p className="text-muted">
              This website is for educational purposes only. The information provided is 
              intended to enhance learning and understanding 
              </p>
            </Col>
            <Col md={4} className="mb-3">
              <h5 className="text-warning">Contact Information</h5>
               <p>Email: helpsjcestu@gmail.com</p>
            </Col>
            <Col md={4} className="mb-3">         
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="text-center">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}
