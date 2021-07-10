import React from 'react';
import { Form, Button } from 'react-bootstrap';

import SignupTitle from '../SignupTitle';

const Documents = ({ register, prevStep, nextStep, errors }) => {
  const continueToNextStep = (e) => {
    nextStep();
  };

  const goBackToPreviousStep = (e) => {
    prevStep();
  };

  return (
    <>
      <SignupTitle title="document" />
      <Form>
        <div className="formInputContainer">
          <Form.Group>
            <Form.File
              name="passport"
              label="Passport Photo"
              {...register('passport')}
            />
            <p>{errors.passport?.message}</p>
          </Form.Group>

          <Form.Group>
            <Form.File
              label="ID"
              name="identitycard"
              {...register('identitycard')}
            />
            <p>{errors.identitycard?.message}</p>
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <Form.Group>
            <Form.File
              label="signature"
              name="signature"
              {...register('signature')}
            />
            <p>{errors.signature?.message}</p>
          </Form.Group>

          <Form.Group>
            <Form.File
              label="Utility Bill"
              name="utilitybill"
              {...register('utilitybill')}
            />
            <p>{errors.utilitybill?.message}</p>
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <Form.Group>
            <Form.File
              label="Bank Statement"
              name="bankstatement"
              {...register('bankstatement')}
            />
            <p>{errors.bankstatement?.message}</p>
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
