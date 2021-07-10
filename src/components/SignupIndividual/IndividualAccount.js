import React, { useState } from 'react';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { schema } from '../../utils/validationSchema';

import PersonalInfo from './PersonalInfo';
import PersonalInfoSecond from './PersonalInfoSecond';
import BankDetails from './BankDetails';
import NextOfKin from './NextOfKin';
import Identity from './Identity';
import Confirm from './Confirm';
import Documents from './Documents';
import Summary from './Summary';

const SignupForms = () => {
  const [submitState, setSubmitState] = useState('Submit');
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const {
      title,
      surName,
      firstName,
      otherName,
      dateOfBirth,
      gender,
      residenceAddress,
      city,
      stateOfOrigin,
      localGovernment,
      emailAddress,
      mobilePhoneNumber,
      homePhoneNumber,
      profession,
      employmentType,
      companyName,
      bankName,
      bankAccountNumber,
      bvnNumber,
      sortCode,
      accountOpeningDate,
      bankAccountType,
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
    } = data;

    console.log(data);

    const formData = new FormData();

    formData.append('title', title);
    formData.append('surName', surName);
    formData.append('firstName', firstName);
    formData.append('otherName', otherName);
    formData.append('dateOfBirth', dateOfBirth);
    formData.append('gender', gender);
    formData.append('residenceAddress', residenceAddress);

    formData.append('city', city);
    formData.append('stateOfOrigin', stateOfOrigin);
    formData.append('localGovernment', localGovernment);
    formData.append('emailAddress', emailAddress);
    formData.append('mobilePhoneNumber', mobilePhoneNumber);
    formData.append('homePhoneNumber', homePhoneNumber);
    formData.append('profession', profession);
    formData.append('employmentType', employmentType);

    formData.append('companyName', companyName);
    formData.append('bankName', bankName);
    formData.append('bankAccountNumber', bankAccountNumber);
    formData.append('bvnNumber', bvnNumber);
    formData.append('sortCode', sortCode);
    formData.append('accountOpeningDate', accountOpeningDate);
    formData.append('bankAccountType', bankAccountType);
    formData.append('nextOfKinName', nextOfKinName);
    formData.append('chnNextOfKin', chnNextOfKin);
    formData.append('relationNextOfKin', relationNextOfKin);
    formData.append('contactNextOfKin', contactNextOfKin);
    formData.append('phoneNumberNextOfKin', phoneNumberNextOfKin);

    formData.append('emailNextOfKin', emailNextOfKin);
    formData.append('idForm', idForm);
    formData.append('idNumber', idNumber);
    formData.append('idExpireDate', idExpireDate);
    formData.append('passport', passport[0]);
    formData.append('identitycard', identitycard[0]);
    formData.append('signature', signature[0]);
    formData.append('utilitybill', utilitybill[0]);
    formData.append('bankstatement', bankstatement[0]);

    // const config = {
    //   headers: {
    //     'Content-Type': 'multipart/form-formData',
    //   },
    // };
    // setSubmitState('Submiting...');
    // try {
    //   await axios.post('http://localhost:8080/api/users', formData, config);
    //   setSubmitState('Submitted');
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const [formValues, setFormvalues] = useState({
    step: 1,
  });

  const { step } = formValues;

  const nextStep = () => {
    const { step } = formValues;
    setFormvalues({ ...formValues, step: step + 1 });
  };

  const prevStep = () => {
    const { step } = formValues;
    setFormvalues({ ...formValues, step: step - 1 });
  };

  switch (step) {
    case 1:
      return (
        <PersonalInfo
          handleSubmit={handleSubmit}
          nextStep={nextStep}
          register={register}
          errors={errors}
        />
      );
    case 2:
      return (
        <PersonalInfoSecond
          nextStep={nextStep}
          prevStep={prevStep}
          register={register}
          errors={errors}
        />
      );

    case 3:
      return (
        <BankDetails
          nextStep={nextStep}
          prevStep={prevStep}
          register={register}
          errors={errors}
        />
      );

    case 4:
      return (
        <NextOfKin
          nextStep={nextStep}
          prevStep={prevStep}
          register={register}
          errors={errors}
        />
      );

    case 5:
      return (
        <Identity
          nextStep={nextStep}
          prevStep={prevStep}
          register={register}
          errors={errors}
        />
      );

    case 6:
      return (
        <Confirm nextStep={nextStep} prevStep={prevStep} errors={errors} />
      );

    case 7:
      return (
        <Documents
          nextStep={nextStep}
          prevStep={prevStep}
          register={register}
          errors={errors}
        />
      );

    case 8:
      return (
        <Summary
          prevStep={prevStep}
          getValues={getValues}
          onSubmit={onSubmit}
          handleSubmit={handleSubmit}
          submitState={submitState}
        />
      );

    default:
      return <PersonalInfo />;
  }
};

export default SignupForms;
