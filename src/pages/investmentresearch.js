import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import FadeIn from 'react-fade-in';
import styled from 'styled-components';
import banner from '../assets/images/5.png';

const InvestmentResearch = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <FadeIn transitionDuration="600">
        <Helmet>
          <title>InvestmentResearch</title>
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
          <h5>Investment Research</h5>

          <article className="description">
            <div className="descriptionSection">
              <p>
                Our investments research department has a combined experience of
                over 45 years in the money and capital markets. Services
                rendered under this unit include:
              </p>

              <div>
                <h6>Securities Analysis Reports</h6>
                <p>
                  With the tireless effort of our team of inhouse researchers.
                  We keep our highly esteemed customers abreast of the daily
                  update about securities. Using key tools such as valuing of
                  assets, debts, warrants and equity of a given company while
                  making use of public available information which can be
                  obtained via the financial statement of such a company.
                </p>
              </div>

              <div>
                <h6>Sectoral / lndustry Reports</h6>
                <p>
                  Here we take into consideration factors, reforms, governmental
                  policies and other parameters that may affect a given
                  industry/sector in order to guide our prospective clients as
                  well as the existing ones on their choices of investment
                  .Under this unit we make recommendations on the sector/s to
                  watch.
                </p>
              </div>

              <div>
                <h6>Stock Market Reports </h6>
                <p>
                  Our indepth experience in stock market analysis over the past
                  periods has enabled us to always provide for our reputable
                  clients/investors the updates on the stock market. With daily
                  details on market capitalization of equities, all share index
                  among other parameters.
                </p>
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

    ul {
      list-style-type: square;
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

export default InvestmentResearch;
