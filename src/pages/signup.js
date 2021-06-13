import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const Signup = () => {
  return (
    <section className="loginsection">
      <div className="loginForm">
        <Form>
          <Form.Group>
            <Form.Label className="formLabel">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="formText">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <div className="sinupCta">
          <p className="mr-2">Already have an Account?</p>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </section>
  );
};

export default Signup;
