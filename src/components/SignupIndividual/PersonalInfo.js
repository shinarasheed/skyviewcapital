import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const PersonalInfo = ({ handleChange, values, nextStep }) => {
  const continueToNextStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <>
      <h3 style={{ color: 'white' }} className="text-center">
        Personal Information
      </h3>
      <Form>
        <div className="formInputContainer">
          <Form.Group>
            <Form.Label className="formLabel">Title</Form.Label>
            <Form.Control
              type="title"
              placeholder="Enter Title"
              name="title"
              onChange={(e) => handleChange(e)}
              value={values.title}
            />
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
          <Form.Group>
            <Form.Label className="formLabel">Date of Birth</Form.Label>
            <Form.Control
              type="text"
              placeholder="Date of Birth"
              name="dateOfBirth"
              onChange={(e) => handleChange(e)}
              value={values.dateOfBirth}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Gender</Form.Label>
            <Form.Control
              type="text"
              placeholder="Gender"
              name="gender"
              onChange={(e) => handleChange(e)}
              value={values.gender}
            />
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

      <div className="sinupCta">
        <p className="mr-2">Already have an Account?</p>
        <Link to="/login">Login</Link>
      </div>
    </>
  );
};

export default PersonalInfo;
