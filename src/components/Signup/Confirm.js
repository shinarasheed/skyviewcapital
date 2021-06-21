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
    <section>
      <div>confirm the following</div>
      <Button
        onClick={(e) => continueToNextStep(e)}
        className="mt-4"
        variant="primary"
        type="button"
      >
        Continue
      </Button>

      <Button
        onClick={(e) => goBackToPreviousStep(e)}
        className="mt-4"
        variant="primary"
        type="button"
      >
        Go Back
      </Button>
    </section>
  );
};

export default Confirm;
