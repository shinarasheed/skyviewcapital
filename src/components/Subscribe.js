import React from 'react';

const Subscribe = () => {
  return (
    <>
      <form>
        <div>
          <input type="text" placeholder="Enter Name" />
        </div>
        <div>
          <input type="text" placeholder="Enter Email Adress" />
        </div>
        <button type="submit">Subscribe</button>
      </form>
    </>
  );
};

export default Subscribe;
