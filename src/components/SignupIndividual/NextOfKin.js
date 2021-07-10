import React from 'react';
import { Form, Button } from 'react-bootstrap';

import SignupTitle from '../SignupTitle';

const NextOfKin = ({ register, prevStep, nextStep, errors }) => {
  const continueToNextStep = (e) => {
    nextStep();
  };

  const goBackToPreviousStep = (e) => {
    prevStep();
  };

  return (
    <>
      <SignupTitle title="next of kin" />
      <Form>
        <div className="formInputContainer">
          <Form.Group>
            <Form.Label className="formLabel">Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="nextOfKinName"
              {...register('nextOfKinName')}
            />
            <p>{errors.nextOfKinName?.message}</p>
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">
              Relationship of NextOfKin
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Relationship"
              name="relationNextOfKin"
              {...register('relationNextOfKin')}
            />
            <p>{errors.relationNextOfKin?.message}</p>
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <Form.Group>
            <Form.Label className="formLabel">Contact Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Contact Address"
              name="contactNextOfKin"
              {...register('contactNextOfKin')}
            />
            <p>{errors.contactNextOfKin?.message}</p>
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Phone Number"
              name="phoneNumberNextOfKin"
              {...register('phoneNumberNextOfKin')}
            />
            <p>{errors.phoneNumberNextOfKin?.message}</p>
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <Form.Group>
            <Form.Label className="formLabel">Next Of Kin Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              name="emailNextOfKin"
              {...register('emailNextOfKin')}
            />
            <p>{errors.emailNextOfKin?.message}</p>
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Next Of Kin CHN</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter CHN"
              name="chnNextOfKin"
              {...register('chnNextOfKin')}
            />
            <p>{errors.chnNextOfKin?.message}</p>
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

export default NextOfKin;
