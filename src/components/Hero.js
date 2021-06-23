import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../assets/images/homehero1.png';
import banner2 from '../assets/images/homehero2.png';
import banner3 from '../assets/images/homehero3.png';

const Hero = () => {
  return (
    <Carousel indicators={false} controls={false} fade={true}>
      <Carousel.Item className="homePageHero">
        <img
          className="d-block w-100 homeHeroBanner"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="500"
            className="description"
          >
            <h3
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              PRESERVING THE TRADITIONAL
            </h3>
            <h3>VALUES OF WEALTH CREATION</h3>
          </div>
          <p>Consistently Adding </p>
          <p> Values to Your Wealth.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="homePageHero">
        <img
          className="d-block w-100 homeHeroBanner"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="500"
            className="description"
          >
            <h3>Decision Making</h3>
          </div>
          <p>Making the Right Decisions</p>
          <p>at the Right Time.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="homePageHero">
        <img
          className="d-block w-100 homeHeroBanner"
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="500"
            className="description"
          >
            <h3>Take Charge of Your</h3>
            <h3>Finances.</h3>
          </div>
          <p>Make this the year you take control,</p>
          <p>Skyview capital makes it easy.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
