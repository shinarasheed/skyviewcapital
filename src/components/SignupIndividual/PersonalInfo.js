import React from 'react';
import SignupTitle from '../SignupTitle';
import { Form, Button } from 'react-bootstrap';

const PersonalInfo = ({ handleChange, values, nextStep }) => {
  const continueToNextStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <>
      <SignupTitle title="Personal Information" />
      <Form>
        <div className="formInputContainer">
          <Form.Group>
            <Form.Label className="formLabel">Title</Form.Label>
            <Form.Control
              as="select"
              name="title"
              onChange={(e) => handleChange(e)}
              value={values.title}
            >
              <option>Select Title</option>
              <option>Mr</option>
              <option>Mrs</option>
              <option>Miss</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Surname</Form.Label>
            <Form.Control
              type="text"
              placeholder="surName"
              name="surName"
              onChange={(e) => handleChange(e)}
              value={values.surName}
            />
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <Form.Group>
            <Form.Label className="formLabel">Firstname</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={(e) => handleChange(e)}
              value={values.firstName}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Other Names</Form.Label>
            <Form.Control
              type="text"
              placeholder="Other Names"
              name="otherName"
              onChange={(e) => handleChange(e)}
              value={values.otherName}
            />
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <div className="dateInput">
            <Form.Label className="formLabel">Date of Birth</Form.Label>
            <input
              type="date"
              placeholder="Date of Birth"
              name="dateOfBirth"
              onChange={(e) => handleChange(e)}
              value={values.dateOfBirth}
            />
          </div>

          <Form.Group>
            <Form.Label className="formLabel">Gender</Form.Label>
            <Form.Control
              as="select"
              name="gender"
              onChange={(e) => handleChange(e)}
              value={values.gender}
            >
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </Form.Control>
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <Form.Group>
            <Form.Label className="formLabel">Residence Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Residence Address"
              name="residenceAddress"
              onChange={(e) => handleChange(e)}
              value={values.residenceAddress}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">City</Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              name="city"
              onChange={(e) => handleChange(e)}
              value={values.city}
            />
          </Form.Group>
        </div>

        <Button
          onClick={(e) => continueToNextStep(e)}
          className="mt-4"
          variant="primary"
          type="button"
        >
          Continue
        </Button>
      </Form>

      {/* <div className="sinupCta">
        <p className="mr-2">Already have an Account?</p>
        <Link to="/login">Login</Link>
      </div> */}
    </>
  );
};

export default PersonalInfo;
