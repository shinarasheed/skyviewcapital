import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Summary = ({ handleChange, values, prevStep }) => {
  const goBackToPreviousStep = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <section className="loginsection">
      <div className="loginForm">
        <h3 style={{ color: 'white' }} className="text-center">
          Summary
        </h3>
        <Form>
          <Form.Group>
            <Form.Label className="formLabel">FirstName</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your FirstName"
              name="firstName"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">LastName</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your LastName"
              name="lastName"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">UserName</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your UserName"
              name="userName"
              onChange={handleChange('userName')}
              defaultValue={values.userName}
            />
          </Form.Group>

          <Button
            onClick={(e) => goBackToPreviousStep(e)}
            className="mt-4"
            variant="primary"
            type="button"
          >
            Go Back
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default Summary;
