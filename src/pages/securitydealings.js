import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import FadeIn from 'react-fade-in';
import styled from 'styled-components';
import banner from '../assets/images/4.png';

const SecurityDealings = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <FadeIn transitionDuration="600">
        <Helmet>
          <title>SecurityDealings</title>
        </Helmet>
      </FadeIn>
      <article className="servicesHero">
        <h5>services</h5>
        <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="500">
          Consistently Adding Values to Your Wealth.
        </p>
        <div className="servicesHeroOverlay"></div>
      </article>
      <section className="capitalMarkets">
        <Section>
          <h5>Security Dealings</h5>

          <article className="description">
            <div className="descriptionSection">
              <p>
                Skyview Capital is a financial institution licensed by the
                Securities and Exchange Commission as a broker / dealer and is a
                dealing member of the Nigerian Stock Exchange.
              </p>
              <p>
                We provide stock broking services to a wide array of clientele.
                Our services are available to government parastatals,
                multinational and indigenous companies and high net worth
                individuals.We have in our arsenal, seasoned professional
                researchers who's analytical skills helps to determine
                particular stocks that are suitable for purchase at the lowest
                price and for sales at the highest price.
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
                <h6>Retainer-ship for listed Companies</h6>
                <p>
                  Here we handle issues pertaining to the maintenance of
                  accounts for listed companies.
                </p>
              </div>

              <div>
                <h6>Certificate Verification</h6>
                <p>
                  With the invention of the automated system now with the CSCS,
                  this package is on the verge of phasing out. It involves the
                  collation of Share certificates on stocks purchased from our
                  reputable clients, onward forwarding to the Central Securities
                  Clearing Systems where they are confirmed and lodged.
                </p>
              </div>

              <div>
                <h6>Receiving Agency</h6>
                <p>
                  Skyview Capital acts as an intermediary between Issuing houses
                  and Intending investors who may wish to buy from Initial
                  public offering (IPO) or Public Offerings (PO).
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

export default SecurityDealings;
