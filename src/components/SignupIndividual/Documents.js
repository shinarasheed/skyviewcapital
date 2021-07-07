import React from 'react';
import { Form, Button } from 'react-bootstrap';

import SignupTitle from '../SignupTitle';

const Documents = ({
  prevStep,
  nextStep,
  setPassport,
  setIdentitycard,
  setPhotosignature,
  setUtilitybill,
  setPhotoBankstatment,
}) => {
  const continueToNextStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  const goBackToPreviousStep = (e) => {
    e.preventDefault();
    prevStep();
  };

  const handlePassportChange = (e) => {
    setPassport(e.target.files[0]);
  };

  const handleidentitycardChange = (e) => {
    setIdentitycard(e.target.files[0]);
  };

  const handlesignatureChange = (e) => {
    setPhotosignature(e.target.files[0]);
  };

  const handleUtilityBillChange = (e) => {
    setUtilitybill(e.target.files[0]);
  };

  const handleBankstatementChange = (e) => {
    setPhotoBankstatment(e.target.files[0]);
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
              onChange={(e) => handlePassportChange(e)}
            />
          </Form.Group>

          <Form.Group>
            <Form.File
              label="ID"
              name="identitycard"
              onChange={(e) => handleidentitycardChange(e)}
            />
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <Form.Group>
            <Form.File
              label="signature"
              name="photosignature"
              onChange={(e) => handlesignatureChange(e)}
            />
          </Form.Group>

          <Form.Group>
            <Form.File
              label="Utility Bill"
              name="utilitybill"
              onChange={(e) => handleUtilityBillChange(e)}
            />
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <Form.Group>
            <Form.File
              label="Bank Statement"
              name="bankstatement"
              onChange={(e) => handleBankstatementChange(e)}
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
