import React from 'react';

import Hero from '../components/styledComponents/Hero';
// import { aboutdata } from '../data/about';
import abouthero from '../assets/images/aboutushero.png';
import about1 from '../assets/images/about1.png';
import about2 from '../assets/images/about2.png';
import about3 from '../assets/images/about3.png';
import '../styles/aboutus.scss';

const AboutUs = () => {
  return (
    <>
      <Hero img={abouthero}>
        <p>About Us</p>
      </Hero>

      {/* <section className="aboutSection">
        {aboutdata.map((data, index) => (
          <article className="aboutData" key={index}>
            <div className="data">
              <h5>{data.title}</h5>
              <div className="description">
                <p>{data.description}</p>
              </div>
              <div className="banner">
                <img src={data.img} alt={data.title} />
              </div>
            </div>
          </article>
        ))}
      </section> */}

      <section className="aboutSecondSection">
        <article className="secondSectionCard">
          <h5>Who we are</h5>
          <div className="cardDescription">
            <div className="description">
              <p>
                Skyview Capital Limited was incorporated on February 22, 2008 as
                a Limited Liability Company with main objects which include
                amongst others: To undertakeand carry on all or any of the
                trades and businesses of stock brokers, dealers, corporate
                investment and financial portfolio managers, registrars,
                trustees and to apply and register as an active player in the
                Nigerian Stock Exchange
              </p>
            </div>

            <div className="banner">
              <img src={about1} alt="about us" />
            </div>
          </div>
        </article>

        <article className="secondSectionCard">
          <h5>mission and vision</h5>
          <div className="cardDescription-2">
            <div className="description">
              <p>
                Skyview Capital Limited will re-define the whole concept of
                wealth creation through exploiting current and emerging
                opportunities in the Capital Market to the benefit of our
                discerning clients. This is deliberate! New innovations served
                with the highest level of efficiency and coupled with a strong
                financial base will enable our clients enjoy maximum benefits
                from their partnership with Skyview.
              </p>
            </div>

            <div className="banner">
              <img src={about2} alt="about us" />
            </div>
          </div>
        </article>

        <article className="secondSectionCard">
          <h5>mission and vision</h5>
          <div className="cardDescription">
            <div className="description">
              <p>
                Skyview Capital seeks to challenge the status quo in terms of
                quality service delivery in an already robust market and will
                effectively emerge as one of Nigeria's. leading investment banks
                within the next five years.
              </p>

              <p>
                To achieve these objectives, Skyview Capital has put together a
                team of highly dedicated, adaptable and flexible young people
                with the right attitude, skills, knowledge and character to
                deliver quality service in a challenging business environment.,
              </p>
            </div>

            <div className="banner">
              <img src={about3} alt="about us" />
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default AboutUs;
