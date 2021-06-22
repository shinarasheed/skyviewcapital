import React from 'react';
import { Carousel, Spinner } from 'react-bootstrap';

const Hero = ({ heroImages }) => {
  return (
    <>
      {heroImages.length > 0 ? (
        <Carousel fade controls={false}>
          {heroImages.map((heroImage) => {
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
              <Carousel.Item className="homePageHero" key={heroImage.sys.id}>
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
      ) : (
        <Spinner animation="grow" variant="primary" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
    </>
  );
};

export default Hero;
