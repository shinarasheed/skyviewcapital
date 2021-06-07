import React from 'react';
import '../styles/Footer.scss';
import { Link } from 'react-router-dom';
import { footerlinks } from '../constants/footerlinks';
import { footericons } from '../constants/footericons';

const Footer = () => {
  return (
    <>
      <footer className="container-fluid">
        <div className="row">
          <div className="col-md-2 my-2">
            <div>
              <ul>
                {footerlinks.links1.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-2 my-2">
            <div>
              <ul>
                {footerlinks.links2.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-2 my-2">
            <div>
              <ul>
                {footerlinks.links3.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
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
        <p>
          Copyright &copy; {new Date().getFullYear()} Taskbar. All Rights
          Reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
