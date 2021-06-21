import React from 'react';
import { Button } from 'react-bootstrap';

const Summary = ({ handleChange, values, prevStep }) => {
  const goBackToPreviousStep = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <section>
      <div>Summary</div>
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

export default Summary;
