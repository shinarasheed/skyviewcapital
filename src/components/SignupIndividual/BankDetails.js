import React from 'react';
import { Form, Button } from 'react-bootstrap';
import SignupTitle from '../SignupTitle';

const BankDetails = ({ handleChange, values, prevStep, nextStep }) => {
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
      <SignupTitle title="Please Provide Your Bank Details" />
      <Form>
        <div className="formInputContainer">
          <Form.Group>
            <Form.Label className="formLabel">Bank Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Bank Name"
              name="bankName"
              onChange={(e) => handleChange(e)}
              value={values.bankName}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Back Account Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Account Number"
              name="bankAccountNumber"
              onChange={(e) => handleChange(e)}
              value={values.bankAccountNumber}
            />
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <Form.Group>
            <Form.Label className="formLabel">BVN</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your BVN"
              name="bvnNumber"
              onChange={(e) => handleChange(e)}
              value={values.bvnNumber}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">AccountType</Form.Label>
            <Form.Control
              type="text"
              placeholder="Account Type"
              name="bankAccountType"
              onChange={(e) => handleChange(e)}
              value={values.bankAccountType}
            />
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <Form.Group>
            <Form.Label className="formLabel">Sort Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Sort Code"
              name="sortCode"
              onChange={(e) => handleChange(e)}
              value={values.sortCode}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">
              Date Account was Opened
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Date"
              name="accountOpeningDate"
              onChange={(e) => handleChange(e)}
              value={values.accountOpeningDate}
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

export default BankDetails;
