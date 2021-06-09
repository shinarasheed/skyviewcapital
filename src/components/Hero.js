import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../assets/images/homehero1.png';
import banner2 from '../assets/images/homehero2.png';
import banner3 from '../assets/images/homehero3.png';

export const Hero = () => {
  return (
    <Carousel fade controls={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{
            height: '450px',
          }}
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>PRESERVING THE TRADITIONAL VALUES OF WEALTH CREATION</h3>
          <p>Consistently Adding Values to Your Wealth. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{
            height: '450px',
          }}
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Decision Making</h3>
          <p>Making the Right Decisions at the Right Time.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{
            height: '450px',
          }}
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Take Charge of Your Finances.</h3>
          <p>
            Make this the year you take control, Skyview capital makes it easy.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
