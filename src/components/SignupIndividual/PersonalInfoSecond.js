import React from 'react';
import { Form, Button } from 'react-bootstrap';

import SignupTitle from '../SignupTitle';

const PersonalInfoSecond = ({ prevStep, register, nextStep, errors }) => {
  const continueToNextStep = (e) => {
    nextStep();
  };

  const goBackToPreviousStep = (e) => {
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
              {...register('stateOfOrigin')}
            />
            <p>{errors.stateOfOrigin?.message}</p>
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Local Government Area</Form.Label>
            <Form.Control
              type="text"
              placeholder="Local Government Area"
              name="localGovernment"
              {...register('localGovernment')}
            />
            <p>{errors.localGovernment?.message}</p>
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <Form.Group>
            <Form.Label className="formLabel">Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              name="emailAddress"
              {...register('emailAddress')}
            />
            <p>{errors.emailAddress?.message}</p>
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Mobile Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Mobile Phone Number"
              name="mobilePhoneNumber"
              {...register('mobilePhoneNumber')}
            />
            <p>{errors.mobilePhoneNumber?.message}</p>
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <Form.Group>
            <Form.Label className="formLabel">Home Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Home Phone Number"
              name="homePhoneNumber"
              {...register('homePhoneNumber')}
            />
            <p>{errors.homePhoneNumber?.message}</p>
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Profession/Occupation</Form.Label>
            <Form.Control
              type="text"
              placeholder="Profession"
              name="profession"
              {...register('profession')}
            />
            <p>{errors.profession?.message}</p>
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <Form.Group className="halfFormInput">
            <Form.Label className="formLabel">Type of Employment</Form.Label>
            <Form.Control
              as="select"
              placeholder="Employment Type"
              name="employmentType"
              {...register('employmentType')}
            >
              <option>Select Employment Type</option>
              <option>Salaried</option>
              <option>Self Employed</option>
              <option>Retired</option>
              <option>Unemployed</option>
            </Form.Control>
            <p>{errors.employmentType?.message}</p>
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Company Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Company Name"
              name="companyName"
              {...register('companyName')}
            />
            <p>{errors.companyName?.message}</p>
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
