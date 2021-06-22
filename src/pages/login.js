import React from 'react';
import Login from '../components/Login';

const LoginPage = () => {
  return (
    <section className="loginsection">
      <div style={{ backgroundColor: '#002f57' }} className="loginForm">
        <Login />
      </div>
    </section>
  );
};

export default LoginPage;
