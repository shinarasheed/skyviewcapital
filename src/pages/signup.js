import React, { useState } from 'react';
import FadeIn from 'react-fade-in';
import { Helmet } from 'react-helmet';
import IndividualAccount from '../components/SignupIndividual/IndividualAccount';
import CorporateAccount from '../components/SignupCorporate/CorporateAccount';

const Signup = () => {
  const [accountType, setAccountType] = useState('individual');

  const signupTemplate = () => {
    switch (accountType) {
      case 'individual':
        return <IndividualAccount setAccountType={setAccountType} />;

      case 'corporate':
        return <CorporateAccount setAccountType={setAccountType} />;

      default:
        <IndividualAccount />;
    }
  };

  return (
    <>
      <FadeIn transitionDuration="600">
        <Helmet>
          <title>Create Account</title>
        </Helmet>
        <section className="loginsection">
          <div
            className="accountTypeTabContainer"
            style={{ marginBottom: '2rem' }}
          >
            <span
              onClick={() => setAccountType('individual')}
              className={
                accountType === 'individual'
                  ? 'activeLinkBorder activeLink'
                  : 'activeLinkBorder'
              }
            >
              Individual Account
            </span>
            <span
              onClick={() => setAccountType('corporate')}
              className={
                accountType === 'corporate'
                  ? ' activeLinkBorder activeLink'
                  : 'activeLinkBorder'
              }
            >
              Corporate Account
            </span>
          </div>
          <div
            className="loginForm"
            style={{
              backgroundColor:
                accountType === 'individual' ? '#002f57' : '#001a33',
            }}
          >
            {signupTemplate()}
          </div>
        </section>
      </FadeIn>
    </>
  );
};

export default Signup;
