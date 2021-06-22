import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
  return (
    <>
      <Form>
        <div className="formInputContainer">
          <Form.Group>
            <Form.Label className="formLabel">Username</Form.Label>
            <Form.Control size="lg" type="text" placeholder="Enter Username" />
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Password</Form.Label>
            <Form.Control size="lg" type="password" placeholder="Password" />
            <Form.Text className="formText">
              <Link to="/">Forgot Password</Link>
            </Form.Text>
          </Form.Group>
        </div>

        <Button style={{ marginTop: '0' }} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div className="sinupCta">
        <p className="mr-2">Don't have an Account?</p>
        <Link to="/signup">SignUp</Link>
      </div>
    </>
  );
};

export default Login;
