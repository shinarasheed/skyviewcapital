import React from 'react';
import { Form, Button } from 'react-bootstrap';

import SignupTitle from '../SignupTitle';

const Identity = ({ register, prevStep, nextStep, errors }) => {
  const continueToNextStep = (e) => {
    nextStep();
  };

  const goBackToPreviousStep = (e) => {
    prevStep();
  };

  return (
    <>
      <SignupTitle title="Give us your Identification Details" />
      <Form>
        <div className="formInputContainer">
          <Form.Group>
            <Form.Label className="formLabel">
              Form of Identification
            </Form.Label>
            <Form.Control as="select" name="idForm" {...register('idForm')}>
              <option>Select Form of ID</option>
              <option>Driver License</option>
              <option>National Identity Card</option>
              <option>Voters' Card</option>
              <option>International Passport</option>
            </Form.Control>
            <p>{errors.idForm?.message}</p>
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">ID Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter ID Number"
              name="idNumber"
              {...register('idNumber')}
            />
            <p>{errors.idNumber?.message}</p>
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <div className="dateInput">
            <Form.Label className="formLabel">Date of Expiry</Form.Label>
            <input
              type="date"
              placeholder="Enter Date"
              name="idExpireDate"
              {...register('idExpireDate')}
            />
            <p>{errors.idExpireDate?.message}</p>
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
