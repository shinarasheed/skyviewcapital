import React from 'react';
import { Hero } from '../components/Hero';
import LatestNews from '../components/Home/LatestNews';
import Register from '../components/Home/Register';
import Services from '../components/Home/Services';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <section>
      <Hero />
      <Services />
      <Register />
      <LatestNews />
      <Testimonials />
    </section>
  );
};

export default Home;
