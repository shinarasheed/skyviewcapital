import React from 'react';
import { services } from '../../data/services';
import Service from '../Service';

const ServicesSection = () => {
  return (
    <section className="services">
      {services.map((service, index) => {
        return <Service {...service} key={index} />;
      })}
    </section>
  );
};

export default ServicesSection;
