import React from 'react';

const Title = ({ title }) => {
  return (
    <h3
      style={{
        marginBottom: '3rem',
        fontSize: '1.8rem',
        textTransform: 'capitalize',
        color: 'white',
      }}
      className="title"
    >
      {title}
    </h3>
  );
};

export default Title;
