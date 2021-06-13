import React from 'react';
import { Helmet } from 'react-helmet';
import { Hero } from '../components/Hero';
import LatestNews from '../components/Home/LatestNews';
import MarketPriceList from '../components/Home/MarketPriceList';
import Register from '../components/Home/Register';
import Services from '../components/Home/Services';
import Team from '../components/Home/Team';
import Testimonials from '../components/Home/Testimonials';

const Home = () => {
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
        <Testimonials />
        <Team />
      </section>
    </>
  );
};

export default Home;
