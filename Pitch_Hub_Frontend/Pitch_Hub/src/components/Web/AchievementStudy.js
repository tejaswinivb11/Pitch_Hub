import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { baseurl } from "../../App";
import Navbar1 from "./Navbar";

export default function AchievementStudy() {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseurl}/getachievement`)
      .then((response) => {
        console.log(response);
        setAchievements(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Navbar1 />
      <h4 className="text-center my-5">Achievements</h4>
      {achievements
        .filter((achv) => achv.category === "Study")
        .map((achievement, index) => (
          <Container key={index} className="my-3">
            <Card className="mx-auto w-100">
             
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <Card.Img src={achievement?.photo} height={300} />
                  </Col>
                  <Col md={6}>
                    <div>
                      Student Name : <b>{achievement?.studentName}</b>
                      <hr />
                      Category : <b>{achievement?.category}</b>
                      <hr />
                      Department : <b>{achievement?.department}</b>
                      <hr />
                      Year : <b>{achievement?.department}</b>
                      <hr />
                      <div> Achievement : <b>{achievement?.achievement}</b></div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Container>
        ))}
    </div>
  );
}
