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
    <section className="loginsection">
      <div className="loginForm">
        <h3 style={{ color: 'white' }} className="text-center">
          Personal Information 2
        </h3>
        <Form>
          <Form.Group>
            <Form.Label className="formLabel">Local Government Area</Form.Label>
            <Form.Control
              type="text"
              placeholder="Local Government Area"
              name="LocalGovernmentArea"
              // onChange={handleChange('LocalGovernmentArea')}
              onChange={(e) => handleChange(e)}
              value={values.LocalGovernmentArea}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Residence Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Residence Address"
              name="residenceAddress"
              // onChange={handleChange('residenceAddress')}
              onChange={(e) => handleChange(e)}
              value={values.residenceAddress}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">City</Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              name="city"
              // onChange={handleChange('city')}
              onChange={(e) => handleChange(e)}
              value={values.city}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Country</Form.Label>
            <Form.Control
              type="text"
              placeholder="Country"
              name="country"
              // onChange={handleChange('country')}
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
              // onChange={handleChange('stateOfOrigin')}
              onChange={(e) => handleChange(e)}
              value={values.stateOfOrigin}
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

export default PersonalInfoSecond;
