import React from 'react';
import { Form, Button } from 'react-bootstrap';

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
      <h3 style={{ color: 'white' }} className="text-center">
        Personal Information
      </h3>
      <Form>
        <div className="formInputContainer">
          <Form.Group>
            <Form.Label className="formLabel">Country</Form.Label>
            <Form.Control
              type="text"
              placeholder="Country"
              name="country"
              onChange={(e) => handleChange(e)}
              value={values.country}
            />
          </Form.Group>

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
        </div>

        <div className="formInputContainer">
          <Form.Group>
            <Form.Label className="formLabel">Local Government Area</Form.Label>
            <Form.Control
              type="text"
              placeholder="Local Government Area"
              name="LocalGovernmentArea"
              onChange={(e) => handleChange(e)}
              value={values.LocalGovernmentArea}
            />
          </Form.Group>

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
        </div>

        <div className="formInputContainer">
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
        </div>

        <div className="formInputContainer">
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

          <Form.Group>
            <Form.Label className="formLabel">Type of Employment</Form.Label>
            <Form.Control
              type="text"
              placeholder="Employment Type"
              name="employmentType"
              onChange={(e) => handleChange(e)}
              value={values.employmentType}
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
