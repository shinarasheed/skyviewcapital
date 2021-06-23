import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Documents = ({ handleChange, values, prevStep, nextStep }) => {
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
        style={{ color: 'white', marginBottom: '3rem' }}
        className="text-center"
      >
        Document
      </h3>
      <Form>
        <div className="formInputContainer">
          <Form.Group>
            <Form.File
              name="namePhoto"
              label="Passport Photo"
              onChange={(e) => handleChange(e)}
              value={values.photoPassport}
            />
          </Form.Group>

          <Form.Group>
            <Form.File
              label="ID"
              name="photoID"
              onChange={(e) => handleChange(e)}
              value={values.photoID}
            />
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <Form.Group>
            <Form.File
              label="Signature"
              name="photoSignature"
              onChange={(e) => handleChange(e)}
              value={values.photoSignature}
            />
          </Form.Group>

          <Form.Group>
            <Form.File
              label="Utility Bill"
              name="photoUtilityBill"
              onChange={(e) => handleChange(e)}
              value={values.photoUtilityBill}
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

export default Documents;
