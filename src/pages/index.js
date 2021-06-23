import React, { useEffect, useState } from 'react';
import FadeIn from 'react-fade-in';
import { Helmet } from 'react-helmet';
import Hero from '../components/Hero';
import LatestNews from '../components/Home/LatestNews';
import MarketPriceList from '../components/Home/MarketPriceList';
import Register from '../components/Home/Register';
import Services from '../components/Home/Services';
import Team from '../components/Team';
import Testimonials from '../components/Home/Testimonials';

import Client from '../Contentful';

const Home = () => {
  const [clientsTestimonial, setClientsTestimonial] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <FadeIn transitionDuration={600}>
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
      </FadeIn>
    </>
  );
};

export default Home;
