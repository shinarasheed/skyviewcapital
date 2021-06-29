import React, { useState } from 'react';
import FadeIn from 'react-fade-in';
import { Helmet } from 'react-helmet';
import IndividualAccount from '../components/SignupIndividual/IndividualAccount';
import CorporateAccount from '../components/SignupCorporate/CorporateAccount';
import { LoginForm } from '../components/LoginForm';

const Signup = () => {
  const [accountType, setAccountType] = useState('individual');
  let step = 1;

  const signupTemplate = () => {
    switch (accountType) {
      case 'individual':
        return (
          <IndividualAccount
            setAccountType={setAccountType}
            accountType={accountType}
          />
        );

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
          <LoginForm
            step={step}
            style={{
              backgroundColor:
                accountType === 'individual' ? '#002f57' : '#001a33',
            }}
          >
            {/* tab section */}
            <div
              className="accountTypeTabContainer"
              style={{ marginBottom: '2rem' }}
            >
              <span
                onClick={() => setAccountType('individual')}
                className={
                  accountType === 'individual'
                    ? 'activeLinkBorder accountTypeTab'
                    : 'accountTypeTab'
                }
              >
                Individual Account
              </span>
              <span
                onClick={() => setAccountType('corporate')}
                className={
                  accountType === 'corporate'
                    ? ' activeLinkBorder accountTypeTab'
                    : 'accountTypeTab'
                }
              >
                Corporate Account
              </span>
            </div>

            {/* form section */}
            <div>{signupTemplate()}</div>
          </LoginForm>
        </section>
      </FadeIn>
    </>
  );
};

export default Signup;
