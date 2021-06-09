import React from 'react';
import { Hero } from '../components/Hero';
import LatestNews from '../components/Home/LatestNews';
import Register from '../components/Home/Register';
import Services from '../components/Home/Services';
import Team from '../components/Home/Team';
import Testimonials from '../components/Home/Testimonials';

const Home = () => {
  return (
    <section>
      <Hero />
      <Services />
      <Register />
      <LatestNews />
      <Testimonials />
      <Team />
    </section>
  );
};

export default Home;
