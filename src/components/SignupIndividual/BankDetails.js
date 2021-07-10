import React from 'react';
import { Form, Button } from 'react-bootstrap';
import SignupTitle from '../SignupTitle';

const BankDetails = ({ register, prevStep, nextStep, errors }) => {
  const continueToNextStep = (e) => {
    nextStep();
  };

  const goBackToPreviousStep = (e) => {
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
              {...register('bankName')}
            />
            <p>{errors.banKName?.message}</p>
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Back Account Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Account Number"
              name="bankAccountNumber"
              {...register('bankAccountNumber')}
            />
            <p>{errors.bankAccountNumber?.message}</p>
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <Form.Group>
            <Form.Label className="formLabel">BVN</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your BVN"
              name="bvnNumber"
              {...register('bvnNumber')}
            />
            <p>{errors.bvnNumber?.message}</p>
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">AccountType</Form.Label>
            <Form.Control
              as="select"
              placeholder="Account Type"
              name="bankAccountType"
              {...register('bankAccountType')}
            >
              <option>Select Account Type</option>
              <option>Savings</option>
              <option>Current</option>
            </Form.Control>
            <p>{errors.bankAccountType?.message}</p>
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <Form.Group>
            <Form.Label className="formLabel">Sort Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Sort Code"
              name="sortCode"
              {...register('sortCode')}
            />
            <p>{errors.sortCode?.message}</p>
          </Form.Group>

          <div className="dateInput">
            <Form.Label className="formLabel">
              Date Account was Opened
            </Form.Label>
            <input
              type="date"
              placeholder="Enter Date"
              name="accountOpeningDate"
              {...register('accountOpeningDate')}
            />
            <p>{errors.accountOpeningDate?.message}</p>
          </div>
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
