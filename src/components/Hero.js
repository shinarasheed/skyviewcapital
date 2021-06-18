import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Client from '../Contentful';

export const Hero = () => {
  const [heroImages, setHeroImages] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await Client.getEntries({
        content_type: 'homeHero',
      });
      setHeroImages(response.items);
    }

    fetchData();
  }, []);

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
            <div className="homeHeroOverlay"></div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
