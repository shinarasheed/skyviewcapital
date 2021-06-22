import React, { useEffect, useState } from 'react';
import IndividualAccount from '../components/SignupIndividual/IndividualAccount';
import CorporateAccount from '../components/SignupCorporate/CorporateAccount';

const Signup = () => {
  const [accountType, setAccountType] = useState('individual');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <section className="loginsection">
      <div className="accountTypeTabContainer" style={{ marginBottom: '2rem' }}>
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
          backgroundColor: accountType === 'individual' ? '#002f57' : '#001a33',
        }}
      >
        {signupTemplate()}
      </div>
    </section>
  );
};

export default Signup;
