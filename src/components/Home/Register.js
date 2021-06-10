import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <section className="register">
      <div className="register__cta">
        <h5 className="text-uppercase">
          begin your journey <span>with us</span> today
        </h5>
        <p>
          At Skyview Capital, we understand that excellent service and
          professionalism
        </p>
        <p>
          distinguish results from extra ordinary results. We attach great
          importance to quality
        </p>
        <p>
          delivery of life-changing products and services to all our clients and
          customers with
        </p>
        <p>strong emphasis on excellent customer satisfaction.</p>

        <Link to="/">Register Now</Link>
      </div>
      <div className="registerOverlay"></div>
    </section>
  );
};

export default Register;
