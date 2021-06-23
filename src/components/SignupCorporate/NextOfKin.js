import React from 'react';
import { Form, Button } from 'react-bootstrap';

const NextOfKin = ({ handleChange, values, prevStep, nextStep }) => {
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
      <h3
        style={{ color: 'white', marginBottom: '2rem' }}
        className="text-center"
      >
        Next Of Kin
      </h3>
      <Form>
        <div className="formInputContainer">
          <Form.Group>
            <Form.Label className="formLabel">Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="nextOfKinName"
              onChange={(e) => handleChange(e)}
              value={values.nextOfKinName}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">
              Relationship of NextOfKin
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Relationship"
              name="relationNextOfKin"
              onChange={(e) => handleChange(e)}
              value={values.relationNextOfKin}
            />
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <Form.Group>
            <Form.Label className="formLabel">Contact Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Contact Address"
              name="contactNextOfKin"
              onChange={(e) => handleChange(e)}
              defaultValue={values.contactNextOfKin}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Phone Number"
              name="phoneNumberNextOfKin"
              onChange={(e) => handleChange(e)}
              defaultValue={values.phoneNumberNextOfKin}
            />
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <Form.Group>
            <Form.Label className="formLabel">Next Of Kin Email</Form.Label>
            <Form.Control
              className="halfFormInput"
              type="email"
              placeholder="Enter Email"
              name="emailNextOfKin"
              onChange={(e) => handleChange(e)}
              value={values.emailNextOfKin}
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

export default NextOfKin;
