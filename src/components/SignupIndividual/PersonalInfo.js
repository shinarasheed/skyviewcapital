import React from 'react';
import SignupTitle from '../SignupTitle';
import { Form, Button } from 'react-bootstrap';

const PersonalInfo = ({ register, nextStep, handleSubmit, errors }) => {
  const continueToNextStep = () => {
    nextStep();
  };

  return (
    <>
      <SignupTitle title="Personal Information" />
      <Form>
        <div className="formInputContainer">
          <Form.Group>
            <Form.Label className="formLabel">Title</Form.Label>
            <Form.Control as="select" name="title" {...register('title')}>
              <option>Select Title</option>
              <option>Mr</option>
              <option>Mrs</option>
              <option>Miss</option>
            </Form.Control>
            <p className="InputErrorText">{errors.title?.message}</p>
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Surname</Form.Label>
            <Form.Control
              type="text"
              placeholder="surName"
              name="surName"
              {...register('surName')}
            />
            <p className="InputErrorText">{errors.surName?.message}</p>
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <Form.Group>
            <Form.Label className="formLabel">Firstname</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              name="firstName"
              {...register('firstName')}
            />
            <p className="InputErrorText">{errors.firstName?.message}</p>
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Other Names</Form.Label>
            <Form.Control
              type="text"
              placeholder="Other Names"
              name="otherName"
              {...register('otherName')}
            />
            <p className="InputErrorText">{errors.otherName?.message}</p>
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <div className="dateInput">
            <Form.Label className="formLabel">Date of Birth</Form.Label>
            <input
              type="date"
              placeholder="Date of Birth"
              name="dateOfBirth"
              {...register('dateOfBirth')}
            />
            <p>{errors.dateOfBirth?.message}</p>
          </div>

          <Form.Group>
            <Form.Label className="formLabel">Gender</Form.Label>
            <Form.Control as="select" name="gender" {...register('gender')}>
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </Form.Control>
            <p>{errors.gender?.message}</p>
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <Form.Group>
            <Form.Label className="formLabel">Residence Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Residence Address"
              name="residenceAddress"
              {...register('residenceAddress')}
            />
            <p>{errors.residenceAddress?.message}</p>
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">City</Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              name="city"
              {...register('city')}
            />
            <p>{errors.city?.message}</p>
          </Form.Group>
        </div>

        <Button
          onClick={handleSubmit(continueToNextStep)}
          className="mt-4"
          variant="primary"
          type="button"
        >
          Continue
        </Button>
      </Form>
    </>
  );
};

export default PersonalInfo;
