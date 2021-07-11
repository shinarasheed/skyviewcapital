import React from 'react';
import { Form, Button } from 'react-bootstrap';
import SignupTitle from '../SignupTitle';

const BankDetails = ({ register, prevStep, nextStep, errors, isValid }) => {
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
              {...register('bankName', { required: true })}
            />
            {errors.bankName?.type === 'required' && (
              <p className="InputErrorText">bank name is required</p>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Back Account Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Account Number"
              name="bankAccountNumber"
              {...register('bankAccountNumber', { required: true })}
            />
            {errors.bankAccountNumber?.type === 'required' && (
              <p className="InputErrorText">account number is required</p>
            )}
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <Form.Group>
            <Form.Label className="formLabel">BVN</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your BVN"
              name="bvnNumber"
              {...register('bvnNumber', { required: true })}
            />
            {errors.bvnNumber?.type === 'required' && (
              <p className="InputErrorText">bvn is required</p>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">AccountType</Form.Label>
            <Form.Control
              as="select"
              placeholder="Account Type"
              name="bankAccountType"
              {...register('bankAccountType', { required: true })}
            >
              <option>Select Account Type</option>
              <option>Savings</option>
              <option>Current</option>
            </Form.Control>
            {errors.bankAccountType?.type === 'required' && (
              <p className="InputErrorText">account type is required</p>
            )}
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <Form.Group>
            <Form.Label className="formLabel">Sort Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Sort Code"
              name="sortCode"
              {...register('sortCode', { required: true })}
            />
            {errors.sortCode?.type === 'required' && (
              <p className="InputErrorText">sort code is required</p>
            )}
          </Form.Group>

          <div className="dateInput">
            <Form.Label className="formLabel">
              Date Account was Opened
            </Form.Label>
            <input
              type="date"
              placeholder="Enter Date"
              name="accountOpeningDate"
              {...register('accountOpeningDate', { required: true })}
            />
            {errors.accountOpeningDate?.type === 'required' && (
              <p className="InputErrorText">date is required</p>
            )}
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

export default BankDetails;
