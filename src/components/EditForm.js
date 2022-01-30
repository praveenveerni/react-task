import { Form, Button } from "react-bootstrap"

import { UserContext } from "../context/UserContext";
import React, { useContext, useState } from "react";

const EditForm = ({ theUser }) => {

  const id = theUser.id;


  const [email, setEmail] = useState(theUser.email);
  const [first_name, setFirstName] = useState(theUser.first_name);
  const [last_name, setLastName] = useState(theUser.last_name);
  const [avatar] = useState(theUser.avatar);


  const { updateUser } = useContext(UserContext);

  const updatedUser = { id, email, first_name, last_name, avatar }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(id, updatedUser)
  }

  return (

    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Control
          type="email"
          placeholder="Email *"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Control
          type="text"
          placeholder="First name *"
          name="firstName"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formLastName">
        <Form.Control
          type="text"
          placeholder="Last Name *"
          name="lastName"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button variant="success" size="lg" type="submit">
                    Edit User
        </Button>
      </div>
    </Form>

  )
}

export default EditForm;