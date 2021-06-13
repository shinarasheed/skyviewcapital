import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
  return (
    <section className="loginsection">
      <div className="loginForm">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="formLabel">Username</Form.Label>
            <Form.Control size="lg" type="text" placeholder="Enter Username" />
            <Form.Text className="formText">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className="formLabel">Password</Form.Label>
            <Form.Control size="lg" type="password" placeholder="Password" />
            <Form.Text className="formText">
              <Link to="/">Forgot Password</Link>
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <div className="sinupCta">
          <p className="mr-2">Don't have an Account?</p>
          <Link to="/signup">SignUp</Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
