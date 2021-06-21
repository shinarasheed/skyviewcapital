import React from 'react';
import { Form, Button } from 'react-bootstrap';

const PersonalInfoThird = ({ handleChange, values, prevStep, nextStep }) => {
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
          Personal Information 3
        </h3>
        <Form>
          <Form.Group>
            <Form.Label className="formLabel">Type of Employment</Form.Label>
            <Form.Control
              type="text"
              placeholder="Employment Type"
              name="employmentType"
              onChange={handleChange('employmentType')}
              defaultValue={values.employmentType}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              name="emailAddress"
              onChange={handleChange('emailAddress')}
              defaultValue={values.emailAddress}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Mobile Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Mobile Phone Number"
              name="mobilePhoneNumber"
              onChange={handleChange('mobilePhoneNumber')}
              defaultValue={values.mobilePhoneNumber}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Home Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Home Phone Number"
              name="homePhoneNumber"
              onChange={handleChange('homePhoneNumber')}
              defaultValue={values.homePhoneNumber}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Profession/Occupation</Form.Label>
            <Form.Control
              type="text"
              placeholder="Profession"
              name="profession"
              onChange={handleChange('profession')}
              defaultValue={values.profession}
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

export default PersonalInfoThird;
