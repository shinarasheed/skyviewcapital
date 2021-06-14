import React from 'react';
import { services } from '../../data/services';
import Service from '../Service';

const ServicesSection = () => {
  return (
    <section className="servicesSection">
      <h5>Our Service Highlights</h5>
      <article className="services">
        {services.map((service, index) => {
          return <Service {...service} key={index} />;
        })}
      </article>
    </section>
  );
};

export default ServicesSection;
