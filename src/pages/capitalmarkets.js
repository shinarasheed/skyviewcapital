import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import FadeIn from 'react-fade-in';
import styled from 'styled-components';
import banner from '../assets/images/2.png';

const CarpitalMarkets = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <FadeIn transitionDuration="600">
        <Helmet>
          <title>CapitalMarkets</title>
        </Helmet>
      </FadeIn>
      <article className="servicesHero">
        <h5>services</h5>
        <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="500">
          Consistently Adding Values to Your Wealth.{' '}
        </p>
        <div className="servicesHeroOverlay"></div>
      </article>
      <section className="capitalMarkets">
        <Section>
          <h5>Capital Market</h5>

          <article className="description">
            <div className="descriptionSection">
              <p>
                The stockbroking department is an integral part of Skyview
                Capital. The department was majorly set-up to trade (buy & sell)
                listed stocks on the Nigerian Stock Exchange (NSE) and also
                trading in fixed-income securities. Over-The-Counter (OTC). Our
                brokerage service is designed for local organizations and
                individuals as well as foreign private and institutional
                investors who wish to invest in the Nigerian capital market.
                Specifically, our service covers:
              </p>

              <ul>
                <li>
                  Securities trading – buying and selling of shares of quoted
                  companies
                </li>
                <li>
                  Securities Transfer – transfer of existing securities from
                  other brokerage
                </li>
                <li>
                  Certificate administration – certificate dematerialization and
                  lodgment
                </li>
                <li>
                  Primary market distribution – Provides access to public offers
                  and rights
                </li>
                <li>
                  Interfacing between clients and Registrars on matters relating
                  to securities
                </li>
              </ul>
              <div>
                <h6>Our Approach</h6>
                <p>
                  At Skyview Capital, one of our core values is Customers focus;
                  the needs and objectives of our clients are at the center of
                  our service delivery. Our overall objective is to surpass our
                  clients’ service expectation; we start by profiling our
                  clients and analyzing their needs. This is to confirm what is
                  important to them; their current financial status; attitude to
                  risk; investment objectives and the time horizon within which
                  to achieve these objectives.
                </p>
                <p>
                  Having determined our clients’ unique needs and investment
                  objectives, we formulate our strategies to ensure we deliver
                  customized services aimed at achieving our clients’ investment
                  objectives within their respective time horizon
                </p>
              </div>
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
    margin-top: 5rem;
    padding-bottom: 5rem;
    gap: 10rem;
    font-size: 1.5rem;
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

    ul li:before {
      content: '';
      display: block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #000;
      margin-right: 7px;
      @media (max-width: 768px) {
        display: none;
      }
    }

    ul li {
      display: flex;
      align-items: center;
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

export default CarpitalMarkets;
