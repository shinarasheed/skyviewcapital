import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({
  fields: {
    title,
    description,
    slug,
    banner: {
      fields: {
        file: { url },
      },
    },
  },
}) => {
  return (
    <article>
      <h5
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="9"
        className="service__title text-uppercase"
      >
        {title}
      </h5>
      <div
        data-aos="zoom-in"
        data-aos-duration="1500"
        data-aos-delay="1000"
        data-aos-easing="ease-in-out"
        className="service"
      >
        <img className="w-100" src={url} alt={title} />
        <div className="service__description">
          <p>{description}</p>
          <Link to={`/services/${slug}`}>LEARN MORE</Link>
        </div>
      </div>
    </article>
  );
};

export default Service;
