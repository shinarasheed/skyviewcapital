import React, { useEffect } from 'react';
import SignUpForms from '../components/Signup/SignupForms';

const Signup = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <SignUpForms />;
};

export default Signup;
