import React from 'react';
import { services } from '../data/services';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  return (
    <section className="services">
      {services.map((service, index) => {
        return (
          <article key={index}>
            <h5 className="service__title text-uppercase">{service.title}</h5>
            <div className="service">
              <img src={service.img} alt={service.title} />
              <div className="service__description">
                <p>{service.description}</p>
                <Link to="/">LEARN MORE</Link>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default ServicesSection;
