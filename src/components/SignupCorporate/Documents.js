import React from 'react';
import { Form, Button } from 'react-bootstrap';

import SignupTitle from '../SignupTitle';

const Documents = ({ register, prevStep, nextStep, isValid, errors }) => {
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
              {...register('passport', { required: true })}
            />
            {errors.passport?.typeof === 'required' && (
              <p className="InputErrorText">passport is required</p>
            )}
          </Form.Group>

          <Form.Group>
            <Form.File
              label="ID"
              name="identitycard"
              {...register('identitycard', { required: true })}
            />
            {errors.identitycard?.typeof === 'required' && (
              <p className="InputErrorText">identity card is required</p>
            )}
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <Form.Group>
            <Form.File
              label="signature"
              name="signature"
              {...register('signature', { required: true })}
            />
            {errors.signature?.typeof === 'required' && (
              <p className="InputErrorText">signature is required</p>
            )}
          </Form.Group>

          <Form.Group>
            <Form.File
              label="Utility Bill"
              name="utilitybill"
              {...register('utilitybill', { required: true })}
            />
            {errors.utilitybill?.typeof === 'required' && (
              <p className="InputErrorText">utility bill is required</p>
            )}
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <Form.Group>
            <Form.File
              label="Bank Statement"
              name="bankstatement"
              {...register('bankstatement', { required: true })}
            />
            {errors.bankstatement?.typeof === 'required' && (
              <p className="InputErrorText">bank statement is required</p>
            )}
          </Form.Group>
          <Form.Group>
            <Form.File
              label="Certificate of Incorporation"
              name="incorporationcertificate"
              {...register('incorporationcertificate', { required: true })}
            />
            {errors.incorporationcertificate?.typeof === 'required' && (
              <p className="InputErrorText">certificate is required</p>
            )}
          </Form.Group>
          ;
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

export default Documents;
