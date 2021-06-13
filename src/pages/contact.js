import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <section className="contactsection">
      <div className="contactForm">
        <Form>
          <Form.Group>
            <Form.Label className="formLabel">FirstName</Form.Label>
            <Form.Control size="lg" type="text" placeholder="Enter FirstName" />
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">LastName</Form.Label>
            <Form.Control size="lg" type="text" placeholder="Enter LastName" />
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Username</Form.Label>
            <Form.Control size="lg" type="text" placeholder="Enter Username" />
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Phone Number</Form.Label>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Enter PhoneNumber"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Location</Form.Label>
            <Form.Control size="lg" type="text" placeholder="Enter Location" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="formLabel">Message</Form.Label>
            <Form.Control as="textarea" rows={5} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default Contact;
