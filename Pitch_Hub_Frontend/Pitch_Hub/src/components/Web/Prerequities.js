import React from 'react'
import Navbar1 from './Navbar'
import { Card } from 'react-bootstrap'

export default function Prerequities() {
  return (
    <div>
      <Navbar1 />
      <Card className="w-75 mx-auto mt-5 ">
        <Card.Header as="h5" className="text-center back text-light">
        Admission
        </Card.Header>
        <Card.Body>
          <Card.Text className="text-j">
           <h4>Prerequisite for admission:</h4>
           <p>10th Pass or 12th Pass</p>
           <h4>Admission Process:</h4>
          <ul>
            <li>
            Reservations are available for minorities, Kannada medium quota, sports quota, and SC and ST categories. 
            </li>
            <li>	The admission to the course is based on merit.

            </li>
            <li>	The fees for the academic year are 4000 to 5000 approximately.</li>

            <li>
            The admission form is available in the CC Tek of the college.
            </li>
            <li>
            SSLC marks card, adhar card, income and cast certificate, parents adhar card, contact details (mobile number and E-mail id), SATS number, transfer certificate (TC), Study certificate are the required documents.
            </li>
          </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
