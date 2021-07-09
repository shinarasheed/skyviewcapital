import React from 'react';
import { Form, Button } from 'react-bootstrap';

import SignupTitle from '../SignupTitle';

const PersonalInfoSecond = ({ handleChange, values, prevStep, nextStep }) => {
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
      <SignupTitle title="personal information" />

      <Form>
        <div className="formInputContainer">
          <Form.Group>
            <Form.Label className="formLabel">State of Origin</Form.Label>
            <Form.Control
              type="text"
              placeholder="State of Origin"
              name="stateOfOrigin"
              onChange={(e) => handleChange(e)}
              value={values.stateOfOrigin}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Local Government Area</Form.Label>
            <Form.Control
              type="text"
              placeholder="Local Government Area"
              name="localGovernment"
              onChange={(e) => handleChange(e)}
              value={values.localGovernment}
            />
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <Form.Group>
            <Form.Label className="formLabel">Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              name="emailAddress"
              onChange={(e) => handleChange(e)}
              value={values.emailAddress}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Mobile Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Mobile Phone Number"
              name="mobilePhoneNumber"
              onChange={(e) => handleChange(e)}
              value={values.mobilePhoneNumber}
            />
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <Form.Group>
            <Form.Label className="formLabel">Home Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Home Phone Number"
              name="homePhoneNumber"
              onChange={(e) => handleChange(e)}
              value={values.homePhoneNumber}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Profession/Occupation</Form.Label>
            <Form.Control
              type="text"
              placeholder="Profession"
              name="profession"
              onChange={(e) => handleChange(e)}
              value={values.profession}
            />
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <Form.Group className="halfFormInput">
            <Form.Label className="formLabel">Type of Employment</Form.Label>
            <Form.Control
              as="select"
              placeholder="Employment Type"
              name="employmentType"
              onChange={(e) => handleChange(e)}
              value={values.employmentType}
            >
              <option>Select Employment Type</option>
              <option>Salaried</option>
              <option>Self Employed</option>
              <option>Retired</option>
              <option>Unemployed</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Company Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Company Name"
              name="companyName"
              onChange={(e) => handleChange(e)}
              value={values.companyName}
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

export default PersonalInfoSecond;
