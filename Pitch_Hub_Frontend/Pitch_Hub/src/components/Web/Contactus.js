import { Button, Card } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import Navbar1 from './Navbar'
import { toast } from 'react-toastify';
import axios from 'axios';
import { baseurl } from '../../App';
import { BsFillReplyFill} from 'react-icons/bs'
import { FaQuestionCircle} from 'react-icons/fa'

export default function Contactus() {

  const [input, setInput] = useState({
    name: "",
    email: "",
    query: "",
  });

  const [reply, setReply] = useState([]);

  useEffect(() => {
    getQuery()
  },[]);

  function getQuery(){
    axios
    .get(baseurl + "/getquery")
    .then((res) => {
      setReply(res.data);
    })
    .catch((error) => console.log(error));
  }
  
  function clearAll() {
    setInput({
      name: "",
      email: "",
      query: "",
    })
  }

  function handleChange(e) {
    setInput((previous) => {
      return { ...previous, [e.target.name]: e.target.value };
    });
  }
  function handleContactUS(e) {
    e.preventDefault();
    const obj = {...input}
    toast
      .promise(axios.post(baseurl + `/query`, obj), {
        pending: "Please wait",
        success: "Your query posted successfully",
      })
      .then((res) => {
        clearAll();
        getQuery()
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed...Please try again");
      });
  }


  return (
    <div>
        <Navbar1/>
    <Container>
    <Row className='mt-5'>
      <Col md={{ span: 8, offset: 2 }}>
        <h3 className='text-center'>Contact Us</h3>
        <Form onSubmit={handleContactUS}>
          
        <Form.Group className='mb-3' >
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name"  
              name="name"
              value={input.name}
              onChange={handleChange}
              required />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" 
            name="email"
             value={input.email}
             onChange={handleChange}
             required />
          </Form.Group>

          <Form.Group className='mb-3' >
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter message"
             name="query"
             value={input.query}
             onChange={handleChange}
             required /> 
          </Form.Group>

          <Button variant="warning" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>

  <div className="my-5">
    <h2 className='text-center'>View Reply</h2>
        {reply.map((fb, index) => {
            return (
              <Container key={index} className="my-5 ">
                <Card className="mx-auto w-75">
                  <Card.Header className="back text-warning">
                    {fb.name}
                  </Card.Header>

                  <Card.Body className=" align-items-center">
                    <FaQuestionCircle size="25px" color="gray" />
                      <span>{fb.query}</span>
                    <div>
                      <BsFillReplyFill size="30px" color="gray" />
                      <span className="mr-5">{fb.reply}</span>
                    </div>
                  </Card.Body>
                </Card>
              </Container>
            );
          })}
      </div>
  </div>

  
  )
}
