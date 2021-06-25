import React from 'react';
import FadeIn from 'react-fade-in';
import { Helmet } from 'react-helmet';
import { Form, Button } from 'react-bootstrap';

import Map from '../components/Map';

const location = {
  address: '71 Norman Williams St, Ikoyi, Lagos',
  lat: 6.4451655438511075,
  lng: 3.409805057561379,
};

const Contact = () => {
  return (
    <>
      <FadeIn>
        <Helmet>
          <title>ContactUs</title>
        </Helmet>
        <div className="contactHero"></div>
        <section className="contactSection">
          <Map location={location} zoomLevel={16} />

          <div className="contactForm">
            <h5
              className="text-center"
              style={{ fontSize: '2rem', marginBottom: '4rem' }}
            >
              Please feel free to reach out to us
            </h5>
            <Form>
              <Form.Group>
                <Form.Label className="formLabel">Name</Form.Label>
                <Form.Control size="lg" type="text" placeholder="Enter Name" />
              </Form.Group>

              <Form.Group>
                <Form.Label className="formLabel">Email</Form.Label>
                <Form.Control
                  size="lg"
                  type="email"
                  placeholder="Enter Email"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label className="formLabel">Phone Number</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Enter Phone Number"
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
      </FadeIn>
    </>
  );
};

export default Contact;
