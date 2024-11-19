import axios from "axios";
import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { baseurl } from "../../App";
import ReplyModal from "./ReplyModal";

export default function ReplyQuery() {
  
  const [queries, setQueries] = useState([]);

  const [show, setShow] = useState(false);

  const [id  ,setId] = useState()

  const toggle = () => setShow(!show);

  const [changed , setChanged] = useState(false)


  useEffect(() => {
    axios
      .get(baseurl + `/getquery`)
      .then((res) => {
        setQueries(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      setChanged(false)
  }, [changed]);

  console.log(queries);
  return (
    <Container className="my-5">
      <table className="table">
        <thead>
          <tr>
            <th>QID</th>
            <th> Name</th>
            <th> Email</th>
            <th>Question</th>
            <th>Reply</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {queries
            .map((query, index) => {
              return (
                <tr key={index}>
                  <td>{query.id}</td>
                  <td>{query.name}</td>
                  <td>{query.email}</td>
                  <td>{query.query}</td>
                  <td>{query.reply}</td>
                  <td>
                    <Button variant="success" onClick={()=>{
                      setId(query.id)
                      toggle()
                    }}>
                      Reply
                    </Button>
                    <ReplyModal show={show} toggle={toggle} id={id} setChanged={setChanged} />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Container>
  );
}
