import React from 'react';
import { Carousel } from 'react-bootstrap';

export const Hero = ({ heroImages }) => {
  return (
    <Carousel fade controls={false}>
      {heroImages.map((heroImage, index) => {
        const {
          fields: {
            title,
            description,
            banner: {
              fields: {
                file: { url },
              },
            },
          },
        } = heroImage;
        return (
          <Carousel.Item key={index}>
            <img
              style={{ minHeight: '30vh' }}
              className="d-block w-100"
              src={url}
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
                  {title}
                </h3>
              </div>
              <p>{description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
