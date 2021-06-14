import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <section className="register">
      <div className="register__cta">
        <h5 className="text-uppercase">
          begin your journey <span>with us</span> today
        </h5>
        <div data-aos="fade-right" data-aos-duration="1000">
          <p>
            At Skyview Capital, we understand that excellent service and
            professionalism
          </p>
          <p>
            distinguish results from extra ordinary results. We attach great
            importance to quality
          </p>
          <p>
            delivery of life-changing products and services to all our clients
            and customers with
          </p>
          <p>strong emphasis on excellent customer satisfaction.</p>
        </div>

        <Link
          data-aos="zoom-in"
          data-aos-delay="500"
          data-aos-duration="1000"
          to="/signup"
        >
          Register Now
        </Link>
      </div>
      <div className="registerOverlay"></div>
    </section>
  );
};

export default Register;
