import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { FaDribbble, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import Navbar1 from './Navbar';
import { baseurl } from '../../App';
 
function ViewNonTeaching() {
  const [faculties, setFaculties] = useState([]);

  useEffect(() => {
    const fetchFaculties = async () => {
      try {
        const response = await axios.get(`${baseurl}/getfaculty`);
        setFaculties(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFaculties();
  }, []);

  return (
    <>
      <Navbar1 />
      <div className="container">
        <h2 className="text-center my-5">Non - Teaching</h2>
        <div className="row">
          {faculties
          .filter((nonteaching)=>nonteaching.type === "Non-Teaching")
          .map(user => (
            <div key={user.id} className="col-md-4 mb-4">
           <Card className="text-center" style={{ maxWidth: "250px" }}>

                <Card.Img
                  variant="top"
                  src={user.photo}
                  alt={user.name}
                  className="img-fluid"
                  style={{ height: "250px" }}
                />
                <Card.Body>
                  <Card.Title>Name: {user.name}</Card.Title>
                  <Card.Text>Designation: {user.designation}</Card.Text>
                  <Card.Text>Qualification: {user.qualification}</Card.Text>
                  <Card.Text>Department: {user.department}</Card.Text>
                  <div className="d-flex justify-content-center gap-4 mb-4">
                    <a href={user.dribbble}>
                      <FaDribbble size="30px" />
                    </a>
                    <a href={user.twitter}>
                      <FaTwitter size="30px" />
                    </a>
                    <a href={user.linkedin}>
                      <FaLinkedin size="30px" />
                    </a>
                    <a href={user.facebook}>
                      <FaFacebook size="30px" />
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ViewNonTeaching;
