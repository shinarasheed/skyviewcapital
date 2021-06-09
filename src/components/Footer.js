import React from 'react';
import '../styles/footer.scss';
import { Link } from 'react-router-dom';
import { footerlinks } from '../constants/footerlinks';
import { footericons } from '../constants/footericons';
import Subscribe from './Subscribe';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer__section">
          <div>
            <div className="mb-5">
              <h5 className="mb-4">Head Office</h5>
              <ul>
                <li>Lagos:</li>
                <li>Skyview Capital Ltd,</li>
                <li>71 Norman Williams</li>
                <li>Street, S/W Ikoyi.</li>
              </ul>
            </div>

            <div>
              <h5 className="mb-3">Branch Office</h5>
              <ul className="mb-5">
                <li>Rivers State: </li>
                <li>26 Aba Road, Ground Floor</li>
                <li>UPDC Building,Port Harcourt.</li>
                <li></li>
              </ul>

              <ul className="mb-5">
                <li>FCT:</li>
                <li>Plot 1723, Ademola Adetokunbo</li>
                <li>Crescent, Nurnberger Plaza</li>
                <li>Suite 45 (3rd floor)</li>
                <li>Wuse II, Abuja.</li>
              </ul>

              <ul>
                <li>Phone: 01-9035651</li>
                <li>Email: info@skyviewcapitalng.com;</li>
                <li>complaints@skyviewcapitalng.com</li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <h5 className="mb-4">Quick Links</h5>
              <ul className="quick__links">
                {footerlinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <Subscribe />
            <div>
              <h6 className="mt-5">Connect with us</h6>
              <ul className="socials">
                {footericons.map((icon, index) => (
                  <li key={index}>
                    <Link to={icon.url}>
                      <img src={icon.img} alt="social icon" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="line"></div>

        <p className="text-center">
          Copyright &copy; {new Date().getFullYear()} Skyview Capital Limited.
          All Right Reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
