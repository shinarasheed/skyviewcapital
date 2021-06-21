import React from 'react';
import { Form, Button } from 'react-bootstrap';

const NextOfKin = ({ handleChange, values, prevStep, nextStep }) => {
  const continueToNextStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  const goBackToPreviousStep = (e) => {
    e.preventDefault();
    prevStep();
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <section className="loginsection">
      <div className="loginForm">
        <h3 style={{ color: 'white' }} className="text-center">
          Next Of Kin
        </h3>
        <Form onSubmit={(e) => handleFormSubmission(e)}>
          <Form.Group>
            <Form.Label className="formLabel">PhoneNumber</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your PhoneNumber"
              name="phoneNumber"
              onChange={handleChange('phoneNumber')}
              defaultValue={values.phoneNumber}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Country</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Country"
              name="country"
              onChange={handleChange('country')}
              defaultValue={values.country}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Occupation</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Occupation"
              name="occupation"
              onChange={handleChange('occupation')}
              defaultValue={values.occupation}
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

export default NextOfKin;
