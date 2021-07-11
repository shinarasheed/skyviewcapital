import React from 'react';
import { Form, Button } from 'react-bootstrap';

import SignupTitle from '../SignupTitle';

const NextOfKin = ({ register, prevStep, nextStep, errors, isValid }) => {
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
              {...register('nextOfKinName', { required: true })}
            />
            {errors.nextOfKinName?.type === 'required' && (
              <p className="InputErrorText">name is required</p>
            )}{' '}
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">
              Relationship of NextOfKin
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Relationship"
              name="relationNextOfKin"
              {...register('relationNextOfKin', { required: true })}
            />
            {errors.relationNextOfKin?.type === 'required' && (
              <p className="InputErrorText">relationship is required</p>
            )}
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <Form.Group>
            <Form.Label className="formLabel">Contact Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Contact Address"
              name="contactNextOfKin"
              {...register('contactNextOfKin', { required: true })}
            />
            {errors.contactNextOfKin?.type === 'required' && (
              <p className="InputErrorText">contact is required</p>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Phone Number"
              name="phoneNumberNextOfKin"
              {...register('phoneNumberNextOfKin', { required: true })}
            />
            {errors.phoneNumberNextOfKin?.type === 'required' && (
              <p className="InputErrorText">phone number is required</p>
            )}
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <Form.Group>
            <Form.Label className="formLabel">Next Of Kin Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              name="emailNextOfKin"
              {...register('emailNextOfKin', { required: true })}
            />

            {errors.emailNextOfKin?.type === 'required' && (
              <p className="InputErrorText">email is required</p>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Next Of Kin CHN</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter CHN"
              name="chnNextOfKin"
              {...register('chnNextOfKin', { required: true })}
            />
            {errors.chnNextOfKin?.type === 'required' && (
              <p className="InputErrorText">chn is required</p>
            )}
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
            disabled={!isValid}
            onClick={continueToNextStep}
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
