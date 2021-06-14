import React from 'react';

const Subscribe = () => {
  return (
    <>
      <h5 className="mb-4">Subscribe to our Newsletter</h5>
      <form className="subscribeform">
        <div className="formControl">
          <input
            className="subscribe__name"
            type="text"
            placeholder="Enter Name"
          />
        </div>
        <div className="formControl">
          <input
            className="subscribe__email"
            type="text"
            placeholder="Enter Email Address"
          />
        </div>
        <button className="subscribe__button" type="submit">
          Subscribe
        </button>
      </form>
    </>
  );
};

export default Subscribe;
