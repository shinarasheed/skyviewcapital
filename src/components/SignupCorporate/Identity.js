import React from 'react';
import { Form, Button } from 'react-bootstrap';

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
      <h3
        style={{ color: 'white', marginBottom: '2rem' }}
        className="text-center"
      >
        Give us your Identification Details
      </h3>
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
          <Form.Group>
            <Form.Label className="formLabel">Date of Expiry</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Date"
              name="idExpireDate"
              onChange={(e) => handleChange(e)}
              value={values.idExpireDate}
            />
          </Form.Group>
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
