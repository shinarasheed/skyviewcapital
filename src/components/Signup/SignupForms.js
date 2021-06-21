import React, { Component } from 'react';

import PersonalInfo from './PersonalInfo';
import BankDetails from './BankDetails';
import NextOfKin from './NextOfKin';
import Identity from './Identity';
import Confirm from './Confirm';
import Documents from './Documents';
import Summary from './Summary';

class SignUpForms extends Component {
  state = {
    step: 1,
    title: '',
    surName: '',
    firstName: '',
    otherName: '',
    dateOfBirth: '',
    gender: '',
    phoneNumber: '',
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
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const {
      step,
      title,
      surName,
      firstName,
      otherName,
      dateOfBirth,
      gender,
      phoneNumber,
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
    } = this.state;

    const values = {
      step,
      title,
      surName,
      firstName,
      otherName,
      dateOfBirth,
      gender,
      phoneNumber,
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

    switch (step) {
      case 1:
        return (
          <PersonalInfo
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            values={values}
          />
        );
      case 2:
        return (
          <BankDetails
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );

      case 3:
        return (
          <NextOfKin
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );

      case 4:
        return (
          <Identity
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );

      case 5:
        return (
          <Confirm
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );

      case 6:
        return (
          <Documents
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );

      case 7:
        return (
          <Summary
            handleChange={this.handleChange}
            prevStep={this.prevStep}
            values={values}
          />
        );

      default:
        return <PersonalInfo />;
    }
  }
}

export default SignUpForms;
