import React, { Component } from 'react';

import FirstSignupForm from './SignupForm1';
import SecondSignUpForm from './SignupForm2';
import ThirdSignUpForm from './SignupForm3';

class SignUpForms extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    passwordConfirm: '',
    email: '',
    phoneNumber: '',
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
      email,
      password,
      passwordConfirm,
      firstName,
      lastName,
      userName,
      phoneNumber,
      country,
      occupation,
    } = this.state;

    const values = {
      email,
      password,
      passwordConfirm,
      firstName,
      lastName,
      userName,
      phoneNumber,
      country,
      occupation,
    };

    switch (step) {
      case 1:
        return (
          <FirstSignupForm
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            values={values}
          />
        );
      case 2:
        return (
          <SecondSignUpForm
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );

      case 3:
        return (
          <ThirdSignUpForm
            handleChange={this.handleChange}
            prevStep={this.prevStep}
            values={values}
          />
        );

      default:
        return <FirstSignupForm />;
    }
  }
}

export default SignUpForms;
