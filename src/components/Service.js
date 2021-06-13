import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ title, link, img, description }) => {
  return (
    <article>
      <h5 className="service__title text-uppercase">{title}</h5>
      <div className="service">
        <img className="w-100" src={img} alt={title} />
        <div className="service__description">
          <p>{description}</p>
          <Link to={link}>LEARN MORE</Link>
        </div>
      </div>
    </article>
  );
};

export default Service;
