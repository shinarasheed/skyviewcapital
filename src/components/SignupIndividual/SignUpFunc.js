import React, { useState } from 'react';

import PersonalInfo from './PersonalInfo';
import PersonalInfoSecond from './PersonalInfoSecond';
import PersonalInfoThird from './PersonalInfoThird';
import PersonalInfoFourth from './PersonalInfoFourth';
import BankDetails from './BankDetails';
import NextOfKin from './NextOfKin';
import Identity from './Identity';
import Confirm from './Confirm';
import Documents from './Documents';
import Summary from './Summary';

const SignupForms = () => {
  const [formValues, setFormvalues] = useState({
    step: 1,
    title: '',
    surName: '',
    firstName: '',
    otherName: '',
    dateOfBirth: '',
    gender: '',
    residenceAddress: '',
    city: '',
    country: '',
    stateOfOrigin: '',
    LocalGovernmentArea: '',
    emailAddress: '',
    mobilePhoneNumber: '',
    homePhoneNumber: '',
    profession: '',
    employmentType: '',
    companyName: '',
    political: '',
    bankName: '',
    bankAccountNumber: '',
    bvnNumber: '',
    nextOfKinName: '',
    relationNextOfKin: '',
    contactNextOfKin: '',
    phoneNumberNextOfKin: '',
    emailNextOfKin: '',
    idForm: '',
    idNumber: '',
    idExpireDate: '',
    photoPassport: null,
    photoID: null,
    photoSignature: null,
    photoUtilityBill: null,
  });

  const {
    step,
    title,
    surName,
    firstName,
    otherName,
    dateOfBirth,
    gender,
    residenceAddress,
    city,
    country,
    stateOfOrigin,
    LocalGovernmentArea,
    emailAddress,
    mobilePhoneNumber,
    homePhoneNumber,
    profession,
    employmentType,
    companyName,
    political,
    bankName,
    bankAccountNumber,
    bvnNumber,
    nextOfKinName,
    relationNextOfKin,
    contactNextOfKin,
    phoneNumberNextOfKin,
    emailNextOfKin,
    idForm,
    idNumber,
    idExpireDate,
    photoPassport,
    photoID,
    photoSignature,
    photoUtilityBill,
  } = formValues;

  const values = {
    step,
    title,
    surName,
    firstName,
    otherName,
    dateOfBirth,
    gender,
    residenceAddress,
    city,
    country,
    stateOfOrigin,
    LocalGovernmentArea,
    emailAddress,
    mobilePhoneNumber,
    homePhoneNumber,
    profession,
    employmentType,
    companyName,
    political,
    bankName,
    bankAccountNumber,
    bvnNumber,
    nextOfKinName,
    relationNextOfKin,
    contactNextOfKin,
    phoneNumberNextOfKin,
    emailNextOfKin,
    idForm,
    idNumber,
    idExpireDate,
    photoPassport,
    photoID,
    photoSignature,
    photoUtilityBill,
  };

  const nextStep = () => {
    const { step } = formValues;
    setFormvalues({ ...formValues, step: step + 1 });
  };

  const prevStep = () => {
    const { step } = formValues;
    setFormvalues({ ...formValues, step: step - 1 });
  };

  const handleChange = (e) => {
    setFormvalues({ ...formValues, [e.target.name]: e.target.value });
  };

  switch (step) {
    case 1:
      return (
        <PersonalInfo
          handleChange={handleChange}
          nextStep={nextStep}
          values={values}
        />
      );
    case 2:
      return (
        <PersonalInfoSecond
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
          values={values}
        />
      );

    case 3:
      return (
        <PersonalInfoThird
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
          values={values}
        />
      );

    case 4:
      return (
        <PersonalInfoFourth
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
          values={values}
        />
      );

    case 5:
      return (
        <BankDetails
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
          values={values}
        />
      );

    case 6:
      return (
        <NextOfKin
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
          values={values}
        />
      );

    case 7:
      return (
        <Identity
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
          values={values}
        />
      );

    case 8:
      return (
        <Confirm
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
          values={values}
        />
      );

    case 9:
      return (
        <Documents
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
          values={values}
        />
      );

    case 10:
      return (
        <Summary
          handleChange={handleChange}
          prevStep={prevStep}
          values={values}
        />
      );

    default:
      return <PersonalInfo />;
  }
};

export default SignupForms;
