import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { baseurl } from "../../App";
import Navbar1 from "./Navbar";

export default function ViewExtraCurricular() {
  const [extraCurricularData, setExtraCurricularData] = useState([]);

  useEffect(() => {
    fetchExtraCurricularData();
  }, []);

  const fetchExtraCurricularData = async () => {
    try {
      const response = await axios.get(baseurl + "/getcurricular");
      setExtraCurricularData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <Navbar1 />
    <Container className="mt-5 mb-3">
      <h2 className="text-center">Extra Curricular Data</h2>
      <hr />
      {extraCurricularData.length === 0 ? (
        <p>No extra curricular data available.</p>
      ) : (
        extraCurricularData.map((data) => (
          <Card key={data.id} className="mb-3">
            <Card.Body>
              <Card.Title className="text-center">{data.event}</Card.Title>
              <hr/>
              <Card.Text>Description: {data.description}</Card.Text>
              {data.photo && (
                <Card.Img src={data.photo} alt="Extra Curricular" />
              )}
            </Card.Body>
          </Card>
        ))
      )}
    </Container>
    </>
  );
}
