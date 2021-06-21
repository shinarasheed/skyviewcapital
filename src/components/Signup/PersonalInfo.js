import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const PersonalInfo = ({ handleChange, values, nextStep }) => {
  const continueToNextStep = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <section className="loginsection">
      <div className="loginForm">
        <h3 style={{ color: 'white' }} className="text-center">
          Personal Information
        </h3>
        <Form>
          <Form.Group>
            <Form.Label className="formLabel">Title</Form.Label>
            <Form.Control
              type="title"
              placeholder="Enter Title"
              name="title"
              onChange={handleChange('title')}
              defaultValue={values.title}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">SurName</Form.Label>
            <Form.Control
              type="text"
              placeholder="surName"
              name="surName"
              onChange={handleChange('surName')}
              defaultValue={values.surName}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Date of Birth</Form.Label>
            <Form.Control
              type="text"
              placeholder="Date of Birth"
              name="dateOfBirth"
              onChange={handleChange('dateOfBirth')}
              defaultValue={values.dateOfBirth}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Gender</Form.Label>
            <Form.Control
              type="text"
              placeholder="Gender"
              name="gender"
              onChange={handleChange('gender')}
              defaultValue={values.gender}
            />
          </Form.Group>

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
      </div>
    </section>
  );
};

export default PersonalInfo;
