import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import FadeIn from 'react-fade-in';
import styled from 'styled-components';
import banner from '../assets/images/3.png';

const AdvisoryServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <FadeIn transitionDuration="600">
        <Helmet>
          <title>AdvisoryServices</title>
        </Helmet>
      </FadeIn>

      <article className="servicesHero">
        <h5>services</h5>
        <p>Consistently Adding Values to Your Wealth. </p>
        <div className="servicesHeroOverlay"></div>
      </article>
      <section className="capitalMarkets">
        <Section>
          <h5>Advisory Services</h5>

          <article className="description">
            <div className="descriptionSection">
              <p>
                Skyview Capital is a financial advisory powerhouse. We provide
                guidance on valuation, deal structuring, mergers and
                acquisition, or business combination mandates of multiple
                business entities.
              </p>
              <p>
                We service from small to large companies irrespective of the
                business area or sector of the economy. We assist clients in
                project conception, packaging, financing, implementationas well
                as in reorganisation of existing projects into bankable
                ventures.
              </p>

              <div>
                <h6>Skyview capital financial advisory services include:</h6>

                <ul>
                  <li>MERGERS & ACQUISITIONS</li>
                  <li>BUYOUTS/BUSINESS VALUATION</li>
                  <li>CORPORATE RESTRUCTURING</li>
                  <li>SALES & DIVESTITURES</li>
                </ul>
              </div>
            </div>
            <div className="bannerSection">
              <img className="banner" src={banner} alt="capital market" />
            </div>
          </article>
        </Section>
      </section>
    </>
  );
};

const Section = styled.article`
  h5 {
    text-align: center;
    font-size: 3rem;
    padding-top: 4rem;
  }

  .description {
    display: flex;
    align-items: center;
    margin-top: 5rem;
    padding-bottom: 5rem;
    gap: 10rem;
    font-size: 1.5rem;
    @media (max-width: 768px) {
      flex-direction: column;
    }

    h6 {
      font-size: 2rem;
      margin-bottom: 2rem;
      margin-top: 2rem;
    }

    ul li:not(:last-child) {
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }

    .banner {
      width: 100%;
    }

    .descriptionSection {
      flex: 2;
    }

    .bannerSection {
      flex: 1;
    }
  }
`;

export default AdvisoryServices;
