import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Hero } from '../components/Hero';
import LatestNews from '../components/Home/LatestNews';
import MarketPriceList from '../components/Home/MarketPriceList';
import Register from '../components/Home/Register';
import Services from '../components/Home/Services';
import Team from '../components/Home/Team';
import Testimonials from '../components/Home/Testimonials';

import Client from '../Contentful';

const Home = () => {
  const [clientsTestimonial, setClientsTestimonial] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await Client.getEntries({
        content_type: 'clientTestimonials',
      });
      setClientsTestimonial(response.items);
    }

    fetchData();
  }, []);

  return (
    <>
      <Helmet>
        <title>SkyviewCapital</title>
      </Helmet>
      <section>
        <Hero />
        <Services />
        <MarketPriceList />
        <Register />
        <LatestNews />
        <Testimonials clientsTestimonial={clientsTestimonial} />
        <Team />
      </section>
    </>
  );
};

export default Home;
