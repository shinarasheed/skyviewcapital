import React from 'react';
import { Form, Button } from 'react-bootstrap';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
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
      <SignupTitle title="Give us your Identification Details" />
      <Form>
        <div className="formInputContainer">
          <Form.Group>
            <Form.Label className="formLabel">
              Form of Identification
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Form of identification"
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
            <DayPickerInput
              type="text"
              placeholder="Enter Date"
              name="idExpireDate"
              onChange={(e) => handleChange(e)}
              value={values.idExpireDate}
              modifiers={modifiers}
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

const modifiers = {
  color: '2rem',
};
export default Identity;
