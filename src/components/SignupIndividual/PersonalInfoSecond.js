import React from 'react';
import { Form, Button } from 'react-bootstrap';

import SignupTitle from '../SignupTitle';

const PersonalInfoSecond = ({
  prevStep,
  register,
  isValid,
  nextStep,
  errors,
}) => {
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
              {...register('stateOfOrigin', { required: true })}
            />

            {errors.stateOfOrigin?.type === 'required' && (
              <p className="InputErrorText">state of origin is required</p>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Local Government Area</Form.Label>
            <Form.Control
              type="text"
              placeholder="Local Government Area"
              name="localGovernment"
              {...register('localGovernment', { required: true })}
            />
            {errors.localGovernment?.type === 'required' && (
              <p className="InputErrorText">local government is required</p>
            )}
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <Form.Group>
            <Form.Label className="formLabel">Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              name="emailAddress"
              {...register('emailAddress', { required: true })}
            />
            {errors.emailAddress?.type === 'required' && (
              <p className="InputErrorText">email address is required</p>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Mobile Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Mobile Phone Number"
              name="mobilePhoneNumber"
              {...register('mobilePhoneNumber', { required: true })}
            />
            {errors.mobilePhoneNumber?.type === 'required' && (
              <p className="InputErrorText">mobile phone is required</p>
            )}
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <Form.Group>
            <Form.Label className="formLabel">Home Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Home Phone Number"
              name="homePhoneNumber"
              {...register('homePhoneNumber', { required: true })}
            />
            {errors.homePhoneNumber?.type === 'required' && (
              <p className="InputErrorText">home phone is required</p>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Profession/Occupation</Form.Label>
            <Form.Control
              type="text"
              placeholder="Profession"
              name="profession"
              {...register('profession', { required: true })}
            />
            {errors.profession?.type === 'required' && (
              <p className="InputErrorText">profession is required</p>
            )}
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <Form.Group className="halfFormInput">
            <Form.Label className="formLabel">Type of Employment</Form.Label>
            <Form.Control
              as="select"
              placeholder="Employment Type"
              name="employmentType"
              {...register('employmentType', { required: true })}
            >
              <option>Select Employment Type</option>
              <option>Salaried</option>
              <option>Self Employed</option>
              <option>Retired</option>
              <option>Unemployed</option>
            </Form.Control>
            {errors.employmentType?.type === 'required' && (
              <p className="InputErrorText">employment type is required</p>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Company Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Company Name"
              name="companyName"
              {...register('companyName', { required: true })}
            />
            {errors.companyName?.type === 'required' && (
              <p className="InputErrorText">company name is required</p>
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

export default PersonalInfoSecond;
