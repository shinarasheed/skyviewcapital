import React from 'react';
import SignupTitle from '../SignupTitle';
import { Form, Button } from 'react-bootstrap';
import { mixed } from 'yup';

const PersonalInfo = ({ register, nextStep, isValid, errors }) => {
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
            <Form.Control
              as="select"
              name="title"
              {...register(
                'title',
                {
                  required: true,
                },
                mixed().oneOf(['Mr', 'Mrs', 'Miss'])
              )}
            >
              <option>Select Title</option>
              <option>Mr</option>
              <option>Mrs</option>
              <option>Miss</option>
            </Form.Control>
            {errors.title?.typeof === 'required' && (
              <p className="InputErrorText">First name is required</p>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Surname</Form.Label>
            <Form.Control
              type="text"
              placeholder="surName"
              name="surName"
              {...register('surName', { required: true })}
            />
            {errors.surName?.type === 'required' && (
              <p className="InputErrorText">surname name is required</p>
            )}{' '}
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <Form.Group>
            <Form.Label className="formLabel">Firstname</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              name="firstName"
              {...register('firstName', { required: true })}
            />
            {errors.firstName?.type === 'required' && (
              <p className="InputErrorText">First name is required</p>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Other Names</Form.Label>
            <Form.Control
              type="text"
              placeholder="Other Names"
              name="otherName"
              {...register('otherName', { required: true })}
            />
            {errors.otherName?.type === 'required' && (
              <p className="InputErrorText">other name is required</p>
            )}{' '}
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <div className="dateInput">
            <Form.Label className="formLabel">Date of Birth</Form.Label>
            <input
              type="date"
              placeholder="Date of Birth"
              name="dateOfBirth"
              {...register('dateOfBirth', { required: true })}
            />

            {errors.otherName?.type === 'required' && (
              <p className="InputErrorText">dob is required</p>
            )}
          </div>

          <Form.Group>
            <Form.Label className="formLabel">Gender</Form.Label>
            <Form.Control
              as="select"
              name="gender"
              {...register('gender', { required: true })}
            >
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </Form.Control>
            {errors.gender?.type === 'required' && (
              <p className="InputErrorText">other name is required</p>
            )}{' '}
          </Form.Group>
        </div>

        <div className="formInputContainer">
          <Form.Group>
            <Form.Label className="formLabel">Residence Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Residence Address"
              name="residenceAddress"
              {...register('residenceAddress', { required: true })}
            />
            {errors.residenceAddress?.type === 'required' && (
              <p className="InputErrorText">address is required</p>
            )}{' '}
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">City</Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              name="city"
              {...register('city', { required: true })}
            />
            {errors.city?.type === 'required' && (
              <p className="InputErrorText">city is required</p>
            )}{' '}
          </Form.Group>
        </div>

        {/* i can just disable the button if isValid if false in another situation instead of this weild way */}
        <Button
          disabled={!isValid}
          onClick={continueToNextStep}
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
