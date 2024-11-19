import React from "react";
import Navbar1 from "./Navbar";
import { Card } from "react-bootstrap";


export default function History() {
  return (
    <div>
      <Navbar1 />
      <Card className="w-75 mx-auto mt-5 ">
        <Card.Header as="h5" className="text-center back text-light">
          History
        </Card.Header>
        <Card.Body>
          {/* <Card.Title className="text-center">
            {" "}
            CPC Polytechnic College
          </Card.Title> */}
          <Card.Text className="text-j">
            Government CPC Polytechnic, Mysore was popularly known as
            CPC Polytechnic, it is a premier technical institute of Karnataka
            state situated in the garden city of Mysore. It was established in
            the year 1954 as a public college under the erstwhile Mysore State
            Government. Government CPC Polytechnic is a Government accredited
            organization dedicated to higher education in India .The sprawling
            land of 5.09 acres and spacious building of nearly 2,15,267 sq.ft
            was donated by Sri C. Perumal Chettiar, a philanthropist, to the
            then Government of Mysore. Government CPC Polytechnic is an “All
            India Council for Technical Education”( AICTE ) approved institution
            run by Government of Karnataka and coming under the purview of
            Directorate of Technical Education. The institute is rendering a lot
            services to the citizens of Mysore and surrounding areas by offering
            three years diploma program in various engineering and
            non-engineering courses. The training is rendered by well qualified
            dedicated staff with supportive infrastructure. The main object of
            the institute is to provide quality education to enhance individual
            performance and elevate professional standards through innovative
            training programs in varied disciplines, research and extension
            activities. Over the period, CPC Polytechnic College has gained
            expertized through its trained and experienced faculty in the fields
            of Electrical & Electronics Engineering, Mechanical Engineering,
            Electronics & Communication Engineering, Automobile Engineering,
            Computer Science Engineering, Civil Engineering. Courses offered by
            institute are recognized and acknowledged by approving bodies like
            AICTE. CPC Polytechnic For students institute have extraordinary
            facilities & infrastructure like, Boys Hostel ,Labs, Library, Sports
            .
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
