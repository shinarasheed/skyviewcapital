import React, { useState } from 'react';

import PersonalInfo from './PersonalInfo';
import PersonalInfoSecond from './PersonalInfoSecond';
import BankDetails from './BankDetails';
import NextOfKin from './NextOfKin';
import Identity from './Identity';
import Confirm from './Confirm';
import Documents from './Documents';
import Summary from './Summary';

const SignupForms = () => {
  const [passport, setPassport] = useState('');
  const [identitycard, setIdentitycard] = useState('');
  const [signature, setSignature] = useState('');
  const [utilitybill, setUtilitybill] = useState('');
  const [bankstatement, setBankstatment] = useState('');
  const [incorporationcertificate, setIncorporationCertificate] = useState('');

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
    stateOfOrigin: '',
    LocalGovernmentArea: '',
    emailAddress: '',
    mobilePhoneNumber: '',
    homePhoneNumber: '',
    profession: '',
    employmentType: '',
    companyName: '',
    bankName: '',
    bankAccountNumber: '',
    bvnNumber: '',
    bankAccountType: '',
    sortCode: '',
    accountOpeningDate: '',
    incorporationCertificate: '',
    nextOfKinName: '',
    relationNextOfKin: '',
    contactNextOfKin: '',
    phoneNumberNextOfKin: '',
    emailNextOfKin: '',
    chnNextOfKin: '',
    idForm: '',
    idNumber: '',
    idExpireDate: '',
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
    stateOfOrigin,
    LocalGovernmentArea,
    emailAddress,
    mobilePhoneNumber,
    homePhoneNumber,
    profession,
    employmentType,
    companyName,
    bankName,
    bankAccountNumber,
    bvnNumber,
    bankAccountType,
    sortCode,
    accountOpeningDate,
    incorporationCertificate,
    nextOfKinName,
    relationNextOfKin,
    contactNextOfKin,
    phoneNumberNextOfKin,
    emailNextOfKin,
    chnNextOfKin,
    idForm,
    idNumber,
    idExpireDate,
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
    stateOfOrigin,
    LocalGovernmentArea,
    emailAddress,
    mobilePhoneNumber,
    homePhoneNumber,
    profession,
    employmentType,
    companyName,
    bankName,
    bankAccountNumber,
    bvnNumber,
    bankAccountType,
    sortCode,
    accountOpeningDate,
    incorporationCertificate,
    nextOfKinName,
    chnNextOfKin,
    relationNextOfKin,
    contactNextOfKin,
    phoneNumberNextOfKin,
    emailNextOfKin,
    idForm,
    idNumber,
    idExpireDate,
    passport,
    identitycard,
    signature,
    utilitybill,
    bankstatement,
    incorporationcertificate,
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
        <BankDetails
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
          values={values}
        />
      );

    case 4:
      return (
        <NextOfKin
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
          values={values}
        />
      );

    case 5:
      return (
        <Identity
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
          values={values}
        />
      );

    case 6:
      return (
        <Confirm
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
          values={values}
        />
      );

    case 7:
      return (
        <Documents
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
          setPassport={setPassport}
          setIdentitycard={setIdentitycard}
          setSignature={setSignature}
          setUtilitybill={setUtilitybill}
          setBankstatment={setBankstatment}
          setIncorporationCertificate={setIncorporationCertificate}
        />
      );

    case 8:
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
