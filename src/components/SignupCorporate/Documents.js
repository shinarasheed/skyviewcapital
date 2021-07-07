import React from 'react';
import { Form, Button } from 'react-bootstrap';

import SignupTitle from '../SignupTitle';

const Documents = ({
  prevStep,
  nextStep,
  setPassport,
  setIdentitycard,
  setsignature,
  setUtilitybill,
  setBankstatment,
  setIncorporationCertificate,
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

  const handlePhotoIDChange = (e) => {
    setIdentitycard(e.target.files[0]);
  };

  const handleSignatureChange = (e) => {
    setsignature(e.target.files[0]);
  };

  const handleUtilityBillChange = (e) => {
    setUtilitybill(e.target.files[0]);
  };

  const handleBankStatementChange = (e) => {
    setBankstatment(e.target.files[0]);
  };

  const handleIncorporationChange = (e) => {
    setIncorporationCertificate(e.target.files[0]);
  };

  return (
    <>
      <SignupTitle title="document" />
      <Form>
        <div className="formInputContainer">
          <Form.Group>
            <Form.File
              name="photoPassport"
              label="Passport Photo"
              onChange={(e) => handlePassportChange(e)}
            />
          </Form.Group>

          <Form.Group>
            <Form.File
              label="ID"
              name="photoID"
              onChange={(e) => handlePhotoIDChange(e)}
            />
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <Form.Group>
            <Form.File
              label="Signature"
              name="photoSignature"
              onChange={(e) => handleSignatureChange(e)}
            />
          </Form.Group>

          <Form.Group>
            <Form.File
              label="Utility Bill"
              name="photoUtilityBill"
              onChange={(e) => handleUtilityBillChange(e)}
            />
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <Form.Group>
            <Form.File
              label="Bank Statement"
              name="bankStatement"
              onChange={(e) => handleBankStatementChange(e)}
            />
          </Form.Group>

          <Form.Group>
            <Form.File
              label="Certificate of Incorporation"
              name="incorporationCertificate"
              onChange={(e) => handleIncorporationChange(e)}
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
