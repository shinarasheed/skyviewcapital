import React from 'react';
import { Form, Button } from 'react-bootstrap';

const BankDetails = ({ handleChange, values, prevStep, nextStep }) => {
  const continueToNextStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  const goBackToPreviousStep = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <section className="loginsection">
      <div className="loginForm">
        <h3 style={{ color: 'white' }} className="text-center">
          Bank Details
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

          <div className="buttonContainer">
            <Button
              onClick={(e) => goBackToPreviousStep(e)}
              variant="primary"
              type="button"
            >
              Go Back
            </Button>

            <Button
              onClick={(e) => continueToNextStep(e)}
              variant="primary"
              type="button"
            >
              Continue
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default BankDetails;
