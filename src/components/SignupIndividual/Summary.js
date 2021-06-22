import React from 'react';
import { Button } from 'react-bootstrap';

const Summary = ({ values, prevStep }) => {
  const goBackToPreviousStep = (e) => {
    e.preventDefault();
    prevStep();
  };

  const handleFormSubmit = () => {
    console.log(values);
  };

  return (
    <>
      <h3
        style={{ color: 'white', marginBottom: '2rem' }}
        className="text-center"
      >
        Summary
      </h3>

      <div>
        <p style={{ fontSize: '1.5rem', color: '#fff' }}>
          Mauris congue justo a ligula rutrum fermentum. Aenean posuere sit amet
          ipsum sed ultricies. Phasellus facilisis purus vitae porta gravida.
          Phasellus laoreet nunc ac ornare semper. Etiam fermentum diam eget ex
          tempor tempus. Fusce arcu ex, pretium ac dictum et, euismod eu urna.
          Donec cursus massa vulputate, molestie nibh sit amet, volutpat mi.
          Nullam aliquam maximus placerat. Phasellus porttitor sagittis augue
          quis aliquet. Nullam ac massa sed magna ornare consectetur. Cras
          sagittis tempor varius. Etiam tristique ante
        </p>
      </div>

      <Button
        onClick={(e) => goBackToPreviousStep(e)}
        className="mt-4"
        variant="primary"
        type="button"
      >
        Go Back
      </Button>

      <Button
        onClick={(e) => handleFormSubmit()}
        className="mt-4"
        variant="primary"
        type="button"
      >
        Submit
      </Button>
    </>
  );
};

export default Summary;
