import React, { useEffect, useState } from 'react';
import Service from '../Service';
import Client from '../../Contentful';

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await Client.getEntries({
        content_type: 'services',
      });
      setServices(response.items);
    }

    fetchData();
  }, []);
  return (
    <section className="servicesSection">
      <h5>Our Service Highlights</h5>
      <article className="services">
        {services.map((service) => {
          return <Service {...service} key={service.sys.id} />;
        })}
      </article>
    </section>
  );
};

export default ServicesSection;
