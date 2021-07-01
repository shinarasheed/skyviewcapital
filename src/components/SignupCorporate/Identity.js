import React from 'react';
import { Form, Button } from 'react-bootstrap';
import DateInput from '../DateInput';
import SignupTitle from '../SignupTitle';

const Identity = ({ handleChange, values, prevStep, nextStep }) => {
  const continueToNextStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  const goBackToPreviousStep = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <>
      <SignupTitle title="give us your identification details" />

      <Form>
        <div className="formInputContainer">
          <Form.Group>
            <Form.Label className="formLabel">
              Form of Identification
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Form of ID"
              name="idForm"
              onChange={(e) => handleChange(e)}
              value={values.idForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">ID Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter ID Number"
              name="idNumber"
              onChange={(e) => handleChange(e)}
              value={values.idNumber}
            />
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <div className="halfFormInput">
            <DateInput
              type="text"
              placeholder="Enter Date"
              name="idExpireDate"
              onChange={(e) => handleChange(e)}
              value={values.idExpireDate}
            />
          </div>
        </div>

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
    </>
  );
};

export default Identity;
