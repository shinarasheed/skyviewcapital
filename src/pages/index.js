import React from 'react';
import { Hero } from '../components/Hero';
import LatestNews from '../components/Home/LatestNews';
import Register from '../components/Home/Register';
import Services from '../components/Home/Services';

const Home = () => {
  return (
    <section>
      <Hero />
      <Services />
      <Register />
      <LatestNews />
    </section>
  );
};

export default Home;
