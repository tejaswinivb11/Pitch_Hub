import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { baseurl } from "../../App";

export default function ReplyModal({ show, toggle, id, setChanged }) {
  const [input, setInput] = useState("");

  console.log(id);

  function replyQuery() {
    debugger
    axios
      .put(baseurl + `/updatequery/${id}`, { reply: input })
      .then((res) => {
        toast.success("Replied successfully");
        setChanged(true);
      })
      .catch((error) => {
        toast.error("Failed");
        console.log(error);
      });
  }

  return (
    <Modal show={show} onHide={toggle}>
      <Modal.Header closeButton>
        <Modal.Title>Reply</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows={3}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggle}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            toggle();
            replyQuery();
          }}
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
