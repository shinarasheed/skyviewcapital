import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../assets/images/homehero1.png';
import banner2 from '../assets/images/homehero2.png';
import banner3 from '../assets/images/homehero3.png';

export const Hero = () => {
  return (
    <Carousel fade controls={false}>
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="First slide" />
        <Carousel.Caption>
          <h3>PRESERVING THE TRADITIONAL</h3>
          <h3>VALUES OF WEALTH CREATION</h3>
          <p>Consistently Adding Values to Your Wealth. </p>
        </Carousel.Caption>
        <div className="homeHeroOverlay"></div>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Decision Making</h3>
          <p>Making the Right Decisions</p>
          <p>at the Right Time.</p>
        </Carousel.Caption>
        <div className="homeHeroOverlay"></div>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Take Charge of Your</h3>
          <h3>Finances.</h3>
          <p>Make this the year you take control,</p>
          <p>Skyview capital makes it easy.</p>
        </Carousel.Caption>
        <div className="homeHeroOverlay"></div>
      </Carousel.Item>
    </Carousel>
  );
};
