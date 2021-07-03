import React from 'react';
import { Form, Button } from 'react-bootstrap';

import SignupTitle from '../SignupTitle';

const Documents = ({
  prevStep,
  nextStep,
  setPhotoPassport,
  setPhotoID,
  setPhotoSignature,
  setPhotoUtilityBill,
  setPhotoBankstatment,
  setPhotoIncorporation,
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
    setPhotoPassport(e.target.files[0]);
  };

  const handlePhotoIDChange = (e) => {
    setPhotoID(e.target.files[0]);
  };

  const handleSignatureChange = (e) => {
    setPhotoSignature(e.target.files[0]);
  };

  const handleUtilityBillChange = (e) => {
    setPhotoUtilityBill(e.target.files[0]);
  };

  const handleBankStatementChange = (e) => {
    setPhotoBankstatment(e.target.files[0]);
  };

  const handleIncorporationChange = (e) => {
    setPhotoIncorporation(e.target.files[0]);
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
