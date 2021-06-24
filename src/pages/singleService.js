import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import FadeIn from 'react-fade-in';
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import banner from '../assets/images/3.png';

import Client from '../Contentful';

const SingleService = (props) => {
  const [service, setService] = useState({});
  const { slug } = props.match.params;

  useEffect(() => {
    async function fetchData() {
      const response = await Client.getEntries({
        content_type: 'services',
        'fields.slug': slug,
      });

      setService(response.items[0]);
    }

    fetchData();
  }, [slug]);

  console.log(service.fields);

  if (!service) return <Spinner />;

  return (
    <>
      {service.fields !== undefined && (
        <FadeIn transitionDuration="600">
          <Helmet>
            <title>{service.fields.title}</title>
          </Helmet>

          <article className="servicesHero">
            <h5>{service.fields.title}</h5>
            <p
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="500"
            >
              Consistently Adding <br /> Values to Your Wealth
            </p>
          </article>
          <section className="capitalMarkets">
            <Section>
              <h4>{service.fields.title}</h4>

              <article className="description">
                <div className="descriptionSection">
                  {documentToReactComponents(service.fields.content)}
                </div>
                <div className="bannerSection">
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="900"
                    className="banner"
                    src={banner}
                    alt="capital market"
                  />
                </div>
              </article>
            </Section>
          </section>
        </FadeIn>
      )}
    </>
  );
};

export default SingleService;

const Section = styled.article`
  h5 {
    font-size: 2rem;
    margin-top: 4rem;
  }

  h4 {
    text-align: center;
    font-size: 3rem;
    margin-top: 4rem;
  }

  .description {
    display: flex;
    margin-top: 5rem;
    padding-bottom: 5rem;
    gap: 10rem;
    font-size: 1.8rem;
    font-family: 'Raleway', sans-serif;
    @media (max-width: 768px) {
      flex-direction: column-reverse;
      gap: 2rem;
      font-size: 2rem;
      margin-top: 3rem;
      padding-bottom: 2rem;
    }

    h6 {
      font-size: 2rem;
      margin-bottom: 2rem;
      margin-top: 2rem;
    }

    ul {
      list-style-type: none;
    }

    .banner {
      width: 100%;
    }

    .descriptionSection {
      flex: 2;

      P {
        line-height: 1.7;
      }
    }

    .bannerSection {
      flex: 1;
    }
  }
`;
