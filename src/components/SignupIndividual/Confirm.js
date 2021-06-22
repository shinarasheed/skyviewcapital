import React from 'react';
import { Button } from 'react-bootstrap';

const Confirm = ({ prevStep, nextStep }) => {
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
        Confirm
      </h3>

      <div style={{ fontSize: '1.5rem', color: '#fff' }}>
        <p className="mb-3">
          To complete the account opening process, you will be required to
          provide the following documents
        </p>

        <ol className="confirmList">
          <li>
            1. A valid Means of Identification of Signatory(s) - National ID,
            Int'l Passport, Voter's card or driving license
          </li>
          <li>2. Recent Passport Photograph</li>
          <li>
            3. Recent Utility Bill - Electricity, Water, Telephone or Waste Bill
          </li>
          <li>4. Scanned signature specimen</li>
        </ol>
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
    </>
  );
};

export default Confirm;
