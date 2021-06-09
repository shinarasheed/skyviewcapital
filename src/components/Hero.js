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
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
