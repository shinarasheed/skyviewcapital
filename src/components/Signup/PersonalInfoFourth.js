import React from 'react';
import { Form, Button } from 'react-bootstrap';

const PersonalInfo = ({ handleChange, values, prevStep, nextStep }) => {
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
          Personal Information 4
        </h3>
        <Form>
          <Form.Group>
            <Form.Label className="formLabel">Name of Company</Form.Label>
            <Form.Control
              type="text"
              placeholder="Company Name"
              name="companyName"
              onChange={handleChange('companyName')}
              defaultValue={values.companyName}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">
              Are you politically exposed?
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Political?"
              name="political"
              onChange={handleChange('political')}
              defaultValue={values.political}
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

export default PersonalInfo;
