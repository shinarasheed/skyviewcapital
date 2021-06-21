import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const PersonalInfo = ({ handleChange, values, nextStep }) => {
  const continueToNextStep = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <section className="loginsection">
      <div className="loginForm">
        <Form>
          <Form.Group>
            <Form.Label className="formLabel">Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleChange('email')}
              defaultValue={values.email}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange('password')}
              defaultValue={values.password}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              name="passwordConfirm"
              onChange={handleChange('passwordConfirm')}
              defaultValue={values.passwordConfirm}
            />
          </Form.Group>

          <Button
            onClick={(e) => continueToNextStep(e)}
            className="mt-4"
            variant="primary"
            type="button"
          >
            Continue
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

export default PersonalInfo;
