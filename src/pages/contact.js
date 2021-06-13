import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <>
      <div className="contactHero"></div>
      <section className="contactsection">
        <div className="contactForm">
          <Form>
            <Form.Group>
              <Form.Label className="formLabel">Name</Form.Label>
              <Form.Control size="lg" type="text" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group>
              <Form.Label className="formLabel">Email</Form.Label>
              <Form.Control size="lg" type="email" placeholder="Enter Email" />
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
              <Form.Control
                size="lg"
                type="text"
                placeholder="Enter Location"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="formLabel">Message</Form.Label>
              <Form.Control className="formMessage" as="textarea" rows={5} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </section>
    </>
  );
};

export default Contact;
