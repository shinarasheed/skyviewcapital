import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Management from '../components/Management';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Client from '../Contentful';

import '../styles/aboutus.scss';

const AboutusPage = () => {
  const [aboutContent, setAbountContent] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await Client.getEntries({
        content_type: 'about',
      });
      setAbountContent(response.items);
    }

    fetchData();
  }, []);

  return (
    <>
      <Helmet>
        <title>AboutUs</title>
      </Helmet>
      <section className="aboutusHero">
        <p data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500">
          About Us
        </p>
        <div className="aboutHeroOverlay"></div>
      </section>
      <section className="aboutSecondSection">
        {aboutContent.length > 0 && (
          <>
            {aboutContent.map((content) => {
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
              } = content;
              return (
                <article className="secondSectionCard">
                  <h5>{title}</h5>
                  <div className="cardDescription">
                    <div
                      data-aos="fade-right"
                      data-aos-duration="900"
                      className="description"
                    >
                      <p>{documentToReactComponents(description)}</p>
                    </div>

                    <div className="banner">
                      <img
                        data-aos="fade-up"
                        data-aos-delay="900"
                        src={url}
                        alt={title}
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </>
        )}
      </section>

      <Management />
    </>
  );
};

export default AboutusPage;
